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
                <h3>Used</h3>
                <ul>
                    <li>components</li>
                    <li>Props</li>
                    <li>State</li>
                    <li>Router - BrowserRouter</li>
                    <li>Header Component - Props.Children</li>
                    <li>Fetch - API</li>
                </ul>
                <hr />
                <h2>Resources</h2>
                <p><a href="https://reacttraining.com/react-router/web/example/basic" target="_blank">https://reacttraining.com/react-router/web/example/basic</a> </p>
                <p><a href="<https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper" target="_blank">https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper</a> </p>

                <img src={url} alt={title} />
            </div>
        </div>)

    }
}
export default Docs;