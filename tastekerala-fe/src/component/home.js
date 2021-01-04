import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Route,Link,BrowserRouter} from 'react-router-dom';
import Contact from './contact';
import {withRouter} from 'react-router';
import LatestPost from './MiniComponents';
import axios from "axios";

class Home extends Component{

constructor (props){
	super(props);
	this.state = {
		news :[]
	}
}

componentDidMount(){
this.resetState();
}

getBlogNews(){
	axios.get("http://127.0.0.1:8000/foodlist/").then((response)=>{
	this.setState({news:response.data});

	})

}

resetState = () =>{
this.getBlogNews();
}




	render(){
		return(
		<div>

    <section className="hero-area">

     <OwlCarousel items={4} className="hero-post-slides owl-carousel" loop  autoplay={true}>
            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/2.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / 35 Comments</p>
                    <a href="#" className="post-title">
                        <h4>Fried Pizzas on parchment paper with basil.</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/3.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / Foody</p>
                    <a href="#" className="post-title">
                        <h4>Quick Vegan Enchiladas with Sweet Potato Sauce</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/4.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>aug 8, 2018 / health</p>
                    <a href="#" className="post-title">
                        <h4>Eleven Slushie Cocktails I Bookmarked</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/5.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / drinks</p>
                    <a href="#" className="post-title">
                        <h4>Homemade Strawberry Almond Milk</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/6.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / foody</p>
                    <a href="#" className="post-title">
                        <h4>Kitchen Sink Sunflower Salad in a bow.</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/2.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / 35 Comments</p>
                    <a href="#" className="post-title">
                        <h4>Fried Pizzas on parchment paper with basil.</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/3.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / Foody</p>
                    <a href="#" className="post-title">
                        <h4>Quick Vegan Enchiladas with Sweet Potato Sauce</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/4.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>aug 8, 2018 / health</p>
                    <a href="#" className="post-title">
                        <h4>Eleven Slushie Cocktails I Bookmarked</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/8.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / drinks</p>
                    <a href="#" className="post-title">
                        <h4>Homemade Strawberry Almond Milk</h4>
                    </a>
                </div>
            </div>

            <div className="single-hero-post">
                <div className="slide-img bg-img" style={{backgroundImage: "url("+require('./img/blog-img/6.jpg')+")" }}></div>
                <div className="hero-slides-content">
                    <p>MAY 8, 2018 / foody</p>
                    <a href="#" className="post-title">
                        <h4>Kitchen Sink Sunflower Salad in a bow.</h4>
                    </a>
                </div>
            </div>
        </OwlCarousel>

    </section>

    <section className="blog-content-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="featured-post-area">
                        <div id="featured-post-slides" className="carousel slide d-flex flex-wrap" data-ride="carousel">

                            <div className="carousel-inner">

                                <div className="carousel-item active bg-img" style={{backgroundImage: "url("+require('./img/blog-img/7.jpg')+")" }}>
                                    <div className="featured-post-content">
                                        <p>MAY 8, 2018 / foody</p>
                                        <a href="#" className="post-title">
                                            <h2>A Closer Look At Our Front Porch Items From Lowe’s</h2>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item bg-img" style={{backgroundImage: "url('./img/blog-img/6.jpg')"}} >
                                    <div className="featured-post-content">
                                        <p>MAY 8, 2018 / foody</p>
                                        <a href="#" className="post-title">
                                            <h2>12 Beautiful Vegan Panna Cottas</h2>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item bg-img" style={{backgroundImage: "url('./img/blog-img/2.jpg')"}}>
                                    <div className="featured-post-content">
                                        <p>MAY 8, 2018 / foody</p>
                                        <a href="#" className="post-title">
                                            <h2>Quick Vegan Enchiladas with Sweet Potato Sauce</h2>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item bg-img" style={{backgroundImage: "url('./img/blog-img/3.jpg')"}}>
                                    <div className="featured-post-content">
                                        <p>MAY 8, 2018 / foody</p>
                                        <a href="#" className="post-title">
                                            <h2>Instant Pot Mushroom Stroganoff with Vodka</h2>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item bg-img" style={{backgroundImage: "url('./img/blog-img/5.jpg')"}}>
                                    <div className="featured-post-content">
                                        <p>MAY 8, 2018 / foody</p>
                                        <a href="#" className="post-title">
                                            <h2>The Most Popular Recipe Last Month</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <ol className="carousel-indicators">
                                <li data-target="#featured-post-slides" data-slide-to="0" className="active">
                                    <h2>01</h2>
                                    <a href="#" className="post-title">
                                        <h5>A Closer Look At Our Front Porch Items From Lowe’s</h5>
                                    </a>
                                </li>
                                <li data-target="#featured-post-slides" data-slide-to="1">
                                    <h2>02</h2>
                                    <a href="#" className="post-title">
                                        <h5>12 Beautiful Vegan Panna Cottas</h5>
                                    </a>
                                </li>
                                <li data-target="#featured-post-slides" data-slide-to="2">
                                    <h2>03</h2>
                                    <a href="#" className="post-title">
                                        <h5>Quick Vegan Enchiladas with Sweet Potato Sauce</h5>
                                    </a>
                                </li>
                                <li data-target="#featured-post-slides" data-slide-to="3">
                                    <h2>04</h2>
                                    <a href="#" className="post-title">
                                        <h5>Instant Pot Mushroom Stroganoff with Vodka</h5>
                                    </a>
                                </li>
                                <li data-target="#featured-post-slides" data-slide-to="4">
                                    <h2>05</h2>
                                    <a href="#" className="post-title">
                                        <h5>The Most Popular Recipe Last Month</h5>
                                    </a>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="blog-posts-area">

{this.state.news.map(item =>(

                        <div className="single-blog-post d-flex flex-wrap mt-50">
                            <div className="post-thumbnail mb-50">
                                <a href="#"><img src="http://127.0.0.1:8000/{item.image}" alt=""/></a>
                            </div>
                            <div className="post-content mb-50">
                                <p className="post-date">MAY 12, 2018 / {item.tag}</p>
                                <Link to="/blog/" className="post-title">
                                    <h4>{item.tittle}</h4>
                                </Link>
                                <div className="post-meta">
                                    <a href="#"><span>by</span>{item.author}</a>
                                    <a href="#"><i className="fa fa-eye"></i> 192</a>
                                    <a href="#"><i className="fa fa-comments"></i> 08</a>
                                </div>
                                <p className="post-excerpt">{item.description}</p>
                                <a href="#" className="read-more-btn">Continue Reading <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <img className="post-curve-line" src={require('./img/core-img/post-curve-line.png')} alt=""/>
                        </div>



))}

                    </div>

                    <ol className="foode-pager mt-50">
                        <li><a href="#"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Newer</a></li>
                        <li><a href="#">Older <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                    </ol>
                </div>

                <div className="col-12 col-sm-9 col-md-6 col-lg-4">
                    <div className="post-sidebar-area">
                        <div className="single-widget-area">
                            <div className="widget-title">
                                <h6>About Me</h6>
                            </div>
                            <div className="about-thumbnail">
                                <img src={require('./img/blog-img/about-me.jpg')}  alt=""/>
                            </div>
                            <div className="widget-content text-center">
                                <img src={require('./img/core-img/signature.png')} alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="single-widget-area">
                            <div className="widget-title">
                                <h6>Subscribe &amp; Follow</h6>
                            </div>
                            <div className="widget-social-info text-center">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-rss"></i></a>
                            </div>
                        </div>

                        <LatestPost />

                        <div className="single-widget-area">
                            <div className="widget-title">
                                <h6>Newsletter</h6>
                            </div>
                            <div className="newsletter-content">
                                <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                                <form action="#" method="post">
                                    <input type="email" name="email" className="form-control" placeholder="Your email" />
                                    <button><i className="fa fa-send"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </section>
		</div>
		)
	 }
}

export default withRouter(Home);