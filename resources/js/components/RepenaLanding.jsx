const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '/contact' },
];

const stats = [
    { value: '8+', label: 'years of combined experience' },
    { value: '40+', label: 'projects delivered across sectors' },
    { value: '24/7', label: 'support for growing businesses' },
];

const services = [
    {
        title: 'Brand & Design',
        description:
            'Visual identity, marketing assets, and customer-facing experiences designed to help ambitious brands stand out in fast-moving markets.',
    },
    {
        title: 'Software Development',
        description:
            'Modern web platforms, internal tools, and digital systems built for reliability, scale, and measurable business impact.',
    },
    {
        title: 'Growth Strategy',
        description:
            'Marketing systems, digital campaigns, and conversion-focused work that turns attention into lasting customer relationships.',
    },
    {
        title: 'Business Enablement',
        description:
            'Operational support and strategic consulting for organizations that need practical systems and sharper execution.',
    },
];

const sectors = [
    'Technology & SaaS',
    'Education & Skills',
    'Media & Communications',
    'Agribusiness & Trade',
    'Real Estate & Infrastructure',
    'Public & NGO Engagement',
];

const process = [
    {
        number: '01',
        title: 'Discover',
        description: 'We start by understanding your market, goals, and the friction points holding growth back.',
    },
    {
        number: '02',
        title: 'Design',
        description: 'We shape clear experiences and practical systems that align strategy, technology, and user needs.',
    },
    {
        number: '03',
        title: 'Deliver',
        description: 'We build, launch, and refine with a focus on measurable momentum, adoption, and long-term value.',
    },
];

const highlights = [
    'Product strategy and roadmap planning',
    'UI/UX design and high-converting landing pages',
    'Web platforms, APIs, and internal dashboards',
    'Growth campaigns and brand storytelling',
];

