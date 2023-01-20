import { useState } from "react";
import { StyledTab, StyledTabUl, TabContainer } from "../../styles/styledTabs";
import { UsersAdmin } from "./components/usersAdmin";
import { ProductsAdmin } from "./components/productsAdmin";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext"


const Admin = () => {
  const tabs = ["Users", "Products"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {user} = useContext(UserContext)

  if(!user || user?.role !== "admin") {
    return <div>401 Authorization denied</div>
  }

  return (
    <section>
      <div className="w-full">
      <h3>Admin</h3>  
      <TabContainer>
        <StyledTabUl>
          {tabs.map((tab, i) => (
            <StyledTab key={i} onClick={() => setActiveTab(tab)}>
              {tab}
            </StyledTab>
          ))}
        </StyledTabUl>
      </TabContainer>
      {activeTab === "Users" && <UsersAdmin />}
      {activeTab === "Products" && <ProductsAdmin />}
      </div>
    </section>
  );
}

export default Admin;
