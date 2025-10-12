import Image from "next/image";
type Skill = {
    skill: string;
    percentage: number; // 0-100
};

interface SkillsSectionProps {
    title?: string;
    subtitle?: string;
    githubUrl?: string;
    skills: Skill[];
}

export default function SkillsSection({
    title = "Skills",
    subtitle = "These skill ratings reflect my proficiency across data science, software engineering, and design disciplines.",
    githubUrl,
    skills,
}: SkillsSectionProps) {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 items-start">
                <div>
                    <header className="mb-6">
                        <h2 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>{title.toUpperCase()}</h2>
                        <p className="mt-2 text-sm md:text-base text-[color:var(--muted)]" style={{ letterSpacing: 'var(--letter-spacing-normal)', lineHeight: 'var(--body-line-height)' }}>
                            {subtitle}{' '}
                            {githubUrl && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-[color:var(--foreground)]" style={{ letterSpacing: 'var(--letter-spacing-slight)' }}>
                                    {githubUrl.replace(/^https?:\/\//, '')}
                                </a>
                            )}
                        </p>
                    </header>

                    <div className="space-y-4">
                        {skills.map((s) => (
                            <div key={s.skill} className="skill-row">
                                <div className="bar">
                                    <div className="bar-fill" style={{ width: `${Math.min(Math.max(s.percentage, 0), 100)}%` }}>
                                        <span className="bar-label">{s.skill}</span>
                                    </div>
                                </div>
                                <div className="percent-line">
                                    <span className="percent-text">{s.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
