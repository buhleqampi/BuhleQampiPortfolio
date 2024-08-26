module.exports = {
  content: [
  "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    },
    
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],

  screens: {
    'smartphone': '378px',
    // => @media (min-width:378px) { ......}
    
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  }
}

