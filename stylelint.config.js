'use strict'

module.exports = {
  plugins: [
    require.resolve('stylelint-a11y'),
    require.resolve('stylelint-order'),
    require.resolve('stylelint-prettier'),
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'order/properties-order': [
      [
        {
          groupName: 'Positioning',
          emptyLineBefore: 'always',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        },
        {
          groupName: 'Box model',
          emptyLineBefore: 'always',
          properties: [
            'display',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'grid',
            'grid-area',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-row-gap',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-column-gap',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'gap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'justify-items',
            'justify-self',
            'order',
            'float',
            'clear',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'object-fit',
            'object-position',
            'overflow',
            'overflow-x',
            'overflow-y',
          ],
        },
        {
          groupName: 'Typography',
          emptyLineBefore: 'always',
          properties: [
            'color',
            'font',
            'font-weight',
            'font-size',
            'font-family',
            'font-style',
            'font-variant',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'line-height',
            'direction',
            'letter-spacing',
            'white-space',
            'text-align',
            'text-align-last',
            'text-transform',
            'text-decoration',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-wrap',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-orientation',
            'text-shadow',
            'vertical-align',
            'word-wrap',
            'word-break',
            'word-spacing',
            'overflow-wrap',
            'tab-size',
            'hyphens',
            'unicode-bidi',
            'columns',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'src',
          ],
        },
        {
          groupName: 'Visual',
          emptyLineBefore: 'always',
          properties: [
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
            'table-layout',
            'empty-cells',
            'caption-side',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-size',
            'background-clip',
            'background-origin',
            'background-attachment',
            'background-blend-mode',
            'border',
            'border-color',
            'border-style',
            'border-width',
            'border-top',
            'border-top-color',
            'border-top-width',
            'border-top-style',
            'border-right',
            'border-right-color',
            'border-right-width',
            'border-right-style',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-width',
            'border-bottom-style',
            'border-left',
            'border-left-color',
            'border-left-width',
            'border-left-style',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'border-collapse',
            'border-spacing',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'box-shadow',
            'box-decoration-break',
            'transform',
            'transform-origin',
            'transform-style',
            'backface-visibility',
            'perspective',
            'perspective-origin',
            'visibility',
            'cursor',
            'opacity',
            'filter',
            'isolation',
            'backdrop-filter',
            'mix-blend-mode',
          ],
        },
        {
          groupName: 'Animation',
          emptyLineBefore: 'always',
          properties: [
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
          ],
        },
        {
          groupName: 'Miscellaneous',
          emptyLineBefore: 'always',
          properties: [
            'appearance',
            'content',
            'clip',
            'clip-path',
            'counter-reset',
            'counter-increment',
            'resize',
            'user-select',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
            'pointer-events',
            'quotes',
            'touch-action',
            'will-change',
            'zoom',
            'fill',
            'fill-rule',
            'clip-rule',
            'stroke',
          ],
        },
      ],
      { unspecified: 'bottom' },
    ],
    'prettier/prettier': true,
  },
}
