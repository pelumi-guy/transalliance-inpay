import { images, icons } from '../../exports/images';
import HighlightTag from '../reusables/HighlightTag';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className="partners">
                <h5 className='send-and-receive-money'>
                    Send and Receive Money from all over with ease.
                </h5>

                <div className="d-flex align-items-center">
                    <div>
                        <img src={images.DanishRedCross} alt="Danish Red Cross" className='img-fluid' />
                    </div>

                    <div>
                        <img src={images.TripleEight} alt="888" className='client-logo img-fluid' />
                    </div>

                    <div>
                        <img src={images.CIMB} alt="CIMB" className='client-logo img-fluid' />
                    </div>

                    <div>
                        <img src={images.Nuvei} alt="Nuvei" className='client-logo img-fluid' />
                    </div>

                    <div>
                        <img src={images.MoneyGram} alt="MoneyGram" className='client-logo img-fluid' />
                    </div>

                    <div>
                        <img src={images.RakBank} alt="RakBank" className='img-fluid' />
                    </div>
                </div>
            </div>


            <div className='about-us-body '>
                <div className="row">
                    <div className="col-4">
                        <h6 className='tiny-section-title'>About Us</h6>

                        <div className="tag-container money-out-container">
                            <HighlightTag button className='money-out-frame' position={{ x: "0", y: "0" }}>
                                Money Out &nbsp;
                                <img src={icons.darkForwardArrow} alt="forward arrow" className='transparent' />
                            </HighlightTag>

                            <HighlightTag button className='money-out-btn' position={{ x: "0", y: "0" }}>
                                Money Out &nbsp;
                                <img src={icons.darkForwardArrow} alt="forward arrow" />
                            </HighlightTag>
                        </div>

                        <img src={images.BlurWalkway} alt="Blur Walkway" className='img-fluid mt-5' />

                    </div>

                    <div className="col-8">
                        <h2 className="big-section-header">
                            Payment pathways, built for you
                        </h2>
                        <p className='section-paragraph'>
                            Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management
                        </p>

                        <div className='d-flex flex-column align-items-end tag-container'>
                            <img src={images.PaymentPathwaysWoman} alt="Corporate Woman With Laptop" className='img-fluid payment-pathways-woman' />
                            <HighlightTag position={{ x: "0%", y: "100%" }} className='customer-portal'>
                                Customer portal for live transaction monitoring
                            </HighlightTag>
                        </div>

                        <div className='mt-5 d-flex align-items-end payment-pathways-row-2'>
                            <div className="tag-container me-5">
                                <img src={images.DanishFSAGuy} alt="Corporate Guy With Specs" className='img-fluid danish-fsa' />
                                <HighlightTag position={{ x: "0%", y: "30%" }} className='danish-fsa-tag'>
                                    Danish FSA regulated
                                </HighlightTag>
                            </div>

                            <div className="tag-container mt-4 ">
                                <img src={images.PhoneScreen} alt="Phone Screen" className='img-fluid' />
                                <HighlightTag position={{ x: "50%", y: "100%" }} className='currencies-served-tag'>
                                    90+ currencies served
                                </HighlightTag>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end learn-more">
                            <HighlightTag position={{ x: "0%", y: "0%" }} className="dark-gradient-btn" button>
                                Learn More &nbsp; &nbsp;
                                <img src={icons.lightForwardArrow} alt="forward arrow" className='img-fluid' />
                            </HighlightTag>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs