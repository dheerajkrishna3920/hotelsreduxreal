import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function Review({ reviews }) {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='text-light'><strong>Review</strong></Accordion.Header>
                    <Accordion.Body>

                        <ListGroup>
                            {
                                reviews.map(i => (

                                    <ListGroup.Item variant="secondary" className='text-dark mt-2'>
                                        <h3><strong>Name : {i.name}</strong></h3>
                                        <h5><strong>Date </strong>: {i.date}</h5>
                                        <h5><strong>Rating </strong> : {i.rating}</h5>
                                        <p><strong>Comments</strong> : {i.comments}</p>
                                    </ListGroup.Item>

                                ))
                            }



                        </ListGroup>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Review