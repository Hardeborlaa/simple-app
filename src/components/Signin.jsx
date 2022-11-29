import React, {Component} from "react";
import quotes from "./quote";
import { Link } from "react-router-dom";

// function Signin () {
class Signin extends Component{
    constructor(props){
        super(props)
        this.state= {
            quote: quotes[0].quote,
            author: quotes[0].author,
            email: '',
            password: '',
            showDetails: false
        };
    }
    
    componentDidMount = () => {
        setInterval(() => {
            const randomNumber = Math.floor(Math.random() * quotes.length);  
            this.setState({
                quote: quotes[randomNumber].quote,
                author: quotes[randomNumber].author
            });
        }, 3000);
    }

    emailInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    submitInputs = (event) => {
        event.preventDefault()
        this.setState({
            showDetails: true
        })
    }

    render(){
    const {quote, author, email, password,showDetails} = this.state
    return(
        <div>
            <nav className="bg-blue-100">
            <Link className="text-2xl" to='/'>Home</Link>
            <Link className="p-5 text-2xl" to='/register'>Register</Link>
            </nav>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="text-center font-bold text-gray-900 text-3xl dark:text-white">
                    {quote} <br/><i className="text-md text-xl">{author}</i>
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 p-8">
                            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input onChange={this.emailInput} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={this.passwordInput} type="password" name="password" id="password" placeholder="******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/" className="text-sm font-medium text-white hover:underline dark:text-white-500">Forgot password?</a>
                                </div>
                                <button onClick={this.submitInputs} className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600">Sign in</button>
                                <p className="font-light text-gray-500">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    }
}

export default Signin