function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function getWordEndingByCount(count: number) {
  return count !== 1 ? 's' : '';
}

export { capitalize, getWordEndingByCount };
