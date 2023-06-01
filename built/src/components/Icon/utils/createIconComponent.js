import { createElement } from 'react';
import Icon from '../Icon';
const createIconComponent = ({ content }) => (props) => createElement(Icon, Object.assign(Object.assign({}, props), { viewBox: '0 0 16 16' }), content);
export default createIconComponent;
//# sourceMappingURL=createIconComponent.js.map