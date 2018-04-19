/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import withTests from '../withTests';
import Foo from './index';

storiesOf('Foo', module)
  .addDecorator(withTests('foo/index'))
  .add('3 items', () => (
    <Foo items={['foo', 'bar']} />
  ));
