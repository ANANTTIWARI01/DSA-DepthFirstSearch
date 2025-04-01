import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const countries = [
    {
      name: "India",
      children: [
        {
          name: "Rajasthan",
          children: [
            { name: "Jaipur" },
            { name: "Jodhpur" }
          ],
        },
        {
          name: "MP",
          children: [
            { name: "Bhopal" },
            { name: "Ujjain" },
            { name: "Indore" },
          ],
        },
        {
          name: "UP",
          children: [
            { name: "Prayagraj" },
            { name: "Lucknow" },
            { name: "Kanpur" },
            { name: "Mirzapur" },
          ],
        },
      ],
    },
    {
      name: "Australia",
      children: [
        { name: "Western Australia" },
        { name: "Queensland" },
        { name: "New South Wales" },
        { name: "Victoria" },
      ],
    },
    {
      name: "South Africa",
      children: [
        { name: "Cape Town" },
        { name: "Durban" }
      ],
    },
  ];

  useEffect(() => {
    setItems(countries); 
  }, []);

  function depthFirstSearch(data) {
    return data.map((item, index) => (
      <li key={index}>
        <input type="checkbox"  />{item.name}
        {item.children && <ul>{depthFirstSearch(item.children)}</ul>} 
      </li>
    ));
  }

  return (
    <div>
      <ul>
        {depthFirstSearch(items)} 
      </ul>
    </div>
  );
}

export default App;