import React, { useState, useEffect } from "react";
import Sock from "./components/Sock";
import sock_data from './assets/sock.json';
import promo_data from './assets/promo.json';
import Footer from "./components/Footer";
import Search from "./components/Search";
import Promotion from "./components/Promotion";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from "./components/About";
import Featured from "./components/Featured";
import AddSock from "./components/AddSock";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SOCKS_API_URL);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error('Error fetching socks:', error);
      }
    };

    fetchData();
  }, []);
  

  const handleDelete = async (sockId) => {
    try {
      // Make an API request to delete the sock with the given sockId
      const response = await fetch(`${import.meta.env.VITE_SOCKS_API_URL}/${sockId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Sock could not be deleted!');
      }
      // Update the state or fetch the updated data from the server
      const updatedData = data.filter(sock => sock._id !== sockId); // Remove the deleted sock from the data array
      setData(updatedData); // Update the state with the updated data
    } catch (error) {
      console.error('Error deleting sock:', error);
    }
  };

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">TSE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/add">
                    Add Sock
                  </Link>
                </li>
              </ul>
              <Search setData={setData} />
            </div>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

          <div className="container-fluid">
            <div className="row">
              <Featured data={promo_data} />
              <hr />
              <Routes>
                <Route exact path="/" element={<Home data={data} handleDelete={handleDelete} />} />
                <Route path="/about" element={<About />} />
                <Route path="/add" element={<AddSock />} />
              </Routes>
              <footer className={import.meta.env.VITE_ENVIRONMENT === "development" ? "bg-yellow" : import.meta.env.VITE_ENVIRONMENT === "production" ? "bg-green" : ""}>
                <div><strong>{import.meta.env.VITE_ENVIRONMENT.toUpperCase()}</strong></div>
              </footer>
            </div>
          </div>
        </main>
      </Router>
    </>
  )
}

export default App
