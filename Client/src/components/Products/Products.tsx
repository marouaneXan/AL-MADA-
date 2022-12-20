import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-white">Products</h1>
      <div className="container flex flex-wrap justify-center py-[18.4px] gap-6 md:mx-auto md:justify-start md:px-[88px]">
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
