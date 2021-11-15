import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        const { cakesPerPage, totalCakes, paginate, currentPage } = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalCakes / cakesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button onClick={() => paginate(currentPage - 1)} className="page-link">Previos</button>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <button onClick={() => paginate(num)} className="page-link">{num}</button>
                        </li>
                    )
                    )}

                    <li className="page-item">
                        <button onClick={() => paginate(currentPage + 1)} className="page-link" href="#">Next</button>
                    </li>

                </ul>
            </nav>
        )
    }
}
