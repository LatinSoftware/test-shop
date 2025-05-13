import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ValidCategories } from "@/interfaces";

interface Props {
  params: Promise<{
    id: ValidCategories;
  }>;
}

const validCategories: ValidCategories[] = ["men", "women", "kids"];

async function CartPage({ params }: Props) {
  const { id } = await params;

  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  if (!validCategories.includes(id)) {
    notFound();
  }

  return (
    <>
      <Title title={id} subtitle={`${id} Articles `} className="capitalize" />

      <ProductGrid products={products} />
    </>
  );
}

export default CartPage;
