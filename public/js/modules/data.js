const data = [
  [
    {
      key: 'Backquote',
      en: '`',
      ru: 'ё',
      shiftEn: '~',
      shiftRu: 'Ё',
      altEn: '`',
      altRu: 'ё',
      altShiftEn: '~',
      altShiftRu: 'Ё',
      printable: true,
    },
    {
      key: 'Digit1',
      en: '1',
      ru: '1',
      shiftEn: '!',
      shiftRu: '!',
      altEn: '¡',
      altRu: '1',
      altShiftEn: '!',
      altShiftRu: '!',
      printable: true,
    },
    {
      key: 'Digit2',
      en: '2',
      ru: '2',
      shiftEn: '@',
      shiftRu: '\'',
      altEn: '™',
      altRu: '2',
      altShiftEn: '@',
      altShiftRu: '\'',
      printable: true,
    },
    {
      key: 'Digit3',
      en: '3',
      ru: '3',
      shiftEn: '#',
      shiftRu: '№',
      altEn: '£',
      altRu: '3',
      altShiftEn: '#',
      altShiftRu: '№',
      printable: true,
    },
    {
      key: 'Digit4',
      en: '4',
      ru: '4',
      shiftEn: '$',
      shiftRu: ';',
      altEn: '¢',
      altRu: '4',
      altShiftEn: '$',
      altShiftRu: ';',
      printable: true,
    },
    {
      key: 'Digit5',
      en: '5',
      ru: '5',
      shiftEn: '%',
      shiftRu: '%',
      altEn: '∞',
      altRu: '5',
      altShiftEn: '%',
      altShiftRu: '%',
      printable: true,
    },
    {
      key: 'Digit6',
      en: '6',
      ru: '6',
      shiftEn: '^',
      shiftRu: ':',
      altEn: '§',
      altRu: '6',
      altShiftEn: '^',
      altShiftRu: ':',
      printable: true,
    },
    {
      key: 'Digit7',
      en: '7',
      ru: '7',
      shiftEn: '&',
      shiftRu: '?',
      altEn: '¶',
      altRu: '7',
      altShiftEn: '&',
      altShiftRu: '?',
      printable: true,
    },
    {
      key: 'Digit8',
      en: '8',
      ru: '8',
      shiftEn: '*',
      shiftRu: '*',
      altEn: '•',
      altRu: '8',
      altShiftEn: '*',
      altShiftRu: '*',
      printable: true,
    },
    {
      key: 'Digit9',
      en: '9',
      ru: '9',
      shiftEn: '(',
      shiftRu: '(',
      altEn: 'ª',
      altRu: '9',
      altShiftEn: '(',
      altShiftRu: '(',
      printable: true,
    },
    {
      key: 'Digit0',
      en: '0',
      ru: '0',
      shiftEn: ')',
      shiftRu: ')',
      altEn: 'º',
      altRu: '0',
      altShiftEn: ')',
      altShiftRu: ')',
      printable: true,
    },
    {
      key: 'Minus',
      en: '-',
      ru: '-',
      shiftEn: '_',
      shiftRu: '_',
      altEn: '–',
      altRu: '-',
      altShiftEn: '—',
      altShiftRu: '_',
      printable: true,
    },
    {
      key: 'Equal',
      en: '=',
      ru: '=',
      shiftEn: '+',
      shiftRu: '+',
      altEn: '≠',
      altRu: '=',
      altShiftEn: '≠',
      altShiftRu: '+',
      printable: true,
    },
    {
      key: 'Backspace',
      en: '⌫',
      ru: '⌫',
      printable: false,
    },
  ],
  [
    {
      key: 'Tab',
      en: '⇥',
      ru: '⇥',
      printable: false,
    },
    {
      key: 'KeyQ',
      en: 'q',
      ru: 'й',
      shiftEn: 'Q',
      shiftRu: 'Й',
      altEn: 'q',
      altRu: 'й',
      altShiftEn: 'Q',
      altShiftRu: 'Й',
      printable: true,
    },
    {
      key: 'KeyW',
      en: 'w',
      ru: 'ц',
      shiftEn: 'W',
      shiftRu: 'Ц',
      altEn: 'w',
      altRu: 'ц',
      altShiftEn: 'W',
      altShiftRu: 'Ц',
      printable: true,
    },
    {
      key: 'KeyE',
      en: 'e',
      ru: 'у',
      shiftEn: 'E',
      shiftRu: 'У',
      altEn: 'e',
      altRu: 'у',
      altShiftEn: 'E',
      altShiftRu: 'У',
      printable: true,
    },
    {
      key: 'KeyR',
      en: 'r',
      ru: 'к',
      shiftEn: 'R',
      shiftRu: 'К',
      altEn: 'r',
      altRu: 'к',
      altShiftEn: 'R',
      altShiftRu: 'К',
      printable: true,
    },
    {
      key: 'KeyT',
      en: 't',
      ru: 'е',
      shiftEn: 'T',
      shiftRu: 'Е',
      altEn: 't',
      altRu: 'е',
      altShiftEn: 'T',
      altShiftRu: 'Е',
      printable: true,
    },
    {
      key: 'KeyY',
      en: 'y',
      ru: 'н',
      shiftEn: 'Y',
      shiftRu: 'Н',
      altEn: 'y',
      altRu: 'н',
      altShiftEn: 'Y',
      altShiftRu: 'Н',
      printable: true,
    },
    {
      key: 'KeyU',
      en: 'u',
      ru: 'г',
      shiftEn: 'U',
      shiftRu: 'Г',
      altEn: 'u',
      altRu: 'г',
      altShiftEn: 'U',
      altShiftRu: 'Г',
      printable: true,
    },
    {
      key: 'KeyI',
      en: 'i',
      ru: 'ш',
      shiftEn: 'I',
      shiftRu: 'Ш',
      altEn: 'i',
      altRu: 'ш',
      altShiftEn: 'I',
      altShiftRu: 'Ш',
      printable: true,
    },
    {
      key: 'KeyO',
      en: 'o',
      ru: 'щ',
      shiftEn: 'O',
      shiftRu: 'Щ',
      altEn: 'o',
      altRu: 'щ',
      altShiftEn: 'O',
      altShiftRu: 'Щ',
      printable: true,
    },
    {
      key: 'KeyP',
      en: 'p',
      ru: 'з',
      shiftEn: 'P',
      shiftRu: 'З',
      altEn: 'p',
      altRu: 'з',
      altShiftEn: 'P',
      altShiftRu: 'З',
      printable: true,
    },
    {
      key: 'BracketLeft',
      en: '[',
      ru: 'х',
      shiftEn: '{',
      shiftRu: 'Х',
      altEn: '“',
      altRu: 'х',
      altShiftEn: '‘',
      altShiftRu: 'Х',
      printable: true,
    },
    {
      key: 'BracketRight',
      en: ']',
      ru: 'ъ',
      shiftEn: '}',
      shiftRu: 'Ъ',
      altEn: '”',
      altRu: 'ъ',
      altShiftEn: '’',
      altShiftRu: 'Ъ',
      printable: true,
    },
    {
      key: 'Backslash',
      en: '\\',
      ru: '\\',
      shiftEn: '|',
      shiftRu: '/',
      altEn: '«',
      altRu: 'Б',
      altShiftEn: '»',
      altShiftRu: 'б',
      printable: true,
    },
  ],
  [
    {
      key: 'CapsLock',
      en: '⇪',
      ru: '⇪',
      printable: false,
    },
    {
      key: 'KeyA',
      en: 'a',
      ru: 'ф',
      shiftEn: 'A',
      shiftRu: 'Ф',
      altEn: 'å',
      altRu: 'ф',
      altShiftEn: 'Å',
      altShiftRu: 'Ф',
      printable: true,
    },
    {
      key: 'KeyS',
      en: 's',
      ru: 'ы',
      shiftEn: 'S',
      shiftRu: 'Ы',
      altEn: 'ß',
      altRu: 'ы',
      altShiftEn: '§',
      altShiftRu: 'Ы',
      printable: true,
    },
    {
      key: 'KeyD',
      en: 'd',
      ru: 'в',
      shiftEn: 'D',
      shiftRu: 'В',
      altEn: '∂',
      altRu: 'в',
      altShiftEn: 'Δ',
      altShiftRu: 'В',
      printable: true,
    },
    {
      key: 'KeyF',
      en: 'f',
      ru: 'а',
      shiftEn: 'F',
      shiftRu: 'А',
      altEn: 'ƒ',
      altRu: 'а',
      altShiftEn: 'F',
      altShiftRu: 'А',
      printable: true,
    },
    {
      key: 'KeyG',
      en: 'g',
      ru: 'п',
      shiftEn: 'G',
      shiftRu: 'П',
      altEn: '©',
      altRu: 'п',
      altShiftEn: 'G',
      altShiftRu: 'П',
      printable: true,
    },
    {
      key: 'KeyH',
      en: 'h',
      ru: 'р',
      shiftEn: 'H',
      shiftRu: 'Р',
      altEn: '˙',
      altRu: 'р',
      altShiftEn: 'H',
      altShiftRu: 'Р',
      printable: true,
    },
    {
      key: 'KeyJ',
      en: 'j',
      ru: 'о',
      shiftEn: 'J',
      shiftRu: 'О',
      altEn: '∆',
      altRu: 'о',
      altShiftEn: 'J',
      altShiftRu: 'О',
      printable: true,
    },
    {
      key: 'KeyK',
      en: 'k',
      ru: 'л',
      shiftEn: 'K',
      shiftRu: 'Л',
      altEn: '¬',
      altRu: 'л',
      altShiftEn: 'K',
      altShiftRu: 'Л',
      printable: true,
    },
    {
      key: 'KeyL',
      en: 'l',
      ru: 'д',
      shiftEn: 'L',
      shiftRu: 'Д',
      altEn: '…',
      altRu: 'д',
      altShiftEn: 'L',
      altShiftRu: 'Д',
      printable: true,
    },
    {
      key: 'Semicolon',
      en: ';',
      ru: 'ж',
      shiftEn: ':',
      shiftRu: 'Ж',
      altEn: '∞',
      altRu: 'ж',
      altShiftEn: ':',
      altShiftRu: 'Ж',
      printable: true,
    },
    {
      key: 'Quote',
      en: '\'',
      ru: 'э',
      shiftEn: '\'',
      shiftRu: 'Э',
      altEn: '≠',
      altRu: 'э',
      altShiftEn: '≈',
      altShiftRu: 'Э',
      printable: true,
    },
    {
      key: 'Enter',
      en: '⏎',
      ru: '⏎',
      printable: false,
    },
  ],
  [
    {
      key: 'ShiftLeft',
      en: '⇧',
      ru: '⇧',
      printable: false,
    },
    {
      key: 'KeyZ',
      en: 'z',
      ru: 'я',
      shiftEn: 'Z',
      shiftRu: 'Я',
      altEn: 'Ω',
      altRu: 'я',
      altShiftEn: 'Ω',
      altShiftRu: 'Я',
      printable: true,
    },
    {
      key: 'KeyX',
      en: 'x',
      ru: 'ч',
      shiftEn: 'X',
      shiftRu: 'Ч',
      altEn: '≈',
      altRu: 'ч',
      altShiftEn: 'X',
      altShiftRu: 'Ч',
      printable: true,
    },
    {
      key: 'KeyC',
      en: 'c',
      ru: 'с',
      shiftEn: 'C',
      shiftRu: 'С',
      altEn: 'ç',
      altRu: 'с',
      altShiftEn: 'Ç',
      altShiftRu: 'С',
      printable: true,
    },
    {
      key: 'KeyV',
      en: 'v',
      ru: 'м',
      shiftEn: 'V',
      shiftRu: 'М',
      altEn: '√',
      altRu: 'м',
      altShiftEn: 'V',
      altShiftRu: 'М',
      printable: true,
    },
    {
      key: 'KeyB',
      en: 'b',
      ru: 'и',
      shiftEn: 'B',
      shiftRu: 'И',
      altEn: '∫',
      altRu: 'и',
      altShiftEn: 'B',
      altShiftRu: 'И',
      printable: true,
    },
    {
      key: 'KeyN',
      en: 'n',
      ru: 'т',
      shiftEn: 'N',
      shiftRu: 'Т',
      altEn: '≈',
      altRu: 'т',
      altShiftEn: 'N',
      altShiftRu: 'Т',
      printable: true,
    },
    {
      key: 'KeyM',
      en: 'm',
      ru: 'ь',
      shiftEn: 'M',
      shiftRu: 'Ь',
      altEn: 'µ',
      altRu: 'ь',
      altShiftEn: 'M',
      altShiftRu: 'Ь',
      printable: true,
    },
    {
      key: 'Comma',
      en: ',',
      ru: 'б',
      shiftEn: '<',
      shiftRu: 'Б',
      altEn: '≤',
      altRu: 'б',
      altShiftEn: '<',
      altShiftRu: 'Б',
      printable: true,
    },
    {
      key: 'Period',
      en: '.',
      ru: 'ю',
      shiftEn: '>',
      shiftRu: 'Ю',
      altEn: '≥',
      altRu: 'ю',
      altShiftEn: '>',
      altShiftRu: 'Ю',
      printable: true,
    },
    {
      key: 'Slash',
      en: '/',
      ru: '.',
      shiftEn: '?',
      shiftRu: ',',
      altEn: '÷',
      altRu: '.',
      altShiftEn: '¿',
      altShiftRu: ',',
      printable: true,
    },
    {
      key: 'ArrowUp',
      en: '▲',
      ru: '▲',
      printable: true,
    },
    {
      key: 'ShiftRight',
      en: '⇧',
      ru: '⇧',
      printable: false,
    },
  ],
  [
    {
      key: 'ControlLeft',
      en: 'ctrl',
      ru: 'ctrl',
      printable: false,
    },
    {
      key: 'AltLeft',
      en: 'alt',
      ru: 'alt',
      printable: false,
    },
    {
      key: 'MetaLeft',
      en: '⌘',
      ru: '⌘',
      printable: false,
    },
    {
      key: 'Space',
      en: '␣',
      ru: '␣',
      printable: false,
    },
    {
      key: 'MetaRight',
      en: '⌘',
      ru: '⌘',
      printable: false,
    },
    {
      key: 'AltRight',
      en: 'alt',
      ru: 'alt',
      printable: false,
    },
    {
      key: 'ControlRight',
      en: 'ctrl',
      ru: 'ctrl',
      printable: false,
    },
    {
      key: 'ArrowLeft',
      en: '◀',
      ru: '◀',
      printable: true,
    },
    {
      key: 'ArrowDown',
      en: '▼',
      ru: '▼',
      printable: true,
    },
    {
      key: 'ArrowRight',
      en: '▶',
      ru: '▶',
      printable: true,
    },
  ],
];
export default data;
