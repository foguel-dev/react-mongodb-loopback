//import React from 'react';
//import './index.css';


import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as  HelpICon } from './icons/information.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as AccountIcon } from './icons/account.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.scss';
import Container from './components/Container'


function App() {
  return ( 
    

  <div className="App">
      <Navbar>
      <NavItem icon={<HelpICon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    <Container />
  </div>
  
 
  );
}


function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Cuenta</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<CogIcon />}
            goToMenu="settings">
            Configuracion
          </DropdownItem>


        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2></h2>
          </DropdownItem>
          <DropdownItem leftIcon={<AccountIcon />}>Cuenta</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>General</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Tema</DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}





export default App;
