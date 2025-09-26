import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style.css";
import { FaTv } from "react-icons/fa";
import RandomTrailerSection from "../components/Trailer";
import Footer from "../components/Footer";
import Genre from "../components/Genre";
import Header from "../components/Header";
import FilmCarousel from "../components/FilmCarousel";
import Prices from "../components/Prices";
import Review from "../components/Review";

function Home() {
  const popularFilms = [
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
    {
      title: "Alone",
      src: "https://cdn.kobo.com/book-images/469f22b7-eb78-4a25-a505-5adc23b54446/353/569/90/False/alone-173.jpg",
    },
    {
      title: "Joker",
      src: "https://i.pinimg.com/200x/95/dd/e6/95dde687a859a64fd56b15e23bf0314a.jpg",
    },
    {
      title: "Silence of the Lambs",
      src: "https://www.5.ua/media/pictures/original/289358.jpg?t=1717932759",
    },
  ];
  const carouselImages = [
    {
      src: "https://www.legendary.com/wp-content/uploads/2015/04/film_thedarkknight_featureimage_desktop_1600x9001.jpg",
      alt: "The Dark Knight",
      title: "The Dark Knight",
    },
    {
      src: "https://images.bauerhosting.com/legacy/media/6217/9535/9649/1207/f543/24bb/vote-hero.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
      alt: "The Godfather",
      title: "The Godfather",
    },
    {
      src: "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg",
      alt: "The Shawshank Redemption",
      title: "The Shawshank Redemption",
    },
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#trailers") {
      const el = document.getElementById("trailers");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="background-blur" />
      <div className="container">
        {/* Main film carousel */}
        <div className="carousel" id="home">
          <img
            src={carouselImages[carouselIndex].src}
            alt={carouselImages[carouselIndex].alt}
            className="active"
            data-title={carouselImages[carouselIndex].title}
          />
          <div className="title">{carouselImages[carouselIndex].title}</div>
          <div className="carousel-dots">
            {carouselImages.map((_, idx) => (
              <div
                key={idx}
                className={carouselIndex === idx ? "active" : ""}
                data-index={idx}
                onClick={() => setCarouselIndex(idx)}
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: carouselIndex === idx ? "#fff" : "#888",
                  margin: "0 4px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
        {/* carousel */}
        <div className="trending">
          <h3>
            Trending <span />
          </h3>
          <ol>
            <li>The Shawshank Redemption</li>
            <li>The Godfather</li>
            <li>The Dark Knight</li>
            <li>12 Angry Men</li>
            <li>Schindler's List</li>
            <li>The Lord of the Rings</li>
            <li>Pulp Fiction</li>
            <li>Forrest Gump</li>
            <li>Fight Club</li>
            <li>Inception</li>
          </ol>
        </div>
      </div>
      {/* banner */}
      <div className="info-banner">
        <a href="#">FilmSpace</a> now has version for your TV
        <FaTv style={{ height: 33, width: 33 }} alt="User Icon" /> {}
      </div>
      <div className="film-carousel-background">
        <FilmCarousel
          films={popularFilms}
          title="Popular on Platform"
          id="film-carousel-1"
        />

        <FilmCarousel
          films={popularFilms}
          title="Popular in your region"
          id="film-carousel-2"
        />

        <Genre />
        <RandomTrailerSection />
        <Review />
      </div>
      <Prices />
      <Footer />
    </>
  );
}

export default Home;
