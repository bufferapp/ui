/* eslint-disable no-restricted-syntax */
export function ternary(props, values) {
  const entries = Object.entries(values);
  entries.forEach((entry) => {
    console.log(entry[0]);
    console.log(props);
    if (props[entry[0]]) {
      console.log('*************************');
      console.log(entry[1]);
      return entry[1];
    }
  });
  return values.default;
}
