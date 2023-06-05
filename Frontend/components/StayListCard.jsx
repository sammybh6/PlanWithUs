import slc from "../components/style/StayListCard.module.css"


export default function StayListCard({ stay }) {

    // const handleClick = () => {
    //     window.location.href = shows.url;
    // }

    // const clicked = () => {
    //     <Link to={`/show/${shows.id}`} state={data}></Link>
    //     console.log("clicked");
    // }
    console.log(stay);
    return (

        <div>
            <div className={slc.wrapper}>
                <div className={slc.main_card}>
                    <div className={slc.card_left}>
                        <div className={slc.card_datails}>
                            <h1>{stay.name}</h1>
                            <div className={slc.card_cat}>
                                {/* <px className="PG">PG - 13</px> */}
                                {/* <p className={slc.year}>{shows.premiered}</p>
                                {shows.genres && shows.genres.map((item) => {
                                    return <p className={slc.genre}>{item}</p>
                                })} */}
                                {/* <p className={slc.class}>{shows.runtime} min</p> */}
                            </div>
                            {/* <p className={slc.disc}>
                                Language: {shows.language}<br />
                                Status: {shows.status}<br />
                            </p> */}
                            {/* <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                Read More
              </a> */}
                            {/* <div className={slc.social - btn}> */}

                            {/* <button onClick={clicked}>
                                    <Link to={`/show/${shows.id}`} state={data} style={{ textDecoration: "none", color: "white" }}> <i className={slc.fas - fa - play}></i> READ MORE</Link>
                                </button> */}

                            {/* <button onClick={handleClick}>
                                    <i className="fas fa-download"></i> WATCH NOW
                                </button> */}

                            {/* <button>
                                    <i className="fas fa-thumbs-up"></i> {(shows.rating.average) ? shows.rating.average : "N/A"}
                                    <a href={shows.network && shows.network.officialSite}></a>
                                </button> */}

                            {/* </div> */}
                        </div>
                    </div>
                    <div className={slc.card_right}>
                        <div className={slc.img_container}>
                            <img
                                src={stay.images && stay.images[0]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}