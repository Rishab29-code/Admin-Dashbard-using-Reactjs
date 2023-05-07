import { Typography } from "antd";





const  AppFooter=()=>{
    return(
        <div className="AppFooter">
            <Typography.Link href="tel:+1234567">+1234578</Typography.Link>
            <Typography.Link href="https://www.google.com" target={'_blank'}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.youtube.com" target={'_blank'}>Terms of use</Typography.Link>
        </div>
    )

}


export default AppFooter;
