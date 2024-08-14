import { icons, images } from "../../exports/images";
import "../../assets/styles/home.css";
import HighlightTag from "../reusables/HighlightTag";
import { Link } from "react-router-dom";


const Topbanner = () => {
    return (
        <div className='top-banner'>
            <div className="row">
                <hgroup className="col-8">
                    <p className="simplified">Simplified cross-border payment</p>
                    <h1 className="payments-people">We are the payments people</h1>
                    <p className="top-banner-paragraph">Transalliance Group.&apos;s cross-border payments solutions connect organisations and communities globally to the network they need to thrive. Together, we make money move.</p>
                </hgroup>

                <div className="col-4">
                    <div className="tag-container">
                        <img src={images.FlatLayWithLaptopAndHeadphones} alt="Flat Lay With Laptop and Headphones" className="img-fluid" />
                        <HighlightTag position={{ x: "-23%", y: "9%" }}>
                            24/7, 365 transaction tracking
                        </HighlightTag>
                    </div>

                </div>

                <div className="travel-concept">
                    <div className="tag-container">
                        <img src={images.TravelConcept} alt="Travel concept with documents" className="img-fluid travel-concept-img" />

                        <HighlightTag position={{ x: "20%", y: "0%" }} className="discover-more-tag" button>
                            Discover More &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <img src={icons.darkForwardArrow} alt="forward arrow" />
                        </HighlightTag>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topbanner