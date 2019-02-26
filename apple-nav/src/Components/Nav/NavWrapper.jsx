import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import Nav from './Nav';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

const StyledNavWrapper = styled.div`
  max-width: 100%;
  color: white;
  height: 24px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 14px;
  margin: 0 7%;
`;

const StyledNavWrapperContainer = styled.div`
  max-width: 100%;
  background-color: #323232;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 6px;
`;

const NavWrapper = props => {
  return (
    <div>
      <StyledNavWrapperContainer>
        <StyledNavWrapper>
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="apple" />
          {props.data.map(d => (
            <Nav name={d.name} subLinks={d.subLinks} />
          ))}
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="search" />
        </StyledNavWrapper>
      </StyledNavWrapperContainer>
      {props.data.map(d => (
        <Route path={`/${d.name}`} render={props => <SubNav {...props} subLinks={d.subLinks} />} />
      ))}
    </div>
  );
};

export default NavWrapper;
