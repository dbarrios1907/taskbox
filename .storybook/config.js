import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from 'storybook-addon-vue-info'
import 'storybook-chromatic';

import '../src/index.css';

addDecorator(withA11y);
addDecorator(withInfo);

// const req = require.context('../src', true, /\.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
//
// // automatically import all files ending in *.stories.js
// configure(loadStories, module);

configure(require.context('../stories', true, /\.stories\.js$/), module);
