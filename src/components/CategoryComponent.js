import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';

const categories = ['creatures', 'equipment', 'materials', 'monsters', 'treasure']

function CategoryComponent({ categoryName }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if(categories.includes(categoryName)) {
        axios.get(baseURL + categoryName).then((response) => {
        setPost(response.data.data);
        });
    } else {
        setPost([]);
    }
  }, [categoryName]);

  if (!post) return null;

  return (
    <div>
      <div className="this-app">
        <Container>
            <h3>{categoryName}</h3>
          <ul>
            {post.map((item) => (
              <li key={item.id}>{item.name}</li>
          ))}
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default CategoryComponent;