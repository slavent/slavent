/* Breadcrumbs react component */

import styles from "./breadcrumbs.scss"
import React from "react";

export default class Breadcrumbs extends React.Component {
	render() {
		let that = this;
		let breadcrumbs = this.props.breadcrumbs.map(function ( item, i ) {
			if ( i !== that.props.breadcrumbs.length - 1 ) {
				return (
					<span className="breadcrumbs__item" key={ item.id }>
						<a href={ item.hash }>{ item.title }</a>
						 <span className="breadcrumbs__arrow"></span>
					</span>
				);
			} else {
				return (
					<span className="breadcrumbs__item" key={ item.id }>
						<span>{ item.title }</span>
					</span>
				);
			}
		});

		return (
			<div className="breadcrumbs">{ breadcrumbs }</div>
		);
	}
}