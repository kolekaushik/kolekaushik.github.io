import { useEffect, useRef } from 'react';
import type { ProjectImage } from '../types';
import { ChevronIcon, CloseIcon } from './icons';

interface LightboxProps {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (hasMultiple && event.key === 'ArrowLeft') {
        onNavigate((index - 1 + images.length) % images.length);
      }
      if (hasMultiple && event.key === 'ArrowRight') {
        onNavigate((index + 1) % images.length);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [hasMultiple, index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-md p-2 text-white/90 hover:text-white focus-visible:outline-white sm:right-6 sm:top-6"
        aria-label="Close image preview"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:text-white focus-visible:outline-white sm:left-6"
            aria-label="Previous image"
          >
            <ChevronIcon className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:text-white focus-visible:outline-white sm:right-6"
            aria-label="Next image"
          >
            <ChevronIcon className="h-8 w-8 rotate-180" />
          </button>
        </>
      )}

      <figure
        className="max-h-full max-w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] max-w-full rounded-md object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center font-mono-tag text-xs text-white/70">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
