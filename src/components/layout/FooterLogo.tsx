import { images } from "../../exports/images"

const FooterLogo = () => {
  return (
    <div className="d-flex align-items-end">
        <img src={images.FooterBrandLogo} alt="Footer Brand Logo"  className=""/>
        <span className="footer-name">Transalliance Group.</span>

    </div>
  )
}

export default FooterLogo