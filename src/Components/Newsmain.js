import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Load from './Loading'
import PropsType from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    static defaultProps = {
        country: 'in',
        page: 1,
        category: 'sport',
    }
    static propTypes = {

        country: PropsType.string,
        page: PropsType.number,
        pagesize: PropsType.number,
        category: PropsType.string,
    }
    async componentDidMount() {
        this.setState({ loading: true });
        let data = await fetch(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dce55700f79a4e21a9af1e8ee7b33166&page=${this.state.page}&pageSize=${this.props.pagesize}`);
        let jsdat = await data.json();
        //    console.log(jsdat);
        this.setState({ articles: jsdat.articles, totalResults: jsdat.totalResults });
        this.setState({ loading: false });
        //    console.log(this.state.totalpage);
    }
    fetchmore = async () => {
        this.setState({ page: this.state.page + 1 });
        //   this.setState({ loading: true });
        let data = await fetch(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dce55700f79a4e21a9af1e8ee7b33166&page=${this.state.page}&pageSize=${this.props.pagesize}`);
        //   console.log(data);
        let jsdat = await data.json();
        console.log(jsdat);
        this.setState({ articles: this.state.articles.concat(jsdat.articles) ,totalResults:jsdat.totalResults});
        // this.setState({ loading: false });
    };
    render() {
        return (
            <div >
                <div className="container" >
                    <h1 className='py-4 text-center'> News Teller-The top New of today</h1>
                    {this.state.loading && <Load />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchmore}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Load/>}

                    >
                        <div className='container'>
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-12" key={element.url}>
                                        <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description.slice(0, 150) : " "} imageUrl={element.urlToImage} Url={element.url} author={element.author} lastupdate={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    {/* // this.setState({ loading: false }); */}
                    </InfiniteScroll>
                </div>
                {/* <div className='d-flex justify-content-between mx-3 my-3'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.handleprev}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page >= this.state.totalpage} className="btn btn-success" onClick={this.handlenext}>Next&rarr;</button>
                </div> */}
            </div>

        )
    }
}