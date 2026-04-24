"use client";

import Image from "next/image";
import { UploadIcon } from "@/components/icons";

type ImageUploaderProps = {
  images: string[];
  onChange: (nextImages: string[]) => void;
  label: string;
  helpText: string;
  removeText: string;
  selectedFileCountText: string;
  maxFiles?: number;
};

const DEFAULT_MAX_FILES = 5;

export function ImageUploader({
  images,
  onChange,
  label,
  helpText,
  removeText,
  selectedFileCountText,
  maxFiles = DEFAULT_MAX_FILES,
}: ImageUploaderProps) {
  const onFilesSelected = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }

    const remainingSlots = Math.max(0, maxFiles - images.length);
    if (remainingSlots === 0) {
      return;
    }

    const selected = Array.from(files).slice(0, remainingSlots);
    const converted = await Promise.all(selected.map(readAsDataUrl));
    onChange([...images, ...converted].slice(0, maxFiles));
  };

  return (
    <section className="form-images-wrap" aria-label={label}>
      <div className="form-map-head">
        <h3>{label}</h3>
        <p>{helpText}</p>
      </div>

      <label className="image-upload-label">
        <span className="with-icon">
          <UploadIcon className="button-icon" />
          {helpText}
        </span>
        <input
          className="input image-upload-input"
          type="file"
          accept="image/*"
          multiple
          onChange={(event) => {
            void onFilesSelected(event.target.files);
            event.currentTarget.value = "";
          }}
        />
      </label>

      <p className="file-count">
        {selectedFileCountText}: {images.length}/{maxFiles}
      </p>

      {images.length > 0 ? (
        <div className="uploaded-grid">
          {images.map((src, index) => (
            <div key={`${src.slice(0, 30)}-${index}`} className="uploaded-card">
              <div className="uploaded-image-wrap">
                <Image
                  src={src}
                  alt={`${label} ${index + 1}`}
                  fill
                  className="uploaded-image"
                  unoptimized={src.startsWith("data:")}
                />
              </div>
              <button
                type="button"
                className="secondary-button remove-image-button"
                onClick={() => onChange(images.filter((_, i) => i !== index))}
              >
                {removeText}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read selected image"));
    reader.readAsDataURL(file);
  });
}
