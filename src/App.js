import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import Item from './components/Item';
import { foodList } from './data';
import { useState } from 'react';
function App() {
  const [items, setitems] = useState(foodList);

  const categoryList = [
    'الكل',
    ...new Set(foodList.map((foodList) => foodList.category)),
  ];

  const filterFoodList = (cat) => {
    if (cat === 'الكل') {
      setitems(foodList);
    } else {
      const newFoodList = foodList.filter((item) => item.category === cat);
      setitems(newFoodList);
    }
  };

  // search filter
  const filterBySearch = (word) => {
    if (word !== '') {
      const newArr = foodList.filter((item) => item.title === word);
      setitems(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container className="">
        <Header />
        <Category filterFoodList={filterFoodList} categoryList={categoryList} />
        <Item items={items} />
      </Container>
    </div>
  );
}

export default App;
