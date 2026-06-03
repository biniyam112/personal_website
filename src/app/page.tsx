"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import EducationCard from "@/components/EducationCard";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import CourseCard from "@/components/CourseCard";

const RESEARCH_INTERESTS = [
  "Machine Learning",
  "Data Mining",
  "Applied Deep Learning",
  "Natural Language Processing",
  "Socio-economic Data Analysis",
  "Optimization",
];

export default function Home() {
  return (
    <main className="min-h-screen pt-28">
      {/* About / Hero */}
      <section id="about" className="section pt-12 md:pt-16">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left: intro */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-100/40 border border-emerald-200 dark:border-emerald-800/40">
                <span style={{ color: 'var(--primary)', letterSpacing: 'var(--letter-spacing-wide)' }} className="text-xs font-semibold uppercase">
                  M.S. Data Science Student
                </span>
              </div>

              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>
                Biniyam <span style={{ color: 'var(--primary)' }}>Zergaw</span>
              </h1>

              <p className="hero-lead text-lg max-w-2xl">
                M.S. in Data Science student at <span className="font-medium">Fordham University</span> in New York, and a
                Graduate Research Assistant studying socio-economic indicators of housing distress. I work at the
                intersection of machine learning, data engineering, and applied research, and I am preparing for doctoral study.
              </p>

              {/* Quick links */}
              <div className="quick-links">
                <a href="mailto:biniyamd.zergaw@gmail.com" className="quick-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>biniyamd.zergaw@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/biniyam-demissew/" target="_blank" rel="noopener noreferrer" className="quick-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/biniyam112" target="_blank" rel="noopener noreferrer" className="quick-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://leetcode.com/u/biniyam112/" target="_blank" rel="noopener noreferrer" className="quick-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l-6-6 6-6" />
                    <path d="M15 6l6 6-6 6" />
                  </svg>
                  <span>LeetCode</span>
                </a>
                <span className="quick-link quick-link--static">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>New York, NY</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#research" style={{ background: 'var(--primary)', color: 'var(--on-primary)' }}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold transition-transform hover:-translate-y-0.5">
                  View Research
                </a>
                <a href="#projects" className="hero-secondary-btn inline-flex items-center px-5 py-2.5 rounded-lg font-medium border transition-colors">
                  Projects
                </a>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="justify-self-center md:justify-self-end">
              <div className="portrait-frame">
                <Image
                  src="/images/profile_image.jpg"
                  alt="Biniyam Zergaw"
                  width={360}
                  height={360}
                  className="object-cover w-full h-full rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Research interests */}
          <div className="mt-12 md:mt-16">
            <h2 className="eyebrow">Research Interests</h2>
            <div className="courses-grid mt-3">
              {RESEARCH_INTERESTS.map((interest) => (
                <span key={interest} className="interest-chip">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research / Publications */}
      <section id="research" className="section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Research</h2>
            <p className="section-lead">Ongoing research and work in progress.</p>
          </header>

          <div className="max-w-4xl space-y-6">
            <article className="publication-card">
              <div className="pub-venue">Working paper · 2026</div>
              <h3 className="pub-title">
                Socio-economic Indicators of Housing Distress in New York City
              </h3>
              <p className="pub-authors">Biniyam Zergaw · University Neighborhood Housing Program (UNHP), Fordham University</p>
              <p className="pub-abstract">
                Analyzing NYC housing data from UNHP alongside Census-tract data to identify correlations between
                socio-economic indicators and housing distress. Building data pipelines and predictive models to surface
                insights for a forthcoming paper.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Experience</h2>
            <p className="section-lead">Research and industry experience in data science and software engineering.</p>
          </header>

          <div className="max-w-4xl space-y-6">
            <WorkExperienceCard
              company="Fordham University"
              position="Graduate Research Assistant"
              duration="Aug 2025 – May 2027 (Expected)"
              location="New York, NY"
              accomplishments={[
                "Analyzing NYC housing data from the University Neighborhood Housing Program (UNHP) and Census-tract data to identify correlations between socio-economic indicators of housing distress.",
                "Building data processing pipelines and predictive models, and preparing a paper to share findings and insights.",
              ]}
            />

            <WorkExperienceCard
              company="Turing"
              position="JavaScript Model Trainer, Data Scientist"
              duration="May 2025 – Aug 2025"
              location="Palo Alto, CA (Remote)"
              accomplishments={[
                "Evaluated large language model (LLM) performance on text generation, code completion, and mathematical reasoning tasks using automated benchmarks and human evaluation.",
                "Worked with exact match and pass@k metrics to assess model accuracy.",
              ]}
            />

            <WorkExperienceCard
              company="RateEat"
              position="Project Lead & Software Developer"
              duration="Oct 2023 – Oct 2024"
              location="Addis Ababa, Ethiopia"
              accomplishments={[
                "Led a team of 9 developers to build a data warehousing platform aggregating data for over 1,000 restaurants.",
                "Automated data population using OCR for physical menus, plus web scraping and the Google Places API for digital ones, using LLMs as a semantic translator to structure data.",
                "Contributed ~40% of the mobile application code using Flutter/Dart.",
              ]}
            />

            <WorkExperienceCard
              company="SkillBridge"
              position="Software Developer"
              duration="Aug 2022 – Oct 2023"
              location="Addis Ababa, Ethiopia"
              accomplishments={[
                "Built backend services for an AI-powered learning platform that helps graduating students prepare for national exams.",
                "Reduced average analytics query latency by 30% by redesigning PostgreSQL indexes and optimizing Snowflake joins.",
                "Designed a RAG-based AI assistant for Math and Physics with LangChain, improving benchmarked math solution accuracy from 53% to 89%.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Projects</h2>
            <p className="section-lead">Selected academic and personal projects.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Spoken Language Identification"
              category="Deep Learning"
              period="Apr – May 2026"
              description="Spoken language identification for 9 languages from audio data using CNN and LSTM deep learning models."
              tags={["CNN", "LSTM", "Audio", "TensorFlow"]}
            />

            <ProjectCard
              title="NYC TLC Uber & Lyft Analysis"
              category="Machine Learning & Data Science"
              period="Dec 2025"
              description="Analysis of NYC ride-sharing patterns through supervised and unsupervised learning on TLC trip data."
              tags={["Pandas", "Scikit-learn", "Clustering"]}
            />

            <ProjectCard
              title="Customer Basket Analytics"
              category="Data Mining"
              period="Jul – Aug 2025"
              description="Shopping-behavior analysis combining dimensionality reduction and density-based clustering to segment customers."
              tags={["Python", "UMAP", "HDBSCAN", "Pandas"]}
            />

            <ProjectCard
              title="Chess Bot"
              category="Reinforcement Learning & Search"
              period="Feb – Mar 2022"
              description="A chess engine using search algorithms and magic bitboards. Implemented Minimax with Alpha-Beta Pruning and Zobrist Hashing to optimize decision-making."
              tags={["Minimax", "Alpha-Beta", "Bitboards", "Zobrist Hashing"]}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Education</h2>
            <p className="section-lead">Academic background and relevant coursework.</p>
          </header>

          <div className="max-w-4xl space-y-6">
            <EducationCard
              school="Fordham University"
              degree="M.S. in Data Science"
              duration="Aug 2025 – May 2027 (Expected)"
              location="New York, NY"
              gpa="4.00/4.0"
              courses={[
                "Data Mining",
                "Data Visualization",
                "Machine Learning",
                "Machine Learning in Finance",
              ]}
              links={[
                { label: "Program Page", href: "https://www.fordham.edu/academics/departments/computer-and-information-science/academic-programs/graduate-programs/master-of-science-in-data-science/" },
              ]}
            />

            <EducationCard
              school="Addis Ababa University"
              degree="B.Sc. in Software Engineering — Great Distinction"
              duration="Sep 2018 – Jun 2022"
              location="Addis Ababa, Ethiopia"
              gpa="3.5/4.0"
              courses={[
                "Algorithms",
                "Data Structures",
                "Operating Systems",
                "Computer Networks",
              ]}
              links={[
                { label: "University", href: "https://www.aau.edu.et/" },
                { label: "Honors", href: "https://drive.google.com/file/d/1pqSdssvyY8ulAlq0DYbUZIjkQORTYewO/view" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection
        title="Skills"
        subtitle="Tools and technologies I work with across data science and software engineering. More at"
        githubUrl="https://github.com/biniyam112"
        categories={[
          { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Dart"] },
          { category: "Frameworks & Libraries", items: ["TensorFlow", "Scikit-learn", "Pandas", "Seaborn", "LangChain", "FastAPI", "Beautiful Soup", "React.js", "Next.js", "Flutter"] },
          { category: "Data Science", items: ["Classification & Clustering", "Model Optimization", "Data Visualization", "Exploratory Data Analysis", "Unsupervised Learning"] },
          { category: "Tools & Platforms", items: ["Git", "REST APIs", "Docker", "Kubernetes", "Snowflake", "Tableau", "Google Cloud", "AWS"] },
        ]}
      />

      {/* Certifications */}
      <section id="certifications" className="section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Certifications</h2>
            <p className="section-lead">Professional training and programs.</p>
          </header>

          <div className="max-w-4xl space-y-6">
            <CourseCard
              title="Supervised Machine Learning: Regression and Classification"
              institution="Stanford Online"
              links={[
                { label: "Certificate", href: "https://www.coursera.org/account/accomplishments/verify/5QQ5DM4WAOB2" }
              ]}
            />

            <CourseCard
              title="Machine Learning Trainee"
              institution="UNDP — UN Frontier Tech Leaders Programme"
              description="Graduate of the 2025 United Nations Development Programme Machine Learning cohort."
              links={[
                { label: "Certificate", href: "https://drive.google.com/file/d/1wTiGOC4ATiVHsWwmwnBzzfMGApsrbJFD/view" }
              ]}
            />

            <CourseCard
              title="Data Structures and Algorithms"
              institution="Africa to Silicon Valley (A2SV)"
              bulletPoints={[
                "Completed a 1-year data structures and algorithms training program.",
                "Top 15% problem solver on LeetCode; solved 700+ questions across LeetCode and Codeforces.",
              ]}
              links={[
                { label: "A2SV", href: "https://a2sv.org/" },
                { label: "LeetCode Profile", href: "https://leetcode.com/u/biniyam112/" }
              ]}
            />
          </div>

          {/* Achievements */}
          <div className="max-w-4xl mt-8">
            <h3 className="eyebrow">Achievements</h3>
            <div className="courses-grid mt-3">
              <a href="https://drive.google.com/file/d/13EPoVkHLlcNvueFZeCU5vptBXsvl0hH1/view" target="_blank" rel="noopener noreferrer" className="achievement-link">IELTS Overall Band 8.0</a>
              <a href="https://drive.google.com/file/d/1-vnbV7liP0kQF3HvRU7APiEqCQoIKNYE/view" target="_blank" rel="noopener noreferrer" className="achievement-link">GRE Quantitative 164/170</a>
              <a href="https://leetcode.com/u/biniyam112/" target="_blank" rel="noopener noreferrer" className="achievement-link">Top 15% on LeetCode</a>
              <a href="https://drive.google.com/file/d/1jDMddtM0wyxkZb1SLsVM3T8n4QFAjclE/view" target="_blank" rel="noopener noreferrer" className="achievement-link">GITEX Africa 2024 Exhibitor</a>
              <a href="https://drive.google.com/file/d/1inyY3d6xZ5DpoVUR4M9CkBiVeBCCpuCX/view" target="_blank" rel="noopener noreferrer" className="achievement-link">World Youth Festival 2024 Delegate</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="section contact-section">
        <div className="section-inner">
          <header className="section-header">
            <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h2>
            <p className="section-lead">
              I am always glad to connect about research collaborations, graduate opportunities, and data science work.
              Email is the best way to reach me.
            </p>
          </header>

          <div className="contact-list">
            <a href="mailto:biniyamd.zergaw@gmail.com" className="contact-method">
              <span className="contact-method-label">Email</span>
              <span className="contact-method-value">biniyamd.zergaw@gmail.com</span>
            </a>

            <div className="contact-method">
              <span className="contact-method-label">Location</span>
              <span className="contact-method-value">New York, NY</span>
            </div>

            <a href="https://www.linkedin.com/in/biniyam-demissew/" target="_blank" rel="noopener noreferrer" className="contact-method">
              <span className="contact-method-label">LinkedIn</span>
              <span className="contact-method-value">in/biniyam-demissew</span>
            </a>

            <a href="https://github.com/biniyam112" target="_blank" rel="noopener noreferrer" className="contact-method">
              <span className="contact-method-label">GitHub</span>
              <span className="contact-method-value">github.com/biniyam112</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
