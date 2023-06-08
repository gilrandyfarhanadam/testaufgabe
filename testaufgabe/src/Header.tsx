import './css/App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function buttonBuilder(text:string, variant:string) {
    return (
        <div className="d-grid gap-4">
            <Button variant={variant} className='p-4'>
                {text}
            </Button>
        </div>
    )
}

function Header() {
    return (
        <> 
                <Row>
                    <h1>Frequent Questions</h1>
                    <p>Simple answers to your common questions</p>    
                </Row>
                <Row>
                    <Col>
                        {buttonBuilder("Getting started guide", "success")}
                    </Col>
                    <Col>
                        <Link to="/add">{buttonBuilder("Post new Question", "primary")}</Link>
                    </Col>
                </Row>
        </>
    )
}

export default Header