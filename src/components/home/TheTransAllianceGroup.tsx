import { icons, images } from '../../exports/images';
import { IService } from '../../types/dataObjs';

const TheTransAllianceGroup = () => {

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
      <div className="col-4">
        <h5>OUR SERVICE</h5>

        <div className="pt-5">
          {
            services.map((service, idx) => {
              return (
                <article key={idx}>
                  <hgroup>
                    <img src={service.icon} alt={service.header} />
                    <h4>
                      {service.header}
                    </h4>
                    <p>
                      {service.paragraph}
                    </p>
                  </hgroup>
                </article>)
            })
          }
        </div>

      </div>

      <div className="col-8">
        <hgroup>
          <h2>
            The Transalliance Group. difference
          </h2>
          <p>
            Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
          </p>
        </hgroup>

        <div>
          <img src={images.TransallianceGroup} alt="Transalliance Group Image" className='img-fluid' />
        </div>
      </div>

    </div>
  )
}

export default TheTransAllianceGroup;