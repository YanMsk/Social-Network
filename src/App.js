import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) =>{

  return (
 
    <div className="app-wrapper">
		 		<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
					<Route path='/profile/*' component={Profile} element={<Profile /> } />
					<Route path='/dialogs/*' component={Dialogs} element={<DialogsContainer />}/>
					<Route path='/users/*' component={Users} element={<UsersContainer />}/>

					</Routes>
				</div>
		</div>
 
  );
}

export default App;
