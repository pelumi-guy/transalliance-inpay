import { images } from "../../exports/images"


const AnnualReportBanner = () => {
    return (
        <div className="annual-report-container">
            <img src={images.AnnualReportBcg} alt="2023 Annual Report Background" className="annual-report-background" />

            <hgroup className="annual-report">
                <h2>2023 Annual Report</h2>
                <p className="pt-3">Click below to read more about Inpay’s impressive year-on-year growth and to download the full report.</p>
            </hgroup>
        </div>
    )
}

export default AnnualReportBanner