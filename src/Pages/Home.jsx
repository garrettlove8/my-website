import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbo from '../Components/Jumbo';
import Rotator from '../Components/Rotator';

function Home(props) {

    return(
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} />
            <Rotator />
        </div>
    );

}

export default Home;