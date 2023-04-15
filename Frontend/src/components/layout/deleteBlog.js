import axios from "axios";
import { useParams,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { appConfig } from "../../config/config";



const DeleteBlog = () => {
      const {blogId} = useParams();
      const history = useHistory();
      let token = localStorage.getItem("token");

      axios.delete(`${appConfig.API_URL}/blogs/${blogId}`,
      {headers:{"x-auth-key":token}})
      .then((res) =>{
            console.log(res);
            alert("blod deleted successfully")
            history.push('/userBlog')
      })
      .catch((err) => {
            console.log(err)
      })
}

export default DeleteBlog