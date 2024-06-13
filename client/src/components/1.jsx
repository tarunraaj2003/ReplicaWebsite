import React from 'react'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import p1 from '../images/1.jpg';
import p2 from '../images/2.png';
import p3 from '../images/3.jpeg';
import p4 from '../images/4.jpg';


function B() {
  return (
    <div>
      <h1 align="center" style={{ fontFamily: "Bahnschrift Light", transform: "scale(1,1.3)", letterSpacing: "0.5px", fontWeight: "lighter" }} >BLOG</h1>

      <hr width="50px" color="#ff4500" fontWeight="bold"></hr><br></br><br></br>
      <Grid container>
        <Grid item xs={8} md={2} style={{ marginLeft: "55px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src={p1} width={300} height={200} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>Two Words.</span><br></br>
          <p style={{ textAlign: "justify" }}>Change is never easy and if I can, I avoid it. Life is hard enough already, do I really want to take a chance for better knowing it's going to be harder?</p>
          <br></br>
          <Link style={{ textDecoration: "none", color: "#ff4500", fontWeight: "bold" }}>Read More</Link>
        </Grid>

        <Grid item xs={8} md={2.5} style={{ marginLeft: "90px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src={p2} width={300} height={200} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>The Journey at the Little Purple House</span><br></br>
          <p style={{ textAlign: "justify" }}>My journey seems to go forwards and backwards, how about yours? Yet... I'm learning there really is no backwards journey.</p>
          <br></br>
          <Link style={{ textDecoration: "none", color: "#ff4500", fontWeight: "bold" }}>Read More</Link>
        </Grid>

        <Grid item xs={8} md={2} style={{ marginLeft: "35px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src={p3} width={300} height={200} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>You're Wrong</span><br></br>
          <p style={{ textAlign: "justify" }}>Did reading those two words make you want to comment on this post already? Good! It's because, you're wrong.</p>
          <br></br>
          <Link style={{ textDecoration: "none", color: "#ff4500", fontWeight: "bold" }}>Read More</Link>
        </Grid>

        <Grid item xs={8} md={2} style={{ marginLeft: "90px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <img src={p4} width={300} height={200} alt='hi' /><br></br><br></br>
          <span style={{ color: '#ff4500', fontWeight: "bold" }}>Here we Go</span><br></br>
          <p style={{ textAlign: "justify" }}    >I'm not sure where this will go, but I'm ready to take the risk and start this journey, together.</p>
          <br></br>
          <Link style={{ textDecoration: "none", color: "#ff4500", fontWeight: "bold" }}>Read More</Link>
        </Grid>

      </Grid>
      <br />
    </div>
  )
}

export default B
