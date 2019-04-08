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