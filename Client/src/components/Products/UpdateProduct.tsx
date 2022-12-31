import TextField from "../Input/TextField";
import { useFormik } from "formik";
import { productSchema } from "../../Validation/Product";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCT, GET_PRODUCTS } from "../../Queries/Products";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_PRODUCT } from "../../Mutations/Product";

const UpdateProduct = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  const [update_product]=useMutation(UPDATE_PRODUCT,{
    refetchQueries: [{ query: GET_PRODUCTS }],
  })
  const navigate = useNavigate();
  const values = {
    id:id,
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
    validationSchema: productSchema,
    onSubmit: (values) => {
        update_product({ variables: values })
    },
  });
  return (
    <div className="flex justify-center items-center md:inset-0">
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
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Brand_name && formik.touched.Brand_name
                      ? formik.errors.Brand_name.split("_").join(" ")
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Designation"
                    type="text"
                    value={formik.values.Designation}
                    label="Designation"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Designation && formik.touched.Designation
                      ? formik.errors.Designation
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Number"
                    type="text"
                    value={formik.values.Number}
                    label="Number"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Number && formik.touched.Number
                      ? formik.errors.Number
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Office"
                    type="text"
                    value={formik.values.Office}
                    label="Office"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Office && formik.touched.Office
                      ? formik.errors.Office
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="IPR"
                    type="text"
                    value={formik.values.IPR}
                    label="IPR"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.IPR && formik.touched.IPR
                      ? formik.errors.IPR
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Owner"
                    type="text"
                    value={formik.values.Owner}
                    label="Owner"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Owner && formik.touched.Owner
                      ? formik.errors.Owner
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Status"
                    type="text"
                    value={formik.values.Status}
                    label="Status"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Status && formik.touched.Status
                      ? formik.errors.Status
                      : ""}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextField
                    name="Nice_classification"
                    type="text"
                    value={formik.values.Nice_classification}
                    label="Nice classification"
                    handleChange={formik.handleChange}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.Nice_classification &&
                    formik.touched.Nice_classification
                      ? formik.errors.Nice_classification.split("_").join(" ")
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-b border-t border-gray-200">
              <button
                style={{ backgroundColor: "rgb(4,32,81)" }}
                className="my-1 text-white font-medium rounded-lg text-sm px-8 py-2 text-center hover:scale-[1.02] transition-transform"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
