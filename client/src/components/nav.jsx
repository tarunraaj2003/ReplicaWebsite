import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({

  '&:hover': {
    backgroundColor: "#ff4500",
  },
  '&.Active': {
    backgroundColor: "#ff4500",
  },
}));

export default function Nav() {
  const navigate = useNavigate();
  const Home = () => {
    navigate('/')
  }

  return (
    <Card style={{ background: "linear-gradient(rgba(240, 241, 241),rgba(240, 241, 241),rgba(131, 133, 134, 0.5))" }} sx={{ flexGrow: 1 }}>

      <Toolbar>
        <IconButton
          sx={{ marginRight: 55 }}
        >
          <Typography style={{ fontFamily: "'Roboto Condensed',Arial,sans-serif", fontSize: "30px", fontWeight: "bold", color: "black", letterSpacing: "2px" }} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => Home()}>
            On the Journey
          </Typography>
        </IconButton>

        <Link style={{ textDecoration: "none" }} to="/"><ColorButton style={{ fontFamily: "Bahnschrift Condensed", color: "black" }}>HOME</ColorButton></Link>
        <Link style={{ textDecoration: "none" }} to="/blog"><ColorButton style={{ fontFamily: "Bahnschrift Condensed", color: "black" }}>BLOG</ColorButton></Link>
        <Link style={{ textDecoration: "none" }} to="/jo"><ColorButton style={{ fontFamily: "Bahnschrift Condensed", color: "black" }}>JOIN THE JOURNEY</ColorButton></Link>
        <Link style={{ textDecoration: "none" }} to="/pre"><ColorButton style={{ fontFamily: "Bahnschrift Condensed", color: "black" }}>FIVE/TWO PRESENTATIONS</ColorButton></Link>
        <Link style={{ textDecoration: "none" }} to="/life"><ColorButton style={{ fontFamily: "Bahnschrift Condensed", color: "black" }}>FIVE/TWO LIFE COACH</ColorButton></Link>
        <Link style={{ textDecoration: "none" }} to="/co"><PersonIcon style={{ paddingLeft: "9px", fontSize: "17px", color: "black" }} /></Link>
      </Toolbar>

    </Card>
  );
}