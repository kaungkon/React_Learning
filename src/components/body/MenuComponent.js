import React, { Component, useState } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreators';
import Loading from './Loading';

const mapStateToProps = state => {
  //console.log("mapstatetoprops: ", state);
  return {
    dishes: state.dishes,
    comments: state.comments

  }
}

const mapDispatchToProps = dispatch => { //onk gulo dispatch k eksathe rakhar jonno
  return {
    addComment:(dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes())
  }
}


class MenuComponent extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  }
  
  onSelectDish = (dish) =>{
    this.setState({ selectedDish: dish, modalOpen: true, });
  };

  toggleDish = () => {
    this.setState({ modalOpen: !this.state.modalOpen});
  };

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    document.title = "Menu";
    if(this.props.dishes.isLoading){
      return ( 
        <Loading />
      );
    }
    else{
      const menu = this.props.dishes.dishes.map(dish => {
        return(
          <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />  
        );
      });
  
      let dishDetail = null;
      if ( this.state.selectedDish != null) {
        const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id )
        //console.log(comments);
        dishDetail = <DishDetail 
                      dish={this.state.selectedDish}
                      comments={comments} 
                      addComment={this.props.addComment}/> 
      }
  
      //console.log(dishDetail);
        return (
        <div className='container'>
          <div className='row'>
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen} >
              { dishDetail }
              <ModalFooter>
                <button className="btn btn-primary" onClick={this.toggleDish}>Close</button>
              </ModalFooter>
            </Modal>
          </div>     
        </div>
      );
    }
    
  } 
}

export default connect(mapStateToProps, mapDispatchToProps) (MenuComponent); //connect 2 ta parameter send kore, 1.mapstatetoProps , 2, mapdispatchtoprops. 1st ta mandatory.
