interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEmail?: boolean;
  isLink?: boolean;
  small?: boolean;
}

function InfoItem({ icon, label, value, isEmail, isLink, small }: InfoItemProps) {
  if (!value || value === '/') return null;

  const containerClass = small
    ? "flex items-start gap-2 text-sm"
    : "flex items-start gap-3";

  const iconClass = small
    ? "text-primary mt-0.5 flex-shrink-0"
    : "text-primary mt-1 flex-shrink-0";

  return (
    <div className={containerClass}>
      <div className={iconClass}>{icon}</div>
      <div className="flex-1">
        <div className="text-muted-foreground text-sm font-medium mb-1">{label}</div>
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-all"
          >
            {value}
          </a>
        ) : isEmail ? (
          <a
            href={`mailto:${value}`}
            className="text-foreground hover:text-primary transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <div className="text-foreground">{value}</div>
        )}
      </div>
    </div>
  );
}

export default InfoItem