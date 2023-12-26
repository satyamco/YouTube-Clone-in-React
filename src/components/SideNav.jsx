import React, { useContext } from 'react'
import SideNavLinks from "../components/SideNavLinks"
import { categories } from "../utils/constants"
import { Context } from '../context/contextApi'
import { useNavigate } from 'react-router-dom'


const SideNav = () => {
  const navigate = useNavigate()
  const { selectedCategory, setSelectedCategory } = useContext(Context)

  const handleClick = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  }

  return (
    <div className="h-[100%-57px] w-[210px] max-lg:w-full max-lg: px-4 pt-3 max-lg:pt-0 overflow-x-auto fixed border-r-white max-lg:flex max-lg:bg-[#0f0f0f] scrollbar z-50" >
      {categories.map((item, index) => (
        <div key={item.name}>
          <SideNavLinks
            icon={item.icon}
            name={item.type === 'home' ? "Home" : item.name}
            action={() => {
              handleClick(item.name, item.type)
              navigate('/')
            }}
            className={`${selectedCategory === item.name ? "bg-white/10" : ""}`}
          />

          {item.divider && (
            <hr className="my-5 border-white/[0.2] max-lg:hidden" />
          )}
        </div>
      ))}
    </div>
  )
}

export default SideNav