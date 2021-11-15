import axios from "axios";
import React, { Component } from "react";
import { FormControl, FormGroup, Modal, FloatingLabel } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap';


export default class CreateCake extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cakeName: '',
            price: '',
            weight: '',
            image: '',
            show: false,
            validated: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            console.log(this.state);
            const cakeObject = {
                name: this.state.cakeName,
                weight: this.state.weight,
                price: this.state.price,
                imageUrl: this.state.image

            }
            axios
                .post('http://localhost:8080/cake/add', cakeObject)
                .then(
                    (res) => {
                        console.log(`resposnse`, res);
                    }
                )

            this.setState({
                cakeName: '',
                price: '',
                weight: '',
                image: '',
                show: true
            })
        }
        this.setState({
            validated:true
        })
        

    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }



    render() {

        const { show, validated, cakeName, price, weight, image } = this.state;
        return (

            <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                    <Modal.Body>

                        <FormGroup controlId="cakeName">
                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                <FormControl
                                    required
                                    name="cakeName"
                                    type="text"
                                    placeholder="cake name"
                                    value={cakeName}
                                    onChange={this.handleInputChange}>
                                </FormControl>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a name.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </FormGroup>

                        <FormGroup controlId="price">
                            <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                                <FormControl
                                    required
                                    name="price"
                                    type="text"
                                    placeholder="price"
                                    value={price}
                                    onChange={this.handleInputChange}>
                                </FormControl>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a price.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </FormGroup>

                        <FormGroup controlId="weight">
                            <FloatingLabel controlId="floatingInput" label="Weight" className="mb-3">
                                <FormControl
                                    required
                                    name="weight"
                                    type="text"
                                    placeholder="weight"
                                    value={weight}
                                    onChange={this.handleInputChange}>
                                </FormControl>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a weight.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </FormGroup>

                        {/* <FormGroup controlId="image">
                            <FormLabel>Image</FormLabel>
                            <FormControl name="image" type="file" value={this.state.image} onChange={this.handleInputChange}></FormControl>
                        </FormGroup> */}

                        <FormGroup controlId="image">
                            <FloatingLabel controlId="floatingInput" label="Image">
                                <FormControl
                                    required
                                    name="image"
                                    type="text"
                                    placeholder="image"
                                    value={image}
                                    onChange={this.handleInputChange}>
                                </FormControl>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a image.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </FormGroup>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>


        );
    }
}