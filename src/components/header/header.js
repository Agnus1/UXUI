import Link from "next/link";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
            <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" href="/">
                <img
                src="/film-svgrepo-com.svg"
                height="60"
                loading="lazy"
                />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#">Избранное</a>
                </li>
            </ul>
            </div>
            <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart"></i>
            </a>
            <div className="dropdown">
                <a
                data-mdb-dropdown-init
                className="d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
                >
                <img
                    src="/av.png"
                    className="rounded-circle"
                    height="50"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                />
                </a>
                <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
                >
                <li>
                    <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">Logout</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>

    )
}