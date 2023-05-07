import { Image, Typography,Space, Badge, Drawer, List } from 'antd';
import {MailOutlined,BellFilled} from '@ant-design/icons'
import logo from '../../dashboardIcon.png';
import { useEffect, useState } from 'react';
import { getComments, getOrders } from '../../Api';




const  AppHeader=()=>{
    const [comments,setcomments]=useState(0);
    const [orders,setorders]=useState(0);
    const [comopen,setcomopen]=useState(false);
    const [notiopen,setnotiopen]=useState(false);

    useEffect(()=>{
        getComments().then(res=>{
            setcomments(res.comments);
        })
        getOrders().then(res=>{
            setorders(res.products)

        })

    },[])

    return (
        <div className="AppHeader">
            <Image width={40}
            src={logo}
            ></Image>
            <Typography.Title>Rishab's Dashbaord</Typography.Title>
            <Space>
            <Badge count={comments.length} dot>
            <MailOutlined style={{fontSize:24}} onClick={()=>{setcomopen(true)}}/>
            </Badge>
            <Badge count={orders.length} dot>
            <BellFilled style={{fontSize:24}} onClick={()=>{setnotiopen(true)}}/>
            </Badge>
            </Space>
            <Drawer
            title='Comments'
            open={comopen}
            onClose={()=>{setcomopen(false)}}
            maskClosable>
                <List dataSource={comments} renderItem={(item)=>{
                    return <List.Item>{item.body}</List.Item>
                }}/>
            </Drawer>
            <Drawer
            title='Notifications'
            open={notiopen}
            onClose={()=>{setnotiopen(false)}}
            maskClosable>
                <List dataSource={orders} renderItem={(item)=>{
                    return <List.Item><Typography.Text strong>{item.title}</Typography.Text> has been ordered</List.Item>
                }}/>
            </Drawer>


        </div>
    )

}


export default AppHeader;
