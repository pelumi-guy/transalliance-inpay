import React from 'react';
import Topbanner from './Topbanner';
import PaymentPathways from './PaymentPathways';
import MidBannerOne from './MidBannerOne';
import TheTransAllianceGroup from './TheTransAllianceGroup';
import MidBannerTwo from './MidBannerTwo';
import SectorsWeServe from './SectorsWeServe';
import AnnualReportBanner from './AnnualReportBanner';
import SpeakToSales from './SpeakToSales';

const Home = () => {
  return (
    <>
        <Topbanner />
        <PaymentPathways />
        <MidBannerOne />
        <TheTransAllianceGroup />
        <MidBannerTwo />
        <SectorsWeServe />
        <AnnualReportBanner />
        <SpeakToSales />
    </>
  )
}

export default Home