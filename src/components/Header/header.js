import React from 'react';
import logo from './Icones/icone_twitch.svg';
import search from './Icones/search.svg';
import menuIco from './Icones/menu_ico.svg';
import './header.scss';

const Header = () => {

   return (
      <div>
         <nav className="headerTop">
            <ul className="listeMenu">
               <li className="liensNav">
                  <img src={logo} alt="logo twitch" className="logo"/>
               </li>
               <li className="liensNav">
                  Top Games
               </li>
               <li className="liensNav">
                  Top streams
               </li>
               <li className="liensNav">
                  <form className="formSubmit">
                     <input type="text" className="inputRecherche"/>
                     <button type="submit">
                        <img src={search} alt="icone loupe" className="logoLoupe"/>
                     </button>
                  </form>
               </li>
            </ul>
         </nav>
         <div className="menuResBtn">
            <img src={menuIco} alt="icone menu responsive" className="menuIco"/>
         </div>
      </div>
   )
}

export default Header;