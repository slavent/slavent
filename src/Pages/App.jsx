/* App component */

import styles from "./app.scss"
import React from "react"
import Menu from "../Components/Menu/menu.jsx"
import Content from "../Components/Content/content.jsx"

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Menu/>
				{ this.props.children }
			</div>
		)
	}
}