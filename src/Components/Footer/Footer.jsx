const Footer = () => {
    return (
      <footer className="bg-[#0F513A] text-white py-8 mt-14">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h5 className="text-xl font-bold">Kicks Kingdom</h5>
            <p className="text-gray-400">© 2024 kicks Kingdom. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-8 text-center lg:text-left">
            <div className="mb-6 lg:mb-0">
              <h6 className="font-semibold">Company</h6>
              <ul className="list-none">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h6 className="font-semibold">Support</h6>
              <ul className="list-none">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Warranty</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h6 className="font-semibold">Legal</h6>
              <ul className="list-none">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.832 9.832 0 01-2.828.775 4.936 4.936 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482A13.936 13.936 0 011.671 3.149 4.917 4.917 0 003.195 9.722a4.903 4.903 0 01-2.229-.616v.061a4.918 4.918 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.919 4.919 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.912 13.912 0 007.548 2.212c9.058 0 14.01-7.507 14.01-14.009 0-.213-.005-.426-.015-.637a10.012 10.012 0 002.459-2.549l.002-.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.42 3.61 8.07 8.26 8.72v-6.14h-2.48v-2.58h2.48v-1.96c0-2.48 1.48-3.86 3.75-3.86 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56v1.82h2.72l-.43 2.58h-2.29v6.14c4.65-.65 8.26-4.3 8.26-8.72 0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.228 0H1.77C.792 0 0 .79 0 1.77v20.459C0 23.208.792 24 1.77 24H22.23C23.207 24 24 23.208 24 22.229V1.77C24 .79 23.207 0 22.228 0zm-1.397 22.229H3.168V8.833h17.664v13.396zm0-14.736H3.168V3.188h17.664v4.305zm-8.69 1.53c-3.36 0-6.086 2.725-6.086 6.086 0 3.36 2.726 6.085 6.086 6.085s6.086-2.725 6.086-6.085c0-3.361-2.726-6.086-6.086-6.086zm0 9.938c-2.123 0-3.852-1.728-3.852-3.852 0-2.122 1.729-3.852 3.852-3.852s3.852 1.73 3.852 3.852c0 2.124-1.729 3.852-3.852 3.852zm8.167-11.508a1.45 1.45 0 01-2.9 0 1.45 1.45 0 012.9 0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.42 3.61 8.07 8.26 8.72v-6.14h-2.48v-2.58h2.48v-1.96c0-2.48 1.48-3.86 3.75-3.86 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56v1.82h2.72l-.43 2.58h-2.29v6.14c4.65-.65 8.26-4.3 8.26-8.72 0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  