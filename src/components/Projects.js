import React, { Component } from 'react';
import PROJECTS from '../data/projects';
const Project = (props) => {

    //console.log('this.proprs', props);
    const { id, title, description, link, image } = props.project;
    return (
        // <div>{this.props.project.title}</div>
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 100 }} />
            
            <a href={link} target="_blank"><p>{description}</p></a>
            
        </div>
    )

}

const Projects = () => (
    <div>
        <h2>Highlighed Projects </h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                )
                )
            }
        </div>
    </div>
)


export default Projects;