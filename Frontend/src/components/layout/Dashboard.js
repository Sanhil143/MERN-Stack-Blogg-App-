import React, { useEffect, useState } from "react";
import Header from "./header";
import { getBlogs } from "../../scripts/dashboard";

export default function Dashboard() {
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
    <Header/>
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
    </div>
  );
}
