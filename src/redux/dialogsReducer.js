const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
 }
const dialogsReducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
	
		case SEND_MESSAGE:
				let body = state.newMessageBody;
				return {
					...state,
					newMessageBody: '',
					messages: [...state.messages, {id: 7, message: body} ]
				};
	
		default:
				return state;
			
	}
 
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;