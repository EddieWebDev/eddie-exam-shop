import tw from "tailwind-styled-components";

export const FormContainer = tw.div`
    w-full
    p-4
    text-center
`;

export const Form = tw.form`
    w-full
    flex
    flex-col
    items-center
    gap-2
`;

export const FormWithLabel = tw.form`
    w-full
    flex
    flex-col
    items-center
`;

export const Input = tw.input`
    w-4/5
    rounded
    hover:shadow-lg
    placeholder: pl-1
`;
export const Textarea = tw.textarea`
    w-4/5
    rounded
    hover:shadow-lg
    placeholder: pl-1
`;
export const Select = tw.select`
    w-4/5
    rounded
    hover:shadow-lg
    placeholder: pl-1
`;

export const SubmitInput = tw.input`
    min-w-[100px]
    p-2
    rounded
    shadow
    bg-primary-darkgreen
    text-white
    hover:scale-110 hover:transition duration-300 cursor-pointer
`;

export const FormError = tw.p`
    text-sm
    text-red-700
`;
