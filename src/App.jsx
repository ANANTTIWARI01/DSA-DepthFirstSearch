import { useState } from 'react';

function App() {
  const data = [
    {
      name: "India",
      children: [
        {
          name: "Rajasthan",
          children: [{ name: "Jaipur" }, { name: "Jodhpur" }],
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
      children: [{ name: "Cape Town" }, { name: "Durban" }],
    },
  ];
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };
                                                           
  const renderList = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            onChange={() => toggleExpand(item.name)}
            checked={expanded[item.name] || false}
          />
          {item.name}
          {item.children && expanded[item.name] && renderList(item.children)}
        </li>
      ))}
    </ul>
  );

  return <div>{renderList(data)}</div>;
}

export default App;