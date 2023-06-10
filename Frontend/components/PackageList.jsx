import React from 'react'
import { fetchData } from './utils/Rest'

export default function PackageList() {

  const data=fetchData('package',true);
  console.log(data)
  return (
    <div>PackageList</div>
  )
}
