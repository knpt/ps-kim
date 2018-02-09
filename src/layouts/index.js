import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className = "gradient-container">
    <Helmet
      title="Kimberly Ton"
      meta={[
        { name: 'description', content: 'personal website' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        //padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
