import React from 'react'
import Container from '../components/containers/Container';
import RightSidebar from '../components/RightSidebar';
import Post from '../components/cards/Post';

export default function Feeds() {
  return (
    <Container>
      <div className="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
        <div className="space-y-5 flex-shrink-0 lg:w-7/12">
          <Post />
          <Post />
          <Post />
          <div className="flex justify-center mt-6" id="toggle" uk-toggle="target: #toggle ;animation: uk-animation-fade">
            <a href="#"
              className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
              Load more ..</a>
          </div>
        </div>
        <RightSidebar />
      </div>
    </Container >
  )
}
