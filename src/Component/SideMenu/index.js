import { Menu } from "antd";
import {AppstoreOutlined,ShopOutlined,ShoppingCartOutlined,UserOutlined} from '@ant-design/icons'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const  SideMenu=()=>{
    const [selectedKeys,setselectedKeys]=useState('/')
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        const pathname=location.pathname;
        setselectedKeys(pathname);


    },[location.pathname])

    return(
        <div className="SideMenu">
            <Menu
            mode="vertical"
            className="SideMenuVertical"
            onClick={(item)=>{
                navigate(item.key);

            }}
            selectedKeys={[selectedKeys]}
            items={[
                {
                    label:"Dashboard",
                    icon:<AppstoreOutlined/>,
                    key:"/",
                },
                {
                    label:"Inventory",
                    icon:<ShopOutlined/>,
                    key:"/inventory",
                },
                {
                    label:"Orders",
                    icon:<ShoppingCartOutlined/>,
                    key:"/orders",
                },
                {
                    label:"Customers",
                    icon:<UserOutlined/>,
                    key:"/customers",
                },
            ]}
            
            
            >

            </Menu>
        </div>
    )

}


export default SideMenu;
