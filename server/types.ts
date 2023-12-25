import { Response } from 'express';

export interface PageModel {
  title: string;
  cssFile: string;
  jsFile: string;
}

export interface PartialModel {
  currentTime: string;
  error: string | null;
}

export type NodeEnv = 'development' | 'production';

// Override the Express Response type to add the render method
export interface AppResponse<T> extends Omit<Response, 'render'> {
  render(view: string, options: T): void;
}
