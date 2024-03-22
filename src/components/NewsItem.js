import React, { useEffect, useState } from "react";
import News from "./News";
import Spinner from "./Spinner";
export const NewsItem = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  //   super(props); //kem k aapde children no pan constrcutor awake karvo pade
  //   console.log("hello i am constructor of child class");
  //   this.state = { articles: this.articles, loading: false, page: 1 }; //used to store the data
  //   document.title = "News Monkey" + props.category;
  // }
  // static defaultProps=
  // {
  //    country:'in',
  //    pagesize:8
  // }
  // static Protypes=
  // {

  console.log(page);
  // }
  useEffect(() => {
    updateNews();
  }, []);

  console.log(page);
  const updateNews = async () => {
    props.setprogress(10);
    setloading(true);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=73b923ef5a194320b0d12a24955435b9&page=${page}&pagesize=6`
    );
    let data = await response.json();
    setarticles(data.articles);
    setloading(false);
    props.setprogress(100);
    settotalResults(data.totalResults);
  };
  let Next = async () => {
    console.log("page");
    setpage(page + 1);
    props.setprogress(10);
    setloading(true);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=73b923ef5a194320b0d12a24955435b9&page=${page+1}&pagesize=6`
    );
    let data = await response.json();
    setarticles(data.articles);
    setloading(false);
    props.setprogress(100);
    setarticles(data.articles);
    settotalResults(data.totalResults);
   
  };
  let Previous = async () => {
    if (page >= 1) {
      setpage(page - 1);
    } else {
      alert("cannot go back");
      setpage(1);
    }
    updateNews();
  };

  //
  //
  //<NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
  //used to render the data when the component is mounted

  return (
 
    <div className="container my-3">
      <h2> NewsMonkey-{props.category} headlines</h2>
      <div class="dropdown">
  <i className="fa fa-solid fa-share dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   
  </i>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> 
      {loading && <Spinner/>}

      <div className="row">
        {articles?.map(
          (
            element //here question mark because when the code is executed the articles are undefined
          ) => {
            return (
              <div className="col-md-4" key={element.url}>
                <News
                  title={
                    element.title ? element.title.slice(0, 45) + "..." : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                >
                </News>
              </div>
            );
          }
        )}
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={Previous}>
          Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={Next}>
          Next
        </button>
      </div>
    </div>
  );
};
export default NewsItem;
