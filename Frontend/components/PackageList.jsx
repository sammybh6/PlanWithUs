import React from 'react'
import { fetchData } from './utils/Rest'
import { useContext } from 'react'
import {AuthContext} from '../components/context/authContext'

export default function PackageList() {

  const auth = useContext(AuthContext);
  console.log(auth.user);
  const [packageList, setPackageList] = React.useState([])
  async function getPackageList() {
    const response = await fetchData('package', true);
    setPackageList(response.data.data)
  }

  React.useEffect(() => {
    getPackageList();
  }, [])


  return (
    <div>
      {
        packageList.map((item) => {
          return (
            <div key={item._id}>
              <h1>{item.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
