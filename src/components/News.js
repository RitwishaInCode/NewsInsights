// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // articles = [    //array of articles
  // ]

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 6,
  //   category: "general", //general by default
  // };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }; written below in case of functional components

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props); //always call super method with constructor
  // console.log("I am a constructor from news component");
  // this.state = {
  //   articles: [], //this.articles,
  //   loading: true,
  //   page: 1,
  //   totalResults: 0,
  // };   using useState for functional components
  //to make the articles as a part of the state, we are using a constructor
  // document.title = `NewsInsights - ${this.capitalizeFirstLetter(
  //   this.props.category
  // )}`; go to line 15
  // } do not need constructor in function based

  const updateNews = async () => {
    //reformating for functional based
    props.setProgress(0); //showing the loading red line on top
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // url taken from news api url
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url); //fetch API
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };

  //componentDidMount() == useEffect in functions
  useEffect(() => {
    document.title = `NewsInsights - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  //lifecycle method
  // async componentDidMount() {
  // console.log("will be displayed after the render method");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b1e018938d845d3b25dc77de8dc9f3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  // // url taken from news api url
  // this.setState({loading:true});
  // let data = await fetch(url); //fetch API
  // let parsedData = await data.json()
  // console.log(parsedData);
  // this.setState({articles: parsedData.articles,
  //   totalResults : parsedData.totalResults,
  //   loading:false
  // })
  // this.updateNews();
  // }

  // const handleNext = async () => {
  //   // console.log("next clicked");

  //   if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
  //   } else {
  //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b1e018938d845d3b25dc77de8dc9f3f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //     // // url taken from news api url
  //     // this.setState({loading: true});
  //     // let data = await fetch(url); //fetch API
  //     // let parsedData = await data.json()

  //     // this.setState({
  //     //   articles: parsedData.articles,
  //     //   page: this.state.page+1,
  //     //   loading: false
  //     // })
  //     // this.setState({ page: this.state.page + 1 });
  //     setPage(page + 1);
  //     updateNews();
  //   }
  // };

  // const handlePrev = async () => {
  //   // console.log("prev clicked");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b1e018938d845d3b25dc77de8dc9f3f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   // // url taken from news api url

  //   // this.setState({loading: true});
  //   // let data = await fetch(url); //fetch API
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);

  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page: this.state.page-1,
  //   //   loading: false
  //   // })
  //   // this.setState({ page: this.state.page - 1 });
  //   setPage(page - 1);
  //   updateNews();
  // };

  // following is the part of infinite scroll function
  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });

    // this.updateNews(); //writi
    // ng the entire updateNews function below

    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    // url taken from news api url
    // this.setState({ loading: true });//we will not show loading on top everytime
    setPage(page + 1);
    let data = await fetch(url); //fetch API
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // loading: false,
  };

  //designing entire structure of the page - rows and cols-
  //rendering the NewsItem.js file here to display each news section
  // render() {
  // console.log("will the display before componentdidmount compoment");
  return (
    <div className="container my-3">
      <h2
        className="text-center"
        style={{ margin: "30px 0px", marginTop: "90px" }}
      >
        NewsInsights - Top Headlines ~ {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />} {/* part of loading button on top*/}
      {/* following is the part of infinite scroll, npm package for react scroll- downloaded! */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* to iterate over the articles */}

            {/* {!this.state.loading && this.state.articles.map((element)=>{      // part of next and prev buttons */}

            {/* following logic for infinite SCROLL */}
            {articles.map((element) => {
              // console.log(element)  // check in console for objects
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    time={element.publishedAt}
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>   // was a part of NEXT and PREV button*/}
      {/* important line */}
    </div>
  );
  // }
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general", //general by default
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
