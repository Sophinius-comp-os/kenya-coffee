import * as Yup from "yup";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

interface FormValues {
    name: string;
    email: string;
    phone: string;
    gender: string;
    frontIdImage: File | null;
    backIdImage: File | null;
    highestEducationLevel: string;
    currentEmployer: string;
    numberOfYearsWorked: string; // Adjusted to string type
    nameOfReferee: string;
    emailOfReferee: string;
    phoneOfReferee: string;
    placeOfWork: string;
    judgingCategory: string;
    judgedBefore: boolean;
    eventJudged: string;
}

export const JudgesSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must enter your Name"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    phone: Yup.string().max(20).required("Your mobile phone number is required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
    frontIdImage: Yup.mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type", (value) => isValidFileType(value, "image"))
        .test("is-valid-size", "Max allowed size is 1MB", (value) => isValidFileSize(value)),
    backIdImage: Yup.mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type", (value) => isValidFileType(value, "image"))
        .test("is-valid-size", "Max allowed size is 1MB", (value) => isValidFileSize(value)),
    highestEducationLevel: Yup.string().required("Highest Education Level is required"),
    currentEmployer: Yup.string().required("Current Employer is required"),
    numberOfYearsWorked: Yup.string().required("Number of Years Worked is required"), // Adjusted to string type
    nameOfReferee: Yup.string().max(255).required("You must enter the Name of Referee"),
    emailOfReferee: Yup.string().email("Must be a valid email").max(255).required("Email of Referee is required"),
    phoneOfReferee: Yup.string().max(20).required("Phone of Referee is required"),
    placeOfWork: Yup.string().max(255).required("Place of Work is required"),
    judgingCategory: Yup.string().max(255).required("Judging Category is required"),
    judgedBefore: Yup.boolean().required("You must specify if you have been a judge before"),
    eventJudged: Yup.string().max(255).required("Event Judged is required"),
});

function isValidFileType(file: File | null, fileType: string): boolean {
    if (!file) return false;
    const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };
    const extension = file.name.split('.').pop();
    return !!extension && validFileExtensions[fileType].includes(extension.toLowerCase());
}

function isValidFileSize(file: File | null): boolean {
    return !!file && file.size <= MAX_FILE_SIZE;
}
