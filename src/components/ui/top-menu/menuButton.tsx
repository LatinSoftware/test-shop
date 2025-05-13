"use client";
import { useUIStore } from "@/store";

function MenuButton() {
  const openSideBar = useUIStore((state) => state.openSidebar);

  return (
    <button
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 cursor-pointer "
      onClick={openSideBar}
    >
      Menu
    </button>
  );
}

export default MenuButton;
