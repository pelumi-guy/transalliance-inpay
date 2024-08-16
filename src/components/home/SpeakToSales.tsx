import { images } from "../../exports/images"
import ContactForm from "./ContactForm"

const SpeakToSales = () => {
  return (
    <div className='row py-3 container-fluid'>
        <div className="col-12 col-md-6 px-0">
            <img src={images.SpeakToSales} alt="Speak To Sales" className="img-fluid pt-5 ps-5" />
        </div>
        <div className="col-12 col-md-6 px-0">
            <ContactForm />
        </div>
    </div>
  )
}

export default SpeakToSales