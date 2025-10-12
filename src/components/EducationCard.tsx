interface EducationLink {
    label: string;
    href: string;
}

interface EducationCardProps {
    school: string;
    degree: string;
    duration: string;
    location: string;
    gpa?: string;
    courses: string[];
    links?: EducationLink[];
}

export default function EducationCard({
    school,
    degree,
    duration,
    location,
    gpa,
    courses,
    links = [],
}: EducationCardProps) {
    return (
        <div className="education-card">
            <div className="edu-header">
                <h3 className="school-name">{school}</h3>
                <h4 className="degree-title">{degree}</h4>

                <div className="edu-meta">
                    <div className="meta-item">
                        <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{duration}</span>
                    </div>
                    <div className="meta-item">
                        <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{location}</span>
                    </div>
                    {gpa && (
                        <div className="meta-item">
                            <span className="gpa-pill">GPA: {gpa}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="courses-section">
                <h5 className="courses-title">Selected Coursework</h5>
                <div className="courses-grid">
                    {courses.map((c, i) => (
                        <span key={i} className="course-chip">{c}</span>
                    ))}
                </div>
            </div>

            {links.length > 0 && (
                <div className="edu-links">
                    {links.map((l, i) => (
                        <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="edu-link">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
