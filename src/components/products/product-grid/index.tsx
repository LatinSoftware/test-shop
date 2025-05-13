import { Product } from "@/interfaces";
import Image from "next/image";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[];
}

function ProductGrid({products}:Props) {
    return ( 
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {
                products.map((product) => (
                    <ProductGridItem key={product.slug} product={product} />
                ))
            }
        </section>

    );
}

export {ProductGrid};