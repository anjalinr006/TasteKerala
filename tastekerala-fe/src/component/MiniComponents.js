import React,{Component} from 'react';


class LatestPost extends Component{
	render(){
		return(
					<div>
                        <div class="single-widget-area">
                            <div class="widget-title">
                                <h6>Latest Posts</h6>
                            </div>

                            <div class="single-latest-post d-flex">
                                <div class="post-thumb">
                                    <img src={require('./img/blog-img/lp1.jpg')} alt=""/>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="post-title">
                                        <h6>Weeknight Ponzu Pasta</h6>
                                    </a>
                                    <a href="#" class="post-author"><span>by</span> Erin Alderson</a>
                                </div>
                            </div>

                            <div class="single-latest-post d-flex">
                                <div class="post-thumb">
                                    <img src={require('./img/blog-img/lp2.jpg')} alt=""/>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="post-title">
                                        <h6>The Most Popular Recipe Last Month</h6>
                                    </a>
                                    <a href="#" class="post-author"><span>by</span> Erin Alderson</a>
                                </div>
                            </div>

                            <div class="single-latest-post d-flex">
                                <div class="post-thumb">
                                    <img src={require('./img/blog-img/lp3.jpg')} alt=""/>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="post-title">
                                        <h6>A Really Good Chana Masala</h6>
                                    </a>
                                    <a href="#" class="post-author"><span>by</span> Erin Alderson</a>
                                </div>
                            </div>

                            <div class="single-latest-post d-flex">
                                <div class="post-thumb">
                                    <img src={require('./img/blog-img/lp4.jpg')} alt=""/>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="post-title">
                                        <h6>Spicy Instant Pot Taco Soup</h6>
                                    </a>
                                    <a href="#" class="post-author"><span>by</span> Erin Alderson</a>
                                </div>
                            </div>

                            <div class="single-latest-post d-flex">
                                <div class="post-thumb">
                                    <img src={require('./img/blog-img/lp5.jpg')} alt=""/>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="post-title">
                                        <h6>Lime Leaf Miso Soup</h6>
                                    </a>
                                    <a href="#" class="post-author"><span>by</span> Erin Alderson</a>
                                </div>
                            </div>
                        </div>

                        <div class="single-widget-area">
                            <a href="#"><img src={require('./img/blog-img/add.png')} alt=""/></a>
                        </div>

					</div>

		)

	}

}


class Tags extends Component{
	render(){
		return(
		                  <div class="single-widget-area">
                            <div class="widget-title">
                                <h6>popular tags</h6>
                            </div>
                            <ol class="popular-tags d-flex flex-wrap">
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">Unique</a></li>
                                <li><a href="#">Template</a></li>
                                <li><a href="#">Photography</a></li>
                                <li><a href="#">travel</a></li>
                                <li><a href="#">lifestyle</a></li>
                                <li><a href="#">Wordpress Template</a></li>
                                <li><a href="#">food</a></li>
                                <li><a href="#">Idea</a></li>
                            </ol>
                        </div>


		)

	}
}

export default LatestPost;
