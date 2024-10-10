import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/style.css'

import Main from './main'
import Category from './Category'
import Recipe from './Recipe'


function App() {
	return (
		<Router>
			<div className='main'>
				<div className='button-nav'>
					<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/'}>Главное меню</NavLink></button>
				</div>
				<Routes>
					<Route path="/category/:category" element={<Category />} />
					<Route path="/categoryType/:category" element={<Category />} />
					<Route path="/recipes/:id" element={<Recipe />} />
					<Route path="/" element={<Main />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;