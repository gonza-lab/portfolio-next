import React, { FunctionComponent } from 'react';

export const HeaderHButton: FunctionComponent<{
  onChange: () => void;
  isActive: boolean;
}> = ({ onChange, isActive }) => {
  return (
    <button
      className={
        'header-hbutton hamburger hamburger--collapse' +
        (isActive ? ' is-active' : '')
      }
      type="button"
      onClick={onChange}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
