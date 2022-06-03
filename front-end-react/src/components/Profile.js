
import React , {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export const Profile = () => {

    let {id} = useParams();
     
    const [userlogin , setUserlogin] = useState({});

    useEffect(() =>
        axios.get("http://localhost:4000/members/${id}").then((response)=> {
            setUserlogin(response.data)
    }
    ))

    return (
        <div>
            <div className="lead"> {userlogin.id} </div>
            <div className="lead">{userlogin.last_name}</div>
            <div className="lead">{userlogin.first_name}</div>
        </div>
    )
        
}
export default Profile
