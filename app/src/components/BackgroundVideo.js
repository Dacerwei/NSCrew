import React from 'react';
import Youtube from 'react-youtube';
import '../../assets/styles/backgroundvideo.css';

class BackgroundVideo extends React.Component {
    render() {
        const videoId = 'SYE4T7YvZ7U';
        const opt = {
            width: 'auto',
            height: 'auto',
            playerVars: {
                list:'PLwOAbLN_Fhuc2QadYdfWXdAwAWcUGqa4d',
                listType: 'playlist',
                autoplay: true,
                loop: 1,
                controls: 0,
                disablekb: true,
                rel:0,
                enablejsapi: true,
                showinfo: 0
            }
        };

        return(
            <div className="backgroundvideo-container">
                <Youtube
                    videoId={ videoId }          
                    id={'mainvideo'}
                    opts={opt}
                    onReady={(e)=>{
                        e.target.mute();
                        e.target.setLoop(true);
                    }}
                />
            </div>
        );
    }
}

export default BackgroundVideo;