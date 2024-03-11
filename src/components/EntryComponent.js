import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/';

function EntryComponent({ entryName }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(entryName)
    axios.get(baseURL + entryName)
        .then((response) => {
            setPost(response.data.data);
        })
        .catch (error => {
            setPost(null);
    });
  }, [entryName]);

  let isPostNull = (post === null)
  let isEmptyName = (entryName === "")

  return (
    <div>
      <div className="this-app">
        <Container>
            {
                (isEmptyName) ? (
                    <div>
                        <Row className='margin-row'>
                            Enter an input above to get started!
                        </Row>
                    </div>
                ) : 
                (!isPostNull) ? (
                    <div>
                        <Row className='margin-row'>
                            <Col>
                            <h3>{post.name}</h3>
                            </Col>
                        </Row>
                        <Row className='margin-row'>
                            <Col>
                            {post.description}
                            </Col>
                        </Row>
                        <Row className='margin-row'>
                            <Col>
                            <img src={post.image} alt="post.name" />
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <div>
                        <Row className='margin-row'>
                            Invalid input
                        </Row>
                    </div>
                )
            }
        </Container>
      </div>
    </div>
  );
}

export default EntryComponent;