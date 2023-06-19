import React from 'react'
import h from "../components/style/Header.module.css";
export default function Header() {
  const images = []
  return (
    <div className={h.intro} >
      <div className={h.introBody}>
        <div className={h.brandHeading}>
          <p>
            Plan your trip with us
          </p>

        </div>
      </div>
    </div>
  )
}