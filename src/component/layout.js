import React from "react";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ component, header, footer }) => {
    return (
        <div className="container-fluid">
            {header && <Header />}
            <div className="bodyMinHeight">
                {component}
            </div>
            {footer && <Footer />}
        </div>
    )
}

export default Layout