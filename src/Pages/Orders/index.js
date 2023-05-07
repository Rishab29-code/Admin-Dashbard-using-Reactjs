import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {  getOrders } from "../../Api";

const Orders=()=>{
    const [loading,setloading]=useState(false);
    const [dataSource,setdataSource]=useState([])
    useEffect(()=>{
        setloading(true);
        getOrders().then(res=>{
            setdataSource(res.products);
            setloading(false);
        })
    },[])
    return(
        <div>
        <Space direction="vertical">
          <Typography.Title>Orders</Typography.Title>
          <Table 
          columns={[
            {
            title:"Title",
            dataIndex:"title",
          },
          {
            title:"Price",
            dataIndex:"price",
            render:(value)=>{
                return ` $${value}`
            }
          },
          {
            title:"Discounted Price",
            dataIndex:"discountedPrice",
          },
          
          {
            title:"Quantity",
            dataIndex:"quantity",
          },
        ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            pageSize:5,
          }
          }
          
          >

          </Table>
        </Space>
        </div>

    )
};

export default Orders;