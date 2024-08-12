import { images } from "../../exports/images"
import { ISector } from "../../types/dataObjs"

const SectorsWeServe = () => {
    const sectors: Array<ISector> = [
        {
            title: "Financial Services",
            image: images.FinancialServices,
            tagPosition: [1, 1, 1, 1]
        },
        {
            title: "iGaming",
            image: images.iGaming,
            tagPosition: [1, 1, 1, 1]
        },
        {
            title: "NGOs",
            image: images.NGOs,
            tagPosition: [1, 1, 1, 1]
        },
        {
            title: "Corporates",
            image: images.Corporates,
            tagPosition: [1, 1, 1, 1]
        },

    ]

    return (
        <div>
            <h2>
                Sectors we serve
            </h2>

            <p className="pt-3">
                We simplify the complexities of cross-border payments in some of the world’s most demanding sectors. Learn more about who we serve and how we add value below.

            </p>

            <div className="sectors-container">
            {sectors.map((sector, idx) => {
                    // const even = idx % 2 === 0;

                    return (
                        <div className='my-3 my-md-2 show-border' key={idx}>
                                <img src={sector.image} alt={`sector-${idx}`} className='img-fluid' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SectorsWeServe