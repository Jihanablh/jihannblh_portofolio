import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export function Lightbox({
  src,
  open,
  onClose,
}: {
  src: string | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-5xl border-white/10 bg-transparent p-0 shadow-none [&>button]:hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground transition-transform hover:scale-105"
        >
          <X className="h-4 w-4" />
        </button>
        {src && (
          <img
            src={src}
            alt="Preview"
            className="h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
