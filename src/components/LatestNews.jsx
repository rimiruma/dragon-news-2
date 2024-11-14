import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-3 items-center bg-slate-100 p-5 py-4 mt-5">
            <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
            <p className="">
                <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
            </p>
        </div>
    );
};

export default LatestNews;