import { icons, images } from '../../exports/images';
import { IService } from '../../types/dataObjs';
import HighlightTag from '../reusables/HighlightTag';

const OurServices = () => {

  const services: Array<IService> = [
    {
      header: "We are your trusted partner",
      paragraph: "We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together.",
      icon: icons.trustedPartners
    },
    {
      header: "We provide the network you need",
      paragraph: "We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.",
      icon: icons.network
    },
    {
      header: "We bring certainty through compliance",
      paragraph: "We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.",
      icon: icons.compliance
    },
    {
      header: "We execute with expertise",
      paragraph: "We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.",
      icon: icons.expertise
    }
  ];


  return (
    <div className='row transalliance-group'>
      <div className="col-12 col-md-4">
        <h5 className='tiny-section-title'>OUR SERVICE</h5>

        <article className="pt-3 pt-md-5">
          {
            services.map((service, idx) => {
              return (
                <hgroup key={idx} className='py-3'>
                  <img src={service.icon} alt={service.header} className='img-fluid'/>
                  <h4 className='py-2'>
                    {service.header}
                  </h4>
                  <p className="text-muted">
                    {service.paragraph}
                  </p>
                </hgroup>
              )
            })
          }
        </article>

      </div>

      <div className="col-12 col-md-8">
        <hgroup>
          <h2 className='big-section-header'>
            The Transalliance Group. difference
          </h2>
          <p className='section-paragraph'>
            Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
          </p>
        </hgroup>

        <div className='tag-container services-img'>
          <img src={images.TransallianceGroup} alt="Transalliance Group Image" className='img-fluid' />
          <HighlightTag position={{ x: "-7%", y: "12%" }}>
            <hgroup>
              <h6 className='text-muted'>Our Team</h6>
              <h4>Over 200 Experts</h4>
            </hgroup>
          </HighlightTag>

          <hgroup className='meet-experts'>
            <h4>Meet our best financial experts
              &nbsp;
              <img src={icons.topRightArrow} alt="Next" />
            </h4>

          </hgroup>

        </div>
      </div>

    </div>
  )
}

export default OurServices;