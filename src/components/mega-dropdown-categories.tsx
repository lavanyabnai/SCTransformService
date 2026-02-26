"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Separator } from "@/components/ui/separator"

// Define the type for dropdown items
interface DropdownCategory {
  category: string
  items: {
    name: string
    description: string
    to: string
    icon: LucideIcon
    highlight?: boolean
    iconBackground?: string
    iconForeground?: string
    shortDescription?: string
  }[]
}

interface MegaDropdownProps {
  categories: DropdownCategory[]
}

export function MegaDropdownCategories({ categories }: MegaDropdownProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleItemClick = (to: string) => {
    setOpen(false) // Close the dropdown
    router.push(to) // Navigate programmatically
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center size-10 rounded-full bg-background shadow-sm ring-1 ring-border">
          <Image className="size-8" src="/assets/logo-4.png" width={32} height={32} alt="logo" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[680px] p-4" sideOffset={8}>
        <div className="max-h-[80vh] overflow-y-auto pr-1 space-y-6">
          {categories.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {category.items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleItemClick(item.to)}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent text-left transition-colors",
                      item.highlight && "bg-accent/50",
                    )}
                  >
                    <div
                      className={cn(
                        "flex shrink-0 items-center justify-center size-9 rounded-full",
                        item.iconBackground || "bg-background shadow-sm",
                      )}
                    >
                      <item.icon
                        className={cn(
                          "size-4",
                          item.iconForeground || "text-foreground/70 group-hover:text-primary",
                        )}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{item.name}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{item.shortDescription}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
