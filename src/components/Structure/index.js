import React from 'react';
import './index.css';

export const Header = props => <header {...props}>{props.children}</header>
export const Main = props => <main {...props}>{props.children}</main>
export const Section = props => <section {...props}>{props.children}</section>
export const Footer = props => <footer {...props}>{props.children}</footer>