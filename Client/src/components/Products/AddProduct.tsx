import React from "react";
import TextField from "../Input/TextField";

const AddProduct = () => {
  return (
    <div className="flex justify-center items-center md:inset-0 h-modal sm:h-full">
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className=" bg-white rounded-2xl shadow-lg py-4">
          <form className="px-6 py-2 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="Brand name" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="Designation" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="number" label="Number" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="Office" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="IPR" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="Owner" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField name="test" type="text" label="Status" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="test"
                    type="text"
                    label="Nice classification"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 rounded-b border-t border-gray-200">
              <button
                style={{ backgroundColor: "rgb(4,32,81)" }}
                className="my-1 text-white font-medium rounded-lg text-sm px-8 py-2 text-center hover:scale-[1.02] transition-transform"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
