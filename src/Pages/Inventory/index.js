import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../Api";

const Inventory=()=>{
    const [loading,setloading]=useState(false);
    const [dataSource,setdataSource]=useState([])
    useEffect(()=>{
        setloading(true);
        getInventory().then(res=>{
            setdataSource(res.products);
            setloading(false);
        })
    },[])
    return(
        <div>
        <Space direction="vertical">
          <Typography.Title>Inventory</Typography.Title>
          <Table 
          columns={[
            {
                title:"Thumbnail",
                dataIndex:"thumbnail",
                render:(link)=>{
                    return <Avatar src={link}/>
                }
              },{
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
            title:"Rating",
            dataIndex:"rating",
            render:(rating)=>{
                return <Rate value={rating} allowHalf disabled/>
            }
          },
          {
            title:"Stock",
            dataIndex:"stock",
          },
          
          {
            title:"Brand",
            dataIndex:"brand",
          },
          {
            title:"Category",
            dataIndex:"category",
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

export default Inventory;