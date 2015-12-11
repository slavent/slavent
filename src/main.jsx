/* Router component */

import React from "react"
import { render } from "react-dom"
import { Router, Route, Link } from "react-router"
import { createHistory, useBasename } from "history"
import App from "./Pages/App.jsx"
import Collections from "./Pages/Collections.jsx"
import Shop from "./Pages/Shop.jsx"
import Lookbook from "./Pages/Lookbook.jsx"
import Blog from "./Pages/Blog.jsx"
import Pages from "./Pages/Pages.jsx"
import Contacts from "./Pages/Contacts.jsx"

const history = useBasename( createHistory ) ({ basename: "/" })

render((
	<Router history={ history }>
		<Route path="/" component={ App } >
			<Route path="/collections" component={ Collections } />
			<Route path="/shop" component={ Shop } />
			<Route path="/lookbook" component={ Lookbook } />
			<Route path="/blog" component={ Blog } />
			<Route path="/pages" component={ Pages } />
			<Route path="/contacts" component={ Contacts } />
		</Route>
	</Router>
), document.getElementById("app"))