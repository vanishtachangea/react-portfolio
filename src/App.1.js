import React, { Component } from 'react';
/* 
class RegularClass { }
class ComponentClass extends Component { }
const regularClass = new RegularClass();
const componentClass = new ComponentClass();
console.log('regular', regularClass);
console.log('component', componentClass); */


class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };

        console.log('component', this);
        /*         this.readMore =() =>
                {
                    console.log('readMore',this);
                     this.setState({displayBio: true});
                } */
        //this.readMore=this.readMore.bind(this);
        //this.showLess=this.showLess.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    /*     readMore()
        {
            console.log('readMore',this);
            this.setState({displayBio: true});
        }
        showLess()
        {
            this.setState({displayBio:false});
        } */
    toggleDisplay() {
        this.setState({ displayBio: !this.state.displayBio });
        //this.state.displayBio = !this.state.displayBio;
    }
    render() {
        /*         const bio=this.state.displayBio?(<div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden</p>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the</p>
                    <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,</p>
                </div>):null; */

        /*         if(!this.state.displayBio)
                bio=null; */
        return (
            <div>
                <h1>Hello</h1>
                <p>My name is Vanishta. I am Software Developer, currently residing in Munich</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</p>
                {
                    this.state.displayBio ? (<div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden</p>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the</p>
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,</p>
                        <p><button onClick={this.toggleDisplay}>Show Less</button></p>
                    </div>) : (<div>
                        <button onClick={this.toggleDisplay}> Read More</button>
                    </div>)
                }
            </div>
        )
    }
}
export default App;
