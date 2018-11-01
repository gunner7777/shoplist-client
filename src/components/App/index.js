import React, { PureComponent } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faSave,
  faEdit,
  faAngleLeft,
  faTimes,
  faFileAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';
import ProductFormContainer from '../ProductForm/ProductFormContainer';
import ShoplistFormContainer from '../ShoplistForm/ShoplistFormContainer';
import './App.scss';

library.add([faPlus, faMinus, faSave, faEdit, faAngleLeft, faTimes, faFileAlt, faSpinner]);

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        {this.props.showProductForm && <ProductFormContainer />}
        {this.props.showShoplistForm && <ShoplistFormContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showProductForm: state.modals.isShowProductForm,
  showShoplistForm: state.modals.isShowShoplistForm,
});

export default withRouter(connect(mapStateToProps)(App));
