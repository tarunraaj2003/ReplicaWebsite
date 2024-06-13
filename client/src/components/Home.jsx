import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from "axios"

const initialValues = {
  name: "", phoneno: "", email: ""
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
})

const onSubmit = (values, onSubmitProps) => {
  let data={
    name:values.name,
    email:values.email,
    phone:values.phoneno
  }
  axios.post("http://localhost:4000/send",data)
  .then(res=>{
    console.log(res.data);
    alert(res.data);
    onSubmitProps.resetForm();
  }).catch((error)=>{
    console.log(error);
    alert("Not sent")
  })
}

const ColorButton = styled(Button)(({ theme }) => ({

  backgroundColor: "#ff4500",
  '&:hover': {
    backgroundColor: "#ff4500",
  },
}));

function Home() {
  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "6.5cm", fontSize: "20px", fontFamily: "Advent Pro SemiBlood", letterSpacing: "9px", fontWeight: "bold", paddingLeft: "40px", color: "white" }}>
        TheJourneyisBetter,Together.
      </div>
      <div style={{ textAlign: "center", paddingTop: "0.5cm", fontSize: "60px", fontFamily: "Advent Pro SemiBlood", fontWeight: "bold", transform: "scale(1,1.5)", color: "white" }}>
        Let's Go
      </div><br></br><br></br>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            <Card variant='outlined' style={{ width: "1230px", paddingTop: "0.65cm", paddingBottom: "0.65cm", marginLeft: "65px", background: "linear-gradient(rgba(188, 186, 186, 0.5),rgba(188, 186, 186, 0.5))" }}>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                <Grid item xs={12}>
                  <span style={{ paddingLeft: "15px" }}>
                    <Field
                      as={TextField}
                      name="name"
                      id="name"
                      label="Name"
                      sx={{
                        height: "54px", width: "250px", backgroundColor: "#fafafa",
                        '&:hover': {
                          backgroundColor: "#fafafa",
                        }
                      }}
                      helperText={<ErrorMessage name="name" component={Message} />}
                    />
                  </span>

                  <span style={{ paddingLeft: "50px" }}>
                    <Field
                      as={TextField}
                      name="phoneno"
                      label="Phone"
                      type="phoneno"
                      id="phoneno"
                      sx={{
                        height: "54px", width: "250px", backgroundColor: "#fafafa",
                        '&:hover': {
                          backgroundColor: "#fafafa",
                        }
                      }}
                      helperText={<ErrorMessage name="phoneno" component={Message} />}
                    />
                  </span>

                  <span style={{ paddingLeft: "50px" }}>
                    <Field
                      as={TextField}
                      id="email"
                      label="Email address"
                      name="email"
                      sx={{
                        height: "54px", width: "250px", backgroundColor: "#fafafa",
                        '&:hover': {
                          backgroundColor: "#fafafa",
                        }
                      }}
                      helperText={<ErrorMessage name="email" component={Message} />}
                    />
                  </span>
                  <span style={{ paddingLeft: "50px" }}>
                    <ColorButton
                      type="submit"
                      variant="contained"
                      sx={{ height: "54px", width: "250px" }}
                    >
                      Contact John
                    </ColorButton>
                  </span>
                </Grid>
              </Grid>
            </Card>
          </Form>
        </Formik>

      </div>
    </>
  )
}

export default Home
