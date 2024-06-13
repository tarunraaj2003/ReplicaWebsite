import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, Card } from '@mui/material';
import p1 from '../images/1.webp';


function P() {
  return (
    <div >
      <h1 align="center" style={{ fontFamily: "Bahnschrift Light", transform: "scale(1,1.3)", letterSpacing: "3px", fontWeight: "lighter" }} >FIVE/TWO PRESENTATIONS </h1>

      <hr width="50px" color="#ff4500" fontWeight="bold"></hr>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Speaking to Your Head and Your Heart Toward Better.</p><br></br>
      <div>
        <Button variant='contained' style={{ color: "white", backgroundColor: "#ff4500", marginLeft: "590px", textTransform: "capitalize" }}>Business</Button>
        <Button variant='outlined' style={{ color: "#ff4500", marginLeft: "10px", borderColor: "#ff4500", textTransform: "capitalize" }}>Church</Button>
      </div><br></br><br></br>
      <Card variant='outlined' style={{ width: "1150px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "115px", background: "linear-gradient(rgba(225, 222, 222, 0.5),rgba(225, 222, 222, 0.5))" }}>
        <Grid container marginLeft={'20px'}>
          <Grid item xs={12} md={2.4}>
            <img src={p1} width={200} height={200} alt='hi' />
          </Grid>
          <Grid item xs={12} md={9}>
            <h3 style={{ color: "#ff4500", margin: "0px 0px 20px 0px" }}>BUSINESS & TEAM BUILDING</h3>
            Looking for an engaging presentation to help drive sales, build team unity or connect everyone to your mission and purpose? Five/Two Presentations will create a unique presentation for you and your team of 5 to 5000 to meet your specific goals.
            <br></br><br></br><h3 style={{ transform: "scale(1,1.5)", color: "#ff4500", marginLeft: "840px" }}>$800</h3>
          </Grid>
        </Grid>
      </Card><br></br><br></br>

      <Card variant='outlined' style={{ width: "1150px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "115px", background: "linear-gradient(rgba(225, 222, 222, 0.5),rgba(225, 222, 222, 0.5))", marginBottom: "30px" }}>
        <Grid container marginLeft={'20px'}>
          <Grid item xs={12} md={2.4}>
            <img src={p1} width={200} height={200} alt='hi' />
          </Grid>
          <Grid item xs={12} md={9}>
            <h3 style={{ color: "#ff4500", margin: "0px 0px 20px 0px" }}>TRAINING</h3>
            Let's develop a great day of training for your whole team to reach your goals towards better. We will write, plan, facilitate and lead the entire day to meet your specific needs. Location can be ours your yours!
            <br></br><br></br><h3 style={{ transform: "scale(1,1.5)", color: "#ff4500", marginLeft: "840px" }}>$2000</h3>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default P;
