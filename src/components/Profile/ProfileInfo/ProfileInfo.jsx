import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../img/xGyhefDdN08.jpg'


const ProfileInfo = () =>{
  return (
		
				<div className={s.info}>
				<div className={s.photoContainer}>
					<img className={s.photo} src={userPhoto}></img>
				</div>
				<div className={s.description}>
					<div className={s.name}>Masko Yan</div>
					<div>Age: 21 y.o.</div>
					<div>Education: Vitebsk State University</div>
					<div>Family status: solo</div>
					<div></div>
				</div>
				</div>

);
}

export default ProfileInfo;