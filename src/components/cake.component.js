import axios from "axios";
import { Component } from "react";
import { Card, Button, Modal, ModalBody } from 'react-bootstrap'
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import cake_img_1 from '../assets/images/cake_img_1.jpg'


export default class Cake extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleDelete(event, id) {
        this.handleShow();
        // return this.deleteById(id);
    }

    async deleteById(id) {
        const url = `http://localhost:8080/cake/delete/${id}`;
        axios
            .delete(url)
            .then(res => {
                console.log(`res`, res);
            })
    }
    render() {
        const { show } = this.state;
        if (this.props.loading) {
            return (
                <h2>Loading ...</h2>
            );
        }
        else {
            return (
                <>
                    <Card key={this.props.cake.id} style={{ width: '18rem' }} className="mx-2 my-2">
                        <Card.Img variant="top" src={cake_img_1} />
                        <Card.Body>
                            <Card.Title>{this.props.cake.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>


                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <Button variant="warning">Update</Button>
                            <Button variant="danger" onClick={e => this.handleDelete(e, this.props.cake.id)}>Delete</Button>
                        </Card.Footer>
                    </Card>

                    <Modal show={show} onHide={this.handleClose} >
                        <ModalHeader variant="warning"></ModalHeader>
                        <ModalBody>
                            <h4>are you want to delete</h4>
                        </ModalBody>
                    </Modal>
                </>
            )
        }

    };
}