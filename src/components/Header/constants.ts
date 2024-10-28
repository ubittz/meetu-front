export const HEADER_ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

export const ATTR_BY_HEADER_ALIGN = {
  [HEADER_ALIGNMENT.LEFT]: 'flex-start',
  [HEADER_ALIGNMENT.CENTER]: 'center',
  [HEADER_ALIGNMENT.RIGHT]: 'flex-end',
} as const;
