import { CreateUserForm } from "../../components/CreateUserForm";
import { DeleteUserForm } from "../../components/DeleteUserForm";
import { GetUserByIdForm } from "../../components/GetUserByIdForm";
import { UpdateUserForm } from "../../components/UpdateUserForm";
import { useState } from "react";
import { Tab, TabContainer } from "../../styles/styledTabs";

function Admin() {
  const tabs = ["Create-user", "Update-user", "Delete-user", "Get-user-by-id"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section>
      <h1>Admin</h1>
      <TabContainer>
          {tabs.map((tab, i) => (
            <Tab key={i} onClick={() => setActiveTab(tab)}>{tab}</Tab>
          ))}
      </TabContainer>
      {activeTab === "Create-user" && <CreateUserForm />}
      {activeTab === "Update-user" && <UpdateUserForm />}
      {activeTab === "Delete-user" && <DeleteUserForm />}
      {activeTab === "Get-user-by-id" && <GetUserByIdForm />}
    </section>
  );
}

export default Admin;
