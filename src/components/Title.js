import React, { Component } from 'react';
const url ='https://www.womentech.net/women-tech-conference?join=MTM1Mw==';
const TITLES = [
    'I am A FullStack Software Developer',
    'I have previously been Project Manager for 5 years',
    'Since 2019, I took a full dive back into coding',
    'I am an Aspiring Solution Architect and DevOps Engineer, ultimately an expert of experts and leader in this industry',
/*     'I am a Nature and Forest Lover',
    'I am Gym Lover',
    'I am DIY Hobbyist',
    'I am Gardening Hobbyist',
    'One day I want to have enough power to change how things work in this world',
    'I want to give some people the push and help they need to reach and exceed their potential', */
    'I believe in KISS - Keep It Short and Simple',
    'I am a Global Ambassador on WomentechNetwork. I personally invite you to join our conference and network by clicking here' 
  
]
class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };
    componentDidMount() {
        //console.log('Title Component has mounted');
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }
    componentWillUnmount() {
        //console.log('Title component will unmount');
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            //const fadeIn = true;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 2000);
        }, 4000);
        //console.log(this.titleInterval);
    }
    render() {

        const { titleIndex, fadeIn } = this.state;
        const title = TITLES[titleIndex];// const title = TITLES[this.state.titleIndex];
        
            if(titleIndex == TITLES.length-1)
            {
                return (<p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}><a target="_blank" href={url}>{title}</a></p>)
            }
			
            else
            {
                return (<p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>)
            }
            
        
    }

}
export default Title;