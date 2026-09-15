const principles = [
    {
        title: 'Question before execution',
        description: 'We do not rush into visuals or code before understanding the actual goal, audience, and business problem.',
    },
    {
        title: 'Clean over complicated',
        description: 'A solution should feel clear, usable and scalable without unnecessary weight, noise, or confusion.',
    },
    {
        title: 'Design with purpose',
        description: 'The work must look professional, but it also needs to guide users, support action, and create trust.',
    },
    {
        title: 'Practical honesty',
        description: 'We do not sell what the client does not need, and we avoid empty promises that create false expectations.',
    },
    {
        title: 'Launch, then improve',
        description: 'The first version should be strong enough to launch and flexible enough to grow with feedback and learning.',
    },
    {
        title: 'One connected path',
        description: 'Brand, website, software, and marketing should work together, not as disconnected pieces.',
    },
];

const process = [
    {
        number: '01',
        title: 'Ask',
        description: 'We understand the business, audience, problem, and desired outcome before making recommendations.',
    },
    {
        number: '02',
        title: 'Define',
        description: 'We set the scope, priorities, deliverables, and clean direction for the project.',
    },
    {
        number: '03',
        title: 'Design',
        description: 'We shape the identity, screens, content structure, and workflow needed for clear execution.',
    },
    {
        number: '04',
        title: 'Build',
        description: 'We develop the website, system, automation, or digital asset required for real-world use.',
    },
    {
        number: '05',
        title: 'Launch',
        description: 'We test, publish, hand off, and prepare the project for a smooth introduction to the market.',
    },
    {
        number: '06',
        title: 'Grow',
        description: 'We review results, improve the experience, and support the next step with continued refinement.',
    },
];

const audience = [
    'Small and medium businesses that need a stronger digital presence.',
    'Founders launching a new service, brand, or product.',
    'Organizations that need websites, mobile experiences, dashboards, or internal systems.',
    'Teams that want automation, content, campaigns, or monthly growth support.',
    'Projects that need one partner who understands design, software, and business clarity.',
];

