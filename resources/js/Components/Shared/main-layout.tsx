import { FC, PropsWithChildren, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

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
