/** @format */

import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const allCategories = items.map((item)=> item.category)
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
    console.log(category);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        {/*navbar*/}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
