/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import withTests from '../withTests';
import List from './index';

storiesOf('List', module)
  .addDecorator(withTests('list/index'))
  .add('3 items', () => (
    <List items={['foo', 'bar']} />
  ));
