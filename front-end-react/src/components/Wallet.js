import { useState , useEffect } from "react"
import { Routes , Route , NavLink } from "react-router-dom"
import { Explore } from "./Explore"
import { Form } from "./Form"
import { Test } from "./Test"

export const Wallet= () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli')
        .then((response) => response.json())
        .then((data) => setPosts(data.results))
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    return(

        
        <div className="container">
            
            <div className="text-center">Your Profile</div>
            <div className="text-center">Number of your wallet : hashedNumber</div>
            <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/wallet/collected" className="nav-link" activeClassName="active">
                Collected  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wallet/created" className="nav-link" activeClassName="active">
                Created
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wallet/favorited" className="nav-link" activeClassName="active">
                Favorited
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wallet/hidden" className="nav-link" activeClassName="active">
                Hidden
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wallet/activity" className="nav-link" activeClassName="active">
                Activity
              </NavLink>
            </li>
          </ul>


        <div className="container py-3 py-md-5">
            
        <Routes>
            <Route path="/wallet/colleted" element={<Test />} />

            <Route path="/wallet/created" element={<Explore />} />
{/* 
            <Route path="/wallet/created" element={<Form />} />

            <Route path="/wallet/hidden" element={<Explore />} />

            <Route path="/wallet/activity" element={<Form />} /> */}

        </Routes>
        
      </div>
     

        </div>

        
    )

}