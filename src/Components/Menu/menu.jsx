/* Menu react component */

import styles from "./menu.scss";
import React from "react";
import {Link} from "react-router";
import $ from "jquery";
import Search from "../Search/search.jsx";

export default class Menu extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		var that = this;

		$.ajax({
			type: "GET",
			url: "http://slavent-api/api/nav",
			success ( data ) {
				that.setState({ data: data });
			}
		});
	}

	render() {
		let menuItems = this.state.data.map(function (item) {
			return (
				<li key={ item.id }>
					<Link to={ item.hash }>{ item.title }<div></div></Link>
				</li>
			);
		});

		return (
			<nav>
				<div className="wrp">
					<ul>{ menuItems }</ul>
					<Search/>
				</div>
			</nav>
		);
	}
}