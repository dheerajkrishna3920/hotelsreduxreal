import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingHours({timeData}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




  return (
    <div>
     <Button variant="primary" className='w-100 fs-4' onClick={handleShow}>
       Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Plan Your Time According To...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup >
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Monday : {timeData.Monday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Tuesday : {timeData.Tuesday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Wednesday : {timeData.Wednesday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Thursday : {timeData.Thursday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Friday : {timeData.Friday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Saturday : {timeData.Saturday}</strong></ListGroup.Item>
      <ListGroup.Item variant="primary" className='text-warning mt-2'><strong>Sunday : {timeData.Sunday}</strong></ListGroup.Item>

    </ListGroup>
        </Modal.Body>
       

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default OperatingHours