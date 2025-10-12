type Props = {
    title: string;
    category?: string;
    description: string;
    onExplore?: () => void;
    onNext?: () => void;
};

export default function ProjectCard({ title, category = "", description }: Props) {
    return (
        <article style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }} className="p-8 rounded-lg border">
            <div className="mb-6">
                <div style={{ color: 'var(--primary)', letterSpacing: 'var(--letter-spacing-wide)' }} className="font-bold tracking-wider">{category.toUpperCase()}</div>
                <h3 style={{ letterSpacing: 'var(--letter-spacing-tight)' }} className="section-subtitle text-4xl font-extrabold mt-2">{title}</h3>
            </div>

            <p style={{ color: 'var(--muted)', letterSpacing: 'var(--letter-spacing-normal)', lineHeight: 'var(--body-line-height)' }} className="max-w-2xl mb-6">{description}</p>

            <div className="flex items-center gap-4">
                <button style={{ background: 'var(--primary)', color: 'var(--on-primary)' }} className="px-6 py-3 rounded-lg font-semibold">EXPLORE</button>
            </div>
        </article>
    );
}
