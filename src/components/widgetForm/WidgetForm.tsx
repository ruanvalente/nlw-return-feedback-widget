import { CloseButton } from "../closeButton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        <p>Content</p>
      </div>

      <footer>
        <p className="text-xs text-neutral-400">
          Feito com ❤️ by{" "}
          <a
            className="underline underline-offset-2"
            target="_blank"
            href="https://github.com/ruanvalente"
          >
            Ruan Valente
          </a>
        </p>
      </footer>
    </div>
  );
}
