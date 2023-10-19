import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Choose from "../Choose/Choose";

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>this is home page :</h2>
            {
                user ? <p>{user.email}</p> : <></>
            }

            {/* whoy choose us section */}
            <Choose></Choose>
        </div>
    );
};

export default Home;