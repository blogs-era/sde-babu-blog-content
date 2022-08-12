import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a8a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '597'),
    routes: [
      {
        path: '/docs/Arrays/Prefix-Sum/running_sum',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/running_sum', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/arrays',
        component: ComponentCreator('/docs/category/arrays', '6e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/hashmaps',
        component: ComponentCreator('/docs/category/hashmaps', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/queue',
        component: ComponentCreator('/docs/category/queue', 'b84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HashMaps/first_unique_character_in_string',
        component: ComponentCreator('/docs/HashMaps/first_unique_character_in_string', 'c80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Queue/sliding_window_maximum',
        component: ComponentCreator('/docs/Queue/sliding_window_maximum', '23b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/balance_binary_search_tree',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/balance_binary_search_tree', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/create_bst_with_sorted_array',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/create_bst_with_sorted_array', '12c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/balanced_binary_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/balanced_binary_tree', 'fa0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/height_of_binary_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/height_of_binary_tree', '4d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bfc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
