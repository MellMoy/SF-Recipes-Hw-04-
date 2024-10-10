import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import axios from 'axios';



function Main() {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className='kat'>Выберите категорию</h1>
      <div className="button">
        {categories.map((category) => (
          <Link key={category.categoryType} to={`/category/${category.categoryType}`}>
            {category.categoryType}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Main;