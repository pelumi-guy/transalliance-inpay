import { images } from '../../exports/images';

const PaymentPathways = () => {
    return (
        <div className='payment-pathways'>
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


            <div className=''>
                <div className="row">
                    <div className="col-4">
                        <h6 className='tinySectionTitle'>About Us</h6>
                    </div>

                    <div className="col-8">
                        <h2>
                            Payment pathways, built for you
                        </h2>
                        <p>
                            Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPathways