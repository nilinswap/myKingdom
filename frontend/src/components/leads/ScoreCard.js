import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

export default class ScoreCard extends Component{
    render(){
        return (
                    <Fragment>
                        <div class="container">
                          <div class="row">
                            <div class="col">NT</div>
                            <div class="col">W</div>
                            <div class="col">L</div>
                            <div class="col">D</div>
                          </div>
                          <div class="row">
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                          </div>
                        </div>
                     </Fragment>
        )
    }
}
