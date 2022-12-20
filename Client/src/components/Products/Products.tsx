import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section>
      <div className="container flex flex-wrap justify-center py-[18.4px] gap-6 md:mx-auto md:justify-start md:px-[88px]">
      <div className="w-[250px]  p-6 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
        <ProductCard/>
      </div>
      </div>
    </section>
  );
};

export default Products;
