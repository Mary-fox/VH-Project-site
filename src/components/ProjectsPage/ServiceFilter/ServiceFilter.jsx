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
        <option value="сайты">сайты</option>
        <option value="промо-сайты">промо-сайты</option>
        <option value="no-code">no-code</option>
        <option value="дизайн">дизайн</option>
        <option value="ux/ui дизайн">ux/ui дизайн</option>
        <option value="3d-визуализация">3d-визуализация</option>
        <option value="key visual">key visual</option>
        <option value="графический дизайн">графический дизайн</option>
        <option value="seo-продвижение">seo-продвижение</option>
        <option value="каталоги и витрины">каталоги и витрины</option>
        <option value="сервисы">сервисы</option>
        <option value="корпоративные сайты">корпоративные сайты</option>
        <option value="ux-аналитика">ux-аналитика</option>
        <option value="техническая поддержка">техническая поддержка</option>
        <option value="контент-поддержка">контент-поддержка</option>
        <option value="3d">3d</option>
        <option value="автоматизация">автоматизация</option>
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