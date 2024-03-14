import * as Yup from "yup";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

interface FormValues {
    name: string;
    email: string;
    phone: string;
    gender: string;
    idNumber:number;
    highestEducationLevel: string;
    currentEmployer: string;
    numberOfYearsWorked: number;
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
    idNumber: Yup.number().required("Your Id Number is required"),
    highestEducationLevel: Yup.string().required("Highest Education Level is required"),
    currentEmployer: Yup.string().required("Current Employer is required"),
    numberOfYearsWorked: Yup.number().required("Number of Years Worked is required"),
    nameOfReferee: Yup.string().required("You must enter the Name of Referee"),
    emailOfReferee: Yup.string().email("Must be a valid email").max(255).required("Email of Referee is required"),
    phoneOfReferee: Yup.string().required("Phone of Referee is required"),
    placeOfWork: Yup.string().required("Place of Work is required"),
    judgingCategory: Yup.string().required("Judging Category is required"),
    judgedBefore: Yup.boolean().required("You must specify if you have been a judge before"),
    eventJudged: Yup.string().required("Event Judged is required"),
});