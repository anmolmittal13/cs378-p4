import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

function SearchBar({ submitText }) {
    const [inputText, setInputText] = useState("")

    const inputHandler = (e) => {
        let text = e.target.value.toLowerCase()
        setInputText(text)
    }

    return (
        <div>
            <div className='this-app'>
                <Container>
                    <Row>
                        <Col>
                        <input type='text' onChange={inputHandler} />
                        <button className="button margin-button" onClick={() => submitText(inputText)}>Submit</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SearchBar;