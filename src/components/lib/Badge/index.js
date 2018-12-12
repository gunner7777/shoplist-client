import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

class Badge extends PureComponent {
  constructor() {
    super();

    this.state = {
      isCheck: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      isCheck: this.props.Checked,
    });
  }

  handleClick() {
    // send id parent controller
    this.props.getIdProduct(this.props.productId);

    this.setState({
      isCheck: !this.state.isCheck,
    });
  }

  render() {
    return (
      <div
        className={`Badge ${this.state.isCheck ? 'Badge_Checked' : ''}`}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  getIdProduct: PropTypes.func,
  Checked: PropTypes.bool,
  productId: PropTypes.string,
};

export default Badge;
