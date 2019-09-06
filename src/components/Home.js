import React, { Component } from 'react'
import ControlledCarousel from './slider.js'
export default class Home extends Component {
    render() {
        return (
            <div style={{paddingTop:"3rem"}}>
                <ControlledCarousel />
            </div>
        )
    }
}
