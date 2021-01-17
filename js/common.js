class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="covid-update">
            <span>COVID19 Travel Advisory. Click <a href="#">here</a> for more information. Last Updated: December 18, 2020</span>
        </div>
        <div class="container header-container">
            <div class="row">
                <div class="header-left-container col-6">
                    <a href="/index.html">
                        <img src="https://www.rbcrewards.com/res/images/logo/rbc_rewards_logo_blue.svg" alt="rbc rewards logo">
                    </a>
                </div>
                <div class="header-right-container col-6">
                    <div class="input-container">
                        // <i class="fal fa-search"></i>
                        <input class="header-input" type="text" placeholder="Ask your question">

                    </div>
                    <div class="language-container">
                        <a class="language" href="#">Français</a>
                    </div>

                    <button class="join-btn header-btn">Join Now</button>
                    <button class="signIn-btn header-btn">Sign In</button>
                </div>
            </div>


        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">TRAVEL <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="dropdown">
                            <button class="btn shop-redeem-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>SHOP & REDEEM</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Shop & Redeem Home</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Gift Cards</a>
                                <a class="dropdown-item" href="#">Apple</a>
                                <a class="dropdown-item" href="#">Best Buy</a>
                                <a class="dropdown-item" href="#">Merchandise</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Pay Credit Card with Points</a>
                                <a class="dropdown-item" href="#">Financial Rewards</a>
                                <a class="dropdown-item" href="#">Pay Bills with Points</a>
                                <a class="dropdown-item" href="#">Donate to Charity</a>
                                <a class="dropdown-item" href="#">Plant a Tree</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PROMOTIONS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MANAGE POINTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOW IT WORKS</a>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
        `
    }
};

customElements.define('nav-bar', NavBar);
