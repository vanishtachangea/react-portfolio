import React, { Component } from 'react';
import {connect} from 'react-redux';
import {expandInstructions,collapseInstructions} from '../actions/settings';
const Instructions = props =>{
    const{instructionsExpanded,expandInstructions,collapseInstructions}=props;
    if(instructionsExpanded){
        return(
            <div>
            <h3>Instructions</h3>
            <div>Welcome to Guess Game. YOu have to guess whether the next card will be even or Odd</div>
            <div>Face Cards do not count</div>
            <br/>
            <button onClick={collapseInstructions}>Show Less</button>
            </div>
        );
    }
    return(
        <div>
        <h3>Instructions</h3>
        <div>Welcome to Guess Game...</div>
        <br/>
        <button onClick={expandInstructions}>Read More</button>
        </div>
    )

}
const mapStateToProps = state=>{
    return {instructionsExpanded: state.settings.instructionsExpanded    
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        expandInstructions:()=> dispatch(expandInstructions()),
        collapseInstructions:()=>dispatch(collapseInstructions())
    }
}
const componentConnector = connect(mapStateToProps,mapDispatchToProps);

export default componentConnector(Instructions);