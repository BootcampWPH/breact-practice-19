import { Check, Ellipsis, Pencil, Trash } from "lucide-react"
import { DropdownMenu } from "radix-ui"
import { useState } from "react"

export function RadixDropdownLesson() {
  const [selectedAction, setSelectedAction] = useState(
    "Belum ada action yang dipilih",
  )

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 04</p>
        <h2
          id="lesson-title-radix-dropdown"
          className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Raw Radix Dropdown Menu
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Menu action membutuhkan focus, arrow keys, typeahead, dan close
          behavior. Radix menyediakan behavior tersebut tanpa menentukan visual
          akhirnya.
        </p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-slate-50 sm:p-6">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <div>
            <p className="font-semibold">Belajar Radix UI</p>
            <p className="mt-1 text-sm text-slate-500">Goal Minggu Ini</p>
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                aria-label="buka action goal"
                type="button"
                className="flex mt-2 size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[state=open]:bg-slate-100"
              >
                <Ellipsis className="size-5" aria-hidden="true" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={8}
                align="end"
                className="z-50 min-w-52 rounded-xl border border-slate-200 bg-white p-1.5 text-sm shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out"
              >
                <DropdownMenu.Item
                  onSelect={() => setSelectedAction("Goal ditandai selesai")}
                  className="flex cursor-default select-none items-center gap-2 rounded-lg  px-3 py-2 outline-none data-[highlighted]:bg-emerald-50 data-[highlighted]:text-emerald-800"
                >
                  <Check aria-hidden="true" className="size-4" /> Tandai selesai
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => setSelectedAction("Goal diedit")}
                  className="flex cursor-default select-none items-center gap-2 rounded-lg  px-3 py-2 outline-none data-[highlighted]:bg-slate-100 "
                >
                  <Pencil className="size-4" aria-hidden="true" /> Edit Goal
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="my-1 h-px bg-slate-200" />

                <DropdownMenu.Item
                  onSelect={() => setSelectedAction("Goal dihapus")}
                  className="flex cursor-default select-none items-center gap-2 rounded-lg  px-3 py-2 outline-none data-[highlighted]:bg-red-200  data-[highlighted]:text-red-600"
                >
                  <Trash className="size-4" aria-hidden="true" /> Hapus Goal
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <p
            aria-live="polite"
            className="mt-4 text-sm font-medium text-slate-600"
          >
            {selectedAction}
          </p>
        </div>
      </section>
    </div>
  )
}
