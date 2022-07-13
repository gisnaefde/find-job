import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = (props) => {
    return(
        <>
            <Sidebar/>
            {props.children}
        </>
    )
}

export default SidebarLayout;
