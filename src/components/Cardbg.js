import React from "react";
import "../components/cardbg.css";
import machine from "../images/machine.png";
import roller from "../images/roller.png";
import rocket from "../images/rocket.png";
import box from "../images/box.png";

function Cardbg() {
  return (
    <div>
      <div class="card--container">
        <div>
          <article class="card-bg">
            <div class="card__image  ">
              <a
                target="_self"
                href="/what-we-do/capabilities/autonomous-operations"
              >
                <img src={machine} alt="Pilots in an aircraft flight deck" />
              </a>
            </div>
            <div class="card__text">
              <h2 class="card__title">
                Collins Aerospace leads the way in thermoplastic composite
                manufacturing
              </h2>
              <h3 class="card__sub-title-section">
                <span class="card__date">5.20.2022</span>
                <span class="card__sub-title">Advanced Structures</span>
              </h3>
              <div class="card__description">
                <p>
                  Leading the application of{" "}
                  <span class="text--highlight">
                    automation and intelligence technologies
                  </span>
                  that{" "}
                  <span class="text--highlight">
                    enhance safety and increase efficiency
                  </span>{" "}
                  of aviation operations.
                </p>
              </div>
              <a
                href="/what-we-do/capabilities/autonomous-operations"
                class="card__cta"
                aria-label="Learn more about Autonomous Operations"
                target="_self"
              >
                <span>Learn more</span>
              </a>
            </div>
          </article>
          <article class="card-bg">
            <div class="card__image  ">
              <a
                target="_self"
                href="/what-we-do/capabilities/autonomous-operations"
              >
                <img src={box} alt="Pilots in an aircraft flight deck" />
              </a>
            </div>
            <div class="card__text">
              <h2 class="card__title">What are thermoplastic Composites?</h2>
              <span class="card__info-divider"></span>
              <h3 class="card__sub-title-section">
                <span class="card__date">5.20.2022</span>
                <span class="card__sub-title">Advanced Structures</span>
              </h3>
              <div class="card__description">
                <p>
                  {" "}
                  Learn more about thermoplastic composites and their role in
                  making modern flight better, safer and more efficient than
                  ever before.
                </p>
              </div>
              <a
                href="/what-we-do/capabilities/autonomous-operations"
                class="card__cta"
                aria-label="Learn more about Autonomous Operations"
                target="_self"
              >
                <span>Learn more</span>
              </a>
            </div>
          </article>
          
        </div>
        <div>
        <article class="card-bg">
            <div class="card__image  ">
              <a
                target="_self"
                href="/what-we-do/capabilities/autonomous-operations"
              >
                <img src={roller} alt="Pilots in an aircraft flight deck" />
              </a>
            </div>
            <div class="card__text">
              <h2 class="card__title">
                Collins Aerospace leads the way in thermoplastic composite
                manufacturing
              </h2>
              <span class="card__info-divider"></span>
              <h3 class="card__sub-title-section">
                <span class="card__date">5.20.2022</span>
                <span class="card__sub-title">Advanced Structures</span>
              </h3>
              <div class="card__description">
                <p>
                  Leading the application of{" "}
                  <span class="text--highlight">
                    automation and intelligence technologies
                  </span>
                  that{" "}
                  <span class="text--highlight">
                    enhance safety and increase efficiency
                  </span>{" "}
                  of aviation operations.
                </p>
              </div>
              <a
                href="/what-we-do/capabilities/autonomous-operations"
                class="card__cta"
                aria-label="Learn more about Autonomous Operations"
                target="_self"
              >
                <span>Learn more</span>
              </a>
            </div>
          </article>
          <article class="card-bg">
            <div class="card__image  ">
              <a
                target="_self"
                href="/what-we-do/capabilities/autonomous-operations"
              >
                <img src={rocket} alt="Pilots in an aircraft flight deck" />
              </a>
            </div>
            <div class="card__text">
              <h2 class="card__title">
                Pulling Out All The Stops To Make Carbon Breaks More
                Environmentally Friendly
              </h2>
              <span class="card__info-divider"></span>
              <h3 class="card__sub-title-section">
                <span class="card__date">5.20.2022</span>
                <span class="card__sub-title">Advanced Structures</span>
              </h3>
              <div class="card__description">
                <p>
                 
                  <span class="text--highlight">
                  Collins Aerospace's Wheel & Brake team finds new ways to advance sustainability when producing its industry-leading DURACARB® brakes
                  </span>
                </p>
              </div>
              <a
                href="/what-we-do/capabilities/autonomous-operations"
                class="card__cta"
                aria-label="Learn more about Autonomous Operations"
                target="_self"
              >
                <span>Learn more</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Cardbg;
