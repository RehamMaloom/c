import { useState } from "react";
import axios from 'axios'
import Grid from "react-bootstrap/Button";
function Home() {
    const [items, setItems] = useState([]);
  
    axios.get("http://localhost:3000/user/home").then((result) => {
      setItems(result.data);
      console.log(items);
    });
    
    return (
      <div>
<Grid>
  {items.map((myList) => (
<Grid>
   <div className="card">
     <img src="https://i.postimg.cc/xTNCk8zr/Image-Placeholder.png" alt="" />
     <div className="info">
       <h4>{myList.name}</h4>
       <h4>{myList.price}</h4>
     </div>
  
  </div></Grid>))}
  </Grid> 
    
      </div>
    );
  }
  export default Home;
  