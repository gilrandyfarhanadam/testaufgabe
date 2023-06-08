import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import useSWR from "swr";
import { useState } from "react";
import Button from "react-bootstrap/Button";

// init fetcher
const fetcher = (url:any) => fetch(url).then((res) => res.json());

// expandable text for cutting the text and 
const ExpandableText = ({ text, maxChars }) => {
    const [expanded, setExpanded] = useState(false);
    const [btnText, setBtnText] = useState("More");
    const truncatedText = expanded ? text : text.slice(0, maxChars) + "...";

    const handleExpandClick = () => {
        setExpanded(!expanded);
        expanded ? setBtnText("More") : setBtnText("Less")
      };
    
    return (
        <>
            <p>{truncatedText}</p>
            <div>
                {(
                    <Button onClick={handleExpandClick}>{btnText}</Button>
                )}    
            </div>
        </>
        
    );
}


export default function Result() {
    // initialize search term
    const [searchTerm, setSearchTerm] = useState('');

    // fetch the data from url
    const { data: questions, error } = useSWR('https://qmbasefunctions.azurewebsites.net/api/questions?code=Y5DGbEq3YHjpTKgrwq9czVdm7ZxR8zy26Z_yNh8q4DFKAzFudvB65w==', fetcher);

    // handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // filter the question based on searchTerm
    // if the question is undefined, then return empty array
    const filteredQuestions = questions
        ? questions.filter((question) =>
            question.question.toLowerCase().includes(searchTerm.toLowerCase()) || question.answer.toLowerCase().includes(searchTerm.toLowerCase()) || question.tags.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        : [];

    // error handling
    if (error) {
        return <div>Error fetching data</div>;
    }

    // returning the web content
    return (
        <>
            {/* SEARCH BOX */}
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Control type='text' placeholder='Search...' className='p-3 mt-3 mb-3 border border-2' onChange={handleInputChange}></Form.Control>
                </Form>
            </Row>

            {/* CONTENT ROW */}
            {questions ? (
                <Row>
                    {/* access the filtered question */}
                    {filteredQuestions.map((item:any) => {
                        return (
                            <>
                                <Col md={6} lg={6} sm={6} key={item.id} className="p-4">
                                    <h3>{item.question}</h3>
                                    <p>{item.tags.map((m:any) => {
                                        return m + ' '
                                    })}</p>
                                    <ExpandableText text={item.answer} maxChars={200}></ExpandableText>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}