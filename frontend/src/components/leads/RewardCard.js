import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';


export default class RewardCard extends Component{
    render(){
        return (
                    <Fragment>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <h5 class="card-title">{this.props.title}</h5>
                                  <p class="card-text">{this.props.msg}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                     </Fragment>
        )
    }
}