import React, { useContext, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import { TbSchool } from "react-icons/tb";
import { ThemeContext } from "../../context/ThemeContext";

/**
 * Displays a card for each project
 * @property {array} array - Datas
 * @function toggleTheme - Function switching "dark" and "light" mode
 * @const {string} theme - Current mode name
 * @const {object} state - Initial state
 * @const {object} settings - State updated
 * @function getState - Update state after an event
 * @return {JSX.Element} - Card
 */

const Card = ({ array }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  /**
   * State that manages the opening and closing of each collapse
   * @const {array} tab - States for each collapse. Initial value is empty
   * @const createObjectsForState - Create a state for each collapse
   * @const {object} state - Initial value of our state
   */

  let tab = [];
  const createObjectsForState = array.forEach((element) =>
    tab.push({ id: element.id, open: false })
  );

  const [state, setState] = useState({
    settings: tab,
  });

  /**
   * Management of values ​​returned by collapses.
   * When a collapse is clicked and returns the correct card ID,
   * then the values ​​of the "open" property are updated in the state.
   * @function getState - Update state after an event
   * @param element - A card element used here to target card IDs
   */

  const getState = (element) => {
    setState((state) => ({
      ...state,
      settings: state.settings.map((item) =>
        item.id === element.id
          ? {
              ...item,
              open: !item.open,
            }
          : item
      ),
    }));
  };

  /**
   * Updated state to use
   * @const {object} settings
   */

  const { settings } = state;

  return (
    <section className="cards" data-cy="cards" tabIndex={0}>
      {array
        .map((element, index) => (
          <article
            className={`card card--${index}`}
            key={`card-${element.id}`}
            aria-label={`Projet ${element.id} : ${element.title}. `}
            tabIndex={0}
          >
            <div className="card-content">
              {/* ---------- Left content ---------- */}
              <section
                className={`card-content-left ${theme}`}
                data-cy="card-content-left"
                aria-label="Images du projet"
              >
                <div className={`card-cover ${theme}`}>
                  {element.gallery.map((element) =>
                    element.type === "Desktop" ? (
                      <div
                        className="image-desktop"
                        key={`image-desktop-${index}`}
                      >
                        {element.images.map((item) => (
                          <img
                            key={`image-desktop-${item}`}
                            src={item}
                            alt=""
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        className="image-mobile"
                        key={`image-mobile-${index}`}
                      >
                        {element.images.map((item) => (
                          <img key={`image-mobile-${item}`} src={item} alt="" />
                        ))}
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* ---------- Right content ---------- */}
              <section
                className="card-content-right"
                data-cy="card-content-right"
                aria-label="Informations sur le projet"
              >
                <h4 className={`card-title ${theme}`}>{element.title}</h4>
                <span
                  className={`card-tags ${theme}`}
                  aria-label="Technologies utilisées"
                  lang="en"
                >
                  {element.techs.join(" - ")}
                </span>

                {/* --- Context --- */}
                <div
                  className="card-context"
                  aria-label="Détails sur la réalisation"
                >
                  <div className="first-context">
                    <div className="type-context">
                      {element.type === "Formation" ? (
                        <span className="type-school-icon">
                          <TbSchool />
                        </span>
                      ) : (
                        <span className="type-code-icon">
                          <CgBriefcase />
                        </span>
                      )}
                      <span className="type-text">{element.type}</span>
                    </div>

                    <div className="member-context">
                      <span className="member-icon">
                        <HiOutlineUser />
                      </span>
                      <span className="member-text">{element.member}</span>
                    </div>
                  </div>
                </div>

                {/* --- Collapse --- */}
                <div className="collapse">
                  <p
                    className={
                      settings.find((item) => item.id === element.id).open
                        ? "card-intro active"
                        : "card-intro"
                    }
                  >
                    {element.intro}
                  </p>

                  <button
                    className={
                      settings.find((item) => item.id === element.id).open
                        ? "chevron-down active"
                        : "chevron-down"
                    }
                    type="button"
                    data-cy="chevron-down"
                    aria-label={
                      settings.find((item) => item.id === element.id).open
                        ? "Cacher la présentation complète"
                        : "Afficher la présentation complète"
                    }
                    onClick={() => getState(element)}
                  >
                    <BsArrowDownCircle className="chevron-down-icon" />
                  </button>
                </div>

                {/* ---------- Links ---------- */}
                <div className="view-more" aria-label="Voir le projet">
                  {element.urlDemo !== undefined && (
                    <a
                      href={element.urlDemo}
                      className={`link demo-link ${theme}`}
                      aria-label="Site web"
                      target="blank"
                      rel="noreferrer"
                    >
                      Site web
                    </a>
                  )}
                  {element.urlGithub !== undefined && (
                    <a
                      href={element.urlGithub}
                      className={`link github-link ${theme}`}
                      aria-label="Github"
                      target="blank"
                      lang="en"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </section>
            </div>
          </article>
        ))
        .reverse()}
    </section>
  );
};

export default Card;
