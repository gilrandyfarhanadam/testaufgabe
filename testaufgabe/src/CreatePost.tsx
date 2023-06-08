import './css/index.css'
import { Form } from 'react-bootstrap'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

export default function CreatePost() {
    // initialize form data
    const [formData, setFormData] = useState({
        id: '',
        question: '',
        answer: '',
    })

    // initialize result
    const [result, setResult] = useState({
        id:'',
        question: '',
        answer: '',
    })

    // change handler
    const handleChange = (e) => {
        // extract the properties
        const {name, value} = e.target;

        // set new data
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        // disable the default behaviour
        e.preventDefault();

        // make a post request
        fetch('https://qmbasefunctions.azurewebsites.net/api/questions?code=WNV11-fsFklJ7O96AQasQDNnIBlDvm4cTINn-AeL7WLuAzFuxVWGsg==', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((result) => {
            // pass the result
            setResult({
                id: result.id,
                question: result.question,
                answer: result.answer,
            })
        })
        .catch((error) => {
            // Handle the error
            console.error(error);
        });
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Control type='number' name='id' value={formData.id} placeholder='Id' onChange={handleChange} required></Form.Control>
                <Form.Control type='text' name='question' value={formData.question} placeholder='Question' onChange={handleChange} required></Form.Control>
                <Form.Control type='text' name='answer' value={formData.answer} placeholder='Answer' onChange={handleChange} required></Form.Control>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>

            <h4>Readback :</h4>
            <p>Id : {result.id} <br />
            Question : {result.question} <br />
            Answer : {result.answer}</p>
        </>
    )
}