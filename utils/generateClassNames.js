function generateClassNames(baseClass, conditions) {
  let classNames = baseClass;

  for (const [condition, className] of Object.entries(conditions)) {
    if (condition) {
      classNames += ` ${className}`;
    }
  }

  return classNames;
}

export default generateClassNames;
