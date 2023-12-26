import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 
'react-router-dom';
import Layout from './Layout.jsx';
import Feed from './components/Feed.jsx';
import PlayVideo from './components/PlayVideo.jsx';
import { AppContext } from './context/contextApi.jsx';
import SideNav from './components/SideNav.jsx';
import SearchFeed from './components/SearchFeed.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''element={<><SideNav/><Feed/> </>} />
      <Route path='search/:searchQuery' element={<SearchFeed/>} />
      <Route path='video/:videoId' element={<PlayVideo/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>,
)
