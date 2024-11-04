import React from 'react';
import useIsMobile from '../isUseMobile/useMobile';

const VideoPlayer = () => {
    const isMobile = useIsMobile();
    const videoSrc = isMobile
        ? '/Css/Res-MyFinder.mp4'  
        : '/Css/Background MyFinder 1-2.mp4';   

    return (
        <div style={{height:'100vh'}}>
            <video
                src= {videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="responsive-video"
            />
        </div>
    );
};

export default VideoPlayer;
