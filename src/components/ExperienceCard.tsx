import Image from "next/image";

type Props = {
    title: string;
    imageSrc: string;
    subtitle: string;
};

export default function ExperienceCard({ title, imageSrc, subtitle }: Props) {
    return (
        <div style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }} className="p-6 rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{ color: 'var(--primary)' }}>
                    <Image src={imageSrc} alt={title} width={48} height={48} />
                </div>
                <div>
                    <h3 style={{ color: '#000000', letterSpacing: 'var(--letter-spacing-tight)' }} className="font-extrabold text-xl tracking-tight">{title}</h3>
                    <p style={{ color: 'var(--muted)', letterSpacing: 'var(--letter-spacing-normal)', lineHeight: 'var(--body-line-height)' }} className="mt-2 text-sm leading-relaxed max-w-xs">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
