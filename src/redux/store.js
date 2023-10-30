import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
 _state: {
		profilePage:{
			posts:[
				{id: 1, message: 'Hey man, how are u?', likesCount: 0},
				{id: 2, message: 'Fuck you, you fucking motherless stupid bitch!! Dont ignore me!', likesCount: 665},
			],
			newPostText:'',
		},
		 dialogsPage:{
			messages: [
				{id: 1, message: 'blyat'},
				{id: 2, message: 'i wanna feel your penis in my hand'},
				{id: 3, message: 'xoxo'},
				{id: 4, message: 'this guy is genius'},
				{id: 5, message: ':7'},
				{id: 6, message: 'fuck you the fucking fuck'},
			],
			dialogs:[
				{id: 1, name: 'Anthony'},
				{id: 2, name: 'Vladislave'},
				{id: 3, name: 'Romeo'},
				{id: 4, name: 'Bombino'},
				{id: 5, name: 'Curva'},
				{id: 6, name: 'Eblanio'},
			],
			newMessageBody: '',
		 },
		 sidebar:{}
		 
	},
	_callSubscriber(){},

	getState(){
	return this._state;
	},
	subscribe(observer){
		this._callSubscriber = observer;
},

	addPost(){
		let newPost = {
			id:3,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		}
	
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newPostText){

		this._state.profilePage.newPostText = newPostText;
		this._callSubscriber(this._state);
	},

	dispatch(action){ //{type: 'ADD-POST'}

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sideBar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	
	}

}


export default store;