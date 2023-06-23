import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from 'react';

export default function Header() {
    const [ pageState, setPageState ] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user)=> {
            if (user) {
                setPageState("Profile")
            }
            else setPageState("Sign in")
        })
    }, [auth])

    function pathMatchRoute (route) {
        if (route === location.pathname) {
            return true
        }
    }
  return (
    <div className="font-serif bg-white border-b shadow-sm sticky">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
            <img src="https://i.ibb.co/ftd8S6c/preview2.jpg" alt="logo" border="0" className="h-14 cursor-pointer "
            onClick={()=> navigate("/")}/>
            </div>
            <div>
                <ul className="flex  space-x-10">
                    <li className= {`py-4 cursor-pointer text-lg font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/") && "text-black border-b-red-600"}`} 
                     onClick={()=> navigate("/")}>Home</li>
                    <li className= {`py-4 cursor-pointer text-lg font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/offers") && "text-black border-b-red-600"}`} 
                    onClick={()=> navigate("/offers")} >Offers</li>
                    <li className= {`py-4 cursor-pointer text-lg font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${
                    (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-600"}`}
                    onClick={()=> navigate("/profile")}>
                    {pageState}
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
