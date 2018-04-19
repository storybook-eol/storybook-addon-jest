import React from 'react';

const Foo = ({ items }) => <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;

Foo.defaultProps = {
  items: [],
};

export default Foo;
