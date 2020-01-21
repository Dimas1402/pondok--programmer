import React from 'react'
import {Formik} from "formik"
import * as Yup from 'yup'
import Error from './error'
import "./Login.scss"
import NavbarTwo from '../Navbar/Navbar-two'



const validationSchema = Yup.object().shape({
    email:Yup.string()
    .email('Must be a valid email address')
    .max(255,'Must be shorter than 255')
    .required('Must enter a email'),

    password: Yup.string()
    .min(5, 'Must be a valid password')
    .max(8, 'Mus be shorter than 8')
    .required('Must enter a password')
})

export default function Login(){
    return(
     <div className="container-fluid login-container ">
       
     <NavbarTwo/>
     <div className="col-md-12 login-center">
        <Formik
        initialValues={{email:'', password:''}}
        validationSchema={validationSchema}
        onSubmit={(values,{setSubmitting, resetForm}) =>{
            setSubmitting(false);
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false)
            },500)
        }}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <div className="login-box p-5 ">
                    <div className="text-center">
                    <img className="text-center" src="https://avatars3.githubusercontent.com/u/26845027?s=280&v=4" alt=""/>
                    </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email...'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.email}
                        className={touched.email && errors.email ? 'has-error' : null}
                        required
                        />
                        <Error touched={touched.email} message={errors.email} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='password...'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.password}
                        className={touched.password && errors.password ? 'has-error' : null}
                        required
                        />
                        <Error touched={touched.password} message={errors.password} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                </div>
            )}
            </Formik>
            </div>
            </div>
    )
}