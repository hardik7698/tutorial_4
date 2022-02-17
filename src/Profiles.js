import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Profiles()
{
    const nav=useNavigate();
    const [userList,setUserList]=useState([]);
    const [searchFirstName,setSearchFirstName]=useState('');
    const [searchLastName,setSearchLastName]=useState('');
    const api_url="https://tutorial4-api.herokuapp.com/api/users/";
    useEffect(() =>{
        axios.get(api_url).then((res)=>{
            setUserList(res.data.data)
    });});


    const handleClick=(id)=>{
            nav(`/Profiles/${id}`)
    };
    return (
        <div>
            <h1>Welcome to Profile Page</h1>
            <label> First Name:<input type="text" name="firstName" placeholder="First Name Search" 
            onChange={e=>{setSearchFirstName(e.target.value)}}/> </label>
            <label> Last Name:<input type="text" name="lastName" placeholder="Last Name Search"
            onChange={e=>{setSearchLastName(e.target.value)}}/> </label>
            <div className="row" style={{marginTop:"1%"}}>
                <div className="row__posters">
            {userList.filter((val)=>{
                    if (searchFirstName == ""  ){
                        return val
                    } else if (val.firstName.toLowerCase().includes(searchFirstName.toLowerCase())){
                        return val
                    } 
            }).filter((val)=>{
                if (searchLastName =="" ){
                    return val
                } else if (val.lastName.toLowerCase().includes(searchLastName.toLowerCase())){
                    return val
                } 
        })
            .map((r) =>(
                
                    <img key={r.id} 
                    src={r.picture} 
                    alt={r.firstName}
                    onClick={()=>handleClick(r.id)}
                    ></img>
          
            )
            
            )}
            </div>
            </div>
        </div>
        
    );
}


export default Profiles;
