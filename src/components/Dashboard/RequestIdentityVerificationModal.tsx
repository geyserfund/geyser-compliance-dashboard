import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShieldCheck } from 'lucide-react';

interface RequestIdentityVerificationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string;
  onConfirm: (message?: string) => void;
  isLoading: boolean;
}

const RequestIdentityVerificationModal = ({
  isOpen,
  onOpenChange,
  projectId,
  onConfirm,
  isLoading,
}: RequestIdentityVerificationModalProps) => {
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setMessage('');
    onOpenChange(false);
  };

  const handleConfirm = () => {
    onConfirm(message.trim() ? message.trim() : undefined);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto overscroll-contain">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Request ID Verification
          </DialogTitle>
          <DialogDescription className="break-words">
            Require the creator of project <span className="font-medium">{projectId}</span> to
            complete identity verification. The creator will be notified by email with instructions
            to verify their identity through the existing flow.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2 py-4">
          <Label htmlFor="verification-message">Message to creator (optional)</Label>
          <Textarea
            id="verification-message"
            name="verificationMessage"
            autoComplete="off"
            placeholder="Add context explaining why ID verification is required…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={isLoading}>
            {isLoading ? 'Requesting…' : 'Request Verification'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RequestIdentityVerificationModal;
