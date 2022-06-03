import {AuthContext} from "../helper/authContext"
import { useState , useEffect } from "react";
import axios from "axios";


export const BaseMenuOnTop = () => {

    const [authState, setAuthState] = useState({username :"", id : 0 , last_name:"", first_name:"", statusbar:false})

    useEffect(() => {
        axios.get("http://localhost:4000/members/auth", { headers :{ accessToken : localStorage.getItem("accessToken"),
    },
        }).then((response) => {
            if (response.data.error){
                setAuthState({
                    username:"",
                    id : 0 ,
                    last_name:"", first_name:"", 
                    statusbar : false})
                
                // setAuthState({...authState, status:false })

            }else{
                console.log("response.data BaseMenuOnTop")
                console.log(response.data)
                setAuthState({
                    username: response.data.username,
                    id : response.data.id , 
                    last_name: response.data.last_name,
                    first_name: response.data.first_name,
                    statusbar : true ,
                })
            }
        })
    }, []);

    const logout = () => {

        localStorage.removeItem("accessToken")

        setAuthState({
            username:"",
            id : 0 , 
            last_name:"", first_name:"",
            statusbar : false})
        // setAuthState({...authState, status : false})
    }

    
    return (
        <div>
                
        <AuthContext.Provider value={{ authState, setAuthState }}>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="/">Blue Sea NFT</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>

                        {/* {!authState.statusbar && ( */}
                        
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/explore">Explore</a></li>
                            
                        {/* )} */}


                        {!localStorage.getItem("accessToken") && (
                            <>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/login">Sign In</a></li> 
                            </>
                        )}

                        {localStorage.getItem("accessToken") && (
                            <>
                           
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/wallet">My Wallet</a></li> 

                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/profile/{authState.id}">My Profile</a></li>

                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" onClick={logout}>Log Out</a></li>
                        
                            </>
                         )}

                         

                    </ul>

                </div>
            </div>
        </nav>
        
        
        <header className="masthead bg-primary text-white text-center">
         {/* {authState.statusbar = true && (  */}
         {console.log("authState")}
         {console.log(authState)}
         {console.log(authState.last_name)}
         
        {localStorage.getItem("accessToken") && (
            <div className="lead"> Welcome back <h5>{authState.last_name}{authState.username} {authState.id}</h5> </div>
        )}


        {!localStorage.getItem("accessToken") && (
            <div className="container d-flex align-items-center flex-column">
                
                <img className="logo | my-4" src={require('./icon.png')} alt="logo" width={300}/>
                <br/>
                <h1 className="masthead-heading text-uppercase mb-2">Welcome to the future !!!!!</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">***</div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <h5 className="masthead-subheading font-weight-light mb-0">Trading cards - Music - Artwork - Sport and more....</h5>
            </div> )}
        </header> 
        
        </AuthContext.Provider>
        </div>
    )

}

export default BaseMenuOnTop;