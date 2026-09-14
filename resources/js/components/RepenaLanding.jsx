const navItems = ['Services', 'Work', 'Process', 'About', 'Contact'];

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
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img
                            src="/repena-logo.svg"
                            alt="Repena logo"
                            className="h-12 w-12 rounded-2xl object-cover shadow-lg shadow-[#5AA9E6]/20"
                        />
                        <div>
                            <p className="text-lg font-semibold tracking-tight text-slate-900">Repena</p>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">South Sudan</p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-slate-900">
                                {item}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contact"
                        className="rounded-full bg-[#5AA9E6] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#4b9ad9]"
                    >
                        Book a call
                    </a>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(90,169,230,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(90,169,230,0.10),_transparent_28%)]" />
                    <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#5AA9E6]/40 bg-[#5AA9E6]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#4d9ad7]">
                                Multi-sector company • South Sudan
                            </p>
                            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                                We help ambitious businesses grow with clarity, creativity, and technology.
                            </h1>
                            <p className="mt-6 max-w-lg text-lg text-slate-600">
                                Repena brings together branding, software, and growth strategy to help organizations in
                                South Sudan and beyond build stronger systems, better experiences, and lasting momentum.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#services"
                                    className="rounded-full bg-[#5AA9E6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b9ad9]"
                                >
                                    Explore services
                                </a>
                                <a
                                    href="#work"
                                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#5AA9E6] hover:text-[#4b9ad9]"
                                >
                                    See our work
                                </a>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {stats.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50">
                                        <p className="text-2xl font-black text-[#5AA9E6]">{item.value}</p>
                                        <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4 shadow-2xl shadow-[#5AA9E6]/10">
                                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Repena Growth Dashboard</p>
                                            <p className="mt-2 text-2xl font-bold text-slate-900">Q3 performance</p>
                                        </div>
                                        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
                                            +34.8%
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="mb-2 flex justify-between text-sm text-slate-600">
                                                <span>Brand reach</span>
                                                <span>84%</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-slate-200">
                                                <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-[#5AA9E6] via-[#7bb8ea] to-[#a8d1f4]" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mb-2 flex justify-between text-sm text-slate-600">
                                                <span>Conversion uplift</span>
                                                <span>67%</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-slate-200">
                                                <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-sky-400 via-[#5AA9E6] to-indigo-500" />
                                            </div>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Leads</p>
                                                <p className="mt-2 text-3xl font-black text-slate-900">1,248</p>
                                            </div>
                                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Retention</p>
                                                <p className="mt-2 text-3xl font-black text-slate-900">92%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© 2026 Repena. Built for growth in South Sudan.</p>
                    <div className="flex gap-5">
                        <a href="#services" className="hover:text-[#4b9ad9]">Services</a>
                        <a href="#work" className="hover:text-[#4b9ad9]">Work</a>
                        <a href="#contact" className="hover:text-[#4b9ad9]">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
