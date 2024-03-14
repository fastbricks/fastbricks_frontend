import React from "react";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/XFqUqpim0a8`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="fastbricks"
      autoPlay={true}
    />
  </div>
);

export default YoutubeEmbed;
