import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () => {
	return (
			<header className="header">
				<div className="container-fluid">
					<div className="row header-row">
                        <Logo/>
                        <Menu/>
					</div>
				</div>
    		</header>
	)
}

export default Header