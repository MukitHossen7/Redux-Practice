const Player = ({ link, title }) => {
  return (
    <div>
      <iframe
        width="100%"
        class="aspect-video"
        src={link}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default Player;
