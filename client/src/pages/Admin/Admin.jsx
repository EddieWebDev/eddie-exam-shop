import { CreateUserForm } from "../../components/CreateUserForm";
import { DeleteUserForm } from "../../components/DeleteUserForm";
import { GetUserByIdForm } from "../../components/GetUserByIdForm";
import { useState } from "react";
import { Tab, TabContainer } from "../../styles/styledTabs";

function Admin() {
  const tabs = ["Create user", "Search and update user", "Delete user"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section>
      <h1>Admin</h1>
      <TabContainer>
          {tabs.map((tab, i) => (
            <Tab key={i} onClick={() => setActiveTab(tab)}>{tab}</Tab>
          ))}
      </TabContainer>
      {activeTab === "Create user" && <CreateUserForm />}
      {activeTab === "Search and update user" && <GetUserByIdForm />}
      {activeTab === "Delete user" && <DeleteUserForm />}
    </section>
  );
}

export default Admin;
