import React, { Component } from 'react'
import NavBar from './NavBar.js'
import ControlledCarousel from './slider.js'
export default class Home extends Component {
     constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll(event){
        let element = document.querySelector('.placeholder')
        let  nav= document.querySelector('.navbar')
        if(element.getBoundingClientRect().y+ nav.offsetHeight < 0){
            NavBar.classList.add('scrolled-up');
        }else{
            NavBar.classList.remove('scrolled-up');
        }
    }

    render() {
        return (
            <div onScroll={this.handleScroll}>
                <ControlledCarousel />
            </div>
        )
    }
}
