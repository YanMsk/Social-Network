import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.svg'
import profileFoto from '../../img/xGyhefDdN08.jpg'
import notifications from '../../img/notifications.svg'

const Header = () =>{
  return (
				<header className={s.header}>

					<div>
					<img src={logo} alt="" />
					</div>

					<div className={s.links}>
					<div>
					<img src={notifications} alt="" />
					</div>
					<div>
					<img className={s.photo} src={profileFoto} alt="" />
					</div>
					</div>
					
				</header>		
  );
}

export default Header;