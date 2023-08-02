// import { Outlet, Link } from 'react-router-dom'
// import { useRoutes, Link } from 'react-router-dom'
// import router from '@/router'
// import { Button } from 'antd'
import LbyLayout from '@/components/Layout'

function App() {
  // const outlet = useRoutes(router)
  // const goRouter = (path: string) => { 
  //   console.log(path)
  // }
  return (
    <>
      {/* <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link> */}
      {/* <Outlet /> */}
      <LbyLayout />
        {/* {outlet} */}
    </>
  )
}

export default App
