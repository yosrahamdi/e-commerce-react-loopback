import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row, Col,FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import Card from '../../components/Card/Card.jsx';
import Button from '../../components/CustomButton/CustomButton.jsx';
import {AppContext} from "../../containers/AppContext";


class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      cardHidden: true,
      isLoading: false,
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    this.setState({ isLoading: true });
    e.preventDefault();

    const request = {
      "email": this.state.email,
      "password": this.state.password
    };

    axios.post(`http://localhost:3000/api//Customers/login`,  request )
      .then(res => {
        if(res.status === 200){
          this.props.helper.handleLogin(res.data.data);
          //todo: check how to put the access token in all the request automatically
          // axios.defaults.headers.common['Authorization'] = res.data.data.id;
          this.setState({ isLoading: false });
          this.props.history.push('/dashboard');
        }else{
          throw(res.status);
        }
      }).catch( error => { this.setState({isLoading: false}); this.props.helper.handleError(error); } );
  }

  render(){
    const { isLoading } = this.state;
    return (
      <Container>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form onSubmit={!isLoading ? this.handleSubmit : null}>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="Login"
                content={
                  <div>
                    <FormGroup>
                      <FormLabel>
                        Email address
                      </FormLabel>
                      <FormControl
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>
                        Password
                      </FormLabel>
                      <FormControl
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </div>
                }
                legend={
                  <Button bsStyle="info" fill wd
                          disabled={isLoading}
                          type="submit"
                  >
                    {isLoading ? 'Connecting...' : 'Login'}
                  </Button>
                }
                ftTextCenter
              />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    { Helper => <LoginPage {...props} helper={Helper} /> }
  </AppContext.Consumer>
);
