import React, { Component } from 'react';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';
//import Card from '../../components/Card/Card.jsx';
import UserRow from '../TableList';
import {AppContext} from "../../containers/AppContext";

class UtilisateursList extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      limit: 30,
      count: 0,
      active: 1,
      "rowTitle": ['Nom', 'Prénom', 'Email', 'Téléphone'],
      "dataRows": [],
      searchKeyWord: ''
    };

    this.getItems = this.getItems.bind(this);
    this.getCount = this.getCount.bind(this);

  }

//   componentWillMount() {
//     this.getItems();
//     this.getCount();
//   }

  getCount(){
    axios.get(`http://localhost:3000/api/Categories/count`)
    .then(res => {
      if (res.status === 200) {
        const pageCount = Math.ceil(res.data.data.count/this.state.limit);
        this.setState({count: pageCount});
      } else {
        throw(res.status);
      }
      console.log(res)
    }).catch( error => { this.props.helper.handleError(error); } );
  }

//   getItems(prop=1){
//     this.props.helper.handleWaiting();
//     axios.get(`${this.props.helper.baseUrl}/Profils`, {
//       params: {
//         filter: {
//           // "where": {"or": [{"firstName": {"like": `${prop}.*`, "options": "i" }}, {"familytName": {"like": `${prop}.*`, "options": "i" }}]},
//           "where": {"role": "client"},
//           "limit": this.state.limit,
//           "skip": ((prop-1) * this.state.limit)
//         },
//         access_token: this.props.helper.token
//       }
//     }).then(res => {
//       if (res.status === 200) {
//         this.setState({dataRows: res.data.data});
//         this.setState({active: prop});
//         this.props.helper.setAlert(null);
//       } else {
//         throw(res.status);
//       }
//     }).catch( error => { this.props.helper.handleError(error); } );
  }

//   render() {
//     return (
//       <div>
//         <Grid fluid>
//           <Row>
//             <Col md={12}>
//               <Card
//                 content={
//                   <div className="fresh-datatables">
//                     <table id="datatables" ref="main" className="table table-striped table-no-bordered table-hover"
//                            cellSpacing="0" width="100%" style={{width: "100%"}}>
//                       <thead>
//                       <tr>
//                         <th>{this.state.rowTitle[0]}</th>
//                         <th>{this.state.rowTitle[1]}</th>
//                         <th>{this.state.rowTitle[2]}</th>
//                         <th>{this.state.rowTitle[3]}</th>
//                       </tr>
//                       </thead>
//                       <tfoot>
//                       <tr>
//                         <th>{this.state.rowTitle[0]}</th>
//                         <th>{this.state.rowTitle[1]}</th>
//                         <th>{this.state.rowTitle[2]}</th>
//                         <th>{this.state.rowTitle[3]}</th>
//                       </tr>
//                       </tfoot>
//                       <tbody>
//                       {
//                         this.state.dataRows.map((prop, key) => {
//                           return (
//                             <UserRow item={prop} itemID={key} key={key} deleteItem={this.deleteItem}/>
//                           )
//                         })
//                       }
//                       </tbody>
//                     </table>
//                   </div>
//                 }
//                 legend={
//                   <Pagination
//                     first
//                     next
//                     prev
//                     last
//                     ellipsis
//                     boundaryLinks
//                     maxButtons={10}
//                     items={this.state.count}
//                     activePage={this.state.active}
//                     onSelect={this.getItems}
//                   />
//                 }
//               />
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }

//}

export default props => (
  <AppContext.Consumer>
    { Helper => <UtilisateursList {...props} helper={Helper} /> }
  </AppContext.Consumer>
);
