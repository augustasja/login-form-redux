import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { logoutPost } from '../utils/api/auth';
import toast from "react-hot-toast";

export const LogoutForm = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await logoutPost()
            .then(res => {
                dispatch(logout());
                toast.success('Successfully logged out!')
                console.log(res.message);
            });
    }

    return (
        <button onClick={handleLogout} className="btn-primary">Logout</button>
    )
}
