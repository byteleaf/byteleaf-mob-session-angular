export enum ResourceType {
  Film = 'films',
  People = 'people',
  Planet = 'planets',
  Species = 'species',
  Starship = 'starships',
  Vehicle = 'vehicles',
}

export type ResourceUrl = string;

export default interface Resource {
  url: ResourceUrl;
  created: string;
  edited: string;
}
