import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/items');
      const data = await response.json(); // Fixed typo: changed 'jason' to 'json'
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const addItem = async () => {
    if (!name) return;

    const item = {
      name,
    };

    try {
      const response = await fetch('http://localhost:8080/api/items', {
        method: 'POST', // Fixed misplaced parentheses
        headers: {
          'Content-Type': 'application/json', // Fixed typo: changed 'jason' to 'json'
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        setMessage('Item added successfully!');
        setName('');
        fetchItems();
      } else {
        setMessage('Failed to add item.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      setMessage('Failed to add item.');
    }
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <input
        type="text" // Fixed typo: changed "type" to "text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
      />
      <button onClick={addItem}>Add Item</button>
      {message && <p>{message}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li> // Fixed misplaced curly braces
        ))}
      </ul>
    </div>
  );
}

export default App;
