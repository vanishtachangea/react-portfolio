import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profilePic from '../assets/profile2.png';
import Title from './Title';
// import Docs from '../components/Docs';
// import Header from './Header';

class App extends Component {
    state = { displayBio: false};

    toggleDisplay = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
               {/*  <Header/> */}
                <img src={profilePic} alt='profile' className='profile'/>
                <p>Ich bin Vanishta. Ich wohne in München</p>
                <Title/>
                <p>This is my REACT Portfolio</p>
                {
                    this.state.displayBio ? (<div>
                        <p>I plan to document my journey towards becoming a developer in React here.</p>
                        <p>I will tell about the courses which I have followed.</p>
                        <p>I will showcase live version of those projects in React and React Native which are worth showing. Else the others can stay in GitHub.</p>
                        <p>I will also try to write small articles or tips based on knowledge gathered on React and React Native.</p>
                        <p>Maybe I will later extend the small articles or tips on other IT areas too.</p>
                        <p><button onClick={this.toggleDisplay}>Show Less</button></p>
                    </div>) : (<div>
                        <button onClick={this.toggleDisplay}> Read More</button>
                    </div>)
                }
                <hr />
                <Projects/>
                <hr />
                <SocialProfiles/>
{/*                 <hr/>
                <Docs/> */}
               
            </div>

        )
    }
}
/* const AppWithHeader=()=>
{
    return(<Header Component={App}/>)
} */
export default App; 
