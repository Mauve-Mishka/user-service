import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';
import { query } from '../utils';

const HostPhotoContainer = styled.div`
  position: relative;
  .super-badge {
    bottom: 4px;
    height: 24px;
    position: absolute;
    right: 14px;
  }
`;

const CirclePhoto = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  @media (min-width: ${query.medium}) {
    height: 56px;
    width: 56px;
    margin-right: 16px;
  }
  @media (min-width: ${query.large}) {
    height: 64px;
    width: 64px;
  }
`;

const HostPhoto = ({ img, isSuperhost }) => {
  return (
    <HostPhotoContainer>
      <CirclePhoto src={img} />
      {isSuperhost && <img className='super-badge' src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-badge.png' />}
    </HostPhotoContainer>
  );
};

HostPhoto.propTypes = {
  img: PropTypes.string.isRequired,
};

export default HostPhoto;
