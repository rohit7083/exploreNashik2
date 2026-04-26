import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

function Sheet({ open, onClose, children }: SheetProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={onClose}
        />
      )}
      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {children}
      </div>
    </>
  )
}

export { Sheet }
