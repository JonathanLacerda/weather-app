import { useState,useEffect } from 'react'
import FadeIn from 'react-fade-in';

import image from '../../imgs/rain.gif';

export default function BackgroundApp(props) {
    const [gif, setGif] = useState('');

    const videoBackground = (description) => {
        let gifUrl = '';

        if(description) {
            gifUrl = image;
        }
        setGif(gifUrl);
    }

    useEffect(() => {
        videoBackground(props.data);
    },[]);

    return (
        <>
        
            <FadeIn>
                <span 
                    className='image'
                    style={{
                    backgroundImage : `url(${gif})`
                }}>

                </span>
            </FadeIn>

        </>
    )
}