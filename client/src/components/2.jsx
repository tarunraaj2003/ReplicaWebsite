import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const initialValues = {
  name: "", phoneno: "", email: "", message: ""
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name Is Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  email: Yup.string()
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
  phoneno: Yup.string()
    .required("Phone No Is Required")
    .min(10, "Invalid Number")
    .max(10, "Invalid Number")
    .matches(/^\d+$/, "Only In digits"),
  message: Yup.string()
    .required("Message Is Required")
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


function J() {
  return (
    <div style={{ background: "linear-gradient(rgb(242,243,245),rgb(242,243,245))" }}>
      <br />
      <h1 align="center" style={{ fontFamily: "Bahnschrift Light", transform: "scale(1,1.3)", letterSpacing: "0.5px", fontWeight: "lighter" }} >JOIN THE JOURNEY</h1>

      <hr width="50px" color="#ff4500" fontWeight="bold"></hr><br></br><br></br>

      <Grid container>

        <Grid item xs={8} md={4.1} style={{ marginLeft: "100px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <p style={{ textAlign: "center", lineHeight: "25px" }}>Royal Oak, Michigan, United States <br></br>On the Journey, a Service of Five/Two Association, LLC</p>
          <p style={{ color: '#ff4500', textAlign: "center", lineHeight: "25px" }}><CallIcon fontSize='2px' /> +1-586-381-4987<br></br>
            <MailIcon fontSize='2px' /> JohnTKral@gmail.com</p>
          <p style={{ textAlign: "center", lineHeight: "25px" }}>Wanting to be on the journey with others as we seek to live and grow towards better? Join me by subscribing for updates to the blog and become part of our journeying together community.</p>
        </Grid>

        <Grid item xs={6} md={4.5} style={{ marginLeft: "120px", fontFamily: "Bahnschrift Light", wordSpacing: "2px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>

              <span style={{ paddingLeft: "50px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  id="name"
                  label="Name"
                  helperText={<ErrorMessage name="name" component={Message} />}
                />
              </span><br></br><br></br>

              <span style={{ paddingLeft: "50px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneno"
                  label="Phone"
                  type="phoneno"
                  id="phoneno"
                  helperText={<ErrorMessage name="phoneno" component={Message} />}
                />
              </span><br></br><br></br>

              <span style={{ paddingLeft: "50px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  helperText={<ErrorMessage name="email" component={Message} />}
                />
              </span><br>
              </br><br></br>

              <span style={{ paddingLeft: "50px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  name="message"
                  id="message"
                  label="Message"
                  inputProps={{
                    style: { height: "100px" }
                  }}
                  helperText={<ErrorMessage name="message" component={Message} />}
                />
              </span><br></br>
              <span style={{ paddingLeft: "38px" }}>
                <Checkbox />Subscribe to Journey Updates
              </span><br></br><br></br>
              <span style={{ paddingLeft: "50px" }}>
                <ColorButton
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  JOIN THE JOURNEY
                </ColorButton>
              </span>
            </Form>
          </Formik>
        </Grid>

      </Grid>
      <br />
    </div>
  )
}

export default J;
