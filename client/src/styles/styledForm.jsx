import tw from "tailwind-styled-components";

export const FormContainer = tw.div`
    min-w-[220px]
    max-w-[500px]
    bg-slate-600
    flex
    justify-center
    items-center
    p-4
`;

export const Form = tw.form`
    w-full
    flex
    flex-col
    items-center
    gap-2
`;

export const Input = tw.input`
    w-2/3
    border
    rounded
    shadow
`

export const SubmitInput = tw.input`
    w-1/3
    border
    rounded
    shadow
    bg-green-400
`
export const FormError = tw.p`
    text-red-700
`
