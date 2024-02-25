import React from 'react'
import logo from '../assets/icons/logo.svg'
import { sideNavLinks } from '../data'
import { bottomNav } from '../data'
import { NavLink } from 'react-router-dom'

const others = sideNavLinks.slice(1)

const SideNav = () => {
  return (
    <div className = 'hidden md:block sidenav bg-secondary-bg'>
        <div className='flex flex-row items-center gap-[5px]'>

            <img src={logo} alt='logo' className='h-[38px] w-[38px]' />
            <span className='text-primary-green logotext font-bold'>Cleancity</span>
        </div>

        <div className='mt-[5.3vh] flex flex-col space-y-[4.07vh]'>
            <NavLink                 
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "flex flex-row gap-[15px] items-center pl-[20px]" : "flex flex-row gap-[15px] items-center pl-[20px]",
                    isActive ? "selected bg-primary-green flex flex-row gap-[15px] items-center pl-[20px] text-white font-bold" : "",
                    isTransitioning ? "flex flex-row gap-[15px] items-center pl-[20px]" : "",
                  ].join(" ")
                }
                to='/'
            >
                <img src={sideNavLinks[0].icon} alt='home' className='h-[17px] w-[17px]' />
                <span className='font-[16px]'>{sideNavLinks[0].name}</span>
            </NavLink>
            {
              others.map((link) => (
                <NavLink key={link.name} to={link.link} 
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "flex flex-row gap-[15px] items-center pl-[20px]" : "flex flex-row gap-[15px] items-center pl-[20px]",
                    isActive ? "selected bg-primary-green flex flex-row gap-[15px] items-center pl-[20px] text-white font-bold" : "",
                    isTransitioning ? "flex flex-row gap-[15px] items-center pl-[20px]" : "",
                  ].join(" ")
                }
                >
                  <img src={link.icon} alt={link.name} className='h-[18px] w-[18px]' />
                  <h4>{link.name}</h4>
                </NavLink>
              ))
            }
        </div>

        <div className='bottomNav mt-[28vh] flex flex-col space-y-[4.07vh]'>
          {
            bottomNav.map((link) => (
              <a key={link.name} href='#' className='flex flex-row gap-[15px] items-center pl-[20px]'>
                <img src={link.icon} alt={link.name} className='h-[18px] w-[18px]' />
                <h4 className={link.name === 'Logout' && 'text-primary-red'}>{link.name}</h4>
              </a>

            ))
          }
        </div>
    </div>
  )
}

export default SideNav