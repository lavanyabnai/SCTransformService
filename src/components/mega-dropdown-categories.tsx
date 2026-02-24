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
      <DropdownMenuContent align="end" className="w-[300px] p-2" sideOffset={8}>
        <div className="grid gap-6 max-h-[80vh] overflow-y-auto pr-2">
          {categories.map((category) => {
            return (
              <div key={category.category} className="space-y-3">
                {/* <h3 className="text-sm font-medium text-muted-foreground sticky top-0 bg-background pt-1 pb-2 z-10">
                  {category.category}
                </h3> */}
                {/* <Separator /> */}
                <div className="grid grid-cols-1 gap-4">
                  {[0, 1, 2].map((columnIndex) => (
                    <div key={columnIndex} className="space-y-1.5">
                      {category.items
                        .filter((_, index) => index % 3 === columnIndex)
                        .map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleItemClick(item.to)}
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-accent text-left",
                              item.highlight && "bg-accent/50",
                            )}
                          >
                            <div
                              className={cn(
                                "flex items-center justify-center size-9 rounded-full",
                                item.iconBackground || "bg-background shadow-sm",
                              )}
                            >
                              <item.icon
                                className={cn(
                                  "size-5",
                                  item.iconForeground || "text-foreground/70 group-hover:text-primary",
                                )}
                              />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-[10px] text-muted-foreground">{item.shortDescription}</div>
                            </div>
                          </button>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
