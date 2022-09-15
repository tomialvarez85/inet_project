import React from "react";

import "./PageHeader.css"

function PageHeader(props) {
    return(

        <h1 className="page-header">{props.title}</h1>
        
    );
}

export default PageHeader;