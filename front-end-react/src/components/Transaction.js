import {useState , useEffect} from 'react'
// import { format } from 'date-fns';
import axios from 'axios';


export const Transaction = () => {

    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/transactions" , 

            { headers :{ accessToken : localStorage.getItem("accessToken")}} ).then((response) => { 
            
                setTransaction(response.data);
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

        <div style={{height: "400px" , width:"1250px", overflow: "scroll"}}>  
        
        <table class="table table-bordered table-striped table-hover">
    
             <thead class="fixed table-primary text-center">
                <tr>
                    <th>Numero</th>
                    {/* <th>Wallet Buyer</th> */}
                    <th>Name of NFT</th>
                    {/* <th>Transaction object</th>
                    <th>Wallet Seller</th> */}
                    <th>Amount</th>
                    <th>Created At</th>
                   
                </tr>
            </thead>
            <tbody>
               
                {transaction.map((data,key)=> (

                <tr> 

                <td> {data.id} </td>
                {/* <td> {data.transaction.wallet} </td>  */}
                <td> {data.name_NFT} </td> 
                {/* <td> {data.transaction.transaction_objet.label} </td> 
                <td> {data.transaction.wallet} </td> */}
                <td> {data.amount} </td>
                <td> {data.createdAt} </td>
                                 </tr> )
                )}

        
            </tbody>
        </table>

    </div>
    
    </div>
    </div>
    
)
}

export default Transaction