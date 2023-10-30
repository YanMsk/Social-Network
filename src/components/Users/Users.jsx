import React from "react";
import s from './Users.module.css';
import { NavLink } from "react-router-dom";

let Users = (props) => {
	
	let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
	let pages = [];

	for(let i = 1; i <= pagesCount; i++){
		pages.push(i);
	
	}

	let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

	return (
		<div>
			<div className={s.pages}>
				{slicedPages.map( p => {
					return <span className={props.currentPage === p && s.selectedPage} 
					onClick={(event) => {props.onPageChanged(p)}}>{p}</span>
				})}
			</div>
			
			{
				props.users.map( u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
							<img src={u.photoURL} className={s.userPhoto} />
							</NavLink>
						</div>
						<div>
							{u.followed ? 
							<button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
							: <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
						</div>
					</span>

					<span>
							<span>
										<div>{u.name}</div>
										<div>{u.status}</div>
							</span>
							<span>
										<div>{'u.location.country'}</div>
										<div>{'u.location.city'}</div>
							</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;