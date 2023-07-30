import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css'
import OperatingHours from './OperatingHours';
import Review from './Review';



function RestView() {

    const [allRest, setAllRest] = useState([])

    const getRest = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setAllRest(data.restaurants);
        })
    }
    console.log(allRest);

    //object for useparams hook
    const params = useParams()

    //find single product
    const singleRest = allRest.find(i => i.id == params.id)
    console.log(singleRest);

    useEffect(() => {
        getRest()
    }, [])

    return (
        <>

            {
                singleRest ? (
                    <Row style={{ margin: '0px' }}>

                        <Col lg={6} md={12} sm={12} xl={6}>

                            <Image className='w-75 p-5 d1' style={{ height: '700px' }} src={singleRest.photograph} rounded />

                        </Col>

                        <Col lg={6} md={12} sm={12} xl={6}>

                            <h1 className='text-center mt-5 text-danger'><strong>{singleRest.name}</strong></h1>
                            <ListGroup className='fs-5 p-5'>
                                <ListGroup.Item className='p-4 mt-3 d1' style={{ border: '1px solid' }}>Neighbourhood : <strong className='text-warning '>{singleRest.neighborhood}</strong></ListGroup.Item>
                                <ListGroup.Item className='p-4 mt-3 d1' style={{ border: '1px solid' }}>Address : <strong className='text-warning '>{singleRest.address}</strong></ListGroup.Item>
                                <ListGroup.Item className='p-4 mt-3 d1' style={{ border: '1px solid' }}>Cuisine Type : <strong className='text-warning '>{singleRest.cuisine_type}</strong></ListGroup.Item>
                                <ListGroup.Item className='p-4 mt-3 d1' style={{ border: '1px solid' }}>
                                    <OperatingHours timeData={singleRest.operating_hours}></OperatingHours>
                                </ListGroup.Item>
                                <ListGroup.Item className='p-4 mt-3 d1' style={{ border: '1px solid' }}>
                                    <Review reviews={singleRest.reviews}></Review>
                                </ListGroup.Item>
                            </ListGroup>

                        </Col>


                    </Row>

                ) : 'null'}




        </>
    )
}

export default RestView