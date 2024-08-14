import { images, icons } from "../../exports/images"
import { ISector } from "../../types/dataObjs"
import HighlightTag from "../reusables/HighlightTag"

const SectorsWeServe = () => {
    const sectors: Array<ISector> = [
        {
            title: "Financial Services",
            image: images.FinancialServices,
            tagPosition: { x: "100%", y: "71%" }
        },
        {
            title: "iGaming",
            image: images.iGaming,
            tagPosition: { x: "0%", y: "3%" }
        },
        {
            title: "NGOs",
            image: images.NGOs,
            tagPosition: { x: "100%", y: "9%" }
        },
        {
            title: "Corporates",
            image: images.Corporates,
            tagPosition: { x: "0%", y: "100%" }
        },

    ]

    return (
        <div className="sectors-we-serve">
            <h2 className="big-section-header">
                Sectors we serve
            </h2>

            <p className="pt-3 section-paragraph">
                We simplify the complexities of cross-border payments in some of the world’s most demanding sectors. Learn more about who we serve and how we add value below.

            </p>

            <div className="sectors-container">
                {sectors.map((sector, idx) => {
                    const [x, y] = sector.tagPosition.x;

                    return (
                        <div className="tag-container sector-img ">
                            <img src={sector.image} alt={`sector-${idx}`} className='img-fluid sector-img my-3 my-md-2' key={idx} />
                            <HighlightTag position={{ x, y }}>
                                {sector.title}
                                <br />
                                Learn More &nbsp;
                                <img src={icons.darkForwardArrow} alt="next arrow" />
                            </HighlightTag>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default SectorsWeServe