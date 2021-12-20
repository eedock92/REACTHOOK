import React from "react"
import ReactDOM from "react-dom";
import useAxios from "./useAxios/useAxios";
import useNotification from "./useNotification/useNotification";


function App() {

 // const image = "./images/cool-background.png";
  const { loading, data, error, refetch} = useAxios({url : "https://yts.am/api/v2/list_movies.json" })
  console.log(`Loading : ${loading} \nError : ${error} \n data : ${JSON.stringify(data)}`);
  return (
    <div>
      <h2>{data && data.status}</h2>
      <button onClick = {refetch}>Refetch</button>
    </div>
  )
}

export default App;
