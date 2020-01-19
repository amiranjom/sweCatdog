import React, {Component} from "react";

import '../signupClient/clientaap.css';
import sparkles from '../images/sparkles1.png';
import {
    MDBBtn,
    MDBIcon
}from "mdbreact";
import joe from '../images/joe.png';
import '../creatingClient/clientprofcss.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Divider, Grid, Header, Segment, Table } from 'semantic-ui-react'
import Card from "semantic-ui-react/dist/commonjs/views/Card";

import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter } from '@progress/kendo-react-layout'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import {DateTimePicker} from "@progress/kendo-react-dateinputs";
import { Upload } from '@progress/kendo-react-upload';
import {Calendar} from "@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar";
import {provideIntlService} from "@progress/kendo-react-intl/dist/es/intlUtils";
import Axios from "axios";
import queryString from 'query-string'



class sitterPro extends Component{

    constructor(props){
        super(props);
        this.state={
            expandMode: 'multiple',
            success: false,
            messageRead: ' ',
            messageUnread: 'Test MSG',
            messageSender: ' ',
            messageSent: ' ',
            upcomingReq: ' ',
            pastReq: ' ',
            bookingDays: ' ',
            bookingStartDay: '20',
            bookingEndDay: '22',
            client: 'ivan',
            hist: ' ',
            sitterAbout: ' ',
            sitterServices: ' ',
            sitterRates: ' ',
            nameRead: ' ',
            name: 'Ivan',



        };
        this.workerState = {
            phone: ' ',
            email: ' '
        };

        this.dateDif = this.dateDif.bind(this);
        this.reqHistory = this.reqHistory.bind(this);
        this.msgRead = this.msgRead.bind(this);
        this.showMsg = this.showMsg.bind(this);

        setTimeout(()=>{
            const date='2019-11-18';
            this.setState({value: provideIntlService(this).parseDate(date)});
        },1000);
    }
    //-------------------------------------------------------------
      
