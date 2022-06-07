import React, { useState } from "react";

function FetchApi() {
  const [data, setData] = useState([]);

  const ApiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

 

  return (
    <div>
      Api <br />
      <button onClick={ApiGet}>Fetch Api</button>
      <br />
       <pre>{JSON.stringify(data, null, 2)}</pre> 
      
    </div>
  );
}

export default FetchApi;
