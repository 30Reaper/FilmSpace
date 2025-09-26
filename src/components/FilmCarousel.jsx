import React from "react";

const scrollCarousel = (id, offset) => {
  const container = document.getElementById(id);
  if (container) {
    container.scrollBy({ left: offset, behavior: "smooth" });
  }
};

const FilmCarousel = ({ films, title, id }) => {
  return (
    <div className="film-carousel-section">
      <h3>{title}</h3>
      <div className="film-carousel">
        <button
          className="film-arrow left"
          onClick={() => scrollCarousel(id, -300)}
        >
          ◀
        </button>
        <div className="film-carousel-container" id={id}>
          {films.map((film, index) => (
            <div className="film-carousel-item" key={index}>
              <img src={film.src} alt={film.title} />
            </div>
          ))}
        </div>
        <button
          className="film-arrow right"
          onClick={() => scrollCarousel(id, 300)}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FilmCarousel;
