import { LoginForm } from "../components/LoginForm"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { login, checkUser } from "../redux/slices/authSlice";
import { LogoutForm } from "../components/LogoutForm";

export default function Home() {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkUser);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch(login({
        email: user.email,
        password: user.password,
      }))
    }
  }, [dispatch])

  return (
    <div className="landing-page">
      <div className="container">
        {
          !isAuth ? <LoginForm /> : <LogoutForm />
        }
      </div>
    </div>
  )
}
