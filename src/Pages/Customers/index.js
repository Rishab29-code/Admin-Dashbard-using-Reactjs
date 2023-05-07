import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../Api";

const Customers=()=>{
    const [loading,setloading]=useState(false);
    const [dataSource,setdataSource]=useState([])
    useEffect(()=>{
        setloading(true);
        getCustomers().then(res=>{
            setdataSource(res.users);
            setloading(false);
        })
    },[])
    return(
        <div>
        <Space direction="vertical">
          <Typography.Title>Customers</Typography.Title>
          <Table 
          columns={[
            {
                title:"Photo",
                dataIndex:"image",
                render:(link)=>{
                    return <Avatar src={link}/>
                }
              },
              {
            title:"First Name",
            dataIndex:"firstName",
          },
          {
            title:"Last Name",
            dataIndex:"lastName",
          },
          
          {
            title:"Age",
            dataIndex:"age",
          },
          {
            title:"Address",
            dataIndex:"address",
            render:(value)=>{
                return `${value.address},${value.city},${value.state}`
            }
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

export default Customers;