import React, {useEffect, useState} from 'react'
import { Button, Card, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainScreen from '../../Components/MainScreen'
import './MyNotes.css';

const MyNotes = () => {

    const _deleteNote = (id) => {
        if (window.confirm("Are you Sure?")) {

        }
    }

    const [notes, setNotes] = useState([]);

    const fetchNotes = async() => {
        const {data} = await axios.get('/api/notes');
        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    },[]);

    return (
        <MainScreen title='Welcome Back Anuj...'>
            <Link to='/createnote'>
                <Button className='buttonStyle'>Create New Note</Button>
            </Link>
            {
                notes.map(note => {
                    return (
                        <Accordion key={note._id}>
                            <Card style={{ margin: '10px' }}>
                                <Card.Header className="cardHeader">
                                    <div className='note-title'>
                                        <Accordion.Toggle
                                            as={Card.Text}
                                            variant="link"
                                            eventKey="0"
                                        >
                                            {note.title}
                                        </Accordion.Toggle>
                                    </div>
                                    <div>
                                        <Button href={`/note/${note._id}`}>Edit</Button>
                                        <Button variant='danger' className='mx-2' onClick={_deleteNote}>Delete</Button>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <div className='note-category'>{note.category}</div>
                                            <p>{note.content}</p>
                                            <footer className="blockquote-footer">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    );
                })
            }
        </MainScreen>
    )
}

export default MyNotes