const footerLinks = {
    services: ['Branding & Visual Identity', 'UI/UX Design', 'Websites & Digital Presence', 'Mobile Experiences', 'Custom Software', 'Online Sales & Digital Offers'],
    explore: ['Work', 'Process', 'Packages', 'About', 'Blog', 'Contact'],
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#041e2a]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img
                            src="/repena-logo.svg"
                            alt="Repena logo"
                            className="h-11 w-11 rounded-2xl object-cover shadow-lg shadow-[#5AA9E6]/20"
                        />
                        <div>
                            <p className="text-lg font-semibold tracking-tight text-white">Repena</p>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">South Sudan</p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
                        <a href="/" className="transition hover:text-white">Home</a>
                        <a href="/#services" className="transition hover:text-white">Services</a>
                        <a href="/#process" className="transition hover:text-white">Process</a>
                        <a href="/about" className="transition hover:text-white">About</a>
                        <a href="/contact" className="transition hover:text-white">Contact</a>
                    </nav>

                    <a
                        href="/contact"
                        className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                        Book a call
                    </a>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden bg-[#031d29] text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(93,223,215,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(93,223,215,0.14),_transparent_24%),linear-gradient(135deg,_#031d29_0%,_#052c3a_32%,_#0a2d39_60%,_#071d29_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px] opacity-70" />
                    <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#4bd3c1]/20 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5dd7d4] text-[9px] font-black text-slate-900">
                                    ?
                                </span>
                                Repena — Ask better. Build cleaner.
                            </div>

                            <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                                A creative technology team built around one simple principle: ask better, build cleaner.
                            </h1>

                            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
                                Repena combines brand thinking, design, software, AI, and growth support into one practical execution partner for organizations that want clarity, not noise.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5acfc3] px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_0_25px_rgba(90,207,195,0.45)] transition hover:bg-[#78ddd2]"
                                >
                                    Ask your question
                                    <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="/#services"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                                >
                                    View services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Our story</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
                                Not a traditional agency. Not a heavy software company. Something more practical.
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg leading-8 text-slate-700">
                            <p>
                                Many projects do not fail because the idea is bad. They fail because the message is unclear, the design is inconsistent, the website does not explain enough, or the workflow is scattered across messages and tools.
                            </p>
                            <p>
                                Repena exists to organize that mess. We help businesses move from an unclear need to a clean digital path: identity, website, mobile experience, internal system, automation, content, campaign strategy, or growth support.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-100/70 py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">The standards behind the work</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Our principles guide every project we take on.</h2>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {principles.map((principle) => (
                                <div key={principle.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                    <div className="mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br from-[#5AA9E6] to-[#8fe8db]" />
                                    <h3 className="text-xl font-bold text-slate-900">{principle.title}</h3>
                                    <p className="mt-4 text-base leading-7 text-slate-700">{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Execution method</p>
                        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">A simple process that keeps the project under control.</h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {process.map((step) => (
                            <div key={step.number} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                <p className="text-4xl font-black text-[#5AA9E6]">{step.number}</p>
                                <h3 className="mt-5 text-2xl font-bold text-slate-900">{step.title}</h3>
                                <p className="mt-4 text-base leading-7 text-slate-700">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-slate-100/70 py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Who we fit</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Repena is built for businesses that want digital work to make sense.</h2>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                            {audience.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-base font-medium leading-7 text-slate-700 shadow-sm shadow-slate-200/50"
                                >
                                    {String(index + 1).padStart(2, '0')}. {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="rounded-[2rem] border border-[#5AA9E6]/30 bg-gradient-to-r from-[#5AA9E6]/10 via-white to-[#a8d1f4]/20 p-8 md:p-12">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Tell us what you want to build</p>
                                <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">You do not need a perfect brief. Send the current idea, problem, or goal.</h2>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/contact"
                                    className="rounded-full bg-[#5acfc3] px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_0_25px_rgba(90,207,195,0.45)] transition hover:bg-[#78ddd2]"
                                >
                                    Ask your question
                                </a>
                                <a
                                    href="/#services"
                                    className="rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-700 transition hover:border-[#5AA9E6] hover:text-[#4b9ad9]"
                                >
                                    View services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-[#021d2a] text-white">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <img
                                    src="/repena-logo.svg"
                                    alt="Repena logo"
                                    className="h-12 w-12 rounded-2xl object-cover shadow-lg shadow-[#5AA9E6]/20"
                                />
                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-white">Repena</p>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">South Sudan</p>
                                </div>
                            </div>

                            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                                Branding, websites, apps, custom systems, AI automation, digital marketing and growth support for businesses that want practical execution.
                            </p>

                            <div className="mt-7 flex gap-3">
                                <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">LinkedIn</a>
                                <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Facebook</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">Services</h3>
                            <div className="mt-5 space-y-3 text-base text-slate-300">
                                {footerLinks.services.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">Explore</h3>
                            <div className="mt-5 space-y-3 text-base text-slate-300">
                                {footerLinks.explore.map((item) => (
                                    <a
                                        key={item}
                                        href={item === 'Contact' ? '/contact' : item === 'About' ? '/about' : item === 'Work' ? '/#work' : item === 'Process' ? '/#process' : '#'}
                                        className="block transition hover:text-white"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">Contact</h3>
                            <div className="mt-5 space-y-3 text-base text-slate-300">
                                <a href="mailto:info@repena.co" className="block transition hover:text-white">info@repena.co</a>
                                <a href="tel:+955520802916" className="block transition hover:text-white">+90 552 080 2916</a>
                                <a href="#" className="block transition hover:text-white">Privacy Policy</a>
                                <a href="#" className="block transition hover:text-white">Terms of Use</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <h4 className="text-2xl font-bold text-white">Studio notes</h4>
                                <p className="mt-3 text-base text-slate-300">Occasional emails on design, brand and what we’re building. No spam.</p>

                                <div className="mt-5 flex max-w-xl flex-col gap-3 sm:flex-row">
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#5acfc3]"
                                    />
                                    <button
                                        type="button"
                                        className="rounded-2xl bg-[#5acfc3] px-7 py-3 text-base font-semibold text-slate-900 transition hover:bg-[#78ddd2]"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-300">
                        <p>© 2026 Repena. All rights reserved.</p>
                    </div>
                </div>

                <a
                    href="https://wa.me/211000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="fixed bottom-6 right-6 inline-flex items-center gap-3 rounded-full bg-[#5acfc3] px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(90,207,195,0.45)] transition hover:bg-[#78ddd2]"
                >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-900/30 bg-white/60 text-xs">◔</span>
                    Message us on WhatsApp
                </a>
            </footer>
        </div>
    );
}
