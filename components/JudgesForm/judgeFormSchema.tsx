import * as Yup from "yup";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

interface FormValues {
    name: string;
    email: string;
    phone: string;
    gender: string;

}
export const JudgesSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must enter your Name"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    phone: Yup.string().max(20).required("Your mobile phone number is required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Gender is required")
})