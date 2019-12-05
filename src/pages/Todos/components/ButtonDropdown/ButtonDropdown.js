import React, { Component } from 'react';

import styles from './ButtonDropdown.module.scss';

class ButtonDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDropdown = () => {
    this.setState(({ open }) => ({
      open: !open
    }));
  };

  handleOptionClick = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { anchorElement: AnchorElement, options } = this.props;
    const { open } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.anchor} onClick={this.toggleDropdown}>
          <AnchorElement />
        </div>
        {open && (
          <div className={styles.options} onClick={this.handleOptionClick}>
            {options.map(option => {
              if (
                typeof option.isAvailable === 'boolean' &&
                !option.isAvailable
              )
                return null;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={option.onClick}
                  className={styles.option}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ButtonDropdown;
