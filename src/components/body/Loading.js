import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
    return (
        <div className="col-12" style={{ padding: "60px" }}>
            <i class="fa-regular fa-spinner fa-fw fa-pulse"></i>
        </div>
    )
}

export default Loading;