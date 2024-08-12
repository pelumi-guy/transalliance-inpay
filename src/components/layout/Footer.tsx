import FooterLogo from './FooterLogo'
import { images, icons } from '../../exports/images'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid row mx-0 main-footer">

                <div className="col-12 col-md-3 ps-5 pe-0 me-5">
                    <FooterLogo />
                </div>

                <div className="col-12 col-md-8 ms-5 row">

                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Offices</div>
                            <div className="footer-offices mb-2">

                                Denmark: <br />
                                Toldbodgade 55B <br />
                                1253, Copenhagen <br />
                                <br />

                                United Kingdom: <br />
                                1 Poultry <br />
                                EC2R 8EJ, London <br />
                                info@inpay.com <br />
                                Phone: +45 88 610 600
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Solutions</div>
                            <div className="footer-item mb-2">
                                Money Out</div>
                            <div className="footer-item mb-2">
                                Money In</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Sectors</div>
                            <div className="footer-item mb-2">
                                Financial Services</div>
                            <div className="footer-item mb-2">
                                iGaming</div>
                            <div className="footer-item mb-2">
                                Corporates</div>
                            <div className="footer-item mb-2">
                                NGOs</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div className="footer-col">
                            <div className="footer-header mb-3">
                                Other</div>
                            <div className="footer-item mb-2">
                                About Us</div>
                            <div className="footer-item mb-2">
                                News & Insights</div>
                            <div className="footer-item mb-2">
                                Compliance</div>
                            <div className="footer-item mb-2">
                                Careers</div>
                            <div className="footer-item mb-2">
                                Contact us</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='footer-rule'>
                <hr  />
            </div>


            <div className="py-3 container-fluid d-flex justify-content-end align-items-center mx-0">
                <div className="px-5 social-media">

                    <h4>Social Media</h4>

                    <div className="d-flex">
                        <img src={icons.facebook} alt="facebook" className='px-2' />
                        <img src={icons.twitter} alt="facebook" className='px-2' />
                        <img src={icons.instagram} alt="facebook" className='px-2' />
                    </div>
                </div>
            </div>

            <img src={images.BaseGradient} alt="Base Gradient" className='base-gradient'/>
        </footer>
    )
}

export default Footer