import {
  getColorAltTextByThoughtType,
  getModelByThoughtType,
} from './thought-types';

export class Thought {
  id?: number;
  type: number;
  content: string;
  authorship: string;

  constructor(type: number, content: string, authorship: string, id?: number) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.authorship = authorship;
  }

  static fromMap(data: any): Thought {
    return new Thought(data.type, data.content, data.authorship, data.id);
  }

  public model(): string {
    return getModelByThoughtType(this.type);
  }

  public colorAltText(): string {
    return getColorAltTextByThoughtType(this.type);
  }
}
