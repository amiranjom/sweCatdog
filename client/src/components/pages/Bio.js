import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

class Bio extends Component{
    render(){
        return(
            <div>
                <div className={"header-text"}>
                    <Container fluid >
                        <Header  as='h1' textAlign={'center'} >Services for Every Cat and Dog </Header>
                        <Icon name={'heart outline'}/>

                        <p>
                            The dogs' value to early human hunter-gatherers led to them quickly

                        </p>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Bio;