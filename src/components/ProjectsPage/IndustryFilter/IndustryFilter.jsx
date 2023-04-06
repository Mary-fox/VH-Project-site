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
        <select   className='filter__block' value={selectedIndustry} onChange={handleChange}>
          <option value="">Отрасли</option>
          <option value="промышленность">промышленность</option>
          <option value="металлургия">металлургия</option>
          <option value="строительство">строительство и недвижимость</option>
          <option value="транспорт">транспорт и логистика</option>
          <option value="авто">авто / мото</option>
          <option value="некоммерческие">некоммерческие и госорганизации</option>
          <option value="образование">образование</option>
          <option value="красота">красота и здоровье</option>
          <option value="event">event и развлечения</option>
          <option value="культура">культура и туризм</option>
          <option value="it">it</option>
          <option value="финансы">финансы и страхование</option>
          <option value="retail">retail</option>
          <option value="оборудование">оборудование</option>
          <option value="медиа">медиа</option>
          <option value="авиа">авиа</option>
          <option value="консалтинг">консальтинг</option>
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