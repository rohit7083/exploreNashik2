import { Outlet } from 'react-router-dom'
import FooterIndex from '../footer/Footer'
import Navbar from '../Navbar/index'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterIndex />
    </div>
  )
}

export default Layout
