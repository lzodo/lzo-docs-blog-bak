module.exports = {
  // someSidebar: {
  //   Docusaurus: ['doc1', 'doc2', 'doc3'],
  //   Features: ['mdx'],
  // },

    // docs: [
    //   {
    //     type: 'category',
    //     label: 'Getting Started',
    //     items: ['doc2','doc3'],
    //   },
    //   {
    //     type: 'category',
    //     label: 'Docusaurus',
    //     items: ['doc1'],
    //   },
    // ],
    
    docs: {
      客户端: [
        // 'doc3',
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            'web/script-es6',
            'web/script-js',
            'web/script-model-promise'
          ],
        },
        {
          type: 'category',
          label: 'Style',
          items: ['web/style-css3','web/style-flex'],
        },
        // {
        //   type: 'category',
        //   label: '框架与库',
        //   items: ['doc1'],
        // },
        {
          type: 'category',
          label: '杂项',
          items: ['doc1','doc2','doc3','mdx'],
        },
      ],
      其他:[
        'other/other-markdown',
        'other/other-nvm',

      ]
    },
  
};
