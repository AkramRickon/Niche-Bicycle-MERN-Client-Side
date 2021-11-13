import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Slider from '../../Home/Slider/Slider';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';

const DashBoardHome = () => {
    const{admin}=useAuth();
    return (
        <div>
           {
               (admin)&&<ManageOrders></ManageOrders> 
           }
           {
               (!admin)&&<MyOrders></MyOrders>
           }
        </div>
    );
};

export default DashBoardHome;