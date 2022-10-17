import Sidebar from "./components/Sidebar";
import * as React from "react";
import Search from "./components/forms/Search";
//import Search from "./components/forms/Search";
//import { Route, Routes, Link } from "react-router-dom";
//import LoginForm from "./components/forms/LoginForm";

/*
const Home = () => <h1>Search</h1>;
const Profile = () => <h1>Ingest</h1>;
const Settings = () => <h1>Create_id</h1>;

const routes = [
  {
    path: "/",
    main: () => <Search />,
    sidebar: () => (
      <p>
        This is your home page. You'll see your feed which is made up of the
        people you follow.
      </p>
    )
  },
  {
    path: "/ingest",
    main: () => <Ingest />,
    sidebar: () => (
      <p>
        This is your profile page. You'll be able to see all your profile
        information as well as the people you follow.
      </p>
    )
  },
  {
    path: "/create_id",
    main: () => <Create_Id />,
    sidebar: () => (
      <p>
        This is your settings page. You can change your name, image, and
        anything else associated with your account.
      </p>
    )
  }
]; */

function App() {
  return (
    <div className="main">
     <Sidebar />
     
      {/* <div className="container">
        <h1 className="title">CMS</h1>
        <p className="info">CMS main Page</p>
        <button className="btn">Home Page</button>
       </div> */}

       <Search />

  {/*    

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      */}

    </div>
  )
}

export default App;
