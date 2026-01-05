import React from "react";

 function Base(props){
     return(
        <div className="onebox">
          <h1 className="category">{props.title}</h1>
           <h1 className="category">{props.category}</h1>
           <img src={props.img} alt="image"/>
           <p className="price">{props.price}</p>
           <p className="desc">{props.desc}</p>
        </div>
     )
 }


 export default Base;
