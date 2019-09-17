import React from 'react';
import {LoaderStyled, Top, Middle, Bottom } from './style';

const Loader = () => (
  <LoaderStyled>
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Top d="M17.914 0.695986L35.258 9.66199L17.89 18.579L0.707985 9.64801L17.914 0.695986Z" fill="#3D3D3D" />
      <Middle d="M0.723011 20.194L6.135 17.512L17.895 23.345L29.782 17.505L35.336 20.205L17.894 28.671L0.723011 20.194Z" fill="#3D3D3D" />
      <Bottom d="M0.68401 30.536L6.12902 27.58L17.896 34.015L29.783 27.626L35.283 30.537L17.897 39.842L0.68401 30.536Z" fill="#3D3D3D" />
    </svg>
  </LoaderStyled>
);

export default Loader;
