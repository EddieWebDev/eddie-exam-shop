import { CreateUserForm } from "../../components/CreateUserForm"
import { DeleteUserForm } from "../../components/DeleteUserForm"
import { GetUserByIdForm } from "../../components/GetUserByIdForm"
import { UpdateUserForm } from "../../components/UpdateUserForm"

function Admin() {

    return(
        <section>
            <h1>Admin</h1>
            <CreateUserForm/>
            <UpdateUserForm/>
            <DeleteUserForm/>
            <GetUserByIdForm/>
        </section>
    )
}

export default Admin