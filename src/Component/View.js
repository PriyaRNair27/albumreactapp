import axios from 'axios'
import React, { useState } from 'react'
//import Header from './Header'

const View = () => {
    var  [viewlist,setviewlist]=useState([])

var [loadstatus,setloadstatus] =useState([])   
axios.get("https://jsonplaceholder.typicode.com/albums").then(
    (response)=>{

        console.log(response.data)
        setviewlist(response.data) 
        setloadstatus(false)
    })
    
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
   
                   {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:
                <table class="table table-success ">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
    
    </tr>
  </thead>
  <tbody>
      {viewlist.map((value,key)=>
      {
          return<tr>
      
    
      
      <td>{value.id}</td>
      <td>{value.title}</td>
      
    </tr>
    })}
  </tbody>
</table>}
                </div>
                </div>
                </div></div>
                </div>

    </div>
  )
}

export default View