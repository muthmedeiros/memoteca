enum ThoughtType {
  Type1 = 1,
  Type2 = 2,
  Type3 = 3,
}

function getModelByThoughtType(thoughtType: ThoughtType): string {
  switch (thoughtType) {
    case ThoughtType.Type1:
      return 'model1';
    case ThoughtType.Type2:
      return 'model2';
    case ThoughtType.Type3:
      return 'model3';
    default:
      return 'model1';
  }
}

function getColorAltTextByThoughtType(thoughtType: ThoughtType): string {
  switch (thoughtType) {
    case ThoughtType.Type1:
      return 'azuis';
    case ThoughtType.Type2:
      return 'laranjas';
    case ThoughtType.Type3:
      return 'roxas';
    default:
      return 'model1';
  }
}

export { ThoughtType, getColorAltTextByThoughtType, getModelByThoughtType };
