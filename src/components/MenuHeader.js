import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';  

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuHeader = ({ }) => {
    return (
        <div>
            <Row>
                <Col className="text-center"><img className='logo' src={`images/logo.png`}></img></Col>
            </Row>
            <Row>
                <Col className="text-center cursive">Delicious Japanese food!</Col>
            </Row>
            <Row>
                <Col className="text-center sub">Order below!</Col>
            </Row>
        </div>
    );
};

export default MenuHeader;
