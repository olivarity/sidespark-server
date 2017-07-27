import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router-dom'

import Nav from '../src/Nav.js';

storiesOf('Nav', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('logged out', () => <Nav />)
