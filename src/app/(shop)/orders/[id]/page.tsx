import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function OrderPage({ params }: Props) {
  const { id } = await params;

  //TODO: verify and redirect if the order does not exist

  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Order #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/** shopping cart */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline />
              {/* <span className="mx-2">Payment pending</span> */}
              <span className="mx-2">Paid</span>
            </div>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="object-cover mr-5 rounded"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-semibold">
                    Subtotal: ${product.price * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/** Order summary */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Shipping Address</h2>

            <div className="mb-10">
              <p className="text-xl">Fernando Herrera</p>
              <p>Av. always alive</p>
              <p>Col. Center</p>
              <p>Bartholomew Av.</p>
              <p>CP: 02100</p>
              <p>801-124-1234</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2 font-bold">Order summary</h2>
            <div className="grid grid-cols-2">
              <span>Products</span>
              <span className="text-right">3 items</span>

              <span>SubTotal</span>
              <span className="text-right">$ 100.00</span>

              <span>Tax</span>
              <span className="text-right">15%</span>

              <span className="mt-5 text-2xl font-semibold">Total:</span>
              <span className="mt-5 text-right text-2xl">$ 100.00</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline />
                {/* <span className="mx-2">Payment pending</span> */}
                <span className="mx-2">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
