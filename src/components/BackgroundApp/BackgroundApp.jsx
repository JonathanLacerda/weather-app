import { useState,useEffect } from 'react'

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
            <span 
                className='image'
                style={{
                backgroundImage : `url(${gif})`
            }}>

            </span>
        </>
    )
}