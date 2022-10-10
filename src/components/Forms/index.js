import React from 'react';

import './index.css';

export const Input = props => <input type="text" {...props}/>
export const Button = props => <button {...props}>{props.text}</button>
