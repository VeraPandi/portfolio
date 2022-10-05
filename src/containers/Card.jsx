/**
 * Displays a card for each project
 * @property {array} array - Datas
 * @return {JSX.Element} - Card
 */

const Card = ({ array }) => {
   return (
      <div className="cards" tabIndex={0}>
         {array
            .map((element, index) => (
               <article className="card" key={`card-${element.id}`}>
                  <div className="card-content">
                     {/* ---------- Left content ---------- */}
                     <section className="card-content-left">
                        <div className="card-cover">
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
                                       <img
                                          key={`image-mobile-${item}`}
                                          src={item}
                                          alt=""
                                       />
                                    ))}
                                 </div>
                              )
                           )}
                        </div>
                     </section>

                     {/* ---------- Right content ---------- */}
                     <section className="card-content-right">
                        <h4 className="card-title">{element.title}</h4>
                        <span className="card-tags">
                           {element.techs.join(" / ")}
                        </span>

                        <p className="card-intro">{element.intro}</p>

                        {element.type === "Formation" ? (
                           <span className="card-context">
                              {`Projet de formation réalisé seule en ${element.time} semaines.`}
                           </span>
                        ) : (
                           <span className="card-context">
                              {`${element.type} réalisé seule en ${element.time} semaines.`}
                           </span>
                        )}

                        {/* ---------- Links ---------- */}
                        <div className="view-more">
                           {element.urlDemo !== undefined && (
                              <a
                                 href={element.urlDemo}
                                 className="link demo-link"
                                 target="blank"
                                 rel="noreferrer"
                              >
                                 Site web
                              </a>
                           )}
                           {element.urlGithub !== undefined && (
                              <a
                                 href={element.urlGithub}
                                 className="link github-link"
                                 target="blank"
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
      </div>
   );
};

export default Card;
