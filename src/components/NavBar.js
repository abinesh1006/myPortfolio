import React, { Component } from 'react';
import '../assests/sacss/navbar.scss';
import * as CONSTANTS from '../constants/site-constants.js';
import { Link } from "react-router-dom";
import { Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

export default class NavBar extends Component {
    constructor()
    {
        super();

    }
        state = {
              scroll: true,
        };
    
  componentDidMount() {
    document.addEventListener('scroll', () => {
        const scroll= window.scrollY < 100;
        if (scroll !== this.state.scroll) {
          this.setState({ scroll })
      }
    });
    }
    render() {
        return (
            <React.Fragment>

                <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" bg={this.state.scroll ? '':'transparent'}>
                        <Navbar.Brand href="#home">  {CONSTANTS.SITE_NAME}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">
                                   <Nav.Link href="" ></Nav.Link>
                                   <Nav.Link href="#features"> <Link to="/Docs/abinesh_resume.doc.pdf" target="_blank" download>Resume</Link></Nav.Link>
                              </Nav>
                              <Nav>
                                   <Form inline>
                                     <FormControl type="text" placeholder="Search...." style={{width: "40vw"}} className="mr-2" />
                                     <Button className="mr-2" variant="outline-primary">Search</Button>
                                  </Form>
                             </Nav>
                             <Nav>
                                    <Nav.Link href="" ></Nav.Link>
                                    <Nav.Link eventKey={2} href="#ContactMe">Contact Me</Nav.Link>
                             </Nav>
                        </Navbar.Collapse>
                </Navbar> 

            </React.Fragment>
        )
    }
}
