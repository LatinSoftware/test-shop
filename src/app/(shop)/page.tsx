import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    page?: string;
    take?: string;
  }>;
}

export const revalidate = 3600;



export default async function Home({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const take = Number((await searchParams).take) || 12;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    take
  });


  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Store" subtitle="All products" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
