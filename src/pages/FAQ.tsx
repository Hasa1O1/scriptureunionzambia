import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What does Scripture Union Zambia do?',
      answer: 'We support children, youth, schools, churches, and communities through Bible engagement, leadership formation, and mission-focused programs.',
    },
    {
      question: 'How can I partner with Scripture Union Zambia?',
      answer: 'You can partner through prayer, volunteering, donations, school programs, church collaborations, and community outreach initiatives.',
    },
    {
      question: 'Do you work with schools and young people?',
      answer: 'Yes. Youth and school engagement are central to our mission, helping young people grow in faith, character, leadership, and service.',
    },
    {
      question: 'How can I contact the team?',
      answer: 'You can reach us through the contact page, email, phone, or by connecting with our ministry team directly.',
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-24 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-blue text-white shadow-xl shadow-blue-950/15">
            <HelpCircle size={32} />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-red">Questions & Answers</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-brand-blue md:text-6xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find quick answers about our mission, programs, partnerships, and how you can get involved.
          </p>
        </div>

        <div className="mt-14 grid gap-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="group rounded-[1.5rem] border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-blue-950/10">
              <h2 className="text-xl font-black text-brand-blue transition-colors group-hover:text-brand-red">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
