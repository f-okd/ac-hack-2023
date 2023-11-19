// VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
    src: string; // YouTube video URL
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    // Extract the video ID from the YouTube URL
    const videoId = src.split('v=')[1].split('&')[0];

    return (
        <div className="flex justify-center items-center pb-6">
            <iframe
                width="560" 
                height="300" 
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Learn CSS" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default VideoPlayer;
