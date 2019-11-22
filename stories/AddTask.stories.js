import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import AddTask from '../src/components/AddTask/AddTask';

export const methods = {
  onAddTask: action('onAddTask'),
};

storiesOf("AddTask", module)
  .add("default", () => {
    return {
      components: { AddTask },
      template: `<addTask @addTask="onAddTask" />`,
      data: () => ({}),
      methods
    };
  });
