export type Hero = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  isFavorite?: boolean;
};

export type Comic = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export interface ComicCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

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
