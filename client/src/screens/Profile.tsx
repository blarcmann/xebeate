import Container from '../components/containers/Container';

export default function Profile() {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
        <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden">
          <img
            src="assets/images/avatars/avatar-7.jpg" alt="profile picture"
            className="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />

          <div className="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
            <a href="#" className="hover:text-white">
              <i className="uil-camera"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="uil-crop-alt"></i>
            </a>
          </div>
        </div>
        <div className="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center">

          <h2 className="font-semibold lg:text-2xl text-lg mb-2"> Stella Jonathan</h2>
          <p className="lg:text-left mb-2 text-center  dark:text-gray-100"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
            doming id quod mazim placerat facer possim assum</p>

          <div className="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
            <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a>
          </div>


          <div className="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
            <a href="#" className="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700"> Add friend</a>
            <a href="#" className="bg-pink-500 shadow-sm p-2 pink-500 px-6 rounded-md text-white hover:text-white hover:bg-pink-600"> Send message</a>
            <div>

              <a href="#" className="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700">
                <i className="icon-feather-chevron-down"></i>
              </a>

              <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900" uk-drop="mode: click">

                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-user-minus mr-2"></i>Unfriend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-eye-slash  mr-2"></i>Hide Your Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                      <i className="uil-share-alt mr-2"></i> Share This Profile
                    </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2  dark:border-gray-700" />
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                      <i className="uil-stop-circle mr-2"></i> Block
                    </a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div className="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
            <div className="flex lg:flex-row flex-col"> 120k <strong className="lg:pl-2">Posts</strong></div>
            <div className="lg:pl-4 flex lg:flex-row flex-col"> 420k <strong className="lg:pl-2">Followers</strong></div>
            <div className="lg:pl-4 flex lg:flex-row flex-col"> 530k <strong className="lg:pl-2">Following</strong></div>
          </div>

        </div>
      </div>

      <div className="my-6 grid lg:grid-cols-4 grid-cols-2 gap-1.5 hover:text-yellow-700 uk-link-reset">
        {new Array(14).fill('').map((i) => (
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden"
              tabIndex={0}>
              <img src="assets/images/avatars/avatar-lg-1.jpg"
                className="w-full h-full absolute object-cover inset-0" />

              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" className="flex items-center"> 150 </a>
                <a href="#story-modal" className="flex items-center"> 30 </a>
                <a href="#story-modal" className="flex items-center"> 12</a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </Container >
  )
}
