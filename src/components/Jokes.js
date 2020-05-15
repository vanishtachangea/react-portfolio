import React, {Component} from 'react';
// import Header from '../components/Header';
class Jokes extends Component{
    state={joke:{}};

    componentDidMount(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=GSdgcdkPaBA5Pj1SWDqoXEVzERt69FvEalMClAqe').then(
            response => response.json())
            .then(json =>this.setState({joke:json}))
            .catch(error => alert(error.message));
     
    }
    render(){
        const{title, explanation, url} = this.state.joke;
        return(<div>
            {/* <Header/> */}
            <h2>Highlighted Picture from Nasa</h2>
            <h3>{title}</h3>
            <p>{explanation}</p>
            <img src={url} alt={title}/>
            </div>)
    }
}
export default Jokes;