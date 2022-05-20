import axios from 'axios'
import React, { useState } from 'react'
//import Header from './Header'

const Addalbum = () => {
    var [id,setid]=useState("")
    var [title,settitle]=useState("")
    
    const subdata=()=>{
        const data={"id":id,"title":title}
    console.log(data)
    axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then(
        (response)=>
        {
            console.log(response.data)
            if(response.data.status=="success")
            {
                alert("successfully inserted")
            }
            else
            {
                alert("failed ")
            }
        
        }
    )
    }
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">ID</label>
                    <input onChange={(c)=>{setid(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">TITLE</label>
                    <input  onChange={(c)=>{settitle(c.target.value)}} type="courseDate" name="" id="" className="form-control"/>
                </div>
                
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <button  onClick={subdata}className="btn btn-success">ADD ABLUM</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addalbum