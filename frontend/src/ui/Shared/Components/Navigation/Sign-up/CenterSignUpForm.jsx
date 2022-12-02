import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {CenterSignUpFormContent} from "../../../../Partner/CenterSignUpFormContent.jsx";
import {httpConfig} from "../../../../../utils/http-config.js";

export const CenterSignUpForm = () => {
    const centerSignUp = {
        centerAddress: '',
        centerContactEmail: '',
        centerContactName: '',
        centerContactPhone: '',
        centerName: '',
        centerPassword: '',
        centerPasswordConfirm: '',
        centerProfileImgUrl: '',
    };
    const restaurantSignUp = {
        restaurantAddress: '',
        restaurantContactEmail: '',
        restaurantContactName: '',
        restaurantContactPhone: '',
        restaurantName: '',
        restaurantPassword: '',
        restaurantPasswordConfirm: '',
        restaurantProfileImgUrl: '',
    };

    const centerValidator = Yup.object().shape({
        centerAddress: Yup.string()
            .required('A valid address is required')
            .min(10, 'Please provide a valid address')
            .max(128, 'This address exceeds the allotted characters'),
        centerContactEmail: Yup.string()
            .email('Please provide a valid email')
            .required('email is required'),
        centerContactName: Yup.string()
            .required('A contact name is required')
            .min(1, 'Please provide your name')
            .max(64, 'This name exceeds the allotted characters'),
        centerContactPhone: Yup.string()
            .required('A valid phone number is required')
            .min(10, 'Please provide a valid phone number')
            .max(64, 'This number exceeds the allotted characters'),
        centerName: Yup.string()
            .required('A community center name is required')
            .min(5, 'Please provide a community center name')
            .max(64, 'This name exceeds the allotted characters'),
        centerPassword: Yup.string()
            .required('A password is required')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
        centerPasswordConfirm: Yup.string()
            .required('Passwords must match')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
    });

    const restaurantValidator = Yup.object().shape({
        restaurantAddress: Yup.string()
            .required('A valid address is required')
            .min(10, 'Please provide a valid address')
            .max(128, 'This address exceeds the allotted characters'),
        restaurantContactEmail: Yup.string()
            .email('Please provide a valid email')
            .required('email is required'),
        restaurantContactName: Yup.string()
            .required('A contact name is required')
            .min(1, 'Please provide your name')
            .max(64, 'This name exceeds the allotted characters'),
        restaurantContactPhone: Yup.string()
            .required('A valid phone number is required')
            .min(10, 'Please provide a valid phone number')
            .max(64, 'This number exceeds the allotted characters'),
        restaurantName: Yup.string()
            .required('A restaurant name is required')
            .min(5, 'Please provide a restaurant name')
            .max(64, 'This name exceeds the allotted characters'),
        restaurantPassword: Yup.string()
            .required('A password is required')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
        restaurantPasswordConfirm: Yup.string()
            .required('Passwords must match')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
    });

    const submitCenterSignUp = (value, {resetForm, setStatus}) => {
        httpConfig.post('/apis/center-sign-up/', values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            });
    };

    const submitRestaurantSignUp = (value, {resetForm, setStatus}) => {
        httpConfig.post('/apis/restaurant-sign-up/', values)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };

    return (

        <Formik
            initialValues={centerSignUp}
            onSubmit={submitCenterSignUp}
            validationSchema={centerValidator}
        >
            {CenterSignUpFormContent}
        </Formik>
    )
};