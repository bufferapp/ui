import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon, StyledMask } from './style';

const Instagram = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledMask type={type} id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M0 16H16V0H0V16Z" fill="white" />
    </StyledMask>
    <g mask="url(#mask0)">
      <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M8.00002 0C5.82733 0 5.5549 0.00921035 4.70161 0.0481479C3.8501 0.0869902 3.26855 0.222255 2.7597 0.420056C2.23363 0.624494 1.78748 0.898073 1.34271 1.34287C0.897966 1.7877 0.624419 2.23389 0.420006 2.76002C0.222229 3.26894 0.0869798 3.85056 0.0481422 4.70217C0.00920926 5.55556 0 5.82802 0 8.00097C0 10.1739 0.00920926 10.4463 0.0481422 11.2997C0.0869798 12.1513 0.222229 12.733 0.420006 13.2419C0.624419 13.768 0.897966 14.2142 1.34271 14.659C1.78748 15.1038 2.23363 15.3774 2.7597 15.5819C3.26855 15.7797 3.8501 15.9149 4.70161 15.9538C5.5549 15.9927 5.82733 16.0019 8.00002 16.0019C10.1727 16.0019 10.4451 15.9927 11.2984 15.9538C12.1499 15.9149 12.7314 15.7797 13.2403 15.5819C13.7664 15.3774 14.2125 15.1038 14.6573 14.659C15.102 14.2142 15.3756 13.768 15.58 13.2419C15.7778 12.733 15.913 12.1513 15.9519 11.2997C15.9908 10.4463 16 10.1739 16 8.00097C16 5.82802 15.9908 5.55556 15.9519 4.70217C15.913 3.85056 15.7778 3.26894 15.58 2.76002C15.3756 2.23389 15.102 1.7877 14.6573 1.34287C14.2125 0.898073 13.7664 0.624494 13.2403 0.420056C12.7314 0.222255 12.1499 0.0869902 11.2984 0.0481479C10.4451 0.00921035 10.1727 0 8.00002 0ZM8.00001 1.44159C10.1361 1.44159 10.3891 1.44975 11.2327 1.48824C12.0127 1.52382 12.4363 1.65416 12.7182 1.76373C13.0916 1.90887 13.3581 2.08225 13.638 2.36224C13.918 2.64221 14.0913 2.90873 14.2365 3.2822C14.346 3.56413 14.4763 3.98777 14.5119 4.76786C14.5504 5.61153 14.5586 5.86459 14.5586 8.00095C14.5586 10.1373 14.5504 10.3903 14.5119 11.234C14.4763 12.0141 14.346 12.4377 14.2365 12.7197C14.0913 13.0931 13.918 13.3597 13.638 13.6396C13.3581 13.9196 13.0916 14.093 12.7182 14.2381C12.4363 14.3477 12.0127 14.478 11.2327 14.5136C10.3892 14.5521 10.1362 14.5603 8.00001 14.5603C5.86375 14.5603 5.61078 14.5521 4.76731 14.5136C3.98732 14.478 3.56373 14.3477 3.28183 14.2381C2.90841 14.093 2.64191 13.9196 2.36198 13.6396C2.08205 13.3597 1.90866 13.0931 1.76354 12.7197C1.65398 12.4377 1.52365 12.0141 1.48809 11.234C1.4496 10.3903 1.44144 10.1373 1.44144 8.00095C1.44144 5.86459 1.4496 5.61153 1.48809 4.76786C1.52365 3.98777 1.65398 3.56413 1.76354 3.2822C1.90866 2.90873 2.08202 2.64221 2.36198 2.36224C2.64191 2.08225 2.90841 1.90887 3.28183 1.76373C3.56373 1.65416 3.98732 1.52382 4.76731 1.48824C5.61088 1.44975 5.86391 1.44159 8.00001 1.44159Z" fill="#0A0B09" />
    </g>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M8.00006 10.668C6.52727 10.668 5.33337 9.47391 5.33337 8.00098C5.33337 6.52803 6.52727 5.33398 8.00006 5.33398C9.47281 5.33398 10.6667 6.52803 10.6667 8.00098C10.6667 9.47391 9.47281 10.668 8.00006 10.668ZM8.00006 3.89233C5.73118 3.89233 3.89194 5.7318 3.89194 8.00094C3.89194 10.2701 5.73118 12.1095 8.00006 12.1095C10.2689 12.1095 12.1081 10.2701 12.1081 8.00094C12.1081 5.7318 10.2689 3.89233 8.00006 3.89233Z" fill="#0A0B09" />
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M13.2304 3.72997C13.2304 4.26023 12.8006 4.69007 12.2704 4.69007C11.7402 4.69007 11.3104 4.26023 11.3104 3.72997C11.3104 3.19971 11.7402 2.76984 12.2704 2.76984C12.8006 2.76984 13.2304 3.19971 13.2304 3.72997Z" fill="#0A0B09" />

  </Icon>
);

Instagram.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Instagram.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Instagram;
