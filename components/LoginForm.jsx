import { useForm } from "react-hook-form";
import { Error } from "./Error";
import { useDispatch, useSelector } from 'react-redux'
import { checkUser, login } from "../redux/slices/authSlice";
import { loginPost } from '../utils/api/auth'
import toast from "react-hot-toast";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const REQUIRED_EMAIL = {
    required: "Email is required.",
    pattern: {
        value: EMAIL_REGEX,
        message: "Invalid email address."
    }
}
const REQUIRED_PASSWORD = {
    required: "Password is required"
}

export const LoginForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(checkUser);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        await loginPost(data)
        .then(res => {
            if(isAuth) {
                return;
            }

            console.log(res.message);

            dispatch(login({
                email: data.requiredEmail,
                password: data.requiredPassword
            }))

            toast.success('Successfully logged in!', {
                id: 'login'
            })
        })
        .catch(error => {
            toast.error(error.message, {
                id: 'error'
            })
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h1>Login</h1>
            <p>Please enter you Login and your Password</p>
            <div className="login-form-input">
                <Error inputError={errors.requiredEmail} />
                <input className="input-primary" id="email" placeholder="Username or E-mail"
                    {...register("requiredEmail", REQUIRED_EMAIL)}
                    style={errors.requiredEmail && { border: '1px solid #EF7C8E' }} />
                <Error inputError={errors.requiredPassword} />
                <input className="input-primary" id="password" placeholder="Password" type="password"
                    {...register("requiredPassword", REQUIRED_PASSWORD)}
                    style={errors.requiredPassword && { border: '1px solid #EF7C8E' }} />
            </div>
            <button className="btn-primary" role="button" type="submit">Login</button>
        </form>
    )
}
