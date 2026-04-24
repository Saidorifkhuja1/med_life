"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { localizeText } from "@/lib/format";
import { Pharmacy } from "@/types";

type PharmacyCardProps = {
  pharmacy: Pharmacy;
  medicineCount: number;
};

export function PharmacyCard({ pharmacy, medicineCount }: PharmacyCardProps) {
  const { language, t } = useAppContext();

  return (
    <article className="card">
      <div className="card-image-wrap">
        <Image
          src={pharmacy.image}
          alt={localizeText(pharmacy.name, language)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-image"
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">{localizeText(pharmacy.name, language)}</h3>
        <p className="card-text">{localizeText(pharmacy.address, language)}</p>
        <p className="card-text">
          {t.phone}: {pharmacy.phone}
        </p>

        <div className="badge-row">
          <span className="badge">
            {medicineCount} {t.medicinesCount}
          </span>
        </div>

        <Link href={`/pharmacies/${pharmacy.id}`} className="primary-button">
          {t.details}
        </Link>
      </div>
    </article>
  );
}
