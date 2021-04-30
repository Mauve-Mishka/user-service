import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';
import { colors, query } from '../utils';

const HostStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  @media (min-width: ${query.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
`;

const StatText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  p {
    font-size: 16px;
    font-weight: 300;
    margin: 0 24px 0 12px;
  }
`;

const AirbnbIcon = styled.img`
  height: 16px;
`;

const HostStats = ({ isSuperhost, isVerified, reviews }) => {
  return (
    <HostStatsContainer>
      {reviews &&
        <StatText>
          <AirbnbIcon src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-star.png' />
          <p>{reviews} Reviews</p>
        </StatText>}
      {isVerified &&
        <StatText>
          <AirbnbIcon src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-shield.png'/>
          <p>Identity verified</p>
        </StatText>
      }
      {isSuperhost &&
        <StatText>
          <AirbnbIcon src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-monobadge.png'/>
          <p>Superhost</p>
        </StatText>
      }
    </HostStatsContainer>
  );
};

HostStats.propTypes = {
  isSuperhost: PropTypes.bool,
  isVerified: PropTypes.bool,
  reviews: PropTypes.number
};

export default HostStats;