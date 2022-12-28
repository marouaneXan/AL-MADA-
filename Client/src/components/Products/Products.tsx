import React from "react";
import ProductCard from "./ProductCard";
import {useQuery} from "@apollo/client"
import { GET_PRODUCTS } from "../../Queries/Products";

export interface Product {
    id:string,
    Brand_name?:string
    IPR?:string
    Status?:string
    Number?:string
    Office?:string
    Owner?:string
    Designation?:string
    Nice_classification?:string
}

const Products = () => {
    const {data}:any=useQuery(GET_PRODUCTS)
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-white">Products</h1>
      <div className="container flex flex-wrap justify-center py-[18.4px] gap-6 md:mx-auto md:justify-start md:px-[88px]">
        {data?.products.map((product:Product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
