import React, { useState, useEffect, useCallback, useMemo } from "react";

const RandomTrailerSection = () => {
  const trailerIds = useMemo(
    () => ["jan5CFWs9ic", "KsBNOAAXiCY", "uhUht6vAsMY", "eGV7zwjvxKs"],
    []
  );

  const [youtubeID, setYoutubeID] = useState("");

  const getRandomTrailer = useCallback(
    (excludeId) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * trailerIds.length);
      } while (trailerIds[randomIndex] === excludeId && trailerIds.length > 1);

      setYoutubeID(trailerIds[randomIndex]);
    },
    [trailerIds]
  );

  useEffect(() => {
    getRandomTrailer();
  }, [getRandomTrailer]);

  return (
    <div className="trailer-section" id="trailers">
      <div className="trailer-header">
        <h2>Random trailer of upcoming films</h2>
        <button
          className="refresh-button"
          onClick={() => getRandomTrailer(youtubeID)}
        >
          ↻
        </button>
      </div>
      <div className="trailer-container">
        <iframe
          className="video"
          width="560"
          height="315"
          title="Youtube player"
          src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RandomTrailerSection;
