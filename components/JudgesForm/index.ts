import FormikControl from "@/components/FormComponents/FormikControl";
import clsx from "clsx";

<FormikControl
    control="input"
type="text"
label="Name"
name="name"
/>
<FormikControl
    control="input"
type="email"
label="Email"
name="email"
/>

<FormikControl
    control="input"
type="text"
label="Subject"
name="subject"
/>
<FormikControl
    control="input"
type="text"
label="Phone Number"
name="phone"
/>
<div className="my-12 w-full">
<FormikControl
    control="textarea"
type="message"
label="Message"
name="message"
/>
</div>

<div>
<button
    type="submit"
className={clsx(
    "w-full p-3 text-black transition border rounded border-primary  hover:bg-opacity-90"
// theme === "dark"
//   ? "bg-[#041434] text-white"
//   : "bg-light text-black"
)}
disabled={
!formik.isValid &&
!formik.isSubmitting &&
!formik.dirty
}
// onClick={() => setShowModal(false)}
>
Send Message
</button>
</div>