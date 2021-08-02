import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['DragonBall']);

  return (
    <div className="wrapper">
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol className="content-grid">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
