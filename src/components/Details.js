import React, { useState, useEffect } from "react";
import "./Details.css";
import { useHistory } from "react-router-dom";
import {get} from "../services/http-service"

export default function Details() {
    const history = useHistory();
    const [currentPost, setCurrentPost] = useState([]);

    useEffect(() => {
        getDetails();
    },[])

    const getDetails = () => {
        setCurrentPost([]);
        get("tempData")
        .then(response => {
            setCurrentPost(response.data);
        })
        .catch(error => console.log(error));
    }


  return (
    <div>
        <div style={{marginBottom:"16px"}}>
            <button type="button" className="backButton"  onClick={() => history.push("/home")}>Back</button>
            <button type="button" className="refreshButton" onClick={() => getDetails()}>Refresh</button>
        </div>
      <table>
        <thead>
          <tr style={{ background: "aquamarine", color: "#fff" }}>
            <th>POST</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
        {!currentPost.length?<tr><td style={{border:"none"}}><h3>Loading......</h3></td></tr>:null}
         {currentPost.map((item, index) => (
            <tr key={index}>
                <td>{item.body}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
          </tr>
         ))}          
        </tbody>
      </table>
    </div>
  );
}
