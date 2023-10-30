import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

 
const MyPosts = (props) =>{


	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
	
	let newPostElement = React.createRef();

  let onAddPost = () => { 
		  props.addPost();
	 
	};


	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
 
		 
	}
	return (
		<div className={s.myPosts}>
			<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Enter your post'/> 
			<button  className={s.btn } onClick={onAddPost}>add post</button>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>

  );
}

export default MyPosts;