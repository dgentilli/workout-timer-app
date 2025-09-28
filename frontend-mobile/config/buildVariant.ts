/**
 * this is a placeholder. in the event we need different build variants in the future
 * we'll have to introduce a remote config. but by including the necessary scaffolding
 * it will be much easier to do this in the future rather than trying to retrofit the
 * exiting app once it's launched
 */

export const BUILD_VARIANT = process.env.EXPO_PUBLIC_BUILD_VARIANT || 'main';
