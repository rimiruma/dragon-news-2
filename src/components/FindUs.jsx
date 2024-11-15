import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-2">Find Us</h2>
            <div className="join flex bg-base-100 join-vertical border">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;