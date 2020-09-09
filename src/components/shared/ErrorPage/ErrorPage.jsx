import React from 'react'
import { PropTypes } from 'prop-types'
import './ErrorPage.css'
import Image from './images/ekb.jpg'
import { Link } from 'react-router-dom'

export default function ErrorPage (props) {
  return (
    <React.Fragment>
        <div className={"image-container"}>
            <img className={'image'} src={Image}/>
        </div>
      <div className={'error-text'}>
        <div className={'error-code'}>
          {props.code}
        </div>
        <Link to={'/'}>
          <div className={'error-description'}>
            {props.description}
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

ErrorPage.propTypes = {
  code: PropTypes.number,
  description: PropTypes.string
}
