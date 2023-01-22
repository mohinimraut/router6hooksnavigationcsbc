import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  // const navToPage =(url)=>{
  //   navigate(url)
  // }

  // ----------
  // conditional routing
  const navToPage = () => {
    let x = true;
    if (x) {
      navigate('/about')
    } else {
      navigate('/filter')
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Thiss is a Home page of our awesome App</p>
      <p>And here we are learning about Router</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      {/* <button onClick={()=>{navigate('/about')}}>Go to About Page</button>
      <button onClick={()=>{navigate('/filter')}}>Go to Filter Page</button> */}

      {/* conditional routing */}

      <button onClick={() => navToPage()}>Go to About Page</button>

      <button onClick={() => navToPage()}>Go to Filter Page</button>


      {/* <buttton onClick={navToPage('/about')}>Go to About Page</buttton>
      <button onClick={navToPage('/filter')}>Go to Filter Page</button> */}
      <br />
    </div>
  )
}

export default Home
