import React from 'react'
import Nav from './components/Nav'
import SideNav from './components/SideNav'
import { Outlet } from 'react-router-dom'
import Feed from './components/Feed'

const Layout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default Layout