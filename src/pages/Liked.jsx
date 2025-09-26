import Header from "../components/Header";
import Footer from "../components/Footer";
import "./liked.css";

const likedFilms = [
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

function Liked() {
  return (
    <>
      <Header />
      <div className="liked-background">
        <h1>Liked Films</h1>
        <div className="liked-gallery">
          {likedFilms.map((film, index) => (
            <div className="liked-gallery-item" key={index}>
              <img src={film.src} alt={film.title} />
              <div className="liked-title">{film.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Liked;
