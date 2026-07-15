import { ArrowRight, BookOpen, HeartHandshake, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  void onNavigate;

  const highlights = [
    { icon: BookOpen, title: 'Bible Engagement', text: 'Creative programs that help young people discover scripture with clarity and confidence.' },
    { icon: Users, title: 'Youth Leadership', text: 'Equipping students and communities with values-driven leadership for everyday impact.' },
    { icon: HeartHandshake, title: 'Mission Partnerships', text: 'Collaborating with schools, churches, and partners to serve Zambia with excellence.' },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-image.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/80 to-slate-900/85" />
          <div className="absolute left-8 top-24 h-24 w-24 rounded-full bg-brand-red/20 blur-2xl animate-float" />
          <div className="absolute right-10 top-36 h-36 w-36 rounded-full bg-white/10 blur-3xl animate-float" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-soft backdrop-blur">
              <Sparkles size={16} />
              Empowering the Next Generation
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Faith-led impact for a{' '}
              <span className="relative inline-block text-brand-red">
                brighter
                <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-brand-red/30" />
              </span>{' '}
              Zambia.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
              Scripture Union Zambia inspires children, youth, and communities through modern discipleship, leadership development, and purposeful service.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/partnership" className="group relative overflow-hidden rounded-full bg-brand-blue px-8 py-4 font-bold text-white shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
                <span className="absolute inset-y-0 left-0 w-1/2 bg-white/20 blur-xl animate-shine" />
                <span className="relative flex items-center justify-center gap-2">
                  Partner With Us
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/about" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-center font-bold text-white shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20">
                Discover Our Work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/20 via-white to-brand-red/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-6 shadow-2xl shadow-blue-950/10">
              <div className="rounded-[1.5rem] bg-brand-blue p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">National Mission</p>
                <h2 className="mt-6 text-4xl font-black leading-tight">Building young lives with purpose, scripture, and service.</h2>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {['Schools', 'Churches', 'Families', 'Communities'].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:bg-white/15">
                      <p className="text-sm font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="-mt-8 ml-auto mr-4 max-w-xs rounded-3xl border border-slate-100 bg-white p-5 shadow-xl">
                <p className="text-sm font-semibold text-slate-500">Impact focus</p>
                <p className="mt-2 text-3xl font-black text-brand-red">Faith. Leadership. Community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-blue-950/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white transition-colors group-hover:bg-brand-red">
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl font-black text-brand-blue">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}