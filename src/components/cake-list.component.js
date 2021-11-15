import React, { Component } from "react";
import { Button, Container } from 'react-bootstrap'
import CreateCake from './cake-create.component'
import Pagination from './pagination.component'
import axios from 'axios'
import Cake from "./cake.component";


export default class CakeList extends Component {

    constructor(props) {
        super(props);
        this.createCakeRef = React.createRef();

        this.state = {
            loading: false,
            cakes: [],
            currentPage: 1,
            cakesPerPage: 4,
        }

    }

    async getData() {
        const res = await axios.get('http://localhost:8080/cake/all');
        this.setState({
            cakes: res.data
        });
        return res;

    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        this.getData();
    }

    onAddClick = () => {
        this.createCakeRef.current.handleShow();
    };


    render() {

        const { cakes, cakesPerPage, loading, currentPage } = this.state;
        const paginate = pageNum => {
            this.setState({ currentPage: pageNum });
        }

        const lastIndex = this.state.currentPage * this.state.cakesPerPage;
        const firstIndex = lastIndex - this.state.cakesPerPage;

        return (

            <Container>
                <CreateCake ref={this.createCakeRef}></CreateCake>
                <div className="d-flex justify-content-end my-4">
                    <Button onClick={this.onAddClick}>Add New</Button>
                </div>
                <div className="row d-flex my-2" >
                    {this.state.cakes.slice(firstIndex, lastIndex).map((cake) => {
                        return (
                            <Cake key={cake.id} cake={cake} loading={loading}></Cake>
                        );
                    })}
                </div>
                <Pagination cakesPerPage={cakesPerPage} totalCakes={cakes.length} paginate={paginate} currentPage={currentPage}></Pagination>
            </Container>


        );


    }


}