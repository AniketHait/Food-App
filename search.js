import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFood } from '../action/postSearch';

export class SearchBar extends Component{
   onClick= e =>{
      e.preventDefault();
      this.props.fetchFood(this.props.text);
   };
 render(){
   return(
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className='container'>
            <h1 className='display-4 mb-3'>
               <i className='fa fa-search' />Search For Restaurants,Foods,Cuisines & Many More...
            </h1>
            <form id='searchForm' onClick={this.onClick}>
               <input type="text" className='form-control' name='searchText' placeholder="Search For Restaurants,Foods,Cuisines & Many More..."/>
               <button type="submit" className="btn btn-primary btn-bg mt-3">Search</button>
            </form>
          </div>
      </div>
   );
 }
}
const mapStateToProps=state=>({
   text:state.foods.text
});

export default connect(
   mapStateToProps,
   {fetchFood}
) (SearchBar);
