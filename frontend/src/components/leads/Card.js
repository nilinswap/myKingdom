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
                                  <h5 class="card-title">Card title that wraps to a new line</h5>
                                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </a>
                     </Fragment>
        )
    }
}