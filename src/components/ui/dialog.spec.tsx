import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

describe('Dialog Component', () => {
  it('should render the dialog when the trigger is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Title</DialogTitle>
          <DialogDescription>Test Description</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    const trigger = screen.getByRole('button', { name: /open dialog/i });

    fireEvent.click(trigger);

    expect(await screen.findByText(/test title/i)).toBeInTheDocument();
    expect(await screen.findByText(/test description/i)).toBeInTheDocument();
  });

  it('should close the dialog when the Escape key is pressed', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Title</DialogTitle>
          <DialogDescription>Test Description</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    const trigger = screen.getByRole('button', { name: /open dialog/i });

    fireEvent.click(trigger);

    expect(await screen.findByText(/test title/i)).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByText(/test title/i)).not.toBeInTheDocument();
  });
});
