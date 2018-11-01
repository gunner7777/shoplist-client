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

  handleClick() {
    // send id parent controller
    // if (this.state.isCheck === false)
    this.props.getIdProduct({ id: this.props.productId, bool: !this.state.isCheck });

    this.setState({
      isCheck: !this.state.isCheck,
    });
  }

  componentDidMount() {
    this.setState({
      isCheck: this.props.Checked,
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
};

export default Badge;
