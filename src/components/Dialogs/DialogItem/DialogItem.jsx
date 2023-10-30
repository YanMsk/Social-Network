import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) =>{
let path = '/dialog/' + props.id;
return (
<NavLink to={path} className={s.dialog}>{props.name}</NavLink>
);
}


export default DialogItem;