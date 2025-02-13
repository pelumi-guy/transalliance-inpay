import { images } from "../../exports/images";

const MidBannerTwo = () => {
    return (
        <div className='row'>
            <div className="col-12 col-md-8 px-0">
                <img src={images.TabOnBcg} alt="Inpay on Tablet screen" className="woman-with-laptop" />
            </div>

            <div className="col-12 col-md-4 d-flex align-items-end px-0 mx-0">
                <div className="one-portal">
                    <h2>
                        One portal,
                        every transaction
                    </h2>

                    <p>
                        Our customer portal provides an intuitive interface to access all of our services via a simple, single login.
                    </p>
                    <ul>
                        <li>Real-time, 24/7, 365 transaction tracking</li>
                        <li>Customizable & downloadable reports</li>
                        <li>Rich data analysis</li>
                        <li>Multiple integration methods, built to suit your needs</li>
                    </ul>

                </div>
            </div>


        </div>
    )
}

export default MidBannerTwo