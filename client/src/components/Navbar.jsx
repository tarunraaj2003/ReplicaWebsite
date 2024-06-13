import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {
  const navigate = useNavigate();
  const Home = () => {
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Toolbar style={{}}>
        <IconButton
          sx={{ marginRight: 55 }}
        >
          <Typography style={{ fontFamily: "'Roboto Condensed',Arial,sans-serif", fontSize: "30px", color: "white", fontWeight: "bold", letterSpacing: "2px" }} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => Home()}>
            On the Journey
          </Typography>
        </IconButton>

        <Link style={{ textDecoration: "none" }} to="/"><Button style={{ fontFamily: "Bahnschrift Condensed", color: "white" }}>HOME</Button></Link>
        <Link style={{ textDecoration: "none" }} to="/blog"><Button style={{ fontFamily: "Bahnschrift Condensed", color: "white" }}>BLOG</Button></Link>
        <Link style={{ textDecoration: "none" }} to="/jo"><Button style={{ fontFamily: "Bahnschrift Condensed", color: "white" }}>JOIN THE JOURNEY</Button></Link>
        <Link style={{ textDecoration: "none" }} to="/pre"><Button style={{ fontFamily: "Bahnschrift Condensed", color: "white" }}>FIVE/TWO PRESENTATIONS</Button></Link>
        <Link style={{ textDecoration: "none" }} to="/life"><Button style={{ fontFamily: "Bahnschrift Condensed", color: "white" }}>FIVE/TWO LIFE COACH</Button></Link>
        <Link style={{ textDecoration: "none" }} to="/co"><PersonIcon style={{ paddingLeft: "9px", fontSize: "17px", color: "white" }} /></Link>
      </Toolbar>

    </Box>
  );
}