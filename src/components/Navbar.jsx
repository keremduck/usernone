export default function Navbar(){
    return(
        <>
        <nav className="navbar fixed-bottom navbar-expand-sm d-none d-xl-block">
            <div className="container">
                <a className="navbar-brand text-white font-monospace" href="/">kerem.fun</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white font-monospace" href="/">/reload</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white font-monospace" href="https://deprem.kerem.fun">/deprem</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}