
import React, { useEffect, useState } from "react";
import { getBlogs } from "../../scripts/getBlogs";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

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
    <div className="flex flex-col items-center justify-center">

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="#" className="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania❤️</Link>
          </div>
          <div className="flex md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link to="/home" className="text-gray-600 hover:text-gray-900 mx-4">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 mx-4">Log In</Link>
            <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4">Sign Up</Link>
          </div>

        </div>
      </div>

      {blogs.length > 0 &&
        blogs.map((post) => {
          const { title, category, blog, developedBy, comments } = post;
          return (
            <div key={Math.random()} className="max-w-md rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <div>
                  <p className="text-gray-700 text-base">Created by {developedBy}❤️</p>
                    <div className="font-bold text-xl">{title}</div>
                    <p className="text-gray-700 text-base">{category}</p>
                    <p className="text-gray-700 text-base">{blog}</p>
                    <p className="text-gray-700 text-base">comments: {comments}</p>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { appConfig } from "../../config/config";
// import { getBlogs } from "../../scripts/getBlogs";
// import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     getBlogs()
//       .then((response) => {
//         setBlogs(response.data.data);
//         console.log(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleCommentSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${appConfig.API_URL}/comments/`, {
//         comment: comment
//       });
//       console.log(response.data);
//       setComment("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <Link to="#" className="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania❤️</Link>
//           </div>
//           <div className="flex md:hidden">
//             <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
//               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
//               </svg>
//             </button>
//           </div>
//           <div className="hidden md:flex md:items-center">
//             <Link to="/home" className="text-gray-600 hover:text-gray-900 mx-4">Home</Link>
//             <Link to="/login" className="text-gray-600 hover:text-gray-900 mx-4">Log In</Link>
//             <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4">Sign Up</Link>
//           </div>
//         </div>
//       </div>

//       {blogs.length > 0 &&
//         blogs.map((post) => {
//           const { id, title, category, blog, developedBy, comments } = post;
//           return (
//             <div key={id} className="max-w-md rounded overflow-hidden shadow-lg">
//               <div className="px-6 py-4">
//                 <div className="flex items-center mb-2">
//                   <div>
//                   <p className="text-gray-700 text-base">Created by {developedBy}❤️</p>
//                     <div className="font-bold text-xl">{title}</div>
//                     <p className="text-gray-700 text-base">{category}</p>
//                     <p className="text-gray-700 text-base">{blog}</p>
//                     <p className="text-gray-700 text-base">comments: {comments}</p>
//                   </div>
//                 </div>
//                 <form onSubmit={handleCommentSubmit}>
//                 <input type="text" value={comment} onChange={handleCommentChange} />
//                 <button type="submit" className="bg-black text-white rounded-md">comment</button>
//             {/* <Link to="/comment" className="bg-black text-white rounded-md">comment</Link> */}
//               </form>
                
//               </div>
              
//               </div>
//            );
//          })}
//      </div>
//    );
//  }
