import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import '../src/index.css';

addDecorator(withA11y);


// const req = require.context('../stories', true, /\.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
//
// // automatically import all files ending in *.stories.js
// configure(loadStories, module);

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
