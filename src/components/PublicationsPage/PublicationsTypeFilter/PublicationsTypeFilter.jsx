import React, { useState } from 'react';
import './PublicationsTypeFilter.scss';


function PublicationsTypeFilter({ publication }) {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  }

  // const filteredPublication = selectedType ? publication.filter(item => item.type === selectedType) : publication;

  return (
    <div>
      <select  className='publications__filtres' value={selectedType} onChange={handleChange}>
        <option value="">Тип публикации</option>
        <option value="Вариант 1">Вариант 1</option>
        <option value="Вариант 2">Вариант 2</option>
        <option value="Вариант 3">Вариант 3</option>
      </select>
      {/* <ul>
        {filteredPublication.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default PublicationsTypeFilter;