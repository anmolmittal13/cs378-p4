import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const OrderPopUp = ({quantities, menuItems }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let names = "";
    for(let i = 0; i < quantities.length; i++) {
        let q = quantities[i]
        if(q === 1) {
            names += q + " " + menuItems[i].title + " "
        } else if(q > 1) {
            names += q + " " + menuItems[i].title + "s "
        }
    }
    let modalBody;
    if(names.length === 0) {
        modalBody = <>No items in cart.</>
    } else {
        modalBody = <>Order Placed!<br/>{names}</>
    }

    return (
        <div>
            <button className='button' onClick={handleShow}>Order</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OrderPopUp;
