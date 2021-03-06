import './App.css';
import Home from './component/Home/Home.js';
import Contact from './component/Contact/Contact.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Profile from './component/Profile/Profile';
import DeshBoard from './component/deshBoard/DeshBoard';

function App() {
	return (
		<div className='App'>
			<NavbarTwo></NavbarTwo>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/deshBoard/:id' element={<DeshBoard />} />
				{/* <Route path='/blog/:id' element={<About />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
