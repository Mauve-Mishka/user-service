import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import HostSection from './HostSection';
import HostId from './HostId';
import { data } from '../../../testdata';

jest.mock('./HostId', () => () => <div data-testid='host-id'></div>);

describe('HostSection', () => {

  test('should render the HostId component', () => {

    const props = data;

    const { getByTestId } = render(<HostSection {...props} />);
    const element = screen.getByTestId('host-id');
    expect(element).toBeInTheDocument();

  });

});