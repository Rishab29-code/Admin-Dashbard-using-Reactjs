import { Card, Space, Statistic, Table, Typography } from "antd";
import {ShoppingCartOutlined,UserOutlined,DollarCircleOutlined,ShoppingOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../Api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

 

const Dashboard=()=>{
    const [orders,setOrders]=useState(0);
    const [inventory,setInventory]=useState(0);
    const [customers,setCustomers]=useState(0);
    const [revenue,setRevenue]=useState(0);

    useEffect(()=>{
        getOrders().then(res=>{
            setOrders(res.total);
            setRevenue(res.discountedTotal)
        })
        getInventory().then(res=>{
            setInventory(res.total);
        })
        getCustomers().then(res=>{
            setCustomers(res.total)
        })

    },[])
    return(
        <div className="Dashboard">
        <Space size={20} direction="vertical">
        <Space direction="horizontal">
        <DashboardCard title={"Orders"} value={orders} icon={<ShoppingCartOutlined
        style={{
            color:'green',
            backgroundColor:'rgba(255,255,0,0.25)',
            borderRadius:24,
            fontSize:24,
            padding:8,

        }}
        />} />
        <DashboardCard title={"Inventory"} value={inventory} icon={<ShoppingOutlined
        style={{
            color:'purple',
            backgroundColor:'rgba(255,0,0,0.25)',
            borderRadius:24,
            fontSize:24,
            padding:8,

        }}
        />} />
        <DashboardCard title={"Revenue"} value={revenue} icon={<DollarCircleOutlined 
        style={{
            color:'red',
            backgroundColor:'rgba(0,255,0,0.25)',
            borderRadius:24,
            fontSize:24,
            padding:8,

        }}
        />} />
        <DashboardCard title={"Customers"} value={customers} icon={<UserOutlined 
        style={{
            color:'yellow',
            backgroundColor:'rgba(255,0,255,0.25)',
            borderRadius:24,
            fontSize:24,
            padding:8,

        }}
        />} />
        </Space>
        <Space size={50} direction="horizontal">
        <RecentOrders/>
        <DashboardChart/>
        </Space>
        </Space>
        </div>

    )
}
const DashboardCard=({title,value,icon})=>{
   
    return(
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card>
    )
}
const RecentOrders=()=>{

    const [dataSource,setdataSource]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
     setLoading(true);
     getOrders().then(res=>{
        setdataSource(res.products.splice(0,3))
        setLoading(false);
     })

    },[])
    return(
        <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table
        loading={loading}
        columns={[{
            title:"Title",
            dataIndex:"title",
        },
        {
            title:"Quantity",
            dataIndex:"quantity",
        },
        {
            title:"Price",
            dataIndex:"discountedPrice",
        }
        ]}
        dataSource={dataSource}>


        </Table>
        </>
    )

}
const DashboardChart=()=>{
    const [revenueData,setrevenueData]=useState({
        labels:[],
        datasets:[],
    })
    useEffect(()=>{
     getRevenue().then(res=>{
        const labels=res.carts.map((cart)=>{
            return `User-${cart.userId}`;
        })
        const data=res.carts.map((cart)=>{
            return cart.discountedTotal;
        })
        const dataSource = {
            labels,
            datasets: [
              {
                label: 'Revenue',
                data: data,
                backgroundColor: 'rgba(255,0,1)',
              },
              
            ],
          };
          setrevenueData(dataSource);
        })
    },[])
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' ,
          },
          title: {
            display: true,
            text: 'Order Revenue',
          },
        },
      };
      
    return (
        <Card style={{width:500,height:250}}>
    <Bar options={options} data={revenueData} />;
    </Card>
    )

}
export default Dashboard;