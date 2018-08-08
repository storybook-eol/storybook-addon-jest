import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// --> import { setupJestAddon } from 'storybook-addon-jest';


setOptions({
  name: 'JEST ADDON',
  url: 'https://github.com/renaudtertrais/storybook-addon-jest',
  downPanelInRight: true,
  showLeftPanel: true,
});

function loadStories() {
  require('../foo/index.story');
  require('../list/index.story');
  require('../MyComponent.story');
}

configure(loadStories, module);
