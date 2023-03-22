import './Services.scss';

function Services() {
  return (
    <section className="services">
      <div className="services__left-banner">
        <h3>
          Услуги
        </h3>
      </div>
      <div className="services__container">
        <div className="services__block">
          <div className="services__element services__element_webdev">
            <h2 className="services__title">Разработка веб-сайтов и приложений</h2>
            <ul className="services__list">
              <li className="services__list-item">Лендинги</li>
              <li className="services__list-item">Корпоративные сайты</li>
              <li className="services__list-item">Интернет-магазины</li>
              <li className="services__list-item">Сервисы</li>
            </ul>
            <div className="services__info">
              <button><a href="#!" className="services__button">Подробнее</a></button>
              <p className='services__text'>Нажмите на кнопку подробнее чтобы изучить наш стек технологий и принципы работы.</p>
            </div>
          </div>
          <div className="services__paragraph services__paragraph_webdev">Преимущественно работаем с 1C-BITRIX для чистой разработки и Tilda publishing для решения no-code задач</div>
        </div>
        <div className="services__block">
          <div className="services__paragraph services__paragraph_design">
            <p>
              У нас огромный опыт в разработке дизайна для цифровой сферы и не только, участвовали в крупных проектах <span>GameDev</span> индустрии, рисовали UI/UX дизайн для игр и <span>мобильных</span> приложений, нарисовали множество <span>артов </span> 
              и <span>портретов</span>, а также обложек для <span>музыкальных</span> коллективов
            </p>
          </div>
          <div className="services__element services__element_design">
            <h2 className="services__title">Цифровой Дизайн</h2>
            <ul className="services__list">
              <li className="services__list-item">UI/UX дизайн </li>
              <li className="services__list-item">Иллюстрации</li>
              <li className="services__list-item">Мультипликация</li>
              <li className="services__list-item">Обложки и постеры</li>
            </ul>
            <div className="services__info">
              <button className="services__button">Подробнее</button>
              <p className='services__text'>Нажмите на кнопку подробнее чтобы изучить наш стек технологий и принципы работы.</p>
            </div>
        </div>          
        </div>
        <div className="services__block">
            <div className="services__product services__product_analytic">
              <h2 className="services__subtitle">Аналитика</h2>
              <ul className="services__product-list">
                <li className="services__product-item">Анализ конкуренции</li>
                <li className="services__product-item">Продуктовый менеджемент</li>
                <li className="services__product-item">Исследование пользовательского опыта (UX)</li>
              </ul>
            </div>
            <div className="services__product services__product_marceting">
              <h2 className="services__subtitle">Маркетинг</h2>
              <ul className="services__product-list">
                <li className="services__product-item">Маркетинговая аналитика</li>
                <li className="services__product-item">Контекстная реклама (Яндекс директ и бизнес)</li>
                <li className="services__product-item">Базовое SEO ( Семантическое ядро и теги)</li>
              </ul>
            </div>
        <div className="services__paragraph services__paragraph_analytic">
          <p>
            Мы поддерживаем наших клиентов <span>от</span> начала и <span>до</span> конца. Разработаем грамотную <span>стратегию</span>, проведем аналитику продвижения на цифровом рынке, 
            <span> организуем</span> поддержку разработанного <span>нами</span> продукта.
          </p>
          <button className="services__button services__button_big">Все услуги</button>
        </div>
        </div>
      



      </div>
      <div className="services__right-banner"></div>
    </section>
  )
}

export default Services;