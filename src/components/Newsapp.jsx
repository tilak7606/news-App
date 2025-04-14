import React, { useEffect, useState } from 'react'
import Card from './Card';

const Newsapp = () => {

  const [search,setSearch] = useState("india");
  const [newsData,setNewsData] = useState([]);
  const API_KEY = "321a3bda653e46e1ac254201b37fba5c";

  const getData = async() => {
    if(search != ""){
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    // console.log(jsonData.articles[0]);
    setNewsData(jsonData.articles);
    }
  }

  const handelChange = (e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
    
  }

  useEffect(()=>{
    getData();
  },[,search])

  const userEvent = (event) => {
    setSearch(event.target.value);
  }



  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-3xl font-bold">Trendy News</h1>

          <ul className="flex gap-6">
            <a href="#" className="hover:text-gray-300">All News</a>
            <a href="#" className="hover:text-gray-300">Trending News</a>
          </ul>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <input 
            onChange={handelChange}
              type="text" 
              placeholder="Search News" 
              value={search}
              className="px-4 py-2 rounded-md text-black bg-white w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <button onClick={getData} className="bg-white text-blue-800 px-4 py-2 rounded-md hover:bg-gray-200">
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Tagline */}
      <div className="text-center text-xl font-semibold text-gray-700 mt-6">
        Stay Updated with Trendy News
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200" onClick={userEvent} value={"sports"}>Sports</button>
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200"  onClick={userEvent} value={"politics"}>Politics</button>
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200" onClick={userEvent} value={"entertainment"}>Entertainment</button>
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200" onClick={userEvent} value={"fitness"}>Fitness</button>
        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200" onClick={userEvent} value={"health"}>Health</button>
      </div>

      {/* Card Section */}
   
      <div className="mt-8 px-4">
        
        <Card data={newsData} />
      </div>
    </div>
  )
}

export default Newsapp;
