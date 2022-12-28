import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./Products";
import shoes from "../../assets/shoes.jpg";
import { DELETE_PRODUCT } from "../../Mutations/Product";
import { useMutation } from "@apollo/client";
import { GET_PRODUCTS } from "../../Queries/Products";

interface ProductProps {
  product: Product;
}

const ProductCard = (props: ProductProps) => {
  const [deleteClient]: any = useMutation(DELETE_PRODUCT, {
    variables: { id: props.product.id },
    refetchQueries:[{query:GET_PRODUCTS}]
  });
  return (
    <div className="w-[250px]  p-6 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
      <div className="flex flex-col items-center text-center mx-auto space-y-6">
        <img
          src={shoes}
          className="max-w-[76.6px] max-h-[76.6px] rounded-full"
          alt="User image"
        />
        <div>
          <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
            {props.product.Brand_name}
          </h5>
          <div className="flex space-x-2">
            <button
              onClick={() => console.log(props.product.id)}
              className="block items-center py-2 mt-3 px-4  mx-auto text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              View
            </button>
            <button
              onClick={deleteClient}
              className="block items-center py-2 mt-3 px-4  mx-auto text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
