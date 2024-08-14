import { images, icons } from "../../exports/images"
import HighlightTag from "../reusables/HighlightTag"

const MidBannerOne = () => {
    return (
        <div className='row'>
            <div className="col-4 d-flex align-items-end px-0 mx-0">
                <div className="human-powered-payments">
                    <h3>
                        The human-powered payments network
                    </h3>

                    <p>
                        Driven by a team of over 200 global payments experts with absolute dedication to solving our customers&apos; most complex cross-border payments challenges.
                    </p>

                    <HighlightTag position={{ x: "0%", y: "0%" }} className="light-gradient-btn" button>
                        Learn More &nbsp; &nbsp;
                        <img src={icons.lightForwardArrow} alt="forward arrow" className='img-fluid' />
                    </HighlightTag>
                </div>
            </div>

            <div className="col-8 px-0">
                <img src={images.WomanWithLaptopOnBcg} alt="Woman With Laptop On Background" className="woman-with-laptop" />
            </div>
        </div>
    )
}

export default MidBannerOne