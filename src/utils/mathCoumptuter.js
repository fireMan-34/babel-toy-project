const mathCoumptuter = {
  add(...counts) {
    let result = 0;
    for (const count of counts) {
      const countType = typeof count;
      if (countType === 'number') {
        result += count;
      } else if (count === 'string') {
        const countNumber = Number(count);
        if (!Number.isNaN(countNumber)) {
          result += countNumber;
        }
      } else if (countType === 'array') {
        result += this.add(...countType);
      } else {
        throw new Error('Invalid Support Type: ' + countType);
      }
    }
    return result;
  }
};

export {
  mathCoumptuter,
}