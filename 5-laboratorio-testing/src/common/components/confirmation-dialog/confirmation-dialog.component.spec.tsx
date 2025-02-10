import React, { useState } from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ConfirmationDialogComponent specs', () => {
  it('should not render the dialog when isOpen is false', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: { acceptButton: '', closeButton: '' },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.queryByRole('dialog');

    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('should render the dialog when isOpen is true', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: '',
      labels: { acceptButton: '', closeButton: '' },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('should render a heading', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Eliminar proyecto',
      labels: { acceptButton: '', closeButton: '' },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const headingElement = screen.getByRole('heading', {
      level: 2,
      name: 'Eliminar proyecto',
    });

    // Assert
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Eliminar proyecto');
  });

  it('should render the children as description content', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Eliminar proyecto',
      labels: { acceptButton: '', closeButton: '' },
      children: 'Test',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const descriptionElement = screen.getByText('Test');

    // Assert
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('Test');
  });

  const ConfirmationDialogWrapper = ({
    onAccept,
    onClose,
  }: {
    onAccept?: () => void;
    onClose?: () => void;
  }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ConfirmationDialogComponent
        isOpen={isOpen}
        onAccept={() => {
          onAccept?.();
          setIsOpen(false);
        }}
        onClose={() => {
          onClose?.();
          setIsOpen(false);
        }}
        title="Eliminar proyecto"
        labels={{ acceptButton: 'ACEPTAR', closeButton: 'CANCELAR' }}
      >
        Test
      </ConfirmationDialogComponent>
    );
  };

  it('should render the provided button labels', () => {
    // Arrange
    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={() => {}}
        onClose={() => {}}
        title="Test"
        labels={{ acceptButton: 'CONFIRMAR', closeButton: 'CANCELAR' }}
      >
        Test
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(
      screen.getByRole('button', { name: /CONFIRMAR/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /CANCELAR/i })
    ).toBeInTheDocument();
  });

  it('should call onAccept and clean up the dialog when clicking on acceptButton', async () => {
    // Arrange
    const onAccept = vi.fn();

    const { unmount } = render(
      <ConfirmationDialogWrapper onAccept={onAccept} />
    );

    const acceptButton = screen.getByRole('button', { name: /ACEPTAR/i });

    // Act
    await userEvent.click(acceptButton);

    // Assert
    expect(onAccept).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    unmount();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should call onClose and clean up the dialog when clicking on closeButton', async () => {
    // Arrange
    const onClose = vi.fn();

    const { unmount } = render(<ConfirmationDialogWrapper onClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: /CANCELAR/i });

    // Act
    await userEvent.click(closeButton);

    // Assert
    expect(onClose).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    unmount();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
