import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio-2.css'

const Portfolio2 = (props) => {
  return (
    <div className="portfolio2-container">
      <Helmet>
        <title>Portfolio-2 - Moview Productions | Stefan Doncean</title>
        <meta
          name="description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:title"
          content="Portfolio-2 - Moview Productions | Stefan Doncean"
        />
        <meta
          property="og:description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9633093-04cb-4556-8e46-92b7b60210b3/9bb2f2ab-731f-46a4-b829-5ff2c4bc55bc?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
    </div>
  )
}

export default Portfolio2
