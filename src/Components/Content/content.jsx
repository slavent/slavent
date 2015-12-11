/* Content react component */

import styles from "./content.scss";
import React from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs.jsx";


export default class Content extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			breadcrumbs: [
				{
					id: 0,
					hash: "/",
					title: "Home"
				},
				{
					id: 1,
					hash: "collections",
					title: "Collections"
				}
			]
		};
	}

	render() {
		return (
			<main className="content">
				<div className="content__header">
					<div className="wrp">
						<h1 className="title">{ this.props.title }</h1>
						<Breadcrumbs breadcrumbs={ this.state.breadcrumbs } />
					</div>
				</div>
			</main>
		);
	}
}