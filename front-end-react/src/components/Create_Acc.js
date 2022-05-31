import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {Formik , Form , Field , ErrorMessage} from 'formik';

import * as Yup from 'yup';


function Create_Acc() {

    let navigate = useNavigate();

    const value = {
        first_name : "",
        last_name : "",
        email : "",
        username :"",
        password:""
    }

    const validationValue = Yup.object().shape({
        first_name : Yup.string().required("You must input your First Name"),
        last_name : Yup.string().required("You must input your Last Name"),
        email : Yup.string().required("You must input your Email"),
        username : Yup.string().min(3).max(20).required(),
        password : Yup.string().min(5).max(20).required(),
    });

    const onSubmit = (data) => {

            axios.post("http://localhost:4000/members/register", data).then((response) => { 
            
            console.log("A new member was created");

            if(response.data.error){
                alert(response.data.error)
              }else{
                alert("Your account was created")
                navigate('/login');
              }
        });
    };



return (
    <div className ="form-control form-floating form-label form-text">
        <h2 className='text-secondary text-center | my-4'>CREATE A NEW ACCOUNT</h2>
       

        <Formik 
            initialValues = {value}
            onSubmit= {onSubmit}
            validationSchema={validationValue}
            >

            <Form>
                <div className="form-input form-label form-text form-control">
                    <div className='col'>
                        <div className='row'>
                            <div>
                                <label className='text-primary'>First Name</label> <br/>
                                <ErrorMessage className='text-danger' name = "first_name" component="span"/>
                            </div>

                            <div>
                                <Field className='col-sm-3'
                                autoComplete="off"
                                id = "inputCreateAcc"
                                name="first_name"
                                placeholder = "Your first name is ...."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="form-input form-label form-text form-control">
                    <div className='col'>
                        <div className='row'>
                            <div>
                                <label className='text-primary'>Last Name</label> <br/>
                                <ErrorMessage className='text-danger' name="last_name" component="span"/>
                            </div>
                            <div>
                            
                                <Field className='col-sm-3'
                                    autoComplete="off"
                                    id = "inputCreateAcc"
                                    name="last_name"
                                    placeholder = "Your last name is ...."
                                />
                            </div>
                         </div>
                    </div>
                </div>


                <div className="form-input form-label form-text form-control">
                    <div className='col'>
                        <div className='row'>
                            <div>

                                <label className='text-primary'>Email</label> <br/>
                                <ErrorMessage className='text-danger' name="email" component="span"/>
                            </div>
                            
                            <div>
                                <Field className ='col-sm-3'
                                    autoComplete="off"
                                    id = "inputCreateAcc"
                                    name="email"
                                    type="email"
                                    placeholder = "Your email is ...."
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-input form-label form-text form-control">
                    <div className='col'>
                        <div className='row'>
                            <div>
                                <label className='text-primary'>Username</label> <br/>
                                <ErrorMessage className='text-danger' name="username" component="span"/>
                            </div>
                            <div>
                                <Field className='col-sm-3'
                                    autoComplete="off"
                                    id = "inputCreateAcc"
                                    name="username"
                                    placeholder = "Choose your username..."
                                />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-input form-label form-text form-control">
                    <div className='col'>
                        <div className='row'>
                            <div>
                                <label className='text-primary'>Password</label> <br/>
                                <ErrorMessage className='text-danger' name="password" component="span"/>
                            </div>

                            <div>
                                <Field className='col-sm-3'
                                    autoComplete="off"
                                    id = "inputCreateAcc"
                                    name="password"
                                    type="password"
                                    placeholder = "Your password is at least 5 characters"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col | my-4'>
                <button className='btn-lg btn-primary' type='submit'>Create New Account</button>
                </div>
            </Form>

        </Formik>

        {/* <button onClick={() => navigate('/login')} className="btn-lg btn-block btn-danger">Log In here !!!</button> */}
      
    

        {/* onClick={() => navigate('/login')} */}

    </div>
    
    
)

}
export default Create_Acc