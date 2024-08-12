import { images } from "../../exports/images";
import "../../assets/styles/home.css";


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
                    <img src={images.FlatLayWithLaptopAndHeadphones} alt="Flat Lay With Laptop and Headphones" className="img-fluid" />
                </div>

                <div className="travel-concept">
                    <img src={images.TravelConcept} alt="Travel concept with documents" className="img-fluid travel-concept-img" />
                </div>

            </div>
        </div>
    )
}

export default Topbanner