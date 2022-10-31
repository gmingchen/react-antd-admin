import React from 'react'
import { useSelector } from 'react-redux'

import { Image } from 'antd'

import './index.scss'

export default function() {
  const { enterprise: { logo, name }, collapse } = useSelector(state => ({
    enterprise: state.enterprise,
    collapse: state.menu.collapse
  }))

  return (
    <div className={ `logo-container padding-n-10 flex-box ${ collapse ? 'logo-container-collapse' : ''}` }>
      <div className="flex-box flex-item_f-1 flex_j_c-center flex_a_i-center">
        { collapse ? (
            <>
              { logo ? 
                <Image rootClassName="width-34 height-34" src={ logo } /> 
                : 
                <div className="margin_l-10 ellipse-1">
                  { name }
                </div>
              }
            </>
          ) : (
            <>
              <Image rootClassName="width-34 height-34" src={ logo } />
              <div className="margin_l-10 ellipse-1">
                { name }
              </div>
            </>
          ) }
      </div>
    </div>
  )
}
