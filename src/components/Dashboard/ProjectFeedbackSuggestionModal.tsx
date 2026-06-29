import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { ProjectFieldsFragment } from '@/types/generated/graphql'

interface ProjectFeedbackSuggestionModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  project?: ProjectFieldsFragment
}

const formatLaunchStrategy = (strategy: string | null | undefined): string => {
  if (!strategy) return '-'

  return strategy
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replaceAll('_', ' ')
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

const ProjectFeedbackSuggestionModal = ({
  isOpen,
  onOpenChange,
  project,
}: ProjectFeedbackSuggestionModalProps) => {
  const suggestion = project?.feedbackSuggestion
  const recipientEmail = project?.owners?.[0]?.user?.email?.trim() || ''
  const subject = suggestion?.emailSubject?.trim() || ''
  const body = suggestion?.emailBodyText?.trim() || ''
  const canSendEmail = Boolean(recipientEmail && subject && body)

  const handleSendEmail = () => {
    if (!canSendEmail) return

    const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = `mailto:${encodeURIComponent(recipientEmail)}?${query}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px] max-h-[85vh] overflow-y-auto overscroll-contain">
        <DialogHeader>
          <DialogTitle>Suggested Feedback</DialogTitle>
          <DialogDescription className="break-words">
            Review the suggested launch-plan email for <span className="font-medium">{project?.title || '-'}</span>.
          </DialogDescription>
        </DialogHeader>

        {!suggestion ? (
          <Alert>
            <AlertDescription>Feedback suggestion is unavailable for this project.</AlertDescription>
          </Alert>
        ) : (
          <div className="grid gap-4 py-2">
            {!recipientEmail ? (
              <Alert>
                <AlertDescription>
                  This project does not currently have an owner email, so the email draft cannot be opened yet.
                </AlertDescription>
              </Alert>
            ) : null}

            <div className="grid gap-1 text-sm">
              <div className="font-medium">Launch plan</div>
              <div className="text-muted-foreground">{formatLaunchStrategy(suggestion.launchStrategy)}</div>
            </div>

            <div className="grid gap-1 text-sm">
              <div className="font-medium">Recipient</div>
              <div className="text-muted-foreground break-all">{recipientEmail || '-'}</div>
            </div>

            <div className="grid gap-1 text-sm">
              <div className="font-medium">Email subject</div>
              <div className="text-muted-foreground">{subject || '-'}</div>
            </div>

            <div className="grid gap-2 text-sm">
              <div className="font-medium">Email preview</div>
              <div className="rounded-md border bg-muted/30 p-4 whitespace-pre-wrap text-sm text-foreground">
                {body || 'No email body available.'}
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button type="button" onClick={handleSendEmail} disabled={!canSendEmail}>
            Send Email
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectFeedbackSuggestionModal
