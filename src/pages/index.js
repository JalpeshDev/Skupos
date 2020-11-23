import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import PaidData from '../components/PaidData/PaidData'
import ScanData from '../components/ScanData/ScanData'
import StorePrice from '../components/StorePrice/StorePrice'
import JoinSkupos from '../components/JoinSkupos/JoinSkupos'
import Selling from '../components/Selling/Selling'
import EmptyShelves from '../components/EmptyShelves/EmptyShelves'
import Support from '../components/Support/Support'
import CustomerStory from '../components/CustomerStory/CustomerStory'
import Feature from '../components/Feature/Feature'
import GetStarted from '../components/GetStarted/GetStarted'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/sass/fonts.scss'
import '../assets/sass/global.scss'

const RootIndex = (props) => {
  const { data } = props
  return (
    <>
      <Header></Header>
      <ScanData scanData={data.contentfulScanData}></ScanData>
      <PaidData paidData={data.contentfulPaidData}></PaidData>
      <StorePrice storePriceData={data.contentfulStorePrice}></StorePrice>
      <EmptyShelves shelveData={data.contentfulEmptyShelve}></EmptyShelves>
      <Selling sellingData={data.contentfulSelling}></Selling>
      <GetStarted startedData={data.contentfulGetStarted}></GetStarted>
      <Feature featureData={data.contentfulFeature}></Feature>
      <Support supportData={data.contentfulSupport}></Support>
      <CustomerStory customerStoryData={data.contentfulCustomerStory}></CustomerStory>
      <JoinSkupos joinSkuposData={data.contentfulJoinSkupos}></JoinSkupos>
      <Footer />
    </>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query SkuposQuery {
    contentfulScanData {
      title {
        id
        title
      }
      description {
        id
        description
      }
      scanImage {
        id
        file {
          url
          fileName
          contentType
        }
      }
    }
    
    contentfulStorePrice {
      title
      subtitle
      permonth
    }
    contentfulJoinSkupos {
      title
    }

    contentfulSelling {
      title
      description {
        id
        description
      }
      discountText
      discountAmount
      engageDiscountText
      engageDiscountAmount
      month
      clockImage {
        file {
          url
          fileName
          contentType
        }
      }
      image {
        file {
          url
          fileName
          contentType
        }
      }
    }
    contentfulPaidData{
      title
        description{
          id
          description
        }
        berry{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        coke{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        cheetos{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        reeses{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        lays{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        marlboro{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        hershey{
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
      }
    contentfulEmptyShelve{
      title
      description{
        id
        description
      }
      subdescription
      promotiondate
      regularstrength
      strengthlength
      offer
      offerratio
      brand
      brandpercentage
      energyimage{
        file {
          url
          fileName
          contentType
        }
      }
      shelvesimage{
        file {
          url
          fileName
          contentType
        }
      }
       shelvesimage{
        file {
          url
          fileName
          contentType
        }
      }
      lineimage{
        file {
          url
          fileName
          contentType
        }
      }
    }
    contentfulSupport {
      title
      description {
        id
        description
      }
      image {
        file {
          url
          fileName
          contentType
        }
      }
    }
    contentfulCustomerStory{
      title {
        id
        title
      }
      subTitle
    }

    contentfulFeature{
      title
      subTitle {
        id
        subTitle
      }
      secure{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      integrate{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      quick{
          title
        description
        file {
          url
          fileName
          contentType
        }
      }
      
      contract{
          title
        description
        file {
          url
          fileName
          contentType
        }
      }
     
    }	
  	contentfulGetStarted{
      hourTitle
      hourSubTitle
      title
      description{
        id
        description
      }
      longTerm{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      remote{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      internet{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      windows{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      clover{
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      
      mnsp
      compatible
    }
  }`


RootIndex.propTypes = {
  // data: PropTypes.objectOf({}),
  data: PropTypes.object.isRequired,
}
