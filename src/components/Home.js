import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

    const [restList, setRestList] = useState([])

    //api function
    const getRest = async () => {
        //store response
        const result = await fetch('./restaurants.json')
        //convert data in to js
        result.json().then(data => {
            //storebdata in state
            setRestList(data.restaurants)
        })
    }

    console.log(restList);


    useEffect(() => {
        getRest()
    }, [])



    return (
        <Row  style={{ margin:'0px' }} >
            {
                restList.map(i => (
                    <Col className='p-1 '  sm={12} md={6} lg={4} xl={3}>

                    <Link to={`viewrest/${i.id}`} style={{textDecoration:'none'}}>
                            <Card className=' m-5 mb-5 d1' style={{ width: '18rem', borderRadius:'10px'}}>
                                <Card.Img className='w-100' variant="top" src={i.photograph}/>
                                <Card.Title className='mt-3 text-center text-white'><strong>{i.name}</strong></Card.Title>
                                <Card.Body>
                                    <Card.Text className='text-light'>
                                    {i.address}
                                    </Card.Text>
                                   
                                </Card.Body>
                            </Card>
                    </Link>

                    </Col>
                ))
            }

        </Row>
    )
}

export default Home