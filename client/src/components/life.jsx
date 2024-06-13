import React from 'react'
import Nav from './nav'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import p2 from '../images/2.webp';


function Life() {
  return (
    <div >
      <Nav /><br></br><br></br><br></br>
      <h1 align="center" style={{ fontFamily: "Bahnschrift Light", transform: "scale(1,1.3)", letterSpacing: "3px", fontWeight: "lighter" }} >FIVE/TWO LIFE COACH </h1>

      <hr width="50px" color="#ff4500" fontWeight="bold"></hr>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Walking Together with Accountability and Support</p><br></br>
      <br></br>
      <Card variant='outlined' style={{ width: "1150px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "115px", background: "linear-gradient(rgba(225, 222, 222, 0.5),rgba(225, 222, 222, 0.5))" }}>
        <Grid container marginLeft={'20px'}>
          <Grid item xs={12} md={2.4}>
            <img src={p2} width={200} height={200} alt='hi' />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <h3 style={{ color: "#ff4500", margin: "0px 0px 20px 0px" }}>LIFE COACHING INTRO</h3>
            See the difference a Five/Two Life Coach can have in your life! For the first 5 sessions of 55 minutes each, you'll only pay $50/session. We know after this package is completed you'll already be on your way to accomplishing so many of your goals!
            <br></br><br></br><h3 style={{ transform: "scale(1,1.5)", color: "#ff4500", marginLeft: "840px" }}>$50</h3>
          </Grid>
        </Grid>
      </Card><br></br><br></br>

      <Card variant='outlined' style={{ width: "1150px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "115px", background: "linear-gradient(rgba(225, 222, 222, 0.5),rgba(225, 222, 222, 0.5))", marginBottom: "30px" }}>
        <Grid container marginLeft={'20px'}>
          <Grid item xs={12} md={2.4}>
            <img src={p2} width={200} height={200} alt='hi' />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <h3 style={{ color: "#ff4500", margin: "0px 0px 20px 0px" }}>INDIVIDUAL INTENSIVE LIFE COACHING</h3>
            Let's develop a great day of training for your whole team to reach your goals towards better. We will write, plan, facilitate and lead the entire day to meet your specific needs. Location can be ours your yours!
            <br></br><br></br><h3 style={{ transform: "scale(1,1.5)", color: "#ff4500", marginLeft: "840px" }}>$125</h3>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Life;
