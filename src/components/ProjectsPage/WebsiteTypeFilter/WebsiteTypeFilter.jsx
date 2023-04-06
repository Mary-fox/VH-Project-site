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
        <option value="e-commerce">e-commerce</option>
        <option value="продуктовый">продуктовые сайты</option>
        <option value="корпоративный">корпоративный сайт</option>
        <option value="лендинги">лендинги</option>
        <option value="сайт">сайт</option>
        <option value="каталог">каталог и витрина</option>
        <option value="система">система сайтов</option>
        <option value="портал">портал</option>
        <option value="промо-сайт">промо-сайт</option>
        <option value="сервис">сервис</option>
        <option value="crm">crm</option>

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