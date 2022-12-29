import React from "react";
import TextField from "../Input/TextField";
import { useFormik } from "formik";

const AddProduct = () => {
  const values = {
    Brand_name: "",
    Designation: "",
    Number: "",
    Office: "",
    IPR: "",
    Owner: "",
    Nice_classification: "",
    Status: "",
  };
  const formik = useFormik({
    initialValues: values,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex justify-center items-center md:inset-0 h-modal sm:h-full">
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className=" bg-white rounded-2xl shadow-lg py-4">
          <form onSubmit={formik.handleSubmit} className="px-6 py-2 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Brand_name"
                    type="text"
                    value={formik.values.Brand_name}
                    label="Brand name"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Designation"
                    type="text"
                    value={formik.values.Designation}
                    label="Designation"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Number"
                    type="number"
                    value={formik.values.Number}
                    label="Number"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Office"
                    type="text"
                    value={formik.values.Office}
                    label="Office"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="IPR"
                    type="text"
                    value={formik.values.IPR}
                    label="IPR"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Owner"
                    type="text"
                    value={formik.values.Owner}
                    label="Owner"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Status"
                    type="text"
                    value={formik.values.Status}
                    label="Status"
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Nice_classificationx"
                    type="text"
                    value={formik.values.Nice_classification}
                    label="Nice classification"
                    handleChange={formik.handleChange}
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
