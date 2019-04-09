import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

export default class Card extends Component{
    render(){
        return (
                    <Fragment>
                        <a href="#">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}


/*export default class RewardCard extends Component{
    render(){
        return (
                    <Fragment>
                        <a href="#">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}



export default class ManagementCard extends Component{
    render(){
        return (
                    <Fragment>
                        <a href="#">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}



export default class DeadlineCard extends Component{
    render(){
        return (
                    <Fragment>
                        <a href="#">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}


export default class RecordCard extends Component{
    render(){
        return (
                    <Fragment>
                        <a href="#">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}*/