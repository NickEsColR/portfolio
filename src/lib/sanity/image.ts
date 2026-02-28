/**
 * Sanity image URL helper.
 * Centralises image-url builder creation so every component
 * that needs Sanity image URLs uses the same instance.
 */
import { sanityClient } from "sanity:client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@/interfaces/sanity.interface";

const builder = createImageUrlBuilder(sanityClient);

/**
 * Build a Sanity-hosted image URL with the given dimensions.
 *
 * @param source - Sanity image field value (object with `asset._ref`)
 * @param width  - Desired width in pixels
 * @param height - Desired height in pixels
 * @returns Fully-qualified image URL string
 */
export function getSanityImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number,
): string {
  const imgBuilder = builder.image(source);
  if (width) imgBuilder.width(width);
  if (height) imgBuilder.height(height);
  return imgBuilder.url();
}
