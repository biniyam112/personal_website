type SkillCategory = {
    category: string;
    items: string[];
};

interface SkillsSectionProps {
    title?: string;
    subtitle?: string;
    githubUrl?: string;
    categories: SkillCategory[];
}

export default function SkillsSection({
    title = "Skills",
    subtitle = "Tools and technologies I work with across data science and software engineering.",
    githubUrl,
    categories,
}: SkillsSectionProps) {
    return (
        <section id="skills" className="section">
            <div className="section-inner">
                <header className="section-header">
                    <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>
                        {title}
                    </h2>
                    <p className="section-lead">
                        {subtitle}{' '}
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
                                {githubUrl.replace(/^https?:\/\//, '')}
                            </a>
                        )}
                    </p>
                </header>

                <div className="skill-categories">
                    {categories.map((cat) => (
                        <div key={cat.category} className="skill-category">
                            <h3 className="skill-category-title">{cat.category}</h3>
                            <div className="courses-grid">
                                {cat.items.map((item) => (
                                    <span key={item} className="course-chip">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
