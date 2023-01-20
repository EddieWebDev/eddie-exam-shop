import tw from "tailwind-styled-components";

export const Table = tw.table`
    border-4
    border-primary-darkgreen
    my-4
    text-sm
    min-w-[350px]
`;

export const AdminTable = tw.table`
    border-4
    border-primary-darkgreen
    my-4
    text-sm
    min-w-[300px]
`;

export const TableTheadTr = tw.tr`
    bg-primary-green
    text-white
`;

export const TableTheadTd = tw.td`
    px-2
`;

export const TableTbodyTr = tw.tr`
    bg-primary-darkbeige
    border-b-2
    border-primary-green
`;

export const TableTbodyTotalTr = tw.tr`
    bg-primary-darkbeige
    border-t-4
    border-primary-darkgreen
`;

export const TableTbodyTd = tw.td`
    px-2
 `;
