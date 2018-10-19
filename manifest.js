/**

 * @see {@link https://developer.chrome.com/extensions/manifest}

 */

module.exports = {

  name: 'Tabbing Order for Figma',

  description: 'Annotate for tab order in your Figma design file.',

  author: 'Tiffany Chen <tifche@microsoft.com>',

  version: '1.1.0',

  icons: {

    /** 
     *     '16': 'icons/16.png',

    '48': 'icons/48.png',

    '128': 'icons/128.png'
     * 
     */

  },

  /**

   * @see {@link https://developer.chrome.com/extensions/declare_permissions}

   */

  permissions: [

    '<all_urls>',

    '*://*/*',

    'declarativeContent'

  ],

  content_scripts: [{

    js: [

      'js/manifest.js',

      'js/index.js',

      'js/frontEnd.js'

    ],

    run_at: 'document_end',

    matches: [

      'https://www.figma.com/file/*',

      'http://www.figma.com/file/*',

      'https://www.figma.com/files/*',

      'http://www.figma.com/files/*'

    ],

    all_frames: true

  }],

  manifest_version: 1,

  content_security_policy: "script-src 'self'; object-src 'self'",

  web_accessible_resources: [

    'index.js',

    'frontEnd.js'

  ]

}