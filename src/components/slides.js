import React, {useState, Component } from 'react';

import {Caption,Item} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
function Slidesf(props)
{
      
    return (<div className="carousel-item" style={{ height: 400 }}>
    
     <img
                  style={{ width: "100%", height: "100%" }}
                  src={props.caseItems.imgUrl}
     />
               
        </div>);
}
export default Slidesf;
