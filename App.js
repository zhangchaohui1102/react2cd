import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from './pages/Header';
import routes from './router.config';

function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo') ? <Com {...rest}/> : (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} } 
						/>
					)
			}
		/>
	);
}
function RouteWithSubRoutes(route) {
	if(route.pri){
		return <PrivateRoute 
				path={route.path} 
				compeonent={route.component} 
				routes={route.routes}
		/>	 
	}
	return (
		<Route
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
		/>
	);
}
	

const App = () => {
	return <Router>
		<Header />
		<Switch>
			{
				routes.map(({pri,...rest})=>{
					if(pri){
						return <PrivateRoute {...rest} />
					}
					return <Route {...rest} />
				})
			}
		</Switch>
	</Router>
}

export default App;
export {RouteWithSubRoutes};


// function RouteWithSubRoutes(route) {
// 	return (
// 	  <Route
// 		path={route.path}
// 		render={props => (
// 		  <route.component {...props} routes={route.routes} />
// 		)}
// 	  />
// 	);
//   }


// const App = React.createClass({
// 	render() {
// 	  return (
// 		<div>
// 		  <h1>App</h1>
// 		  <ul>
// 			<li><Link to="/about">About</Link></li>
// 			<li><Link to="/inbox">Inbox</Link></li>
// 		  </ul>
// 		  {this.props.children}
// 		</div>
// 	  )
// 	}
//   })
  
//   const About = React.createClass({
// 	render() {
// 	  return <h3>About</h3>
// 	}
//   })
  
//   const Inbox = React.createClass({
// 	render() {
// 	  return (
// 		<div>
// 		  <h2>Inbox</h2>
// 		  {this.props.children || "Welcome to your Inbox"}
// 		</div>
// 	  )
// 	}
//   })
  
//   const Message = React.createClass({
// 	render() {
// 	  return <h3>Message {this.props.params.id}</h3>
// 	}
//   })
  
//   render((
// 	<Router>
// 	  <Route path="/" component={App}>
// 		<Route path="about" component={About} />
// 		<Route path="inbox" component={Inbox}>
// 		  <Route path="messages/:id" component={Message} />
// 		</Route>
// 	  </Route>
// 	</Router>
//   ), document.body)





// home组件这种配置方式会在
// Home组件的props内注入四个属性
// <Route exact path='/' component={ Home } />
// <PrivateRoute path='/doc' component={ Doc } /> 
// <Route path='/doc/:id' component={ Doc } /> 
// <PrivateRoute path='/tuto' component={ Tuto } />
// <PrivateRoute path='/blog' component={ Blog } />
// <Route path='/comm' component={ Comm } />
// <Route path='/login' component={ Login } /> 
// no-match 
// <Route component={()=><div>404</div>} /> 
// <Route path='*' component={ () => <div>404</div> } />