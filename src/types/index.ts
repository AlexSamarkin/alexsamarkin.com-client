export enum SendingStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  SENDING = 'sending',
  IDLE = 'idle',
}

export interface Action {
  type: string;
  payload?: any;
}

export interface JobItem {
  title: string;
  fromYear: number;
  toYear: number | null;
  description: string;
}

export interface CourseItem {
  title: string;
  fromYear: number;
  toYear: number | null;
  description: string;
}

export interface NavItem {
  title: string;
  link: string;
}

export interface Article {
  title: string;
  date: Date;
  excerpt: string;
  thumb: string;
  slug: string;
  content?: string;
}

export enum Locale {
  RU = 'ru',
  EN = 'en',
}
