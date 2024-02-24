import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import OrderPopUp from './components/OrderPopUp'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  let quantities = new Array(menuItems.length).fill(0);

  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(quantities);

  const updateSubtotal = (price) => {
    setSubtotal(Math.max(subtotal + price, 0));
  }

  const updateQuantity = (index, q) => {
    let newArr = [...quantity];
    newArr[index] = q;
    setQuantity(newArr); 
  }

  let rows = [];
  let counter = 0;

  const createAll = () => {
    rows = [];
    for(let i = 0; i < menuItems.length; i++) {
      rows.push(<MenuItem
        key={counter}
        title={menuItems[i].title}
        imageName={menuItems[i].imageName}
        description={menuItems[i].description}
        price={menuItems[i].price}
        updateQuantity={updateSubtotal} 
        updateArray={updateQuantity}
        index={i}
        currentAmount={quantity[i]}
        />);
        counter++;
    }
  }

  const clearAll = () => {
    setSubtotal(0);
    setQuantity(quantities);
  }

  createAll()

  return (
    <div>
      <div className="menu">
        <Container>
          <MenuHeader />
          {rows}
          <Row>
            <Col className='text-center'>
              Subtotal: ${subtotal.toFixed(2)}
            </Col>
            <Col className='text-center'>
              <OrderPopUp 
              quantities={quantity}
              menuItems={menuItems} ></OrderPopUp>
            </Col>
            <Col className='text-center'>
              <button className='button' onClick={clearAll}>Clear all</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;