import React from 'react';
import YouTube from 'react-youtube';

const Youtube = () => {
    const opts = {
        height: '390',
        width: '640',
        // playerVars: {
        //     autoplay: 0,
        //     disablekb: 0
        // }
    }


    return (
        <YouTube
            videoId="8mEWF2gEGA0"
            opts={opts}
            onReady={(e) => {e.target.playVideo()}}
            onPlay={() => {console.log('Play')}}
            onPause={() => {console.log('Pause')}}
            onEnd={() => {console.log('End')}}
            onError={() => {console.log('Error')}}
            onStateChange={(e) => {console.log('StateChange' + e.data); e.target.playVideo()}}
            onPlaybackRateChange={() => {console.log('RateChange...')}}
            onPlaybackQualityChange={() => {console.log('QualityChange')}}
        />
    );
}
export default Youtube

