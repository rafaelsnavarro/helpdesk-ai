import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <aside className="bg-slate-900 p-6 text-white md:w-64 md:shrink-0">
        <p className="text-xl font-bold">HelpDesk AI</p>

        <p className="mt-1 text-sm text-slate-400">
          Seu copiloto de suporte
        </p>

<nav className="mt-8" aria-label="Menu principal">
  <ul className="space-y-2 text-sm">
    <li>
      <Link
        href="/"
        aria-current="page"
        className="block rounded-lg bg-slate-800 px-4 py-3 font-semibold"
      >
        Dashboard
      </Link>
    </li>

    <li>
      <span className="block px-4 py-3 text-slate-400">
        Novo Diagnóstico
      </span>
    </li>

    <li>
      <span className="block px-4 py-3 text-slate-400">
        Histórico
      </span>
    </li>

    <li>
      <span className="block px-4 py-3 text-slate-400">
        Base de Conhecimento
      </span>
    </li>
  </ul>
</nav>
      </aside>

      <main className="min-w-0 flex-1 p-6 md:p-10">
        <header>
          <p className="text-sm font-medium text-slate-500">
            Painel do analista N1
          </p>

          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>

          <p className="mt-2 text-slate-600">
            Acompanhe seus chamados e organize seus atendimentos.
          </p>
        </header>
<section className="mt-8" aria-label="Resumo dos chamados">
  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <dt className="text-sm font-medium text-slate-600">
        Pendentes
      </dt>
      <dd className="mt-3 text-3xl font-bold text-amber-700">
        12
      </dd>
    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <dt className="text-sm font-medium text-slate-600">
        Novos
      </dt>
      <dd className="mt-3 text-3xl font-bold text-blue-700">
        5
      </dd>
    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <dt className="text-sm font-medium text-slate-600">
        Críticos
      </dt>
      <dd className="mt-3 text-3xl font-bold text-red-700">
        2
      </dd>
    </div>
  </dl>
</section>
        <section
          aria-labelledby="chamados-title"
          className="mt-8 rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 id="chamados-title" className="text-lg font-semibold">
            Meus Chamados
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Os chamados serão exibidos aqui.
          </p>
        </section>
      </main>
    </div>
  );
}