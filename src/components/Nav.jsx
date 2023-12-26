import React, { useContext, useState } from 'react'
import { Context } from '../context/contextApi.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api.js';
import Loder from '../subComponents/Loder.jsx'
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import youtubeIcon from "../assets/youtubeIcon.png";
import youtube from "../assets/youtube.png";
import { IoMdMic } from "react-icons/io";



const Nav = () => {
  const [query, setQuery] = useState()
  const { loding, setLoding, setData } = useContext(Context)
  const navigate = useNavigate()


  const fetchSearchData = (q) => {
    setLoding(true)
    fetchDataFromApi(`search/?q=${q}`).then(({ contents }) => {
      setData(contents);
      console.log(contents);
      setLoding(false)
    })
  }


  const searchHandler = (e) => {
    if ((e.key === 'Enter' || e === 'searchBtn') && query?.length > 0) {
      fetchSearchData(query)
      navigate(`/search/${query}`)
    }
  }


  return (
    <header className='w-full sticky top-0 bg-[#0f0f0f] z-50'>
      {loding && <Loder />}
      <nav className="flex items-center justify-between px-4  py-2 border-1 ">
        <Link to='/'>
          <div> <img
            className="w-[95px] h-auto max-sm:hidden"
            src={youtube}
            alt="Youtube logo" />
            <img
              className="min-w-[36px] max-w-[36px] sm:hidden"
              src={youtubeIcon}
              alt="Youtube logo" /></div>
        </Link>
        <div className='flex items-center'>
          <div className='search-border flex items-center mx-4'>
            <input
              className="w-[35vw] max-md:w-[50vw] bg-[#0f0f0f] outline-none text-white py-2  rounded-l-full  px-8 max-sm:py-[6px]"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={searchHandler}
              value={query}
              type="text" />
            <button
              className="px-3 sm:px-4 py-2 bg-[#282828] rounded-r-full max-sm:py-[6px]"
              onClick={() => searchHandler('searchBtn')}
            ><IoIosSearch className="text-white text-2xl" /></button>
          </div>
          <div className='w-10 h-10 bg-[#282828] rounded-full flex items-center justify-center max-md:hidden'><IoMdMic className='text-white text-xl' /> </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="w-10 h-10 flex items-center justify-center max-md:hidden rounded-full hover:bg-white/5"><RiVideoAddLine className="text-white/80 text-xl" /></div>
          <div className="w-10 h-10 flex items-center justify-center max-md:hidden rounded-full hover:bg-white/5"><FiBell className="text-white/80 text-xl" /></div>
          <div className="w-10"><img className="w-9  rounded-full" src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt="" /></div>
        </div>

      </nav>
    </header>
  )
}

export default Nav