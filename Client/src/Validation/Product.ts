import * as yup from "yup";
export const productSchema = yup.object().shape({
    Brand_name: yup.string().required(),
    Designation: yup.string().required(),
    Number: yup.string().required(),
    Office: yup.string().required(),
    IPR: yup.string().required(),
    Owner: yup.string().required(),
    Nice_classification: yup.string().required(),
    Status: yup.string().required(),
});