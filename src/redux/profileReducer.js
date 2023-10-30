const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
	
	posts:[
		{id: 1, message: 'Hey man, how are u?', likesCount: 0},
		{id: 2, message: 'Fuck you, you fucking motherless stupid bitch!! Dont ignore me!', likesCount: 665},
	],
	newPostText:'',
}

const profileReducer = (state = initialState, action) => {
switch(action.type){
	case ADD_POST:
			let newPost = {
					id:3,
					message: state.newPostText,
					likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};

	case UPDATE_NEW_POST_TEXT:

		return {
			...state,
			newPostText: action.newPostText,
		};

	default:
			return state;
		
}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})


export default profileReducer;