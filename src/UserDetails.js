import React ,{ useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card'

function UserDetails(){
    const [user,setUser] = useState([]);  
    const params=useParams();
    console.log("params",params);
    const api_url=`https://tutorial4-api.herokuapp.com/api/users/${params.id}`;
    useEffect(()=>{
        axios.get(api_url).then(
            (res)=>{
                console.log("user",res.data)
                setUser(res.data.data)
            }
        )
    });
    return  (<div><h1>User Details</h1>
            <div >
            <Card style={{ width: '18rem' ,marginLeft:'42%',marginTop:'5%',boxShadow:'10px 10px 10px 10px'}}>
            <Card.Img  src={user.picture} alt={user.firstName} />
            <Card.Body>
                <Card.Text>
                <p>Title: {user.title}</p>  
                        <p>First Name : {user.firstName}</p>
                        <p>Last Name :{user.lastName}</p>
                        <p>Email : {user.email}</p>
                </Card.Text>
            </Card.Body>
            </Card>            
                </div>
    </div>)
    
    
}

export default UserDetails
