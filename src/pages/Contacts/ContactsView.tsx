import React from 'react';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';

const ContactsView = () => {
  console.log('ContactsView');

  return (
    <Wrapper>
      <BackBtn />
      <div>In process</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

export default ContactsView;
