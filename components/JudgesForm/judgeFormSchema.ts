import * as Yup from "yup";

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