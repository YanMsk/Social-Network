import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



// const DialogsContainer = () =>{
 
// 	return(
// 		<StoreContext.Consumer>
// 			{
// 			(store) =>{
// 				let state = store.getState().dialogsPage;

// 				let onNewMessageChange = (body) => {
// 					store.dispatch(updateNewMessageBodyCreator(body));
// 				}
// 				let onSendMessageClick = () => {
// 					store.dispatch(sendMessageCreator())
// 				}

// 					return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
// 			}
// 	}
// 	</StoreContext.Consumer>
// 	);
// }

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,

	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
				dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
				dispatch(sendMessageCreator());
		},
}
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;



 