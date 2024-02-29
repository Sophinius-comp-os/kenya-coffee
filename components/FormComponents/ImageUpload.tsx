import { FieldProps } from 'formik';
import { CldUploadWidget, CldUploadResponse } from 'next-cloudinary';
import React, { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { ImagePlus } from "lucide-react";

interface ImageUploadProps extends FieldProps {
    cloudName: string;
    uploadPreset: string;
    onChange: (url: string) => void;
    disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ field, form, cloudName, uploadPreset, onChange, disabled }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageUpload = (response: CldUploadResponse) => {
        console.log(response.secure_url)
        const imageUrl: string | undefined = response?.secure_url;
        if (imageUrl) {
            setPreviewUrl(imageUrl);
            form.setFieldValue(field.name, imageUrl);
            onChange(imageUrl);
        }
    };

    console.log(previewUrl)

    return (
        <div>
            <CldUploadWidget
                cloudName={cloudName}
                uploadPreset={uploadPreset}
                field={field.name}
                onResponse={handleImageUpload}
            >
                {({open}) => {
                    const onClick = () => {
                        open();
                    };

                    return (
                        <Button
                            type="button"
                            disabled={disabled}
                            variant="primary"
                            onClick={onClick}
                            className='w-full border-2 rounded-md'
                        >
                            <ImagePlus className="h-4 w-4 "/>
                            Upload Image
                        </Button>
                    );
                }}
            </CldUploadWidget>


            <img src={previewUrl} alt="Preview" className="mt-2 w-full max-h-48 object-contain"/>
        </div>
    );
};

export default ImageUpload;

//
// import React, { useState } from 'react';
// import { FieldProps, ErrorMessage } from 'formik';
//
// interface ImageUploadProps {
//     field: FieldProps<any>;
//     formik: { setFieldValue: (name: string, value: any) => void }; // Update the props interface
//     // ... other props you want to pass (if any)
// }
//
// const ImageUpload: React.FC<ImageUploadProps> = ({ field, formik, ...props }) => {
//    console.log(formik)
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.currentTarget.files?.[0];
//         // console.log(file);
//
//         // Update field value using setFieldValue from the formik prop
//         formik?.setFieldValue(field.name, file); // Use formik.setFieldValue directly
//
//         if (file) {
//             if (file.size > 1024 * 1024) {
//                 setErrorMessage('File size must be less than 1MB');
//                 setPreviewUrl(null);
//                 return;
//             }
//
//             setErrorMessage(null);
//
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewUrl(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setErrorMessage(null);
//             setPreviewUrl(null);
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 id={field.name}
//                 name={field.name}
//                 type="file"
//                 onChange={handleChange}
//                 accept="image/*"
//                 {...props}
//             />
//             {previewUrl && (
//                 <img src={previewUrl} alt="Preview" className="mt-2 w-full max-h-48 object-contain" />
//             )}
//             {errorMessage && <div className="text-red-600">{errorMessage}</div>}
//         </div>
//     );
// };
//
// export default ImageUpload;


// import React, { useState } from 'react';
//
// interface ImageUploadProps {
//     name: string;
//     onChange: (file: File | null) => void; // Function to handle selected file
// }
//
// const ImageUpload: React.FC<ImageUploadProps> = ({ name, onChange }) => {
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.currentTarget.files?.[0];
//
//         if (file) {
//             if (file.size > 1024 * 1024) { // 1MB size limit
//                 setErrorMessage('File size must be less than 1MB');
//                 setPreviewUrl(null);
//                 onChange(null); // Pass null to indicate no file
//                 return;
//             }
//
//             setErrorMessage(null);
//
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewUrl(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//
//             onChange(file); // Pass the selected file
//         } else {
//             setErrorMessage(null);
//             setPreviewUrl(null);
//             onChange(null); // Pass null to indicate no file
//         }
//     };
//
//     return (
//         <div>
//             <label htmlFor={name}>{name} Image</label>
//             <input
//                 id={name}
//                 name={name}
//                 type="file"
//                 onChange={handleChange}
//                 accept="image/*"
//             />
//             {previewUrl && (
//                 <img src={previewUrl} alt="Preview" className="mt-2 w-full max-h-48 object-contain" />
//             )}
//             {errorMessage && <div className="text-red-600">{errorMessage}</div>}
//         </div>
//     );
// };
//
// export default ImageUpload;
