import { ThoughtCardTypes } from './thought-card.types';

export class ThoughtCardModel {
  type: ThoughtCardTypes;
  content: string;
  authorship: string;

  constructor(type: ThoughtCardTypes, content: string, authorship: string) {
    this.type = type;
    this.content = content;
    this.authorship = authorship;
  }

  get model(): string {
    switch (this.type) {
      case ThoughtCardTypes.Type1:
        return 'model1';
      case ThoughtCardTypes.Type2:
        return 'model2';
      case ThoughtCardTypes.Type3:
        return 'model3';
    }
  }

  get colorAltText(): string {
    switch (this.type) {
      case ThoughtCardTypes.Type1:
        return 'azuis';
      case ThoughtCardTypes.Type2:
        return 'laranjas';
      case ThoughtCardTypes.Type3:
        return 'roxas';
    }
  }
}
