"use client";

import Image from "next/image";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import EducationCard from "@/components/EducationCard";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-200/20 to-emerald-400/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-300/10 to-emerald-500/5 blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100/30 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30">
                <span style={{ color: 'var(--primary)', letterSpacing: 'var(--letter-spacing-wide)' }} className="text-sm font-semibold">DATA SCIENCE MASTER&apos;S STUDENT</span>
              </div>
              <h1 className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>
                <span className="block">BINIYAM</span>
                <span className="block" style={{ color: 'var(--primary)' }}>ZERGAW</span>
              </h1>
            </div>

            <p style={{ color: 'var(--muted)', letterSpacing: 'var(--letter-spacing-normal)', lineHeight: 'var(--body-line-height)' }} className="text-lg max-w-xl">
              Data Science master&apos;s student at <span className="font-medium">Fordham University</span> in New York. Passionate about working on ML and big data projects. Looking forward to internships in data science and software development.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects"
                style={{ background: 'var(--primary)', color: 'var(--on-primary)' }}
                className="inline-block px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                VIEW PROJECTS
              </a>
              <a href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-emerald-200 dark:border-emerald-800/50 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                style={{ color: 'var(--foreground)' }}>
                CONTACT ME
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10">
            <div className="relative">
              {/* Profile image with decorative border */}
              <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800/30 dark:to-emerald-600/20 blur-sm"></div>
              <div className="relative rounded-2xl overflow-hidden bg-emerald-50/50 dark:bg-emerald-900/20 backdrop-blur-sm p-2 border border-emerald-100 dark:border-emerald-800/30">
                <Image
                  src="/images/pixel_profile.png"
                  alt="Biniyam Zergaw"
                  width={520}
                  height={520}
                  className="object-cover w-full h-full rounded-xl"
                  priority
                />
              </div>

              {/* Tech stack badges */}
              <div className="absolute -bottom-6 -left-6 px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Python</span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">ML</span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Data Science</span>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-semibold">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection
        title="Skills"
        subtitle="These skill ratings reflect my proficiency across data science, software engineering, and design disciplines. I'm continuously learning and expanding my expertise through academic projects, personal initiatives, and hands-on experience. View my work at "
        githubUrl="https://github.com/biniyam112"
        skills={[
          { skill: "Python & ML Libraries", percentage: 95 },
          { skill: "Machine Learning & AI", percentage: 92 },
          { skill: "Data Analysis & Visualization", percentage: 90 },
          { skill: "FastAPI & Backend Development", percentage: 88 },
          { skill: "React.js & Flutter", percentage: 85 },
          { skill: "PostgreSQL & Database Design", percentage: 87 },
          { skill: "Docker & Kubernetes", percentage: 80 },
          { skill: "Data Structures & Algorithms", percentage: 93 },
        ]}
      />

      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="section-title text-3xl font-extrabold">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Checkers bot Development"
            category="Reinforcement Learning & Search"
            description={`Used parallelism, iterative deepening, and bitboards (including magic bitboards) to deepen search capabilities. Implemented Minimax, Alpha-Beta Pruning, and Zobrist Hashing to optimize decision-making, reducing computation time by ~84% on average.`}
          />

          <ProjectCard
            title="Forest fire prediction"
            category="Machine Learning & Data Science"
            description={`Developed comprehensive machine learning models for forest fire prediction using Scikit-learn, PyTorch, and Seaborn. Evaluated neural networks, SVM, and Rakel ensemble to identify best performing approaches.`}
          />

          <ProjectCard
            title="Fare Finder"
            category="FastAPI & Searching Algorithms"
            description={`Built backend with SQLAlchemy ORM and PostgreSQL; implemented database migrations and designed schemas. Implemented shortest-path algorithms that consider time, cost, and other constraints; secured API endpoints with JWT authentication.`}
          />
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="section-title text-3xl font-extrabold">DATA-DRIVEN INSIGHTS,</h2>
          <h3 className="section-title text-3xl font-extrabold">IMPACTFUL SOLUTIONS</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExperienceCard
            title="ANALYZE"
            imageSrc="/images/plan.png"
            subtitle={`Process and analyze 70k+ row datasets using Python, pandas, and statistical methods to extract actionable insights. Proficient in data cleaning, feature engineering, and exploratory data analysis for ML applications.`}
          />

          <ExperienceCard
            title="MODEL"
            imageSrc="/images/develop.png"
            subtitle={`Design and train machine learning models achieving 98% accuracy using Scikit-learn, PyTorch, and TensorFlow. Experienced in neural networks, ensemble methods, and model optimization techniques.`}
          />

          <ExperienceCard
            title="DEVELOP"
            imageSrc="/images/write.png"
            subtitle={`Build scalable backend systems with FastAPI, PostgreSQL, and Docker. Strong foundation in algorithms and data structures with 600+ LeetCode problems solved (Top 15%). Experience with React, Flutter, and cloud deployment.`}
          />

          <ExperienceCard
            title="OPTIMIZE"
            imageSrc="/images/design.png"
            subtitle={`Implement efficient algorithms like Alpha-Beta Pruning and Zobrist Hashing to achieve 84% computation reduction. Focus on performance optimization, code quality, and system scalability for production environments.`}
          />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h2 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight">
              Work Experience
            </h2>
            <p className="mt-2 text-sm md:text-base text-[color:var(--muted)]">
              Professional experience and contributions
            </p>
          </header>

          <div className="max-w-4xl mx-auto space-y-6">
            <WorkExperienceCard
              company="Fordham University"
              position="Graduate Assistant"
              duration="August 2025 - Present"
              location="New York, NY"
              accomplishments={[
                "Analyzed 70,000+ rows of data from the UNHP research group to create a model predicting distressed households with 98% accuracy",
                "Built scalable data pipelines using Hugging Face, Keras, and Dynamic ML SMOTE to address class imbalance",
                "Currently writing a research paper showcasing findings of socioeconomic insights discovered during the research"
              ]}
            />

            <WorkExperienceCard
              company="RateEat"
              position="Project Lead and Software Engineer"
              duration="January 2024 - October 2024"
              location="Remote"
              accomplishments={[
                "Led a cross-functional team of 9 members for a food review social app development",
                "Worked on data analysis of 15,000+ rows of large restaurant, food, and user activity data using Python scripts for cleaning, pre-processing, and storing",
                "Implemented mobile app with API integration, authentication, session management, and data caching"
              ]}
            />

            <WorkExperienceCard
              company="Upwork - Freelance Platform"
              position="Data Science & Web Development Specialist"
              duration="2022 - Present"
              location="Remote"
              accomplishments={[
                "Achieved 'Rising Talent' status with $15,000+ in earnings and 5-star client ratings",
                "Delivered data analysis projects using Python, pandas, and machine learning algorithms",
                "Built custom web applications for clients using React, Next.js, and modern JavaScript",
                "Completed 20+ successful projects with 100% client satisfaction rate",
                "Specialized in data visualization, statistical modeling, and full-stack development"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h2 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight">Education</h2>
            <p className="mt-2 text-sm md:text-base text-[color:var(--muted)]">Academic background and relevant coursework</p>
          </header>

          <div className="max-w-4xl mx-auto space-y-6">
            <EducationCard
              school="Fordham University"
              degree="MS in Data Science"
              duration="August 2024 – May 2026 (Expected)"
              location="New York, NY"
              gpa="3.9/4.0"
              courses={[
                "Machine Learning",
                "Deep Learning",
                "Statistical Inference",
                "Data Mining",
                "Big Data Systems",
                "Database Systems",
                "Natural Language Processing",
                "Optimization",
              ]}
              links={[
                { label: "Program Page", href: "https://www.fordham.edu/graduate-school-of-arts-and-sciences/academics/programs/data-science-ms/" },
                { label: "Department", href: "https://www.fordham.edu/graduate-school-of-arts-and-sciences/" }
              ]}
            />

            <EducationCard
              school="[Your Undergraduate University]"
              degree="BSc in [Your Major]"
              duration="[Start Year] – [End Year]"
              location="[City, Country]"
              courses={[
                "Algorithms",
                "Data Structures",
                "Operating Systems",
                "Computer Networks",
              ]}
              links={[]}
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h2 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>COURSES</h2>
            <p className="mt-2 text-sm md:text-base text-[color:var(--muted)]">Professional training and certifications</p>
          </header>

          <div className="max-w-4xl mx-auto space-y-8">
            <CourseCard
              title="Supervised Machine Learning: Regression and Classification"
              institution="Stanford Online"
              links={[
                { label: "Certificate", href: "https://www.coursera.org/account/accomplishments/verify/123456" }
              ]}
            />

            <CourseCard
              title="UN Machine Learning Training"
              institution="United Nations Frontier Tech Leaders Programme"
              description="Participated in the 2025 United Nations Development Program Machine Learning cohort."
              links={[
                { label: "Certificate", href: "https://unitednations.edu/verify/ml-cert-2025" }
              ]}
            />

            <CourseCard
              title="Data Structures and Algorithms"
              institution="A2SV"
              bulletPoints={[
                "Completed a 1-year data structure and algorithm training program.",
                "Top 15% problem solver on LeetCode, solved 600+ questions across LeetCode and Codeforces"
              ]}
              links={[
                { label: "Certificate", href: "https://a2sv.org/certificate/biniyam-zergaw" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Footer Style */}
      <footer id="contact" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-2xl font-semibold mb-6" style={{ color: 'var(--primary)', letterSpacing: 'var(--letter-spacing-tight)' }}>GET IN TOUCH</h2>

          <div className="contact-footer">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/biniyam-zergaw" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-icon linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="contact-value">Biniyam Zergaw</span>
            </a>

            {/* Telegram */}
            <a href="https://t.me/bnym112" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-icon telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="contact-value">@bnym112</span>
            </a>

            {/* Email */}
            <a href="mailto:biniyamdemissew112@gmail.com" className="contact-link">
              <div className="contact-icon email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="contact-value">biniyamdemissew112@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/251941726567" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-icon whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="contact-value">+251 941726567</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
