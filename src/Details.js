import React, { useState, useEffect } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import img from './personal-info-data-user-profile-card-details-symbol-with-call-icon-flat-design-vector-illustration_662353-806.jpg';

export default function Details() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setstreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [company, setCompany] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');

  const [data, setData] = useState([])

  let {id} = useParams();

  //console.log(id)
  


  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      
      setData(res.data)
      setUsername(res.data.username);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setstreet(res.data.address.street);
      setSuite(res.data.address.suite);
      setCity(res.data.address.city);
      setZipcode(res.data.address.zipcode);
      setCompany(res.data.company.name);
      setCatchPhrase(res.data.company.catchPhrase);
    });
  },[id]);

  return (
    <div className="main-detail">
      <h1>Detail of Person</h1>
      {
        <div className="main-box">
          <img className="img" src={img} alt="" />

          <h3>Username: {username}</h3>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Street: {street} </h3>
          <h3>Suite: {suite}</h3>
          <h3>City: {city}</h3>
          <h3>Zipcode: {zipcode}</h3>
          <h3>Company: {company}</h3>
          <h5>:: {catchPhrase}</h5>
        </div>
      }
    </div>
  );
}
