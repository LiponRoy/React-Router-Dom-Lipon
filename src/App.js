import './App.css';
import Home from './component/Home/Home.js';
import Contact from './component/Contact/Contact.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				{/* <Route path='/blog/:id' element={<About />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
