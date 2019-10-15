import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  render() {
    return (
      <div className="Input-container">
        <label className="Input-label" htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <input
          name={this.props.name}
          className="Input"
          type="text"
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
};

export default Input;
