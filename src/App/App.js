import React from 'react'

import "../common/style/reset.css"
import "../common/style/grid.css"
import "../common/style/style.css"
import "../common/style/images"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
	return (
		<>
			<Header/>	
			<Main/>
			<Footer/>
		</>
	)	
} 

export default App