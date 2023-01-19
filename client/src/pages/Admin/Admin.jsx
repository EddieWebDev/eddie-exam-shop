import { useState } from "react";
import { StyledTab, StyledTabUl, StyledTabContainer } from "../../styles/styledTabs";
import { UsersAdmin } from "./components/usersAdmin";
import { ProductsAdmin } from "./components/productsAdmin";

function Admin() {
  const tabs = ["Users", "Products"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section>
      <StyledTabContainer>
        <StyledTabUl>
          {tabs.map((tab, i) => (
            <StyledTab key={i} onClick={() => setActiveTab(tab)}>
              {tab}
            </StyledTab>
          ))}
        </StyledTabUl>
      </StyledTabContainer>
      {activeTab === "Users" && <UsersAdmin />}
      {activeTab === "Products" && <ProductsAdmin />}
    </section>
  );
}

export default Admin;
