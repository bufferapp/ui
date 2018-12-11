import snap from 'jest-auto-snapshots';
import Button from './Button';

snap(Button, './Button.jsx', {
  fixturesByPropType: {
    function(props, propName) {
      if ((props.hasIconOnly === false && (props[propName] === undefined || typeof (props[propName]) !== 'string'))) {
        return new Error(
          'Please provide a label.',
        );
      }
    }
  },
});
