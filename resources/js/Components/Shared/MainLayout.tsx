import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout: FC<PropsWithChildren> = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
};

export default MainLayout;
