import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router-dom'

import Nav from '../src/Nav';

import '../src/spectre.min.css'

storiesOf('Nav', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('signed out', () => <Nav />)
  .add('signed in', () => <Nav auth={true} />)
