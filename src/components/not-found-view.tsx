import Link from "next/link";
import { Dictionary } from "@/lib/i18n";

type NotFoundViewProps = {
  t: Dictionary;
};

export function NotFoundView({ t }: NotFoundViewProps) {
  return (
    <section className="not-found">
      <h1>{t.notFoundTitle}</h1>
      <p>{t.notFoundText}</p>
      <Link href="/" className="secondary-button">
        {t.backHome}
      </Link>
    </section>
  );
}
