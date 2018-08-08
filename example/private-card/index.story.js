/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import withTests from '../withTests';
import PrivateCard from './index';

storiesOf('PrivateCard', module)
  .addDecorator(withTests('private-card/index'))
  .add('Minor', () => (
    <PrivateCard {...{ age: 17, lastname: 'Doe', firstname: 'John', job: 'Student' }} />
  ));
