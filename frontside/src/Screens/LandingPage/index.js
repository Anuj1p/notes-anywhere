import React from 'react'
import { Container, Button, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div className='upper-container'>
                            <div className='title'>Welcome to Notes Anywhere</div>
                            <div className='subtitle'>One Safe place for all your notes.</div>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button
                                    size='lg'
                                    className='landingButton'
                                >
                                    Login
                                </Button>
                            </a>
                            <a href='/register'>
                                <Button
                                    size='lg'
                                    className='landingButton'
                                    variant='outline-primary'
                                >
                                    SignUp
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage