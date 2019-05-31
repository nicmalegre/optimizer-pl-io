import React from 'react';
import { Container,Col,Row,ProgressBar } from "react-bootstrap";
import  Configuration  from "./Configuration";
import  Processing  from "./Processing";
import  Presentation  from "./Presentation";
import logo from '../logo.svg';
import StepWizard from 'react-step-wizard';
import StepperHorizontal from './StepperHorizontal';


class Inicio extends React.Component{
    constructor (props){
        super(props)
        this.state={
            variables:[{xi:1, descripcion:'',coeficiente:0},{xi:2,descripcion:'',coeficiente:0}],
            restricciones:[],
            method:"graph",
            objective:"max"
        };
        this.handleStateSystem=this.handleStateSystem.bind(this)
    }

    handleStateSystem (variables,restricciones,method,objective) {
        console.log(restricciones);
        this.setState({variables,restricciones,method,objective});  
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
    }
  
  
    render () {
        return(
            <Container fluid className="App">
                <Row className="">
                    <Col xs={12} md={6}  className="mx-auto">
                        <img src={logo} className="App-logo" alt="logo" height="200" />
                        <ProgressBar animated striped variant="primary" now={33} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}  className="mx-auto">
                        <StepperHorizontal/>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Inicio;