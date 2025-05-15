"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

function QuantitySelector({ quantity: count, onQuantityChange }: Props) {

    

    const onValueChange = (value: number) => {
        if(count + value < 1) {
            return;
        }

        onQuantityChange(count + value);
    }

  return (
    <div className="flex">
      <button onClick={() => onValueChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
        <span className="w-30 mx-3 px-5 bg-gray-100 text-center rounded">{count}</span>
      <button onClick={() => onValueChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}

export { QuantitySelector };
