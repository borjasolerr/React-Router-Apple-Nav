import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  max-width: 100%;
  padding: 10px;
  color: black;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 15%;
  font-size: 11px;
`;

const StyledSubNavContainer = styled.div`
  max-width: 100%;
  background-color: rgba(242, 242, 242, 0.7);
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubNav = props => {
  return (
    <StyledSubNavContainer>
      <StyledSubNav>
        {props.subLinks.map(sub => (
          <SubItem key={sub.name}>
            <img src={sub.img} alt={sub.name} />
            <p>{sub.name}</p>
          </SubItem>
        ))}
      </StyledSubNav>
    </StyledSubNavContainer>
  );
};

export default SubNav;
