export const Header = () => (
    <div class="container  col-md-12 mr-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Movies.com</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Detalhes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Preços</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)