import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
import './App.scss';

library.add([faPlus, faMinus, faSave, faEdit, faAngleLeft, faTimes, faFileAlt, faSpinner]);

class App extends PureComponent {
  render() {
    const { showProductForm } = this.props;
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        {showProductForm && <ProductFormContainer />}
      </div>
    );
  }
}

App.propTypes = {
  showProductForm: PropTypes.bool,
};

const mapStateToProps = state => ({
  showProductForm: state.modals.isShowProductForm,
});

export default withRouter(connect(mapStateToProps)(App));
