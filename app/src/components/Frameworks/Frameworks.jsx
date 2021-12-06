import React from "react";
import './Frameworks.css';
import node from "./img/node1.png";
import laravel from "./img/laravel.png";
import android from "./img/android.png";
const Frameworks=()=>{
    return (
        <div className="container-frameworks">
            <div>
                <img className="img-frame" src={node} alt="" />
            </div>
            <div>
                <img className="img-frame" src={android} alt="" />
            </div>
            <div>
                <img className="img-frame" src={laravel} alt="" />
            </div>
        </div>
    )
}
export default Frameworks;