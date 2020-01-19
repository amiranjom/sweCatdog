import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component{
    render(){
        return(
            <div>
                <MDBFooter className="font-small  footer-color">
                    <MDBContainer fluid className="text-center text-md-left">

                            <MDBRow md="6">
                                <h5 className="title footer-text">CatDog</h5>
                                <ul>
                                    <li className="list-unstyled footer-text">
                                        <a href="/">Home</a>
                                    </li>

                                </ul>
                                <h5 className="title footer-text">Links</h5>
                            </MDBRow>

                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a> CatDog.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        )
    }
}
export default Footer;