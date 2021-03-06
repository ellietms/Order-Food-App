import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MenuPageNavbar from "./MenuPageNav";
import MenuTemplate from "./MenuTemplate";
import SidebarMenu from "./SidebarMenu";
import "../App.css";

const MenuPage = ({
  AllApiTypes,
  ApiDatas,
  cart,
  setCart,
  backToMainPage,
  GoToShoppingLists,
  addToCart,
}) => {
  return (
    <div>
      <MenuPageNavbar 
      backToMainPage = {backToMainPage} 
      GoToShoppingLists={GoToShoppingLists}
      cart = {cart}
      />
      <div className="menuPage_container container">
        <div className="menu_container  container">
          <div className="title_mainMenu">
            <span className="menuText">Menu</span>
            <div className="sidBarMenu">
              <SidebarMenu AllApiTypes={AllApiTypes} />
            </div>
          </div>
          <div className="main_menu">
            {AllApiTypes.map((data) => {
              let sameTypesFoods = ApiDatas.filter(
                (element) => element.type === `${data}`
              );
              return (
                <div>
                  <div id={`${data}`}>
                    <span className="title_menus container">
                      {data.toUpperCase()}
                    </span>
                  </div>
                  <MenuTemplate
                    SameTypeDatas={sameTypesFoods}
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
