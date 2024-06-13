import React from 'react'
import Nav from './nav'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { styled } from '@mui/material/styles';
import p1 from '../images/4.png';
import p2 from '../images/5.png';

const initialValues = {
  email: ""
}

const validationSchema = Yup.object({

  email: Yup.string()
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
})

const onSubmit = (values, onSubmitProps) => {
  onSubmitProps.resetForm();
}

const ColorButton = styled(Button)(({ theme }) => ({

  backgroundColor: "#ff4500",
  '&:hover': {
    backgroundColor: "#ff4500",
  },
}));


function Contact() {
  return (
    <div >
      <Nav /><br></br><br></br><br></br>
      <h1 align="center" style={{ fontFamily: "Bahnschrift Light", transform: "scale(1,1.3)", letterSpacing: "0.5px", fontWeight: "lighter" }} >CLIENT ZONE</h1>

      <hr width="50px" color="#ff4500" fontWeight="bold"></hr><br /><br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Card variant='outlined' style={{ width: "400px", height: "400px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "480px", background: "linear-gradient(rgba(225, 222, 222, 0.5),rgba(225, 222, 222, 0.5))" }}>
            <Grid container spacing={2} style={{ textAlign: "center" }}>
              <Grid item xs={12}>
                <span style={{ fontWeight: "bold" }}>Please enter your email:</span><br /><br />
                <span>
                  <Field
                    as={TextField}
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    sx={{
                      height: "56px", width: "350px", backgroundColor: "#fafafa",
                      '&:hover': {
                        backgroundColor: "#fafafa",
                      }
                    }}
                    helperText={<ErrorMessage name="email" component={Message} />}
                  />
                </span><br /><br />
                <span>
                  <ColorButton
                    type="submit"
                    variant="contained"
                    sx={{ height: "56px", width: "190px", fontSize: "13px" }}
                  >
                    Request Login Code
                  </ColorButton>
                </span>
                <br /><br /><hr width="330px" color='lightgrey'></hr><br />
                Or Log in Using<br></br><br />

                <img src={p2} style={{ marginBottom: "-11px" }} width={50} height={50} alt='bi' />
                <Button style={{ backgroundColor: "#3b5998", width: "200px", height: "50px", marginBottom: "20px", marginRight: "20px", borderRadius: "0px" }}>
                  <p style={{ textTransform: "capitalize", color: "white" }}>Login with Facebook</p>
                </Button><br></br>

                <img src={p1} style={{ marginBottom: "49px" }} width={50} height={50} alt='bi' />
                <Button style={{ backgroundColor: "#ea4335", width: "200px", height: "50px", marginBottom: "140px", marginRight: "20px", borderRadius: "0px" }}>
                  <p style={{ textTransform: "capitalize", color: "white" }}>Login with Google</p>
                </Button>

              </Grid>
            </Grid>
          </Card>
        </Form>
      </Formik><br></br>
    </div>
  )
}

export default Contact;
