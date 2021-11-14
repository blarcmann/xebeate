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
        <a href="#">
          <img src="assets/images/logo.png" />
          <img src="assets/images/logo-light.png" className="logo_inverse" />
        </a>
        {/* <!--btn night mode--> */}
        <a href="#" id="night-mode" className="btn-night-mode" data-tippy-placement="left" title="Switch to dark mode"></a>
      </div>
      <div className="border-b border-gray-20 flex justify-between items-center p-3 pl-5 relative uk-hidden@s">
        <h3 className="text-xl"> Navigation </h3>
        <span className="btn-mobile" uk-toggle="target: #wrapper ; cls: sidebar-active"></span>
      </div>
      <div className="sidebar_inner" data-simplebar>
        <div className="flex flex-col items-center my-6 uk-visible@s">
          <div
            className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transition m-0.5 mr-2  w-24 h-24">
            <img src="assets/images/avatars/avatar-2.jpg"
              className="bg-gray-200 border-4 border-white rounded-full w-full h-full" />
          </div>
          <a href="profile.html" className="text-xl font-medium capitalize mt-4 uk-link-reset"> Nina Cinderella
          </a>
          <div className="flex justify-around w-full items-center text-center uk-link-reset text-gray-800 mt-6">
            <div>
              <a href="#">
                <strong>Post</strong>
                <div> 130</div>
              </a>
            </div>
            <div>
              <a href="#">
                <strong>Following</strong>
                <div> 1,230</div>
              </a>
            </div>
            <div>
              <a href="#">
                <strong>Followers</strong>
                <div> 2,430</div>
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
