import { Route,Routes } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard/index';
import Inventory from '../../Pages/Inventory/index';
import Orders from '../../Pages/Orders/index';
import Customers from "../../Pages/Customers";

const  AppRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/inventory' element={<Inventory/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/customers' element={<Customers/>} />
        </Routes>
    )

}


export default AppRoutes;
