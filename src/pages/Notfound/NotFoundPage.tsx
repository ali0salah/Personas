import { AuthHeader } from "../../components/authcomplayout/Authheader";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen bg-stone-50 text-slate-900">
      <AuthHeader />
      <main className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-16 text-center">

        <h1 className="text-7xl font-medium leading-none tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-5xl font-medium leading-none sm:text-6xl font-serif text-emerald-700">
          Page not found.
        </h2>

        <p className="p-2 mt-8 max-w-xs text-xl leading-6 text-slate-500">
          This page might have been moved, deleted, or non-existant.
        </p>

      </main>
    </section>
  );
}
