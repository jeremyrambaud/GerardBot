const emojiObject: {[key: string]: string} = {
  a: '🇦',
  b: '🇧',
  c: '🇨',
  d: '🇩',
  e: '🇪',
  f: '🇫',
  g: '🇬',
  h: '🇭',
  i: '🇮',
  j: '🇯',
  k: '🇰',
  l: '🇱',
  m: '🇲',
  n: '🇳',
  o: '🇴',
  p: '🇵',
  q: '🇶',
  r: '🇷',
  s: '🇸',
  t: '🇹',
  u: '🇺',
  v: '🇻',
  w: '🇼',
  x: '🇽',
  y: '🇾',
  z: '🇿',
};

export const letterToEmojiIndicator = (letter: string) => emojiObject[letter];
export const emojiIndicatorToLetter = (emoji: string) => Object.keys(emojiObject).find(key => emojiObject[key] === emoji);
