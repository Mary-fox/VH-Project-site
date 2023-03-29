import React, { useState } from 'react';


function WebsiteTypeFilter({ data }) {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  }

  // const filteredData = selectedType ? data.filter(item => item.type === selectedType) : data;

  return (
    <div>
      <select  className='filter__block' value={selectedType} onChange={handleChange}>
        <option value="">Тип сайтов</option>
        <option value="блог">Блог</option>
        <option value="онлайн-магазин">Онлайн-магазин</option>
        <option value="корпоративный">Корпоративный</option>
      </select>
      {/* <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default WebsiteTypeFilter;