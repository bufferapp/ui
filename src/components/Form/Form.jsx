import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import FormBlock from '../FormBlock';

const FormStyled = styled.form`
  ${Styles.FormBase};
`;

const FormTitle = styled.h3`
  ${Styles.title}
`;

const FormSubTitle = styled.p`
  ${Styles.subTitle}
`;

const Form = ({ header, onSubmit, children }) => (
  <FormStyled onSubmit={onSubmit}>
    { header && (
      <FormBlock>
        <FormTitle>{header.title}</FormTitle>
        <FormSubTitle>{header.subTitle}</FormSubTitle>
      </FormBlock>
    )}
    {children}
  </FormStyled>
);

Form.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

Form.defaultProps = {
  header: null,
  children: null
}

export default Form;