export default function RepenaLanding() {
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
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="transition hover:text-white">
                                {item.label}
                            </a>
                        ))}
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
                    <div className="absolute right-10 top-24 h-3 w-3 rounded-full bg-[#6be0cf] shadow-[0_0_18px_rgba(107,224,207,0.9)]" />
                    <div className="absolute left-28 top-1/4 h-2.5 w-2.5 rounded-full bg-[#6be0cf] shadow-[0_0_18px_rgba(107,224,207,0.8)]" />
                    <div className="absolute bottom-20 right-24 h-2.5 w-2.5 rounded-full bg-[#6be0cf] shadow-[0_0_18px_rgba(107,224,207,0.8)]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pt-16">
                        <div className="mx-auto max-w-5xl text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5dd7d4] text-[9px] font-black text-slate-900">
                                    ?
                                </span>
                               Repena — from the Arabic for “question”
                            </div>

                            <p className="mt-9 text-sm font-semibold uppercase tracking-[0.35em] text-[#8fe8db]">
                                Every great project starts with a question.
                            </p>

                            <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                                Need a solution people rem<span className="text-[#66e0d9]">eber</span>?<span className="inline-block w-2.5 animate-pulse border-l-2 border-[#66e0d9] pl-2 align-middle" />
                            </h1>

                            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
                                We answer with design that shows, software that scales, and AI automation that turns your ideas into measurable momentum.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <a
                                    href="#services"
                                    className="rounded-full border border-[#66e0d9]/50 bg-[#66e0d9] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(102,224,217,0.35)] transition hover:bg-[#7fe8e0]"
                                >
                                    I need a brand
                                </a>
                                <a
                                    href="#work"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    I need a website or app
                                </a>
                                <a
                                    href="#process"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    I need AI & automation
                                </a>
                                <a
                                    href="#contact"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Show me your work
                                </a>
                            </div>

                            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5acfc3] px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_0_25px_rgba(90,207,195,0.45)] transition hover:bg-[#78ddd2]"
                                >
                                    Ask your question
                                    <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-xs">◔</span>
                                    WhatsApp us
                                </a>
                            </div>
                        </div>

                        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                { number: '01', title: 'Understand the need' },
                                { number: '02', title: 'Shape the solution' },
                                { number: '03', title: 'Build and launch' },
                                { number: '04', title: 'Improve and grow' },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="rounded-[1.6rem] border border-white/10 bg-white/90 p-5 text-slate-900 shadow-[0_24px_80px_rgba(2,11,16,0.18)] backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{step.number}</span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">{step.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">What we do</p>
                        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Practical solutions for multi-sector growth.</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((service) => (
                            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:border-[#5AA9E6]/50 hover:shadow-md hover:shadow-[#5AA9E6]/10">
                                <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5AA9E6] to-[#7bb8ea]" />
                                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                                <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="work" className="border-y border-slate-200 bg-slate-100/80">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Our focus sectors</p>
                                <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Built for the organizations shaping tomorrow.</h2>
                            </div>
                            <p className="max-w-xl text-slate-600">
                                We support businesses and institutions across key sectors that need trusted digital execution,
                                strategic communication, and sustainable growth systems.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {sectors.map((sector) => (
                                <div key={sector} className="rounded-2xl border border-slate-200 bg-white p-5 text-lg font-medium text-slate-700 shadow-sm shadow-slate-200/50">
                                    {sector}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">How we work</p>
                        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Simple process. Serious results.</h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {process.map((step) => (
                            <div key={step.number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                <p className="text-4xl font-black text-[#5AA9E6]">{step.number}</p>
                                <h3 className="mt-5 text-2xl font-bold text-slate-900">{step.title}</h3>
                                <p className="mt-4 text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="border-y border-slate-200 bg-white">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">About Repena</p>
                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">A modern partner for strategy, design, and digital execution.</h2>
                        </div>

                        <div className="space-y-6 text-slate-600">
                            <p>
                                Repena is a multi-sector company in South Sudan helping organizations grow through better
                                branding, practical digital systems, and measurable growth strategies. We work with businesses,
                                institutions, and mission-driven teams that need trusted support from idea to implementation.
                            </p>
                            <p>
                                Our work spans design, software development, business enablement, and growth strategy, with a
                                strong focus on creating systems that are simple to use, reliable in delivery, and valuable in
                                real-world operations.
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {highlights.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#5AA9E6]" />
                                        <span className="text-sm text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4 pt-2 md:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Company focus</p>
                                    <p className="mt-2 text-base text-slate-700">
                                        Multi-sector growth support for organizations working across technology, education,
                                        media, agribusiness, real estate, and public or NGO engagement.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Core capabilities</p>
                                    <p className="mt-2 text-base text-slate-700">
                                        Brand and design, software development, digital strategy, operational enablement,
                                        and performance-focused growth support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="who-we-are" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 md:p-12">
                        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Who We Are</p>
                                <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">A focused, dependable partner for sustainable growth.</h2>
                            </div>
                            <p className="max-w-xl text-slate-600">
                                Repena is built to support organizations that need clear strategy, strong execution, and a
                                thoughtful partner capable of guiding their digital and brand growth journey.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5AA9E6]">Mission</p>
                                <p className="mt-4 text-slate-700">
                                    To help organizations in South Sudan and beyond build stronger systems, clearer brands,
                                    and more effective growth pathways.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5AA9E6]">Approach</p>
                                <p className="mt-4 text-slate-700">
                                    We combine planning, design, and technology with practical delivery, ensuring every solution
                                    supports real business objectives and long-term value.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5AA9E6]">Impact</p>
                                <p className="mt-4 text-slate-700">
                                    From product strategy to digital execution, we help teams move from ideas to visible,
                                    measurable progress with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="rounded-[2rem] border border-[#5AA9E6]/30 bg-gradient-to-r from-[#5AA9E6]/10 via-white to-[#a8d1f4]/20 p-8 md:p-12">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5AA9E6]">Start your next chapter</p>
                                <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">Let’s build what’s next for your organization.</h2>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="mailto:hello@repena.co"
                                    className="rounded-full bg-[#5AA9E6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b9ad9]"
                                >
                                    hello@repena.co
                                </a>
                                <a
                                    href="tel:+211000000000"
                                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#5AA9E6] hover:text-[#4b9ad9]"
                                >
                                    +211 000 000 000
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
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                                >
                                    Facebook
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">Services</h3>
                            <div className="mt-5 space-y-3 text-base text-slate-300">
                                <p>Branding &amp; Visual Identity</p>
                                <p>UI/UX Design</p>
                                <p>Websites &amp; Digital Presence</p>
                                <p>Mobile Experiences</p>
                                <p>Custom Software</p>
                                <p>Online Sales &amp; Digital Offers</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">Explore</h3>
                            <div className="mt-5 space-y-3 text-base text-slate-300">
                                <a href="#work" className="block transition hover:text-white">Work</a>
                                <a href="#process" className="block transition hover:text-white">Process</a>
                                <a href="#" className="block transition hover:text-white">Packages</a>
                                <a href="#about" className="block transition hover:text-white">About</a>
                                <a href="#" className="block transition hover:text-white">Blog</a>
                                <a href="/contact" className="block transition hover:text-white">Contact</a>
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
