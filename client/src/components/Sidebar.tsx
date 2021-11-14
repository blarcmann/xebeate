import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import {
  RiApps2Line,
  RiBubbleChartLine,
  RiUser4Line,
  RiLogoutCircleLine
} from "react-icons/ri";

export default function Sidebar() {
  const [pathname, setPathname] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname)
  }, [location])
  return (
    <div className="sidebar">
      <div className="sidebar_header border-b border-gray-200 from-gray-100 to-gray-50 bg-gradient-to-t  uk-visible@s">
        <img src={require('../assets/images/logo.png').default} className="sidebar-logo" />
      </div>
      <div className="sidebar_inner">
        <div className="flex flex-col items-center my-6 uk-visible@s">
          <div className="w-32 h-32">
            <img src={require('../assets/images/anton-krasko-01.jpeg').default}
              className="bg-gray-200 border-4 border-white rounded-full w-full h-full" />
          </div>
          <span className="text-sm font-medium uppercase mt-2"> Nina Cinderella</span>
          <div className="flex justify-around w-full items-center text-center uk-link-reset text-gray-800 mt-6">
            <div>
              <div>
                <span className="text-xs block">Post</span >
                <span className="font-light text-gray-400"> 130</span>
              </div>
            </div>
            <div>
              <a href="#">
                <span className="text-xs block">Following</span >
                <span className="font-light text-gray-400"> 1,230</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span className="text-xs block">Followers</span >
                <span className="font-light text-gray-400">2,430</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="-mx-4 -mt-1 uk-visible@s" />
        <ul>
          <li className={pathname === '/' ? "active" : ''}>
            <Link to="/">
              <RiApps2Line color={pathname === '/' ? '#9014EE' : ''} />
              <span> Feed </span>
            </Link>
          </li>
          <li className={pathname === '/shop' ? "active" : ''}>
            <Link to="/shop">
              <RiBubbleChartLine color={pathname === '/shop' ? '#9014EE' : ''} />
              <span> Marketplace </span>
            </Link>
          </li>
          <li className={pathname === '/profile' ? "active" : ''}>
            <Link to="/profile">
              <RiUser4Line color={pathname === '/profile' ? '#9014EE' : ''} />
              <span> Profile </span>
            </Link>
          </li>
          <li>
            <hr className="my-4" />
          </li>
          <li className="active">
            <Link to="/">
              <RiLogoutCircleLine color="#9014EE" />
              <span> Sign out </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
