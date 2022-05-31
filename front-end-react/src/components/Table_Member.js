import {useState , useEffect} from 'react'
// import { format } from 'date-fns';
import axios from 'axios';

import Create_Acc from './Create_Acc';

import { Link } from 'react-router-dom';


export const Table_Member = () => {

    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/members").then((response) => { 
            setMember(response.data);
        }
        )
    }, [])


    // const [query,setQuery] = useState('') 

    
    // const searchNft = (nameNft) => {
    //     setQuery(nameNft.target.value)}

    // const lowerCased = query.toLowerCase();

    // const listNft = posts.filter(nameNft => {
    //     return (
    //         nameNft.title.toLowerCase().includes(lowerCased)
    //     )
    // })

    
    
    // const selectType = (typeNft) => {
    //     setQuery(typeNft.target.value)
    // }

    // const listTypeNft = posts.filter(typeNft => {
    //     return (
    //         typeNft.type.includes(query)
    //     )
    // })


return (
    <div class="container">



    <div class= "container | my-4">

        {/* <div style="height: 500px; width:1180px; overflow: scroll;">   */}
        
        <table class="table table-bordered table-striped table-hover">
    
             <thead class="fixed table-primary text-center">
                <tr>
                    <th>Numero</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Updated At</th> 
                </tr>
            </thead>
            <tbody>
               
                {member.map((post,key)=> (

                <tr> 

                <td> {post.id} </td>
                <td> {post.username} </td> 
                <td> {post.first_name} </td> 
                <td> {post.last_name} </td> 
                <td> {post.email} </td>
                <td> {post.createdAt} </td>
                <td> {post.updatedAt} </td>
                                 </tr> )
                )}

        
            </tbody>
        </table>

        

    </div>

    <Link to="/createAcc"> Create A New Account</Link>

    

    
    </div>
    
)
}

export default Table_Member