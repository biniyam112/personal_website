type ProjectLink = {
    label: string;
    href: string;
};

type Props = {
    title: string;
    category?: string;
    description: string;
    period?: string;
    tags?: string[];
    links?: ProjectLink[];
};

export default function ProjectCard({ title, category = "", description, period, tags = [], links = [] }: Props) {
    return (
        <article className="project-card">
            <div className="project-head">
                <div className="project-category">{category.toUpperCase()}</div>
                <h3 className="project-title">{title}</h3>
                {period && <span className="project-period">{period}</span>}
            </div>

            <p className="project-description">{description}</p>

            {tags.length > 0 && (
                <div className="courses-grid mb-1">
                    {tags.map((t) => (
                        <span key={t} className="course-chip">{t}</span>
                    ))}
                </div>
            )}

            {links.length > 0 && (
                <div className="edu-links">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="edu-link">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
}
