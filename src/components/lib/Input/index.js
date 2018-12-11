import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevProps: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const prevProps = state.prevProps;
    const currentValue = props.currValue !== prevProps ? props.currValue : state.value;

    return {
      prevProps: props.currValue,
      value: currentValue,
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { label } = this.props;

    return (
      <div className="Input">
        <label className="Input-Block">
          <span className="Input-Label">{label}</span>
          <input
            className="Input-Input"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={label || 'enter value'}
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
