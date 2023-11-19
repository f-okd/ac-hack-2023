interface VideoPlayerProps {
  src: string; // YouTube video URL
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  // Extract the video ID from the YouTube URL
  const videoId = src.split("v=")[1].split("&")[0];

  return (
    <div className="flex items-center justify-center pb-6">
      <iframe
        width="560"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Learn CSS"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
