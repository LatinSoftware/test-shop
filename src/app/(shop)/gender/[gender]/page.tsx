import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "prisma/client/client";


export const revalidate = 3600 ;

interface Props {
  params: Promise<{
    gender: string;
  }>;
  searchParams: Promise<{
    page?: string;
    take?: string;
  }>;
}

async function CartPage({ params, searchParams }: Props) {
  const { gender } = await params;

  const search = await searchParams;

  const page = Number(search.page) || 1;
  const take = Number(search.take) || 12;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    take,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  // if (!validCategories.includes(gender)) {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={gender}
        subtitle={`${gender} Articles `}
        className="capitalize"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}

export default CartPage;
