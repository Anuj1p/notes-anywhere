import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css';

const MainScreen = ({title,children}) => {
  return (
    <div>
        <Container>
            <Row>
                <div className='page'>
                    {
                        title && 
                        <>
                            <div className='heading'>{title}</div>
                            <hr />
                        </>
                    }
                    {
                        children
                    }
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MainScreen