    componentDidMount() {
        let values = queryString.parse(this.props.location.search) 
        values = values.user
        console.log(values)
    }   




    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({success:true});
        setTimeout(()=>{this.setState({success:false});},3000);
    }

    onChange=(event)=>{
        this.setState({value:event.value});
    }

    dateDif(){
        const daysBooked = this.state.bookingEndDay - this.state.bookingStartDay;
        this.setState({
            bookingDays: daysBooked
        });
    }

    reqHistory(){
        const history = <p>Client: {this.state.client} Dates: {this.state.bookingStartDay} to {this.state.bookingEndDay}</p>
        this.setState({
            hist: history
        });
    }

    msgRead(){
        const read = <p>{this.state.messageUnread}</p>
        const stName = <p>{this.state.name}</p>
        this.setState({
            messageRead: read,
            nameRead: stName,

        });

    }

    showMsg(){
        const viewMessageSent = <p>{this.state.messageRead}</p>
        this.setState({
        messageSent: viewMessageSent
        });
    }








    render(){
        const {expandMode}=this.state;
        const contactInfoEmail = <p>Email: {this.workerState.email }</p>
        const contactInfoNumber = <p>Phone: {this.workerState.phone}</p>
        const unreadMessage = <p>{this.state.messageUnread}</p>
        const sender = <p>{this.state.messageSender}</p>
        const sentMessage = <p>{this.state.messageSent}</p>
        const activeRequest = <p>{this.state.upcomingReq}</p>
        const pastRequests = <p>{this.state.pastReq}</p>
        const bookedStartDate = <p>{this.state.bookingStartDay}</p>
        const bookedEndDate = <p>{this.state.bookingEndDay}</p>
        const clientName = <p>{this.state.client}</p>

        const daysBooked = this.state.bookingEndDay - this.state.bookingStartDay;
        const history = <p>Client: {this.state.client} Dates: {this.state.bookingStartDay} to {this.state.bookingEndDay}</p>
        const read = this.state.messageRead;

        const sitterName = this.state.name;
        const stName = this.state.nameRead;

       const viewMessageSent = this.state.messageSent;


        return(

            <div>

                <Container style={{ padding: '6em 0em' }}>

                    <Header as='h2'>Sitter private Profile</Header>


                    <MDBBtn color="yellow" href={"sitterPublicPro"}>
                        public profile
                    </MDBBtn>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card
                                                image={joe}
                                            />
                                        </Segment>
                                        <Segment>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='user' size='large'/>
                                                    {this.workerState.name}
                                                </Label>
                                            </Card>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='phone' size='large'/>
                                                    Contact
                                                </Label>
                                                email
                                                phone
                                                address
                                            </Card>
                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Segment>

                                    <Divider horizontal>
                                        <Header as='h4'>
                                             Your Profile
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>

                                        <Segment>
                                            <p>About</p>
                                            <p>Services</p>
                                            <p>Rates</p>



                                        </Segment>
                                        <Segment>

                                            <Button href="petProfile" type={"submit"} dir="rtl" primary={true}>Edit</Button>
                                        </Segment>



                                    </Segment.Group>

                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment>
                                        <a href={"#inbox1"}>InBox </a>
                                        <Icon name='envelope outline' size='large'/>
                                    </Segment>
                                    <Segment>
                                        <a href={"#request2"}>Request </a>
                                        <Icon name='folder open outline' size='large'/><Icon name='bell outline'  size='small'/>


                                    </Segment>
                                    <Segment>
                                        <a href={"#booking3"}>Booking </a>
                                        <Icon name='calendar alternate outline' size='large'/>
                                    </Segment>
                                    <Segment>
                                        <a href={"#history4"}>History </a>
                                        <Icon name='clock outline' size='large'/>
                                    </Segment>





                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>

                                    {/*here is the expantion for the the drop downs */}

                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem  title={"Messages"} expanded={false}>
                                            <PanelBarItem title={"Read Messages" }>
                                                <Segment>

                                                    <Divider horizontal>
                                                        <Header as='h4'>
                                                            CatDog!
                                                        </Header>
                                                    </Divider>
                                                    <p>{this.msgRead ? stName : ' '}</p>
                                                    <p>{this.msgRead ? read : ' '}</p>


                                                    <button>confirm</button>

                                                </Segment>

                                            </PanelBarItem>

                                                <PanelBarItem title={"Unread Messages"}>
                                                    <Segment>

                                                        <Divider horizontal>
                                                            <Header as='h4'>
                                                                CatDog!
                                                            </Header>
                                                        </Divider>
                                                        <p>{this.state.name ? sitterName : ' '}</p>
                                                        <p>{this.state.messageUnread ? unreadMessage : ' '}</p>
                                                        <button onClick={this.msgRead}>confirm</button> or <button>cancel</button>
                                                    </Segment>


                                                </PanelBarItem>
                                            <PanelBarItem title={"Sent Messages"}>
                                                <Segment>

                                                    <Divider horizontal>
                                                        <Header as='h4'>
                                                            CatDog!
                                                        </Header>
                                                    </Divider>
                                                    <p>
                                                        You have Sent A Message to {this.state.name}!
                                                    </p>
                                                    <p>{this.showMsg ? viewMessageSent : ' '}</p>

                                                    <button onClick={this.showMsg}>View Message</button> or <button>cancel</button>

                                                </Segment>
                                            </PanelBarItem>



                                        </PanelBarItem>



                                    </PanelBar>

                                </Segment>

                                <Segment>
                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem id={"request2"}  title={"Make A Booking"} expanded={false}>
                                            <PanelBarItem title={"Request Form"}>
                                                <Segment>
                                                    <div className={"row example-wrapper"}>
                                                        <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                                                            <div className="card">
                                                                <div className="card-block">
                                                                    <form className="k-form" onSubmit={this.handleSubmit} width={"100%"}>
                                                                        <fieldset>
                                                                            <legend>Lets Get that Request In! </legend>
                                                                            <label className="k-form-field">
                                                                                <span>Start Form</span>


                                                                                <div className="k-form-field">
                                                                                    <span>Cat or Dog ?</span>

                                                                                    <input type="radio" name="animal"
                                                                                           id="cat" className="k-radio"/>
                                                                                    <label className="k-radio-label"
                                                                                           htmlFor="cat">Cat</label>


                                                                                    <input type="radio" name="animal"
                                                                                           id="dog" className="k-radio"
                                                                                           checked="checked"/>
                                                                                    <label className="k-radio-label"
                                                                                           htmlFor="dog">Dog</label>


                                                                                </div>

                                                                                <label className="k-form-field">
                                                                                    <span>number of pets</span>
                                                                                    <NumericTextBox
                                                                                        name="number"
                                                                                        width={"100%"}
                                                                                        format="n0"
                                                                                        min={1}
                                                                                        required={true}
                                                                                    />
                                                                                </label>

                                                                            </label>
                                                                            <label className="k-form-field">
                                                                                <span>Date of Pick Up</span>

                                                                                <DateTimePicker focusedDate={new Date(2018, 1, 20)}
                                                                                                width={"100%"}
                                                                                                required={true}
                                                                                />

                                                                            </label>
                                                                            <label className="k-form-field">
                                                                                <span>Date of Drop off</span>

                                                                                <DateTimePicker focusedDate={new Date(2018, 1, 20)}
                                                                                                width={"100%"}
                                                                                                required={true}
                                                                                />

                                                                            </label>

                                                                            <label className="k-form-field">
                                                                                <span>Location</span>
                                                                                <input
                                                                                    className="k-textbox"
                                                                                    name="location"
                                                                                    type="location"
                                                                                    placeholder="Location..."
                                                                                    required={true}
                                                                                    width={"100%"}

                                                                                />
                                                                            </label>
                                                                        </fieldset>
                                                                        <Button type="submit" primary={true}>Post</Button>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {this.state.success && (
                                                            <div
                                                                className="alert alert-success"
                                                                style={{ position: 'absolute' }}
                                                            >
                                                                Form submitted!
                                                            </div>)}

                                                    </div>

                                                </Segment>
                                            </PanelBarItem>
                                        </PanelBarItem>

                                    </PanelBar>
                                </Segment>

                                <Segment>
                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem id={"booking3"} title={"Your Booking"} expanded={false}>
                                            <PanelBarItem title={"Calendar"}>
                                                <Calendar value={this.state.value} onChange={this.onChange} />
                                            </PanelBarItem>

                                            <PanelBarItem title={"Upcoming Requests"}>
                                            <p>{this.state.client ? clientName : ' '} Has Set Booking For {this.dateDif ? daysBooked : ' '} Days </p>
                                                Dates: {this.state.bookingStartDay ? bookedStartDate : ' '} - {this.state.bookingEndDay ? bookedEndDate : ' '}
                                                </PanelBarItem>
                                                <PanelBarItem title={"Past Requests"}>
                                                    <p>{this.reqHistory ? history : ' '}</p>
                                                </PanelBarItem>
                                        </PanelBarItem>

                                    </PanelBar>
                                </Segment>

                                <Segment>
                                </Segment>


                            </Grid.Column>

                        </Grid.Row>




                        <Grid.Row>

                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment>
                                        <a >reviews </a>
                                    </Segment>
                                    <Segment>
                                        <a >pictures </a>
                                    </Segment>
                                    <Segment>
                                        <a >customer services </a>
                                    </Segment>

                                </Segment>
                            </Grid.Column>



                            <Grid.Column width={10}>
                                <Segment>


                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Container>


            </div>
        );
    }
}
export default sitterPro;