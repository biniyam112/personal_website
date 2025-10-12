import React from 'react';

interface CourseLink {
    label: string;
    href: string;
}

interface CourseCardProps {
    title: string;
    institution: string;
    description?: string;
    bulletPoints?: string[];
    links?: CourseLink[];
}

export default function CourseCard({ title, institution, description, bulletPoints, links }: CourseCardProps) {
    return (
        <div className="course-card">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                    <h3 className="text-xl font-semibold" style={{ color: '#000000', letterSpacing: 'var(--letter-spacing-tight)' }}>
                        {title}
                    </h3>
                    <p className="text-base font-medium" style={{ color: 'var(--primary)' }}>
                        {institution}
                    </p>
                </div>
            </div>

            {description && (
                <p className="text-base mb-3" style={{ color: 'var(--muted)', letterSpacing: 'var(--letter-spacing-normal)' }}>
                    {description}
                </p>
            )}

            {bulletPoints && bulletPoints.length > 0 && (
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    {bulletPoints.map((point, index) => (
                        <li
                            key={index}
                            className="text-base"
                            style={{ color: 'var(--muted)', letterSpacing: 'var(--letter-spacing-normal)' }}
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            )}

            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium"
                            style={{
                                background: 'var(--glass)',
                                color: 'var(--primary)',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            {link.label}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1.5 h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}