const card_sort_map = {'Reward': [[1, 'NewThing', '', 'Reward']], 'Management': [[2, 'Record', '', 'Management']], 'Deadline': [[3, 'Book', '', 'Deadline']], 'MindAbstract': [[4, 'InterestingThought', '', 'MindAbstract']]}
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import {getLeads, deleteLead} from '../../actions/leads';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Deck from './Deck';


const deck_designs = [["Reward", "cc_0", "#cc_0"], ["Management", "cc_1", "#cc_1"], ["Deadline", "cc_2", "#cc_2"], ["MindAbstract", "cc_3", "#cc_3"]]

class Leads extends Component{
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired

    };


    componentDidMount(){
        this.props.getLeads();
    }
    render(){
        return (

                    <Fragment>
                        {deck_designs.map(ar => {
                            return <Deck card_lis = {card_sort_map[ar[0]]} category_title={ar[0]} coll_div_id = {ar[1]} coll_div_link = {ar[2]} />
                        })}

                    </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads); //converts base component Leads into a container(higher order) component which is connected to state.


/*
<h2> Elements </h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th/>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.leads.map(lead => (
                                    <tr key = {lead.id}>
                                        <td>{lead.id}</td>
                                        <td>{lead.name}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.message}</td>
                                        <td>
                                            <button onClick = {this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>*/