import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import CategoryComponent from './components/CategoryComponent';
import SearchBar from './components/SearchBar';
import EntryComponent from './components/EntryComponent';

function App() {

  const data = [
    {
      key: "creatures",
      value: "Creatures",
    },
    {
      key: "equipment",
      value: "Equipment",
    },
    {
      key: "materials",
      value: "Materials",
    },
    {
      key: "monsters",
      value: "Monsters",
    },
    {
      key: "treasure",
      value: "Treasure",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('materials');
  const [selectedEntry, setSelectedEntry] = useState('');

  const clickCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="this-app">
        <Container>
          <Row className='margin-row'>
            <Col>
              <h1>Legend of Zelda: Breath of the Wild</h1>
              Click on a button to list the entries in each category!
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="button margin-button" onClick={() => clickCategory('creatures')}>Creatures</button>
              <button className="button margin-button" onClick={() => clickCategory('equipment')}>Equipment</button>
              <button className="button margin-button" onClick={() => clickCategory('materials')}>Materials</button>
              <button className="button margin-button" onClick={() => clickCategory('monsters')}>Monsters</button>
              <button className="button margin-button" onClick={() => clickCategory('treasure')}>Treasure</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <CategoryComponent categoryName={selectedCategory}></CategoryComponent>
            </Col>
          </Row>
          <Row className='margin-row'>
            <Col>
            You can also search for an individual entry here:
            </Col>
          </Row>
          <Row className='margin-row'>
            <Col>
              <SearchBar submitText={setSelectedEntry}></SearchBar>
            </Col>
          </Row>
          <Row>
            <Col>
              <EntryComponent entryName={selectedEntry}></EntryComponent>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;

// https://www.freecodecamp.org/news/how-to-use-axios-with-react/
// https://www.w3schools.com/tags/tag_input.asp