export default function Header() {
    return (
        <div class="container-fluid pb-4 header m-auto">
        <ul class="nav nav-tabs" id="navId" role="tablist">
            <li class="nav-item">
                <a href="#tab1Id" class="nav-link active" data-bs-toggle="tab" aria-current="page">Главная</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tab5Id" class="nav-link" data-bs-toggle="tab">Another link</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#" class="nav-link disabled" data-bs-toggle="tab">Disabled</a>
            </li>
        </ul>
    </div>
    )
}