import { FaGithub, FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-2">Login with</h2>
            <div className="w-full space-y-2">
                <button className="btn"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn"><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;