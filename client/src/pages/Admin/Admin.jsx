import { useState } from "react";
import { Tab, TabContainer } from "../../styles/styledTabs";
import { UsersAdmin } from "./components/usersAdmin";
import { ProductsAdmin } from "./components/productsAdmin";

function Admin() {
  const tabs = ["Users", "Products"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section>
      <h1>Admin</h1>
      <TabContainer>
        {tabs.map((tab, i) => (
          <Tab key={i} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabContainer>
      {activeTab === "Users" && <UsersAdmin />}
      {activeTab === "Products" && <ProductsAdmin />}
    </section>
  );
}

export default Admin;
