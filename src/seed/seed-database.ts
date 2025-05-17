import { initialData } from "./seed";

import { prisma } from "../lib/prismaClient";
import { Category, Product, ProductImage } from "../generated/prisma/index";

async function main() {
  console.log("Seeding database...");

  // Clear existing data

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Seed initial data

  const { categories, products } = initialData;

  await prisma.category.createMany({
    data: categories.map(
      (category) =>
        ({
          name: category,
        } as Category)
    ),
  });

  const categoriesDb = await prisma.category.findMany();

  const categoriesMap = categoriesDb.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  for (const product of products) {
    const { type, images, ...rest } = product;

    const productDb = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    await prisma.productImage.createMany({
      data: images.map(
        (image) =>
          ({
            url: image,
            productId: productDb.id,
          } as ProductImage)
      ),
    });
  }

  await prisma.user.createMany({
    data: initialData.users,
  });

  console.log("Database seeded successfully.");
  process.exit(0);
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
