/**
 * Displays a card for each project
 * @property {array} array - Datas
 * @return {JSX.Element} - Card
 */

const Card = ({ array }) => {
   return (
      <div className="cards" tabIndex={0}>
         {array
            .map((element) => (
               <article className="card" key={element.id}>
                  <div className="card-content">
                     {/* ---------- Left content ---------- */}
                     <section className="card-content-left">
                        <div className="card-cover">
                           {element.gallery.map((element) =>
                              element.type === "Desktop" ? (
                                 <div className="image-desktop" key={element}>
                                    {element.images.map((item) => (
                                       <img
                                          key={`${item}-img-desktop`}
                                          src={item}
                                          alt=""
                                       />
                                    ))}
                                 </div>
                              ) : (
                                 <div className="image-mobile" key={element}>
                                    {element.images.map((item) => (
                                       <img
                                          key={`${item}-img-mobile`}
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
