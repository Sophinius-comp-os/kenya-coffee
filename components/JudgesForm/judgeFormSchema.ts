import * as Yup from "yup";


const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}


export const JudgesSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must Enter your Name"),
    email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    phone: Yup.string()
        .max(20)
        .required(
            "Your mobile phone number must begin with a '+', followed by your country code then actual number e.g +254123456789"
        ),
    gender: Yup.string().required("Choose your gender"),
    frontIdImage:Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type",
        value => isValidFileType(value && value.name.toLowerCase(), "image"))
    .test("is-valid-size", "Max allowed size is 100KB",
        value => value && value.size <= MAX_FILE_SIZE),
    backIdImage:Yup.mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type",
            value => isValidFileType(value && value.name.toLowerCase(), "image"))
        .test("is-valid-size", "Max allowed size is 100KB",
            value => value && value.size <= MAX_FILE_SIZE),
    highestEducationLevel: Yup.string().trim().required("Highest Education Level is required"),
    currentEmployer: Yup.string().trim().required("Current Employer is required"),
    numberOfYearsWorked: Yup.string().trim().required("Message is required"),
    nameOfReferee: Yup.string().max(255).required("You must Enter your Name"),
    emailOfReferee: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    phoneOfReferee: Yup.string()
        .max(20)
        .required(
            "Your mobile phone number must begin with a '+', followed by your country code then actual number e.g +254123456789"
        ),
    placeOfWork: Yup.string().max(255).required("You must  the referee's place of work"),
    judgingCategory: Yup.string().max(255).required("You must  choose the Category to be a judge in "),
    judgedBefore:Yup.string().max(255).required("You must if you have been a judge before "),
    eventJudged:Yup.string().max(255).required("State event in which you were a judge "),
    radiiOption:Yup.string().required('Required')
});