
import React, { useState } from "react";

export default function App() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      id: "thesis",
      title: "Low Life — Mapping Seniority-based Salary Progression",
      subtitle: "Bachelor thesis: Seniority-based wage progression in Austria",
      tags: ["Power BI", "Data Viz", "Policy Analysis"],
      desc:
        "Data-driven mapping of seniority-based salary progression across Austrian sector collective bargaining agreements. Includes visualizations, interview notes and policy-relevant charts.",
      file: "/assets/LowLife_Thesis.pdf",
    },
    {
      id: "life-is-good",
      title: "Life is Good — A Data-Driven Approach to Wage Inequities",
      subtitle: "Research paper",
      tags: ["Python", "EDA", "Power BI"],
      desc:
        "Comparative visualization project highlighting wage disparities across hospitality and other sectors. Explores labour cost, hours worked, and sectoral undervaluation.",
      file: "/assets/LifeIsGood_ResearchPaper.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="rounded-full w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">AS</div>
            <div>
              <h1 className="text-lg font-semibold">Aizat Sagymbaeva</h1>
              <p className="text-sm text-gray-500">Master Data Science — TU Wien (ongoing)</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="/assets/Resume.pdf" className="ml-4 inline-block px-3 py-1 border rounded text-sm">Resume</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="text-sm px-3 py-1 border rounded">Contact</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Hi — I’m Aizat.</h2>
            <p className="text-gray-700 mb-4">Data scientist-in-training at TU Wien. I build clear, evidence-driven visualisations and practical analyses that connect policy and practice — especially around labour, wages, and sectoral inequalities.</p>

            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li><strong>Email:</strong> aizatsagymbaeva@gmail.com</li>
              <li><strong>Phone:</strong> +4367761769281</li>
              <li><strong>Education:</strong> Master Data Science — TU Wien (ongoing)</li>
              <li><strong>BA:</strong> Cross-Disciplinary Strategies, University of Applied Arts</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded shadow-sm text-sm">See projects</a>
              <a href="/assets/Resume.pdf" className="px-4 py-2 border rounded text-sm">Download resume</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div>Python</div>
              <div>Power BI</div>
              <div>Tableau</div>
              <div>Excel</div>
              <div>SQL</div>
              <div>Data Viz</div>
            </div>

            <h3 className="font-semibold mt-6 mb-2">Languages</h3>
            <div className="flex gap-2 text-sm text-gray-700">
              <span className="px-2 py-1 border rounded">English</span>
              <span className="px-2 py-1 border rounded">Russian</span>
              <span className="px-2 py-1 border rounded">Turkish</span>
              <span className="px-2 py-1 border rounded">German</span>
              <span className="px-2 py-1 border rounded">Kyrgyz</span>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="text-sm text-gray-500">Selected academic & data-visualisation work</p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-500">{p.subtitle}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-600">{p.tags.join(' • ')}</div>
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => setActive(p)} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">Open</button>
                      <a href={p.file} download className="px-3 py-1 border rounded text-sm">Download</a>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-700">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold">About — concise</h2>
          <p className="mt-3 text-gray-700">I combine policy-aware thinking with data skills to create visual narratives that are easy to understand and hard to ignore. I'm especially interested in labour market inequality, wage transparency, and practical visual analytics for policy audiences.</p>

          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold">Current focus</h4>
              <p>Master Data Science at TU Wien — applied projects, reproducible workflows, and interactive dashboards.</p>
            </div>
            <div>
              <h4 className="font-semibold">What I bring</h4>
              <ul className="list-disc pl-5">
                <li>Clean, reproducible code (Python)</li>
                <li>Stakeholder-friendly dashboards (Power BI / Tableau)</li>
                <li>Rigorous, documented methodology</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-gray-700">Email: <a href="mailto:aizatsagymbaeva@gmail.com" className="text-indigo-600">aizatsagymbaeva@gmail.com</a></p>
            <p className="text-gray-700">Phone: +4367761769281</p>

            <form className="mt-4 grid grid-cols-1 gap-3">
              <input placeholder="Your name" className="border p-2 rounded" />
              <input placeholder="Your email" className="border p-2 rounded" />
              <textarea placeholder="Message" className="border p-2 rounded h-24" />
              <div className="flex items-center gap-3">
                <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
                <small className="text-gray-500">Or email me directly at aizatsagymbaeva@gmail.com</small>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">Built with React + Tailwind • Designed for easy deployment to Vercel, Netlify or GitHub Pages</footer>
      </main>

      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-auto max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">{active.title}</h3>
                <p className="text-sm text-gray-500">{active.subtitle}</p>
              </div>
              <div className="flex gap-2">
                <a href={active.file} download className="px-3 py-1 border rounded text-sm">Download PDF</a>
                <button onClick={() => setActive(null)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Close</button>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-700 mb-4">{active.desc}</p>

              <div className="text-sm text-gray-600">
                <p><strong>Tools used:</strong> {active.tags.join(', ')}</p>
                <p className="mt-2">For full visuals and tables I used Power BI for interactive dashboards and Python for preprocessing. The PDFs linked are the project deliverables.</p>
              </div>

              <div className="mt-6">
                <iframe title="project-pdf" src={active.file} className="w-full h-[60vh] border rounded"></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
