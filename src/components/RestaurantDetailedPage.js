import "./RestaurantDetailedPage.css";
import { Link } from "react-router-dom";
import restaurantImgOne from "../img/restaurant1.png";
import { ReactComponent as Clock } from "../icons/clock.svg";
import { ReactComponent as TakeAway } from "../icons/take-away.svg";
import { ReactComponent as Terrace } from "../icons/terrace.svg";
import { ReactComponent as Binoculars } from "../icons/binoculars.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Heart } from "../icons/heart2.svg";
import { ReactComponent as NoSmoking } from "../icons/no-smoking.svg";
// import { ReactComponent as WWW } from "../icons/internet.svg";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-thin.svg";
import { ReactComponent as Vegetarian } from "../icons/vegetarian.svg";

export default function RestaurantDetailedPage() {
  return (
    <div className="RestaurantDetailedPage">
      <header className="detailed-header">
        <img
          src={restaurantImgOne}
          alt="the restaurant"
          className="detailed-header__image"
        />
      </header>
      <main>
        <h1 className="detailed-heading">I Vigneri</h1>
        <div className="detailed-subheading">
          <h2>italian</h2>
          <h2>-</h2>
          <h2>ambience</h2>
        </div>
        <div className="headline-weekday__layout">
          <div className="headline-weekday__day open">M</div>
          <div className="headline-weekday__day open">T</div>
          <div className="headline-weekday__day open">W</div>
          <div className="headline-weekday__day open">T</div>
          <div className="headline-weekday__day open">F</div>
          <div className="headline-weekday__day open">S</div>
          <div className="headline-weekday__day closed">S</div>
        </div>
        <div className="detailed-info__layout">
          <div className="detailed-info__text-layout">
            <span className="info-line">
              <Clock className="info-svg" />
              <p className="info-text">open</p>
            </span>

            <span className="info-line">
              <Terrace className="info-svg" />
              <p className="info-text">terrace</p>
            </span>
            <span className="info-line">
              <Binoculars className="info-svg" />
              <p className="info-text">no view</p>
            </span>
            <span className="info-line">
              <NoSmoking className="info-svg" />
              <p className="info-text">smoking outside</p>
            </span>
          </div>
          <div className="detailed-info__text-layout">
            <span className="info-line">
              <TakeAway className="info-svg" />
              <p className="info-text">pick-up</p>
            </span>
            <span className="info-line">
              <Vegetarian className="info-svg" />
              <p className="info-text">Vegetarian options</p>
            </span>
            <span className="info-line">
              <Pin className="info-svg" />
              <p className="info-text">Große Bäckerstraße 12, 22222 Hamburg</p>
            </span>
            <span className="info-line">
              <Phone className="info-svg" />
              <p className="info-text">0401234566</p>
            </span>
          </div>
        </div>
      </main>
      <footer className="detailed-footer">
        <Link to="/resultsPage">
          <LeftArrow />
        </Link>
        <Heart className="header-bookmark" />
      </footer>
    </div>
  );
}