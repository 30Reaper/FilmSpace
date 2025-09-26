import React from "react";

const Genre = () => {
  const scrollCarousel = (id, scrollOffset) => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="genre-carousel">
        <h3 className="genre-title">Genres</h3>
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow left"
            onClick={() => scrollCarousel("genre-carousel", -300)}
          >
            ◀
          </button>
          <div className="carousel-container" id="genre-carousel">
            <div className="genre-item">
              <img
                src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/2jd8d02-zandt-pantoliano-falco-matteo-874789600_76b57e.jpg?strip=all&w=960"
                alt="TV Shows"
              />
              <div className="genre-label">TV Shows</div>
            </div>
            <div className="genre-item">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRAg1-pPhmWOpOp0YNhhiudcuCXWXvihir4_xof5oMKhAD_T5R"
                alt="Comedy"
              />
              <div className="genre-label">Comedy</div>
            </div>
            <div className="genre-item">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRu3hgedu-v-hWM7CXfafA8SowkL83uyTE41XQ22cf29amx7alR"
                alt="Documentary"
              />
              <div className="genre-label">Documentary</div>
            </div>
            <div className="genre-item">
              <img
                src="https://sm.ign.com/t/ign_pk/video/j/jujutsu-ka/jujutsu-kaisen-0-ending-and-post-credit-scene-explained_uwhw.200.jpg"
                alt="Anime"
              />
              <div className="genre-label">Anime</div>
            </div>
            <div className="genre-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmNGiVvc5KZv0kGnZuUii_FLsZDG4-svH6g&s"
                alt="Action"
              />
              <div className="genre-label">Action</div>
            </div>
            <div className="genre-item">
              <img
                src="https://variety.com/wp-content/uploads/2022/10/MCDTETW_EC018.jpg?w=1000&h=667&crop=1"
                alt="Horror"
              />
              <div className="genre-label">Horror</div>
            </div>
            <div className="genre-item">
              <img
                src="https://i.ytimg.com/vi/TODt_q-_4C4/mqdefault.jpg"
                alt="Drama"
              />
              <div className="genre-label">Drama</div>
            </div>
            <div className="genre-item">
              <img
                src="data:image/jpeg;base64,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"
                alt="Thriller"
              />
              <div className="genre-label">Thriller</div>
            </div>
          </div>
          <button
            className="carousel-arrow right"
            onClick={() => scrollCarousel("genre-carousel", 300)}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default Genre;
