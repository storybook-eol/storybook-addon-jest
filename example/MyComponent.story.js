/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import withTests from './withTests';
import MyComponent from './MyComponent';

storiesOf('MyComponent', module)
  .addDecorator(withTests('MyComponent'))
  .add('classic render', () => (
    <MyComponent />
  ));
