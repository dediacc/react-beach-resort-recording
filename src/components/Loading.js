import React from 'react'
import loadingGif from './../images/gif/loading-arrow.gif'

export default function Loading() {
  return (
    <div className="oading">
      <h4>rooms data Loading</h4>
      <img src={loadingGif} alt=""/>
      
    </div>
  )
}
