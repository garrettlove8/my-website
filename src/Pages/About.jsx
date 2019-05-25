import React from 'react';

import Jumbo from '../Components/Jumbo';
import Content from '../Components/Content';

function About(props) {

    return(
        <div>
            <Jumbo title={props.title} />
            <Content>
                <p>Hello, my name is Garrett. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

                <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

                <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank">here</a></p>
            </Content>
        </div>
    );

}

export default About;