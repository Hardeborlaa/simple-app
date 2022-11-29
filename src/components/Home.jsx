import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return(
      <div className='bg-blue-100 px-5 py-6 h-screen'>
        <div>
            <Link className="text-4xl" to='/signin'>Signin</Link>
            <Link className="p-5 text-2xl" to='/register'>Register</Link>
        </div>
        <div className="text-center">
            <h1 className="text-5xl mt-20">Hello, Welcome to my page</h1>
        </div> 
      </div>
    )
}

export default Home