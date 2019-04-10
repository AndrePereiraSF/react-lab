import React from 'react';
import './Header.css';

// This Header will appears in all pages.
const Header = () => (
	<header id="main-header">
		<ul id="logo">
			<h4 id="stalebu">React Lab</h4>
		</ul>
		<ul>
			<li>Inicio</li>
			<li>Contato</li>
			<li>Sobre</li>
		</ul>
	</header>
);

export default Header;