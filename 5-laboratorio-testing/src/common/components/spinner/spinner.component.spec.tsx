import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

let promiseTrackerValue = { promiseInProgress: false };

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: () => promiseTrackerValue,
}));

describe('SpinnerComponent specs', () => {
  beforeEach(() => {
    promiseTrackerValue = { promiseInProgress: false };
  });

  it('should not display modal while promiseInProgress is false', () => {   
    // Arrange
    promiseTrackerValue = { promiseInProgress: false };

    // Act
    render(<SpinnerComponent />);
    const modalElement = screen.queryByRole('presentation');

    // Assert
    expect(modalElement).not.toBeInTheDocument();
  });

  it('should display modal when promiseInProgress is true', () => {
    // Arrange
    promiseTrackerValue = { promiseInProgress: true };

    // Act
    render(<SpinnerComponent />);
    const modalElement = screen.getByRole('presentation');

    // Assert
    expect(modalElement).toBeInTheDocument();
  });
});
