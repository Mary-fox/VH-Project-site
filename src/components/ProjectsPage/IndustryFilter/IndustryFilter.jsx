import './IndustryFilter.scss';
import React, { useState } from 'react';


  function  IndustryFilter ({  data }) {
    const [selectedIndustry, setSelectedIndustry] = useState('');

    const handleChange = (event) => {
      setSelectedIndustry(event.target.value);
    }
  
    // const filteredData = selectedIndustry ? data.filter(item => item.industry === selectedIndustry) : data;
    return (
      <div>
        <select className='filter__block' value={selectedIndustry} onChange={handleChange}>
          <option value="">Отрасли</option>
          <option value="IT">IT</option>
          <option value="финансы">Финансы</option>
          <option value="медицина">Медицина</option>
        </select>
        {/* <ul>
          {filteredData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    );
  }
export default IndustryFilter;