import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


function PageLayout() {
    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default PageLayout;