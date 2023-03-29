import './ServiceFilter.scss';
import React, { useState } from 'react';


function ServiceFilter({ data }) {
  const [selectedService, setSelectedService] = useState('');

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  }

  // const filteredData = selectedService ? data.filter(item => item.service === selectedService) : data;

  return (
    <div>
      <select className='filter__block' value={selectedService} onChange={handleChange}>
        <option value="">Услуги</option>
        <option value="разработка сайтов">Разработка сайтов</option>
        <option value="SEO-оптимизация">SEO-оптимизация</option>
        <option value="контекстная реклама">Контекстная реклама</option>
      </select>
      {/* <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default ServiceFilter;