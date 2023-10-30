import React from 'react';
import preloader from '../../../img/loader.svg'
import s from './Preloader.module.css'

let Preloader = () => {
	return (
		<div className={s.preloader}>
		<img src={preloader}/>
		</div>
	)
}

export default Preloader;