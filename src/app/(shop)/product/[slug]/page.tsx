import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) notFound();

  return (
    <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <section className="col-span-1 md:col-span-2 ">
        
        {/** slideshow desktop*/}
        <ProductSlideShow title={product.title} images={product.images} className="hidden md:block" />

        {/** slideshow mobile */}
        <ProductMobileSlideShow title={product.title} images={product.images} className="block md:hidden" />
      </section>

      {/** product details */}

      <section className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price.toFixed(2)}</p>

        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        <QuantitySelector quantity={2} />

        {/** Button */}
        <button className="btn-primary my-5">Add to cart</button>

        {/** Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </section>
    </section>
  );
}

export default ProductPage;
