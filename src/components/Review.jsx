import React, { useEffect, useState } from "react";

const Review = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setFeedbacks((prev) => [...prev, e.detail]);
    };
    window.addEventListener("submit-feedback", handler);

    const openModalHandler = () => setFeedbackOpen(true);
    window.addEventListener("open-feedback-modal", openModalHandler);

    return () => {
      window.removeEventListener("submit-feedback", handler);
      window.removeEventListener("open-feedback-modal", openModalHandler);
    };
  }, []);

  return (
    <div className="reviews-section" id="reviews">
      <h2>Reviews</h2>
      <div className="review-cards-container">
        <div className="review-card light-card">
          <img
            src="https://m.media-amazon.com/images/I/51k1hR9iNsL._UF894,1000_QL80_.jpg"
            alt="The Shawshank Redemption Poster"
            className="review-poster"
          />
          <div className="review-content">
            <h3 className="black-text">
              Rolling Stone{" "}
              <span className="review-author black-text">Peter Travers</span>
            </h3>
            <p className="black-text">
              It's the no-bull performances that hold back the flood of
              banalities. Robbins and Freeman connect with the bruised souls of
              Andy and Red to create something undeniably powerful and moving.
            </p>
            <div className="stars black-stars">★★★★★</div>
          </div>
        </div>
        <div className="review-card dark-card">
          <img
            src="https://cdn.planetakino.ua/7361_joker_folie_a_deux_ov_2024/Media/Posters/vertical/opt_a71f4650-1363-4110-bb44-177d9b562cd0.jpg"
            alt="Joker Poster"
            className="review-poster"
          />
          <div className="review-content">
            <h3 className="white-text">
              NME{" "}
              <span className="review-author white-text">Matthew Turner</span>
            </h3>
            <p className="white-text">
              Phillips and Silver have delivered the last thing anyone expected:
              a socially responsible Joker movie that finds an intriguing way to
              explore the consequences (both on and offscreen) of the first
              film.
            </p>
            <div className="stars white-stars">★★★☆☆</div>
          </div>
        </div>
      </div>
      <div className="feedback-list">
        <h3>User Feedback</h3>
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="user-feedback">
            <strong>{fb.name}</strong> ({fb.email}):
            <br />
            <span>{fb.feedback}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
