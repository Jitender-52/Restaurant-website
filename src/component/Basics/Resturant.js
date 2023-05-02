import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set( Menu.map((curElem) => {
  return curElem.category;
    })
  ),
  "All",
]

// console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) =>{
    if(category === "All")
    {
      return setMenuData(Menu);
    }
      const updatedList = Menu.filter((curElem)=>
      {
          return curElem.category === category;
      });
      setMenuData(updatedList);
  };

  // const filterAll = () =>{
  //   const updatedList = Menu.filter((curElem) => {
  //     return true;
  //   });
  //   setMenuData(updatedList)
  // };

  return (
    <>
      {/* <Navbar filterItem={filterItem} uniqueList={uniqueList} /> */}
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
