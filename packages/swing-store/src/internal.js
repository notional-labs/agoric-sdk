import { Fail, q } from '@agoric/assert';

/**
 * @typedef { import('./snapStore').SnapStoreInternal } SnapStoreInternal
 * @typedef { import('./transcriptStore').TranscriptStoreInternal } TranscriptStoreInternal
 * @typedef { import('./bundleStore').BundleStoreInternal } BundleStoreInternal
 *
 * @typedef {{
 *    transcriptStore: TranscriptStoreInternal,
 *    snapStore: SnapStoreInternal,
 *    bundleStore: BundleStoreInternal,
 * }} SwingStoreInternal
 *
 * @typedef {'operational' | 'replay' | 'archival' | 'debug'} ArtifactMode
 */

export const artifactModes = ['operational', 'replay', 'archival', 'debug'];
export function validateArtifactMode(artifactMode) {
  if (!artifactModes.includes(artifactMode)) {
    Fail`invalid artifactMode ${q(artifactMode)}`;
  }
}
