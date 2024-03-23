import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location, 'location')
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand cursor-pointer" onClick={() => { navigate(`/`) }}>Shopify</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className={`nav-link ${location.pathname === '/inventory' ? 'active' : ''}`} aria-current="page" onClick={() => { navigate(`/inventory`) }}>Inventory</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header