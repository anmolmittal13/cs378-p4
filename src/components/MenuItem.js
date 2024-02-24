import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';  

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, imageName, description, price, updateQuantity, updateArray, index, currentAmount }) => {
    const addCount = () => {
        updateQuantity(price);
        updateArray(index, currentAmount + 1)
    }

    const subtractCount = () => {
        if(currentAmount > 0) {
            updateQuantity(-1 * price);
            updateArray(index, currentAmount - 1)
        }
    }
    return (
        <div>
            <Row className='menu-row'>
                <Col className='text-center'><img className='menu-img' src={`images/${imageName}`} alt={title}></img></Col>
                <Col>
                    <Row>
                        <Col className='item'>{title}</Col>
                    </Row>
                    <Row>
                        <Col className='description'>{description}</Col>
                    </Row>
                    <Row>
                        <Col className='price'>{price}</Col>
                        <Col>
                            <Row>
                                <Col>
                                    <button className='quantity-button' onClick={subtractCount}>-</button> {currentAmount} <button className='quantity-button' onClick={addCount}>+</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default MenuItem;
