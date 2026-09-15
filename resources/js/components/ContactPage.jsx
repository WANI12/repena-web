const benefits = [
    'We reply within 24 hours',
    'Free, no-obligation consultation',
    'Your details stay private',
];

export default function ContactPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
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
                        <a href="/#work" className="transition hover:text-white">Work</a>
                        <a href="/about" className="transition hover:text-white">About</a>
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

                    <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pt-16">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5dd7d4] text-[9px] font-black text-slate-900">
                                    ?
                                </span>
                                Ready to ask your question?
                            </div>

                            <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                                Start a Project
                            </h1>

                            <p className="mt-6 text-xl text-slate-300">
                                Send a clear brief and we will reply with the best next step.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5acfc3] px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_0_25px_rgba(90,207,195,0.45)] transition hover:bg-[#78ddd2]"
                                >
                                    Ask your question
                                    <span aria-hidden="true">→</span>
                                </a>

                                <a
                                    href="https://wa.me/211000000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-xs">◔</span>
                                    WhatsApp us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f4f8f8] px-6 py-12 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-4 md:grid-cols-3">
                            {benefits.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-center gap-3 rounded-2xl border border-[#6ecfc1]/60 bg-white/75 p-4 text-center text-slate-700 shadow-sm"
                                >
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5acfc3] text-sm font-bold text-slate-900">
                                        ✓
                                    </span>
                                    <span className="text-base font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact-form" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">
                                        Full name
                                    </label>
                                    <input
                                        id="full-name"
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-[#5acfc3] focus:bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                                        Company / Project name
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Company / Project name"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-[#5acfc3] focus:bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-[#5acfc3] focus:bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                                        WhatsApp / Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="WhatsApp / Phone"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-[#5acfc3] focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                                    Project brief
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Tell us about your idea, goals, timeline, and what you need help with."
                                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-[#5acfc3] focus:bg-white"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-full bg-[#5acfc3] px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-[#78ddd2]"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
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
                                <a href="/#work" className="block transition hover:text-white">Work</a>
                                <a href="/#process" className="block transition hover:text-white">Process</a>
                                <a href="#" className="block transition hover:text-white">Packages</a>
                                <a href="/about" className="block transition hover:text-white">About</a>
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
