import React, { useEffect, useState } from "react";
import { getBlogs} from "../../scripts/getBlogs";
import Logout from "./logout";


export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        setBlogs(response.data.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <div>
     {/* <Logout/> */}
      {blogs.length > 0 &&
        blogs.map((post) => {
          const { title, category } = post;
          return (
            <div key={Math.random()}>
              <div className="max-w-md rounded overflow-hidden shadow-lg">
                <img className="w-full" src="recipe-image.jpg" alt="Recipe Image" />
                <div className="px-6 py-4">
                  <div className="flex items-center mb-2">
                    <div>
                      <div className="font-bold text-xl">{title}</div>
                      <p className="text-gray-700 text-base">{category}</p>
                    </div>
                  </div>
                  <ul className="list-disc ml-5 mb-4">
                    <li>Recipe Item 1</li>
                    <li>Recipe Item 2</li>
                    <li>Recipe Item 3</li>
                  </ul>
                  <p className="text-gray-700 text-base mt-4">Recipe Procedure:</p>
                  <p className="text-gray-700 text-base">Developed by BlogMania❤️</p>
                </div>
              </div>
            </div>
          );
        })} 
        {/* <div class="flex flex-col lg:flex-row h-screen bg-gray-100">
  <div class="bg-white shadow-lg lg:w-64">
    <div class="flex justify-between items-center p-6">
      <a href="#" class="text-lg font-bold text-gray-800 hover:text-gray-900">Logo</a>
      <button class="lg:hidden focus:outline-none">
        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-600 hover:text-gray-800">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
        </svg>
      </button>
    </div>
    <nav class="text-gray-600">
      <a href="#" class="block py-4 px-6 hover:bg-gray-200">Blogs</a>
      <a href="#" class="block py-4 px-6 hover:bg-gray-200">Posts</a>
      <a href="#" class="block py-4 px-6 hover:bg-gray-200">Categories</a>
      <a href="#" class="block py-4 px-6 hover:bg-gray-200">Tags</a>
    </nav>
  </div>
  <div class="flex-grow p-8">
    <h1 class="text-2xl font-bold mb-8">Blogs</h1>
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="bg-white shadow-md p-6 flex-1">
        <h2 class="text-lg font-bold mb-4">Total Posts</h2>
        <p class="text-2xl font-bold">25</p>
      </div>
      <div class="bg-white shadow-md p-6 flex-1">
        <h2 class="text-lg font-bold mb-4">Total Categories</h2>
        <p class="text-2xl font-bold">8</p>
      </div>
      <div class="bg-white shadow-md p-6 flex-1">
        <h2 class="text-lg font-bold mb-4">Total Tags</h2>
        <p class="text-2xl font-bold">12</p>
      </div>
    </div>
  </div>
</div> */}



    </div>
  );
}
