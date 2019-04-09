import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import RewardCard from './RewardCard';

//const cardclasslis=[RewardCard, ManagementCard, DeadlineCard, RewardCard];

export default class Deck extends Component{

    render(){
        return (
                    <Fragment>
                       <a  data-toggle="collapse" href={this.props.coll_div_link} role="button" aria-expanded="false" aria-controls={this.props.coll_div_id}>
                           <nav aria-label="breadcrumb" style={{background: '#9999ff', border: '5 solid', padding: '20px'}}>
                              <h3>{this.props.category_title}</h3>
                           </nav>
                       </a>
                       <div class="collapse" id={this.props.coll_div_id}>
                           <div id = "wrapper" style={{background: '#eeeeee', border: '5 solid', padding: '20px'}}>
                                <div class="card-columns">
                                    {this.props.card_lis.map(card => {

                                        if( card[3] === 'Reward')
                                            return <RewardCard title={card[1]} msg={card[2]} />
                                        else if(card[3]==='Management')
                                            return <Card title={card[1]} msg={card[2]} />
                                        else if(card[3]==='Deadline')
                                            return <Card title={card[1]} msg={card[2]} />
                                        else if(card[3]==='Record')
                                            return <Card title={card[1]} msg={card[2]} />
                                    })}

                                </div>
                           </div>
                       </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Fragment>
               )
    }
}


/*
if( card[0] === 'Reward')
                                            return <Card title={card[1]} msg={card[2]} />
                                        else if(card[0]==='Management')
                                            return <Card title={card[1]} msg={card[2]} />
                                        else if(card[0]==='Deadline')
                                            return <Card title={card[1]} msg={card[2]} />
                                        else if(card[0]==='Record')
<div class="card p-3">
                            <blockquote class="blockquote mb-0 card-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer class="blockquote-footer">
                                <small class="text-muted">
                                  Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                              </footer>
                            </blockquote>
                          </div>
                          <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                              <footer class="blockquote-footer text-white">
                                <small>
                                  Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                              </footer>
                            </blockquote>
                          </div>
                          <div class="card text-center">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                          </div>
                          <div class="card p-3 text-right">
                            <blockquote class="blockquote mb-0">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer class="blockquote-footer">
                                <small class="text-muted">
                                  Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                              </footer>
                            </blockquote>
                          </div>
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
*/