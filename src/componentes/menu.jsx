import React, { useState } from 'react';

export default function Menu() {
  
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  return (
    <div>
      <nav>
        <ul className="menu">
          <li className='menu-item'>
            <a href="" className='menu-item-select'>INICIO</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">CATEGORIAS</a>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="https://www.divinacocina.es/ensaladas-alinos/">ENSALADAS Y ALIÑOS</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/entrantes-tapas/">ENTRANTES Y TAPAS</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/masas-panes/">MASAS Y PANES</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/arroces-2/">ARROCES</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/pasta/">PASTAS</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/huevos/">HUEVOS</a>
              </li>
              <li className="menu-item">
                <a href="https://www.divinacocina.es/sopas-cremas/">SOPAS Y CREMAS</a>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="https://www.divinacocina.es/verduras/">VERDURAS</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="https://www.divinacocina.es/verduras/recetas-berenjenas/">RECETAS CON BERENJENAS</a></li>
                  <li className="menu-item"><a href="https://www.divinacocina.es/verduras/recetas-patatas/">RECETAS CON PATATAS</a></li>
                  <li className="menu-item"><a href="https://www.divinacocina.es/verduras/recetas-de-champinones/">RECETAS CON CHAMPIÑONES</a></li>
                </ul>
              </li>
              {/* Repetir el mismo patrón para las otras categorías */}
            </ul>
          </li>
          <li className="menu-item">
            <a href="https://www.divinacocina.es/recetas-en-freidora-de-aire/">RECETAS PARA FREIDORA DE AIRE</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">BLOG</a>
            <ul className="sub-menu">
              <li className="menu-item"><a href="https://www.divinacocina.es/blog/cuaderno-de-cocina/">CUADERNO DE COCINA</a></li>
              <li className="menu-item"><a href="https://www.divinacocina.es/blog/ideas-y-menus/">IDEAS Y MENÚS</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="https://www.divinacocina.es/videorecetas/">VíDEO RECETAS</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="https://www.divinacocina.es/recetas-de-temporada/">RECETAS DE TEMPORADA</a>
            <ul className="sub-menu">
              <li className="menu-item"><a href="https://www.divinacocina.es/recetas-de-temporada/recetas-de-semana-santa/">RECETAS DE SEMANA SANTA</a></li>
              {/* Más submenús */}
            </ul>
          </li>
        </ul>
      </nav>

      <div id="top-search" className="penci-top-search">
        <a href="#" className="search-click" aria-label="Search" onClick={toggleSearch}>
          <i className="penciicon-magnifiying-glass"></i>
        </a>
        {isSearchVisible && (
          <div className="show-search">
            <form role="search" method="get" className="pc-searchform" action="https://www.divinacocina.es/">
              <div className="pc-searchform-inner">
                <input type="text" className="search-input" placeholder="Teclea y pulsa enter..." name="s" />
                <button type="submit" className="searchsubmit">Buscar</button>
              </div>
            </form>
            <a href="#" aria-label="Search" className="search-click close-search" onClick={toggleSearch}>
              <i className="penciicon-close-button"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
