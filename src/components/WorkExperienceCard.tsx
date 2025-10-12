interface WorkExperienceCardProps {
    company: string;
    position: string;
    duration: string;
    location: string;
    accomplishments: string[];
}

export default function WorkExperienceCard({
    company,
    position,
    duration,
    location,
    accomplishments
}: WorkExperienceCardProps) {
    return (
        <div className="work-experience-card">
            {/* Company Header */}
            <div className="work-header">
                <h3 className="company-name">{company}</h3>
                <h4 className="position-title">{position}</h4>

                <div className="work-meta">
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
                </div>
            </div>

            {/* Accomplishments */}
            <div className="accomplishments-list">
                {accomplishments.map((item, index) => (
                    <div key={index} className="accomplishment">
                        <span className="dot" aria-hidden="true" />
                        <p className="accomplishment-text">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}