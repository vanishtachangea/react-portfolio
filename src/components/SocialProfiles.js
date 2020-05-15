import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';
import { blockStatement } from '@babel/types';
const SocialProfile = props => {

    const { link, image } = props.socialProfile;
    return (
        <span>

            <a href={link} target="_blank"><img src={image} alt='profile' style={{ width: 35, height: 35, margin: 10 }} /></a>
        </span>
    )

}
const SocialProfiles = () => (
    <div>
        <h2>Connect with Me</h2>
        <div>
            {
                SOCIAL_PROFILES.map(PROFILE => {
                    return (
                        <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />
                    );
                })
            }
        </div>
    </div>
);


export default SocialProfiles;