import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import Leads from './Leads';
import ScoreCard from './ScoreCard'

export default function Dashboard(){

        return (
                <Fragment>
                    <ScoreCard />
                    <Form />
                    <Leads />
                </Fragment>
        )

}
