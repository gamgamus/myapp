import { ArrowRight, Building2, Cpu, Database, Handshake, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { methodology, services } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="home">
        <section className="bg-hero-gradient py-20">
          <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-tealTech/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tealTech">
                Specialized Partner for Microfinance Institutions
              </p>
              <h1 className="text-4xl font-bold leading-tight text-navy sm:text-5xl">
                Digital Transformation and Responsible AI Adoption for Microfinance Institutions
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-700">
                MFTI helps microfinance institutions modernize their technology, strengthen operations, and leverage AI responsibly while staying true to their mission of financial inclusion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-blueTech px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy">
                  Start a Conversation
                </a>
                <a href="#services" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blueTech hover:text-blueTech">
                  Explore Our Services
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-navy">MFI Operating Model</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["MFI Operations", Building2],
                  ["IT Systems", Database],
                  ["Responsible AI", Cpu],
                  ["Borrower Impact", HeartHandshake],
                ].map(([title, Icon]) => (
                  <div key={title} className="rounded-xl border border-slate-200 p-4">
                    <Icon className="h-5 w-5 text-tealTech" />
                    <p className="mt-3 text-sm font-medium text-slate-700">{title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Integrated capabilities that link technology modernization to operational performance and borrower outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="why-mfti" className="py-20">
          <div className="section-container">
            <h2 className="section-heading">Why MFTI</h2>
            <p className="section-subheading">
              MFIs face accelerating changes in IT and AI while many institutions are still not fully digitalized. Core banking limitations, IT operations, data quality, cybersecurity, process efficiency, and client engagement challenges can create strategic drag. AI adds meaningful opportunity and real risk. MFTI helps institutions convert this moment into strategic advantage.
            </p>
            <div className="mt-8 rounded-2xl border-l-4 border-tealTech bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold text-navy">
                Microfinance is not just one of the sectors we serve. It is our focus.
              </p>
            </div>
          </div>
        </section>

        <section id="purpose-mission-vision" className="bg-white py-20">
          <div className="section-container">
            <h2 className="section-heading">Purpose, Mission, and Vision</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-tealTech/30 bg-tealTech/5 p-6 shadow-soft lg:col-span-2">
                <h3 className="text-lg font-semibold text-tealTech">Purpose</h3>
                <p className="mt-3 text-slate-700">
                  Our purpose is to ensure that microfinance institutions can successfully navigate and leverage the rapid evolution of IT and artificial intelligence, transforming themselves into stronger, smarter, and more resilient organizations that expand access to credit, improve borrower success, and contribute meaningfully to poverty reduction.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-blueTech">Mission</h3>
                <p className="mt-3 text-slate-700">
                  To help microfinance institutions modernize, digitize, and adopt artificial intelligence responsibly by combining deep microfinance expertise with practical IT advisory, systems transformation, and operational execution support.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft lg:col-span-3">
                <h3 className="text-lg font-semibold text-navy">Vision</h3>
                <p className="mt-3 text-slate-700">
                  To become the trusted digital transformation and AI adoption partner for microfinance institutions in Latin America and other emerging markets, enabling inclusive financial institutions to thrive in an increasingly technology-driven world.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="section-container">
            <h2 className="section-heading">Services</h2>
            <p className="section-subheading">
              MFTI combines strategy, execution, and microfinance context to help institutions modernize with confidence.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="product-vision" className="bg-slate-900 py-20 text-slate-100">
          <div className="section-container">
            <h2 className="section-heading !text-white">Product Vision: MicroFinance-as-a-Service</h2>
            <p className="mt-6 max-w-4xl text-slate-200">
              MicroFinance-as-a-Service is MFTI’s product vision for a plug-and-play operational layer that closes the gap between daily MFI operations and the core banking system.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <h3 className="font-semibold text-teal-300">Strategic Positioning</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>• Core banking remains the financial system of record.</li>
                  <li>• The platform serves as the front-end and operational layer.</li>
                  <li>• Designed for integration with existing core banking systems.</li>
                  <li>• Supports future AI-enabled workflows in a controlled, responsible path.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <h3 className="font-semibold text-teal-300">Operational Coverage</h3>
                <p className="mt-3 text-sm text-slate-200">
                  Prospecting, client onboarding, document management, credit workflow, methodology management, client engagement, refinancing, loyalty workflows, and expansion-ready capabilities.
                </p>
                <p className="mt-4 text-sm text-slate-200">
                  This product direction reinforces—rather than replaces—MFTI’s advisory and execution services as the scalable expression of our microfinance and IT knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="py-20">
          <div className="section-container">
            <h2 className="section-heading">Strategic Approach</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {methodology.map((item) => (
                <article key={item.step} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                  <h3 className="font-semibold text-navy">{item.step}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="bg-white py-20">
          <div className="section-container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Who We Serve</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Microfinance Institutions</li>
                <li>• NGO-based MFIs</li>
                <li>• Regulated or semi-regulated MFIs</li>
                <li>• MFI networks</li>
                <li>• Funders and development organizations supporting digital transformation</li>
                <li>• MFIs in Latin America and emerging markets</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-inclusion/30 bg-inclusion/5 p-6">
              <p className="text-lg font-semibold text-navy">
                We are intentionally focused on microfinance. This focus allows us to understand the operational, technological, and social realities of MFIs better than generic technology providers.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="py-20">
          <div className="section-container">
            <h2 className="section-heading">Impact Pathway</h2>
            <p className="section-subheading">
              MFTI strengthens MFIs. Stronger MFIs serve borrowers better. Better-served borrowers build more resilient livelihoods.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Stronger MFIs", ShieldCheck],
                ["Better access to credit", Handshake],
                ["Faster, safer operations", Target],
                ["Greater poverty reduction impact", ArrowRight],
              ].map(([item, Icon]) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm shadow-soft">
                  <Icon className="h-5 w-5 text-inclusion" />
                  <p className="mt-2 font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="section-container">
            <h2 className="section-heading">About MicroFinTech Inc</h2>
            <p className="section-subheading">
              MicroFinTech Inc combines decades of experience in microfinance and information technology to help MFIs modernize and prepare for the AI era.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "20+ years in microfinance",
                "25+ years in IT",
                "Practical field understanding",
                "Advisory plus execution",
                "Vendor-independent perspective",
                "Latin America and emerging markets orientation",
              ].map((point) => (
                <div key={point} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="section-container grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Contact</h2>
              <p className="section-subheading">
                Let’s discuss how your MFI can modernize, adopt AI responsibly, and increase its impact.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 py-10 text-slate-300">
        <div className="section-container grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-white">MicroFinTech Inc (MFTI)</h2>
            <p className="mt-2 text-sm">
              Digital Transformation and Responsible AI Adoption for Microfinance Institutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#why-mfti" className="hover:text-white">Why MFTI</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#product-vision" className="hover:text-white">MicroFinance-as-a-Service</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <p className="mt-2 text-sm">Email: hello@mfti.example</p>
            <p className="text-sm">LinkedIn: Coming soon</p>
            <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} MicroFinTech Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
