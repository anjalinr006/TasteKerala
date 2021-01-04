import React,{Component} from 'react';
import './style.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Route,NavLink,MemoryRouter} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Blog from './singlepost';


class Header extends Component{
	constructor(props){
	super(props);
	this.state = {


	}

	}

	render(){
		return(
		<MemoryRouter>
		<header className="header-area">
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top-header-content d-flex align-items-center justify-content-between">
                            <div className="search-form">
                                <form action="#" method="get">
                                    <input type="search" name="search" className="form-control" placeholder="Search and hit enter..."/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="top-social-info">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="logo-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <a href="index.html" className="nav-brand"><img src={require('./img/core-img/logo.png')} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="foode-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    <nav className="classy-navbar" id="foodeNav">

                        <a href="index.html" className="nav-brand"><img src={require('./img/core-img/logo.png')} alt=""/></a>

                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>
                        <div className="classy-menu">
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
                            <div className="classynav">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/pages/">Pages</NavLink>
                                        <ul className="dropdown">
                                            <li><a href="archive-blog.html">Archive Blog</a></li>
                                            <li><a href="single-post.html">Single Post</a></li>
                                            <li><a href="about-us.html">About</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="typography.html">Typography</a></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/categories/" className="megamenua">Catagories</NavLink>
                                        <div className="megamenu">
                                            <ul className="single-mega cn-col-4">
                                                <li><a href="#">- Features</a></li>
                                                <li><a href="#">- Food</a></li>
                                                <li><a href="#">- Travel</a></li>
                                                <li><a href="#">- Recipe</a></li>
                                                <li><a href="#">- Bread</a></li>
                                                <li><a href="#">- Breakfast</a></li>
                                                <li><a href="#">- Meat</a></li>
                                                <li><a href="#">- Fastfood</a></li>
                                                <li><a href="#">- Salad</a></li>
                                                <li><a href="#">- Soup</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><a href="#">- Features</a></li>
                                                <li><a href="#">- Food</a></li>
                                                <li><a href="#">- Travel</a></li>
                                                <li><a href="#">- Recipe</a></li>
                                                <li><a href="#">- Bread</a></li>
                                                <li><a href="#">- Breakfast</a></li>
                                                <li><a href="#">- Meat</a></li>
                                                <li><a href="#">- Fastfood</a></li>
                                                <li><a href="#">- Salad</a></li>
                                                <li><a href="#">- Soup</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><a href="#">- Features</a></li>
                                                <li><a href="#">- Food</a></li>
                                                <li><a href="#">- Travel</a></li>
                                                <li><a href="#">- Recipe</a></li>
                                                <li><a href="#">- Bread</a></li>
                                                <li><a href="#">- Breakfast</a></li>
                                                <li><a href="#">- Meat</a></li>
                                                <li><a href="#">- Fastfood</a></li>
                                                <li><a href="#">- Salad</a></li>
                                                <li><a href="#">- Soup</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><a href="#">- Features</a></li>
                                                <li><a href="#">- Food</a></li>
                                                <li><a href="#">- Travel</a></li>
                                                <li><a href="#">- Recipe</a></li>
                                                <li><a href="#">- Bread</a></li>
                                                <li><a href="#">- Breakfast</a></li>
                                                <li><a href="#">- Meat</a></li>
                                                <li><a href="#">- Fastfood</a></li>
                                                <li><a href="#">- Salad</a></li>
                                                <li><a href="#">- Soup</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><NavLink to="/travel/">Travel</NavLink></li>
                                    <li><NavLink to="/about-us/">About</NavLink></li>
                                    <li><NavLink to="/contact/">Contact</NavLink></li>
                                </ul>

                            </div>


                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div className="conetnts">
           <Route path='/travel/' component={Contact} />
           <Route path='/contact/' component={Contact} />
           <Route path='/categories/' component={Contact} />
           <Route exact path='/' component={Home} />
           <Route path='/blog/' exact component={Blog} />
    </div>
    </MemoryRouter>
//Ending Header

			)
	}
}

class Footer extends Component{
	render(){
		return(
<div>
				    <div class="follow-us-instagram">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h2>Follow Us On Instagram</h2>
                        <span>@foodeblog</span>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">

                    <OwlCarousel items={3} className="owl-theme" loop  autoplay={true}>
                        <div className="single-instagram-slide">
                            <img src={require('./img/blog-img/insta1.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta4.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta2.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta4.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta3.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta4.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta5.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>

                        <div class="single-instagram-slide">
                            <img src={require('./img/blog-img/insta6.jpg')} alt=""/>
                            <a href="#"><i class="fa fa-instagram"></i>Follow Me</a>
                        </div>
                    </OwlCarousel>



                 </div>
            </div>
        </div>
    </div>

    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="footer-curve" src={require('./img/core-img/foo-curve.png')} alt=""/>
                    <div class="footer-social-info d-flex align-items-center justify-content-between">
                        <a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>
                        <a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
                        <a href="#"><i class="fa fa-google-plus"></i><span>Google +</span></a>
                        <a href="#"><i class="fa fa-linkedin"></i><span>linkedin</span></a>
                        <a href="#"><i class="fa fa-instagram"></i><span>Instagram</span></a>
                        <a href="#"><i class="fa fa-vimeo"></i><span>Vimeo</span></a>
                        <a href="#"><i class="fa fa-youtube"></i><span>Youtube</span></a>
                    </div>
                    <img class="footer-curve" src={require('./img/core-img/foo-curve.png')} alt=""/>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="copywrite-text">
                        <p>
Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

			)

	}

}


class Base extends Component{

	render(){
		return(
		<div>
			<Header />
			< Footer />
		</div>
		)
	}
}

export default Base;