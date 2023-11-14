export default function Header() {
    return (
        <div className="container-fluid pb-4 header m-auto">
        <ul className="nav nav-tabs" id="navId" role="tablist">
            <li className="nav-item">
                <a href="#tab1Id" className="nav-link active" data-bs-toggle="tab" aria-current="page">Главная</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#tab5Id" className="nav-link" data-bs-toggle="tab">Another link</a>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
            </li>
        </ul>
    </div>
    )
}