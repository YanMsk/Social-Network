import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
	 
	componentDidMount(){
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
						this.props.toggleIsFetching(false);
						this.props.setUsers(response.data.items);
						this.props.setTotalUsersCount(response.data.totalCount);
	
					})
			
	}
	
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
						this.props.toggleIsFetching(false);
						this.props.setUsers(response.data.items);
					})
	}
	
	render(){
		 return (
		 <>
		 {this.props.isFetching ? <Preloader/> : null}
		 <Users currentPage={this.props.currentPage}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			onPageChanged={this.onPageChanged}
      /></>
		 )
		 
	}
	}

	
let mapStateToProps = (state)=> {
	return {
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage,
			isFetching: state.usersPage.isFetching,
	}
}

// let mapDispatchToProps = (dispatch)=> {
// 	return {
// 			// follow: (userId) => {
// 			// 	dispatch(followAC(userId))
// 			// },

// 			follow: followAC,

// 			unfollow: unfollowAC,

// 			setUsers: setUsersAC,

// 			setCurrentPage: setCurrentPageAC,

// 			setTotalUsersCount: setTotalUsersCountAC,

// 			toggleIsFetching: toggleIsFetchingAC,
// 	}
// }
export default  connect(mapStateToProps,{	
	follow,
	unfollow,
	setUsers,
  setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	})(UsersContainer);