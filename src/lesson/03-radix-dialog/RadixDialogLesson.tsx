import { Dialog } from "radix-ui"

export function RadixDialogLesson() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 03</p>
        <h2
          id="lesson-title-radix-dialog"
          className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Raw Radix Dialog
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          kita menyusun primitve secara langsung sesuai documentasi radix ui
        </p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Buka Dialog
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-950/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-6 shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95">
              <Dialog.Title className="text-xl font-bold text-slate-950">
                Tambah topik
              </Dialog.Title>
              <Dialog.Description className="mt-2 leading-6 text-slate-600">
                Masukan topik yang ingin dipelajari pada sesi berikutnya
              </Dialog.Description>

              <div className="mt-5 space-y-2">
                <label
                  htmlFor="radix-topic"
                  className="text-sm font-medium text-slate-800"
                >
                  Nama Topik
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="radix-topic"
                  type="text"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <Dialog.Close asChild>
                  <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
                    Tutup
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </section>
    </div>
  )
}
