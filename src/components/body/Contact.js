import React, { Component } from 'react';
import { Col, FormGroup, Input, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Form, Control, Errors, actions } from 'react-redux-form';


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val =>  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(val);


const mapDispatchToProps = (dispatch) => {
  return {
    resetFeedbackForm: () => {
      dispatch(actions.reset('feedback'));
    }
  }
}


export class Contact extends Component {
  
  handleSubmit = (values) => {
    console.log(values);
    this.props.resetFeedbackForm();
  }

  render() {
    document.title = "Contact";
    return (
      <div className='container'>
        <div className='row row-content' style={{paddingLeft: "20px", textAlign: "left"}}>
          <div className='col-12'>
            <h3>Send us your feedback</h3>
          </div>
          <div className='col-12 col-md-7'>
            <Form onSubmit={values => this.handleSubmit(values)} >
              <FormGroup>
                <Label htmlFor='firstname' md={2}>First Name</Label>
                <Col md={10}>
                  <Control.text 
                    model='.firstname' 
                    name='firstname' 
                    placeholder='First Name' 
                    className='form-control' 
                    validators={{required}} 
                  /> 
                  <Errors 
                    className='text-danger'
                    model='.firstname' 
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col> 
              </FormGroup>
              <FormGroup>
                <Label htmlFor='lastname' md={2}>Last Name</Label>
                <Col md={10}>
                  <Control.text 
                    model='.lastname' 
                    name='lastname' 
                    placeholder='Last Name' 
                    className='form-control'
                    validators={{required}}
                  /> 
                  <Errors 
                    className='text-danger'
                    model='.lastname' 
                    show="touched"
                    messages={{
                      required:"Required"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='telnum' md={2}>Contact Number</Label>
                <Col md={10}>
                  <Control.text model='.telnum' name='telnum' placeholder='Contact Number' className='form-control' validators={{required, isNumber}} /> 
                  <Errors 
                    className='text-danger'
                    model='.telnum' 
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Invalid Number!"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email' md={2}>Email</Label>
                <Col md={10}>
                  <Control.text model='.email' type='email' name='email' placeholder='Email' className='form-control' validators={{required, validEmail}} /> 
                  <Errors 
                    className='text-danger'
                    model='.email' 
                    show="touched"
                    messages={{
                      required:"Required",
                      validEmail: "Invalid email!"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={8}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox model='.agree' name='agree' className='form-check-input' />
                      <strong>may we contact your company? </strong>                  
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Control.select model='.contactType' name='contactType' className='form-control' >
                    <option>Tel. </option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='message' md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Control.textarea model='.message' name='message' rows='12' validators={{required}} /> 
                  <Errors 
                    className='text-danger'
                    model='.message' 
                    show="touched"
                    messages={{
                      required:"Required"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={12}>
                  <Button type="submit" color='primary'>Send Feedback</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps) (Contact);