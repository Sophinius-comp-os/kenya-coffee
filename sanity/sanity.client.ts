// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn } from "./env";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
};

export const sanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) =>
    createImageUrlBuilder(config).image(source);