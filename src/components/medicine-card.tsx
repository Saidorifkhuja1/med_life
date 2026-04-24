"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { formatPrice, localizeText } from "@/lib/format";
import { Medicine } from "@/types";

type MedicineCardProps = {
  medicine: Medicine;
};

export function MedicineCard({ medicine }: MedicineCardProps) {
  const { language, t } = useAppContext();

  return (
    <article className="card">
      <div className="card-image-wrap">
        <Image
          src={medicine.image}
          alt={localizeText(medicine.name, language)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-image"
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">{localizeText(medicine.name, language)}</h3>
        <p className="card-text">{localizeText(medicine.description, language)}</p>
        <p className="price">
          {t.price}: {formatPrice(medicine.price, language)}
        </p>
        <Link href={`/medicines/${medicine.id}`} className="primary-button">
          {t.details}
        </Link>
      </div>
    </article>
  );
}
