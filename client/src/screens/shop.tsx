import React from 'react'
import Container from '../components/containers/Container';
import RightSidebar from '../components/RightSidebar';
import Post from '../components/cards/Post';

export default function Shop() {
  return (
    <Container>

      <div className="lg:m-0 -mx-5 flex justify-between py-4 relative space-x-3 uk-sticky dark-tabs">
        <div className="flex overflow-x-scroll lg:overflow-hidden lg:pl-0 pl-5 space-x-3">
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Shop</a>
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> headphones  </a>
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Parfums </a>
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Fruits </a>
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Mobiles  </a>
          <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Laptops </a>
        </div>
        <a href="#" className="bg-pink-500 hover:bg-pink-600 hover:text-white flex font-bold inline-block items-center px-4 py-2 rounded shadow text-white lg:block hidden"> <i className="-mb-1 mr-1 uil-plus"></i> Create</a>
      </div>

      <div className="relative mt-4">
        <div className="uk-slider-container pb-3">
          <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left"></i> </a>
          <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right"></i></a>
          <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">

            {new Array(10).fill('').map((i) => (
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src="assets/images/product/1.jpg" alt="" />
                    </div>

                    <div className="item-inner">
                      <div className="item-price"> 20$ </div>
                      <div className="item-title"> Brown headphones </div>
                      <div className="item-statistic">
                        <span> <span className="count">4</span> likes </span>
                        <span> <span className="count">106</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-4 mt-12">
        <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight"> Categories </h1>
        <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
      </div>
      <div className="relative">

        <div className="uk-slider-container pb-3">

          <ul
            className="uk-slider-items uk-child-width-1-6@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">

            {new Array(12).fill('').map((i) => (
              <li>

                <a href="#">
                  <div className="group-catagroy-card" data-src="assets/images/product/11.jpg" uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Shoes </h4>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center -mb-3 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left"></i> </a>
          <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center -mb-3 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right"></i></a>
        </div>


      </div>
      <div className="flex justify-between mt-6 mb-4 mt-12">
        <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight"> Categories </h1>
        <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
      </div>
      <div className="uk-slider-container pb-3">
        <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left"></i> </a>
        <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right"></i></a>
        <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">

          {new Array(10).fill('').map((i) => (
            <li>
              <a href="#" uk-toggle="target: #offcanvas-preview">
                <div className="market-list">
                  <div className="item-media">
                    <img src="assets/images/product/1.jpg" alt="" />
                  </div>

                  <div className="item-inner">
                    <div className="item-price"> 20$ </div>
                    <div className="item-title"> Brown headphones </div>
                    <div className="item-statistic">
                      <span> <span className="count">4</span> likes </span>
                      <span> <span className="count">106</span> views </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container >
  )
}
