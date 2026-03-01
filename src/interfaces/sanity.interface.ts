/**
 * Shared Sanity types used across multiple interfaces.
 */

/** Sanity image field shape (image with asset reference). */
export interface SanityImageSource {
  asset: {
    _ref: string;
  };
}
