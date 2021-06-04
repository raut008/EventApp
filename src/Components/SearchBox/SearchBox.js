import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";
const SearchBox = ({ onSearchChange }) => {
    return (
        <div className="row col-12 px-0 mx-0">
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Search Here</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="search" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search By Name" onChange={onSearchChange} />
            </InputGroup>
        </div>
    )
}

export default SearchBox
