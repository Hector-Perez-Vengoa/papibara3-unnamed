import React, { useState, useEffect } from "react";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      if (!response.ok) {
        throw new Error('Error al obtener API');
      }
      const data = await response.json();
      setItems(data.message);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items Page</h1>
      <p>This is the items page where you can view all items.</p>
      <ul>
        {Object.keys(items).map((breed) => (
          <li key={breed}>
            {breed} - {items[breed].length > 0 ? items[breed].join(', ') : 'No sub-breeds'}
            <img src={`https://dog.ceo/api/breed/${breed}/images/random`} alt={breed} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Items;
