import React, { Component } from 'react';
// import Header from '../components/Header';

class Docs extends Component {
    state = { doc: {} };

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=GSdgcdkPaBA5Pj1SWDqoXEVzERt69FvEalMClAqe').then(
            response => response.json())
            .then(json => this.setState({ doc: json }))
            .catch(error => alert(error.message));

    }
    render() {
        const { title, explanation, url } = this.state.doc;
        return (<div>
            {/* <Header/> */}
            <h2>Concepts Learned</h2>
            <div className='docs'>
                <h3>React</h3>
                <ul>
                    <li>components</li>
                    <li>Props</li>
                    <li>State</li>
                    <li>Router - BrowserRouter</li>
                    <li>Header Component - Props.Children</li>
                    <li>Fetch - API</li>
					<li>React Developer Tool</li>
					
                </ul>
                <h3>Redux</h3>
                <ul>
                    <li>Store</li>
                    <li>Reducer</li>
                    <li>Action</li>
                    <li>Component</li>
					<li>Provider</li>
					<li>Redux Middleware - Thunk</li>
					<li>Split and Combine Reducers</li>
                </ul>
				<h3>Others</h3>
				<ul>
				<li>Javascript Spread Operator</li>
				</ul>
                <hr />
                <h2>Resources</h2>
                <p><a href="https://reacttraining.com/react-router/web/example/basic" target="_blank">https://reacttraining.com/react-router/web/example/basic</a> </p>
                <p><a href="https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper" target="_blank">https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper</a> </p>
                <p><a href="https://redux.js.org/introduction/getting-started" target="_blank">https://redux.js.org/introduction/getting-started</a> </p>
                <img src={url} alt={title} />
            </div>
        </div>)

    }
}
export default Docs;