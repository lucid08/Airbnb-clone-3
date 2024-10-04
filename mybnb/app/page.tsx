import Image from "next/image";
import Categories from "./components/Categories";
import Property from "./components/properties/Property";

export default function Home() {
  return (
    <div className="max-w-[1500] mx-auto px-6">
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cold-3 lg:grid-cols-5 gap-6">
        <Property />
      </div>
    </div>
  );
}
