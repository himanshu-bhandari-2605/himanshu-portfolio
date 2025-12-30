export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 text-gray-900">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Himanshu Bhandari</h1>
          <p className="text-gray-600 mt-1">
            Business Management | Strategy | COO Office Support | MBA (Finance)
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Bhandup, Mumbai · himanshu.bhandari265@gmail.com · 9743932230 ·{" "}
            <a
              href="https://www.linkedin.com/in/himanshu-bhandari-2090491ab"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
          <p>
            Business Management and COO-support professional with experience in
            executive reporting, business risk identification, governance, and
            operational controls within fast-paced organizations. Proven ability
            to support senior leadership through high-quality presentations, KPI
            dashboards, and structured business analysis. Hands-on exposure to
            project management, audit readiness, Risk Control Self-Assessment
            (RCSA), and operational governance.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>

          <div className="mb-6">
            <h3 className="font-semibold">
              Business Strategy & Sales Manager
            </h3>
            <p className="text-sm text-gray-500">
              Power Photonix India Pvt. Ltd., Mumbai · Dec 2024 – Present
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                Act as a business management partner supporting senior leadership
                through executive requests, project tracking, and strategic
                business analysis.
              </li>
              <li>
                Develop advanced Excel dashboards (Pivot Tables, Power Query,
                XLOOKUP) to track KPIs and operational performance, improving
                reporting turnaround time by ~25%.
              </li>
              <li>
                Prepare management-ready MBR and QBR decks with strong narrative,
                wireframing, and data visualization.
              </li>
              <li>
                Project manage cross-functional workstreams, tracking milestones,
                risks, dependencies, and delivery timelines.
              </li>
              <li>
                Identify business and operational risks, maintain risk and issue
                logs, and support mitigating controls and escalation.
              </li>
              <li>
                Support audit, regulatory, and compliance deliverables including
                RCSA documentation and evidence tracking.
              </li>
              <li>
                Coordinate governance routines, operating rhythm reviews, and
                leadership action tracking.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Sales Engineer</h3>
            <p className="text-sm text-gray-500">
              Desoutter, Bangalore · 2023 – 2024
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                Built Excel-based forecasting and pricing models to analyze margin
                impact and cost drivers.
              </li>
              <li>
                Supported OEM partnerships and commercial negotiations through
                business cases and financial analysis.
              </li>
              <li>
                Conducted market sizing, feasibility studies, and competitive
                benchmarking.
              </li>
              <li>
                Coordinated with supply chain and operations teams to improve SLA
                adherence and delivery timelines.
              </li>
            </ul>
          </div>
        </section>

        {/* Internships */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Internships</h2>

          <p className="font-semibold">
            New Product Engineering Development Intern — Autoliv India, Bangalore
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Jan 2023 – Nov 2023
          </p>

          <p className="font-semibold">
            R&D Intern — Nandan GSE, Navi Mumbai
          </p>
          <p className="text-sm text-gray-500">
            May 2022 – Jun 2022
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Executive Business Support, COO Office Support, Business Governance,
              Risk & Issue Management, RCSA Support, Audit Readiness
            </li>
            <li>
              KPI Dashboards, Financial Tracking, Budget & Expense Governance,
              Headcount & Capacity Tracking
            </li>
            <li>
              Advanced Excel (Pivot Tables, Power Query, XLOOKUP, Dashboards),
              PowerPoint (Design & Storyboarding)
            </li>
            <li>
              SharePoint, JIRA (basic), Confluence (basic)
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <p>
            <strong>MBA (Finance)</strong> — Golden Gate University, San Francisco
            (Expected 2026)
          </p>
          <p>
            <strong>B.Tech</strong> — Manipal Institute of Technology (2023),
            CGPA: 7.69
          </p>
        </section>

      </div>
    </main>
  );
}
