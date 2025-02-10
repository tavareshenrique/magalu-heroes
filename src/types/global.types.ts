export type Hero = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  isFavorite?: boolean;
};

export interface HeroResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
  };
}

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
