import React from 'react';
const { styled } = window;
import { colors, query } from '../utils';

const SecurityContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 0 0;
  p {
    color: ${colors.mineshaft};
    font-size: 13px;
    font-weight: 300;
    line-height: 16px;
    margin: 0;
  }
  @media (min-width: ${query.medium}) {
    flex-direction: row-reverse;
    max-width: 300px;
    .badge {
      margin: 0 16px 0 0;
    }
  }
`;

const Security = () => {
  return (
    <SecurityContainer>
      <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
      <div className='badge'><img src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-security.png' height='22px'/></div>
    </SecurityContainer>
  );
};

export default Security;