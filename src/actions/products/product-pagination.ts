"use server";


import { prisma } from "@/lib/prismaClient";
import { Gender } from "prisma/client/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export async function getPaginatedProductsWithImages({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions = {}) {
  if (isNaN(Number(page)) || page < 1) {
    page = 1;
  }

  try {
    //1. get total count of products
    const totalCount = await prisma.product.count({
      where: {
        gender: gender,
      },
    });

    const totalPages = Math.ceil(totalCount / take);

    //2. get products with images
    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },

      take: take,
      skip: (page - 1) * take,
      where: {
        gender: gender,
      },
    });

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Error fetching products");
  }
}
