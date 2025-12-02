const DIRECTUS_BASE_URL = import.meta.env.PUBLIC_DIRECTUS_URL ?? 'https://cmsvcard.solarion.id';

type DirectusAssetOptions = {
  width?: number;
  height?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png' | 'tiff';
  quality?: number;
  fit?: 'cover' | 'contain' | 'inside' | 'outside';
};

export function getDirectusAssetUrl(
  id: string | null | undefined,
  options?: DirectusAssetOptions,
): string | null {
  if (!id) return null;

  const url = new URL(`/assets/${id}`, DIRECTUS_BASE_URL);

  if (options) {
    const { width, height, format, quality, fit } = options;

    if (width) url.searchParams.set('width', String(width));
    if (height) url.searchParams.set('height', String(height));
    if (format) url.searchParams.set('format', format);
    if (quality) url.searchParams.set('quality', String(quality));
    if (fit) url.searchParams.set('fit', fit);
  }

  return url.toString();
}
