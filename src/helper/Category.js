import React from 'react'
import { NavLink } from 'react-router-dom'

function Category(props) {
  return (
    <div className="col-md-3 col-sm-4 mb-2 text-center">
        <div className="card">
            <div className="card-body bg-success  text-white">
                <NavLink to={`/products/${props
                .value}`} className="btn">{props.value}</NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default Category
