import {
  Table,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
} from "../../../styles/styledTable";

export const UserDetailsTable = (user) => {
  const { userData } = user;

  return (
    <Table>
      <thead>
        <TableTheadTr>
          <TableTheadTd>User details</TableTheadTd>
          <TableTheadTd />
        </TableTheadTr>
      </thead>
      <tbody>
        <TableTbodyTr>
          <TableTbodyTd>First name</TableTbodyTd>
          <TableTbodyTd>{userData.firstname}</TableTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyTd>Last name</TableTbodyTd>
          <TableTbodyTd>{userData.lastname}</TableTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyTd>Email</TableTbodyTd>
          <TableTbodyTd>{userData.email}</TableTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyTd>Role</TableTbodyTd>
          <TableTbodyTd>{userData.role}</TableTbodyTd>
        </TableTbodyTr>
      </tbody>
    </Table>
  );
};
