import { renderHook } from '@testing-library/react';
import { createEmptyLookup, Lookup } from '#common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { act } from 'react';

describe('useConfirmationDialog specs', () => {
  it('should initialize with isOpen as false and itemToDelete as emptyLookup', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    //Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should open the dialog and set itemToDelete when onOpenDialog is called', () => {
    // Arrange
    const deleteItem: Lookup = { id: '1', name: 'name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(deleteItem);
    });

    //Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(deleteItem);
  });

  it('should close the dialog when onClose is called', () => {
    // Arrange
    const deleteItem: Lookup = { id: '1', name: 'name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(deleteItem);
    });

    act(() => {
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should reset itemToDelete to emptyLookup when onAccept is called', () => {
    // Arrange
    const deleteItem: Lookup = { id: '1', name: 'name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(deleteItem);
    });

    act(() => {
      result.current.onAccept();
    });

    //Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });
});
