import React from 'react';

import Jumbo from '../Components/Jumbo';
import Rotator from '../Components/Rotator';

function Home(props) {

    return(
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
            <Rotator />
        </div>
    );

}

export default Home;