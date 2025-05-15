import { getProductBySlug } from "@/actions";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import AddToCart from "./ui/AddToCart";

export const revalidate = 3600;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Product not found",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Product not found",
      description: product?.description ?? "",
      // url: `https://yourdomain.com/product/${slug}`,
      images: [`http://localhost:3000/products/${product?.images[1]}`],
    },
  };
}

async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <section className="col-span-1 md:col-span-2 ">
        {/** slideshow desktop*/}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />

        {/** slideshow mobile */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
      </section>

      {/** product details */}

      <section className="col-span-1 px-5 ">
        <span
          className={`${titleFont.className} antialiased font-bold text-xl`}
        >
          Stock: {product.inStock}
        </span>

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">${product.price.toFixed(2)}</p>

        <AddToCart product={product} />

        {/** Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </section>
    </section>
  );
}

export default ProductPage;
