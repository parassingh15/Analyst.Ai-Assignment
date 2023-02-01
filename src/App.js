import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
      setDatas(res.data);
    });
  }, []);

  const handleClick = (id) => {
    console.log(id)
    // Navigate(`/${id}`)
  }

  return (
    <div className="main-div">
      <nav className="navbar navbar-dark bg-primary">
        <h1 className="navbar-head">Analystt.AI</h1>
      </nav>

      {datas.map((item) => {
        return (
          <div className="base" key={item.id}>
            <div className="list">
              <div className="first-div">
                <p>{item.username}</p>
              </div>

              <div className="second-div">
                <h6>CONTACT</h6>
                <p>{item.name}</p>
              </div>

              <div className="third-div">
                <h6>CITY</h6>
                <p>{item.address.city}</p>
              </div>

              <div className="fourth-div">
                <h6>STATE</h6>
                <p>{item.address.street}</p>
              </div>

              
              <div className="fifth-div">
              
                <button type="button" className="btn btn-danger" onClick={() => handleClick(item.id)} >
                <Link style={{textDecoration: 'none', backgroundColor: 'red', color: 'white'}} to={`/${item.id}`}>
                  View Details
                  </Link>
                </button>
                
              </div>
              
            </div>
          </div>
        );
      })}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
           {/* eslint-disable-next-line  */}
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li className="page-item">
           {/* eslint-disable-next-line  */}
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
           {/* eslint-disable-next-line  */}
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default App;