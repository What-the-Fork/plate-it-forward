import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../../../../../utils/http-config.js";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../../../../store/auth.js";
import {SignInFormContent} from "./SignInFormContent.jsx";
import {Formik} from "formik";

export const SignInForm = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        centerContactEmail: Yup.string()
            .email('Email must be a vaild email')
            .required('Email is required'),
        centerPassword: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least eight characters'),
        restaurantContactEmail: Yup.string()
            .email('Email must be a vaild email')
            .required('Email is required'),
        restaurantPassword: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least eight characters')
    });

    const signIn = {
        centerContactEmail: '',
        centerPassword: '',
        restaurantContactEmail: '',
        restaurantPassword: '',
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/sign-in/', value)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers['authorization']) {
                    window.localStorage.removeItem('authorization');
                    window.localStorage.setItem('authorization', reply.headers['authorization']);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers['authorization'])
                    dispatch(getAuth(jwtToken))
                }
                    setStatus({message, type});
            });
    };

    return (
            <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
                >
                {SignInFormContent}
            </Formik>
            </>
    )
};