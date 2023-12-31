import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Thao Nguyen",
      title:
        "Thousands of Southern California hotel workers on strike - USA TODAY",
      description:
        "The strike follows other industry strikes with workers pushing for better pay and working conditions amid a surge in the cost of living.",
      url: "https://www.usatoday.com/story/news/nation/2023/07/02/southern-california-hotel-workers-strike/70377810007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/presto/2023/07/02/USAT/ccd8fd8e-2fcc-4bad-ba29-b7a0be53d734-AP23183667817558.jpg?crop=2999,1687,x0,y152&width=2999&height=1687&format=pjpg&auto=webp",
      publishedAt: "2023-07-03T03:20:09Z",
      content:
        "Thousands of hotel workers in Southern California went on strike Sunday, calling for higher wages and better benefits in what the union is calling the largest U.S. strike in the industry's history.\r\n… [+5385 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "David J. Lynch",
      title:
        "Yellen makes first trip to China, seeking stronger ties while supply chains move away - The Washington Post",
      description:
        "Janet L. Yellen jets to Beijing this week in a test of the administration’s ability to improve relations with China while seeking to cut U.S. companies’ reliance on Chinese factories.",
      url: "https://www.washingtonpost.com/business/2023/07/02/china-yellen-economy/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3NPX6AHGREI6ZJBCCG53SHNTBM_size-normalized.jpg&w=1440",
      publishedAt: "2023-07-03T02:32:52Z",
      content:
        "Comment on this story\r\nComment\r\nTreasury Secretary Janet L. Yellen jets to Beijing this week in a test of the Biden administrations ability to improve relations with China while pursuing an economic … [+9618 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Elon Musk: Tesla delivers record number of cars after price cuts - BBC",
      description:
        "The electric car maker has lowered prices of vehicles in countries including the US, UK and China.",
      url: "https://www.bbc.com/news/business-66083329",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/63F2/production/_130268552_gettyimages-1499013041.jpg",
      publishedAt: "2023-07-03T02:18:37Z",
      content:
        "Electric car maker Tesla says it delivered a record number of vehicles in the three months to the end of June, after cutting prices to boost sales.\r\nIt has lowered prices in markets including the US,… [+2276 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Jason Owens",
      title:
        "USMNT's Jesús Ferreira scores historic 2nd straight hat trick in 6-0 win over Trinidad & Tobago to clinch Gold Cup group - Yahoo Sports",
      description:
        "Ferreira is the first USMNT player ever with hat tricks in consecutive games and joins Landon Donovan atop the all-time list.",
      url: "https://sports.yahoo.com/usmnts-jesus-ferreira-scores-historic-2nd-straight-hat-trick-in-6-0-win-over-trinidad--tobago-to-clinch-gold-cup-group-021333039.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/pnhdlZLsf7ha2.Qadf6n2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/d24052a0-1946-11ee-b7b6-23c83f04b8b0",
      publishedAt: "2023-07-03T02:13:00Z",
      content:
        "The U.S. Men's National Team cruised to a 6-0 Gold Cup win over Trinidad &amp; Tobago in Charlotte, North Carolina, on Sunday aided by a first-of-its kind hat trick from Jesús Ferreira.\r\nThe striker … [+1458 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Jake Kwon, Heather Chen, Xiaofei Xu, Martin Goillandeau, Alex Hardie, Alex Stambaugh, Sophie Tanno",
      title:
        "Grandmother of teen killed in police stop calls for calm, as France prepares for sixth night of violence - CNN",
      description:
        "The grandmother of the 17-year-old boy who was fatally shot by a police officer in a Paris suburb has called for an end to the violence that erupted in the aftermath of his death, as French authorities gear up for a sixth night of rioting.",
      url: "https://www.cnn.com/2023/07/02/world/france-protests-violence-mayors-house-attack-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230701223649-01-france-protests-070223.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-03T01:44:00Z",
      content:
        "The grandmother of the 17-year-old boy who was fatally shot by a police officer in a Paris suburb has called for an end to the violence that erupted in the aftermath of his death, as French authoriti… [+5200 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Taylor Swift's 2011 'Speak Now' Marilyn Monroe Moment from New Angle - TMZ",
      description:
        "Taylor Swift's 'Marilyn Monroe moment' from 2011 can now be viewed from the front ... some 12 years later.",
      url: "https://www.tmz.com/2023/07/02/taylor-swift-speak-now-marilyn-monroe-moment-new-angle/",
      urlToImage:
        "https://imagez.tmz.com/image/b9/16by9/2023/07/03/b999aa291ab449da851f6f0f317ab255_xl.png",
      publishedAt: "2023-07-03T01:23:00Z",
      content:
        "Taylor Swift once had a wardrobe whoopsie eerily similar to Marilyn Monroe's famous blowing-dress moment -- something that, until now, could only be viewed from one side.\r\nDiehard Swifites will likel… [+2071 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Skipping nightly toothbrushing could heighten cardiovascular disease risk - News-Medical.Net",
      description:
        "Research investigated the impact of toothbrushing timing on cardiovascular disease risk. The study found that brushing teeth at night was associated with lower cardiovascular disease risk compared to not brushing at all.",
      url: "https://www.news-medical.net/news/20230702/Skipping-nightly-toothbrushing-could-heighten-cardiovascular-disease-risk.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_752625_1688151278606561.jpg",
      publishedAt: "2023-07-03T01:23:00Z",
      content:
        "In a recent study published in Scientific Reports, researchers determined whether the frequency of brushing one's teeth increases the risk of cardiovascular diseases (CVDs) in patients aged 20 years … [+4876 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Aliza Chasan",
      title:
        "Man, woman wounded by bears in separate incidents after their dogs chased the bears - CBS News",
      description:
        "A 64-year-old woman was bitten after she punched a bear in the nose. In another incident, a 65-year-old man was bit in Connecticut.",
      url: "https://www.cbsnews.com/news/bear-attack-dogs-maine-connecticut/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/03/222e5e2f-87ff-4ad1-ab6b-3dbba743c732/thumbnail/1200x630/b428be9ecf06149c7af3314d3aae11aa/gettyimages-460402354-1.jpg?v=f3503a7856c58c20acab4eae8bb1f0f4",
      publishedAt: "2023-07-03T01:20:21Z",
      content:
        "A 65-year-old man and a 64-year-old woman were both injured by bears that had been chased by their dogs in two separate incidents in recent days, officials in Connecticut and Maine said. \r\nIn the fir… [+1958 chars]",
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Axios",
      title:
        "Heavy rains flood Chicago: 110 million under extreme weather alerts - Axios",
      description: null,
      url: "https://www.axios.com/2023/07/03/heavy-rains-flood-chicago-extreme-weather-alerts-millions",
      urlToImage: null,
      publishedAt: "2023-07-03T01:19:55Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Braves place franchise-record 8 players in MLB All-Star Game - Bally Sports South",
      description:
        "Atlanta Braves manager Brian Snitker reacts to the news that his team set a new franchise record with eight players making the 2023 MLB All-Star roster for t...",
      url: "https://www.youtube.com/watch?v=k1ZEtdOxYYc",
      urlToImage:
        "https://i.ytimg.com/vi/k1ZEtdOxYYc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEEgSCh_MA8=&rs=AOn4CLBE41DCWE51lAwC8k1gvE0masobGw",
      publishedAt: "2023-07-03T01:07:18Z",
      content: null,
    },
    {
      source: { id: null, name: "SB Nation" },
      author: "Ricky O'Donnell",
      title:
        "Russell Westbrook takes biggest pay cut in NBA history to stay with Clippers - SB Nation",
      description:
        "Russell Westbrook took the biggest pay cut ever to stay in LA.",
      url: "https://www.sbnation.com/nba/2023/7/2/23782234/russell-westbrook-pay-cut-clippers-nba-free-agency",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/rSQIfBmt1Vghn6SrMiFz1pwCW2c=/0x0:8001x4189/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24767179/usa_today_20288362.jpg",
      publishedAt: "2023-07-02T23:52:11Z",
      content:
        "Russell Westbrook finally found a good home late last season when he joined the Los Angeles Clippers. After losing his starting spot and being subject to constant trade rumors with the Los Angeles La… [+2406 chars]",
    },
    {
      source: { id: null, name: null },
      author: null,
      title:
        "FIA hands out 12 penalties for track limit offences after F1 Austrian GP - Motorsport.com",
      description: "",
      url: "",
      urlToImage: null,
      publishedAt: "2023-07-02T23:35:40Z",
      content: null,
    },
    {
      source: { id: null, name: "NBC4 Washington" },
      author: "Allison Hageman",
      title:
        "Explosive devices damage properties in Northeast DC, suspects wanted: Police - NBC4 Washington",
      description:
        "Three stores were damaged early Sunday by explosive devices in Northeast D.C.",
      url: "https://www.nbcwashington.com/news/local/explosive-devices-damage-3-properties-in-northeast-dc-suspects-wanted/3377923/",
      urlToImage:
        "https://media.nbcwashington.com/2023/07/suspect-explosives-dc.png?resize=1200%2C675&quality=85&strip=all",
      publishedAt: "2023-07-02T22:22:53Z",
      content:
        "A bank, sneaker store and grocery were damaged by explosive devices Sunday morning in Northeast D.C., police say. \r\nThe first explosive device was detonated by a suspect on the sidewalk outside of th… [+964 chars]",
    },
    {
      source: { id: null, name: "PBS" },
      author: null,
      title:
        "Trump rally draws massive crowd in heavily Republican part of South Carolina - PBS NewsHour",
      description:
        "Former President Donald Trump marked a return to the large-scale rallies of his previous presidential campaigns, speaking to a massive crowd gathered in the streets of a small South Carolina city on a blazing summer weekend.",
      url: "https://www.pbs.org/newshour/politics/trump-rally-draws-massive-crowd-in-heavily-republican-part-of-south-carolina",
      urlToImage:
        "https://d3i6fh83elv35t.cloudfront.net/static/2023/07/2023-07-01T200321Z_1318544111_RC2IU1A6MKUV_RTRMADP_3_USA-ELECTION-TRUMP-1024x670.jpg",
      publishedAt: "2023-07-02T22:19:19Z",
      content:
        "PICKENS, S.C. (AP)  Former President Donald Trump marked a return to the large-scale rallies of his previous presidential campaigns, speaking to a massive crowd gathered in the streets of a small Sou… [+4234 chars]",
    },
    {
      source: { id: null, name: "Summit Daily News" },
      author: "Staff",
      title:
        "Mosquitoes are abundant in western Colorado this year. Know how to safely and effectively deal with the buzzing pests. - Summit Daily",
      description:
        "The near-historic snowfall this winter is still making itself known in early July, as all the snowmelt and ensuing moisture has brought on what feels like more mosquitoes to the Colorado's Western Slope/High Country. While there isn't exact data to back it up…",
      url: "https://www.summitdaily.com/news/mosquitoes-are-abundant-in-western-colorado-this-year-know-how-to-safely-and-effectively-deal-with-the-buzzing-pests/",
      urlToImage:
        "https://cdn.summitdaily.com/wp-content/uploads/sites/2/2023/06/Culex-pipiens-mosquito.jpg",
      publishedAt: "2023-07-02T22:14:11Z",
      content:
        "The near-historic snowfall this winter is still making itself known in early July, as all the snowmelt and ensuing moisture has brought on what feels like more mosquitoes to the Colorado’s Western Sl… [+8192 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Lester Fabian Brathwaite",
      title:
        "'Indiana Jones and the Dial of Destiny' opens with $60M - Entertainment Weekly News",
      description:
        "Harrison Ford's last crusade took in $130 million globally.",
      url: "https://ew.com/movies/indiana-jones-dial-of-destiny-tops-box-office/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=55%2C8%2C1474%2C718&poi=%5B765%2C240%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F06%2F16%2Findiana-jones-and-the-dial-of-destiny-061623-3.jpg",
      publishedAt: "2023-07-02T21:43:00Z",
      content:
        "At this weekend's box office, Harrison Ford turned the Dial of Destiny all the way up to, well, not 11, but to a respectable yet disappointing volume. The fifth and final installment of the Indiana J… [+2369 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Baltimore shooting: Two dead and 28 injured in mass casualty event, police say - BBC",
      description:
        "More than a dozen of the injured were under 18, a senior city official said, as suspects remain at large.",
      url: "https://www.bbc.com/news/world-us-canada-66079407",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/149A2/production/_130268348_e1558e9917fcdcb73856f87d7d8bac130dc6dadf0_127_2200_12382200x1238.jpg",
      publishedAt: "2023-07-02T21:36:14Z",
      content:
        "Two people have been killed and another 28 injured in a shooting in the US city of Baltimore, Maryland, police say.\r\nA spokesman said that three people remained in a critical condition. \r\nThe inciden… [+1668 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Mike  Chiari",
      title:
        "The Usos Defeat Roman Reigns, Solo Sikoa at WWE Money in the Bank 2023 - Bleacher Report",
      description:
        "In a match billed as The Bloodline Civil War, The Usos defeated Roman Reigns and Solo Sikoa at WWE Money in the Bank on Saturday. Jimmy and Jey Uso won after…",
      url: "https://bleacherreport.com/articles/10080286-the-usos-defeat-roman-reigns-solo-sikoa-at-wwe-money-in-the-bank-2023",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/x_680,y_52,w_1116,h_743,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1687454643/shjbjuxydmnjldqsfyym.jpg",
      publishedAt: "2023-07-02T20:32:16Z",
      content:
        'Photo credit: WWE.com\r\nIn a match billed as The Bloodline Civil War, The Usos defeated Roman Reigns and Solo Sikoa at WWE Money in the Bank on Saturday.\r\nWWE@WWETHEY DID IT!!!&lt;a href="https://twit… [+2767 chars]',
    },
    {
      source: { id: null, name: "OregonLive" },
      author: "The Associated Press",
      title:
        "Twitter and Elon Musk impose daily limits on viewing tweets - OregonLive",
      description:
        "Elon Musk has limited the number of tweets that Twitter users can view each day.",
      url: "https://www.oregonlive.com/news/2023/07/twitter-and-elon-musk-impose-daily-limits-on-viewing-tweets.html",
      urlToImage:
        "https://www.oregonlive.com/resizer/5m_n61xvJdYh_fHOBo2tzvrzKsI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/PLJYZI3XA5BWBDVQ3JBKYOXLIE.jpg",
      publishedAt: "2023-07-02T20:03:00Z",
      content:
        "Twitter owner Elon Musk has limited the number of tweets that users can view each day restrictions he described as an attempt to prevent unauthorized scraping of potentially valuable data from the so… [+2581 chars]",
    },
    {
      source: { id: null, name: "One Mile at a Time" },
      author: "Ben Schlappig",
      title:
        "United Airlines' Impressive Meltdown Memo To Employees - One Mile at a Time",
      description:
        "Here's how United Airlines CEO Scott Kirby explains the carrier's meltdown, leading to thousands of stranded and delayed flights.",
      url: "https://onemileatatime.com/news/united-airlines-meltdown-memo-employees/",
      urlToImage:
        "https://cdn.onemileatatime.com/wp-content/uploads/2022/09/United-787-LAX.jpeg",
      publishedAt: "2023-07-02T19:53:47Z",
      content: null,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}-The Global News`;
  }

  async componentDidMount() {
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=18&apiKey=6d6abdf2aa094b79a25fc3a1f417d624`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleOnNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&page=${
        this.state.page + 1
      }&apiKey=6d6abdf2aa094b79a25fc3a1f417d624&pageSize=18`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  // here it showing no error  async when it is only on the arrow function.
  handleOnPrevious = async () => {
    console.log("After clicking ont the handleOnprevious");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&page=${
      this.state.page - 1
    }&apiKey=6d6abdf2aa094b79a25fc3a1f417d624&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  // fetchMoreData = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   let url = ` https://newsapi.org/v2/top-headlines?&page=${this.state.page}country=${this.props.country}&category=${this.props.category}&pageSize=18&apiKey=6d6abdf2aa094b79a25fc3a1f417d624`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //   });
  // };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">
            Todays --Top Headlines on {this.props.category}
          </h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handleOnPrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page >= Math.ceil(this.state.totalResults / 18)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleOnNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default News;
