
export const BaseMenuOnTop = () => {

    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Blue Sea NFT</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/table">Home</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/explore">Explore</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/wallet">Wallet</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/login">Account</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="logo | my-4" src={require('./icon.png')} alt="logo" width={300}/>
                <br/>
                <h1 class="masthead-heading text-uppercase mb-2">Welcome to the future !!!!!</h1>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">***</div>
                    <div class="divider-custom-line"></div>
                </div>
               
                <h5 class="masthead-subheading font-weight-light mb-0">Trading cards - Music - Artwork - Sport and more....</h5>
            </div>
        </header>
  

        </div>
    )

}

export default BaseMenuOnTop;