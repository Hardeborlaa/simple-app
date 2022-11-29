import React, {Component} from "react";
import { Link } from "react-router-dom";

class Register extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      showDetails: false
    }
  }

  nameInput = (event) => {
    this.setState({name:event.target.value})
  }

  emailInput = (event) => {
    this.setState({email:event.target.value})
  }
  passwordInput = (event) => {
    this.setState({password:event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showDetails: true})
  };

  render(){
    const { name, email, password,showDetails} = this.state
    return(
      <div className="bg-gray-100 pt-5 pb-10">
        <nav>
          <Link className="pl-10 text-3xl" to='/'>Home</Link>
        </nav>
        <section className="bg-gray-50">
          <div className="h-screen flex items-center justify-center mx-auto">
              <div className="w-full bg-white rounded-lg max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="space-y-6 p-8">
                      <h1 className="text-3xl font-bold">
                          Create an account
                      </h1>
                      <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input onChange={this.nameInput} type="text" name="name" id="name" className="bg-gray-50 border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700" placeholder="Enter name" required="required"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input onChange={this.emailInput} type="email" name="email" id="email" className="bg-gray-50 border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700" placeholder="Enter email" required="required"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={this.passwordInput} type="password" name="password" id="password" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="required"/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="term" aria-describedby="term" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-2 text-sm">
                              <label htmlFor="term" className="dark:text-gray-400 text-light">I accept the <a className="font-medium text-primary-600 underline hover:text-blue-700" href="/">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" onClick={this.handleSubmit} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline hover:text-blue-700 dark:text-primary-500">Login</Link>
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

export default Register