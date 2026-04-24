import { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function BaseIcon({
  className,
  children,
  strokeWidth = 1.9,
}: IconProps & { children: ReactNode; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.4-3.4" />
    </BaseIcon>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.25M12 19.25v2.25M4.75 12H2.5M21.5 12h-2.25" />
      <path d="m5.7 5.7 1.6 1.6m9.4 9.4 1.6 1.6m0-12.6-1.6 1.6M7.3 16.7l-1.6 1.6" />
    </BaseIcon>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M20.2 14.1a8.8 8.8 0 1 1-10.3-10 7.4 7.4 0 1 0 10.3 10Z" />
    </BaseIcon>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </BaseIcon>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M6.7 3.8h3l1.4 3.8-1.9 1.5a14.5 14.5 0 0 0 5.7 5.7l1.5-1.9 3.8 1.4v3a1.9 1.9 0 0 1-2.1 1.9A17 17 0 0 1 4.8 5.9 1.9 1.9 0 0 1 6.7 3.8Z" />
    </BaseIcon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 21s6.5-6 6.5-11A6.5 6.5 0 1 0 5.5 10C5.5 15 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.4" />
    </BaseIcon>
  );
}

export function PillIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M16.8 7.2a5 5 0 0 0-7 0l-2.6 2.6a5 5 0 0 0 7 7l2.6-2.6a5 5 0 0 0 0-7Z" />
      <path d="m9.5 9.5 5 5" />
    </BaseIcon>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="m12 3.8 2.5 5 5.5.8-4 3.9.9 5.5L12 16.3 7.1 19l.9-5.5-4-3.9 5.5-.8L12 3.8Z" />
    </BaseIcon>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2.1" />
    </BaseIcon>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M3.5 6.5h10.5v8H3.5z" />
      <path d="M14 9h3.2l2.3 2.6V14H14z" />
      <circle cx="7" cy="16.5" r="1.5" />
      <circle cx="17" cy="16.5" r="1.5" />
    </BaseIcon>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M14 4h6v6" />
      <path d="m20 4-9.5 9.5" />
      <path d="M19 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.5" />
    </BaseIcon>
  );
}

export function FilterIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 6h16M7.5 12h9M10.5 18h3" />
    </BaseIcon>
  );
}

export function LocationTargetIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5" />
    </BaseIcon>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
    </BaseIcon>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3.5 5.5 6v5.8c0 4.2 2.7 7 6.5 8.7 3.8-1.7 6.5-4.5 6.5-8.7V6L12 3.5Z" />
      <path d="m9.2 12 1.7 1.7 4-4" />
    </BaseIcon>
  );
}

export function UploadIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 16V6" />
      <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
      <path d="M4.5 17.5v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1" />
    </BaseIcon>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M11 3.5H5.8c-.8 0-1.5.7-1.5 1.5v5.2c0 .4.2.8.4 1L12.8 19a1.5 1.5 0 0 0 2.1 0l4.1-4.1a1.5 1.5 0 0 0 0-2.1l-7.9-8.9a1.6 1.6 0 0 0-1.1-.4Z" />
      <circle cx="7.7" cy="7.7" r="1.1" />
    </BaseIcon>
  );
}
