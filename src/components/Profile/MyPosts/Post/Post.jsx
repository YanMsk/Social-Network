import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
	
  return (
		
			<div className={s.item}>
			<div className={s.photo}></div>
			{props.message}
			
				<div>
				{props.likesCount} <span>Like</span>
				</div>
			</div>

  );
}

export default Post;