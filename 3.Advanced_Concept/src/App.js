import React, { useState, useEffect } from "react";
import GetUser from "./API"; // Import the GetUser function
import AxiosAPI from "./Axios";
import AxiosExample from "./AxiosExample";
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import PreviousState from "./Hooks/Reference";
import WithoutUseMemo from "./Hooks/Memo";
import SimpleUseCallbackExample from "./Hooks/Callback";
import Counter from "./Hooks/Reducer";
import Calculation from "./Advanced/Calculation";




function App() {
  const [data, setData] = useState([]); // Initialize as an empty array

  // Fetch data when the component mounts
  useEffect(() => {
    GetUser()
      .then((response) => setData(response.results)) // Store fetched user data in state
      .catch((error) => console.error("Error fetching users:", error)); // Handle any errors
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Random Users</h1>

    
      {data.length > 0 ? (
        data.map((user, index) => (
          <div key={index} className="user-card">
           
            <img src={user.picture?.large} alt="User" />
           
            <h2>{user.name?.first} {user.name?.last}</h2>
           
            <p>{user.email}</p>
          
            <p>{user.location?.city}, {user.location?.country}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <State />
      <Effect />
      <PreviousState />
      <WithoutUseMemo />
      <SimpleUseCallbackExample />
      <Counter />
      <Calculation />
      
      
   
      
    {/* <AxiosAPI />
    <AxiosExample /> */}
    </div>
  );
}

export default App;
