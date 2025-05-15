import type { ValidSizes } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: ValidSizes | undefined;
  availableSizes: ValidSizes[];
  onSizeChanged: (size: ValidSizes) => void;
}

function SizeSelector({ selectedSize, availableSizes, onSizeChanged }: Props) {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Sizes</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            className={clsx("mx-2 hover:underline text-lg cursor-pointer", {
              underline: selectedSize === size,
            })}
            key={size}
            onClick={() => onSizeChanged(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export { SizeSelector };
