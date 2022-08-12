import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sde-babu-blog-content/markdown-page',
    component: ComponentCreator('/sde-babu-blog-content/markdown-page', '663'),
    exact: true
  },
  {
    path: '/sde-babu-blog-content/docs',
    component: ComponentCreator('/sde-babu-blog-content/docs', '18c'),
    routes: [
      {
        path: '/sde-babu-blog-content/docs/Arrays/Prefix-Sum/running_sum',
        component: ComponentCreator('/sde-babu-blog-content/docs/Arrays/Prefix-Sum/running_sum', 'a75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/category/arrays',
        component: ComponentCreator('/sde-babu-blog-content/docs/category/arrays', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/category/hashmaps',
        component: ComponentCreator('/sde-babu-blog-content/docs/category/hashmaps', '5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/category/queue',
        component: ComponentCreator('/sde-babu-blog-content/docs/category/queue', '7bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/HashMaps/first_unique_character_in_string',
        component: ComponentCreator('/sde-babu-blog-content/docs/HashMaps/first_unique_character_in_string', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/intro',
        component: ComponentCreator('/sde-babu-blog-content/docs/intro', '0ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/Queue/sliding_window_maximum',
        component: ComponentCreator('/sde-babu-blog-content/docs/Queue/sliding_window_maximum', '5c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/Tree/BinarySearchTree/balance_binary_search_tree',
        component: ComponentCreator('/sde-babu-blog-content/docs/Tree/BinarySearchTree/balance_binary_search_tree', '249'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/Tree/BinarySearchTree/create_bst_with_sorted_array',
        component: ComponentCreator('/sde-babu-blog-content/docs/Tree/BinarySearchTree/create_bst_with_sorted_array', '75d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/Tree/BinaryTree/balanced_binary_tree',
        component: ComponentCreator('/sde-babu-blog-content/docs/Tree/BinaryTree/balanced_binary_tree', '59b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sde-babu-blog-content/docs/Tree/BinaryTree/height_of_binary_tree',
        component: ComponentCreator('/sde-babu-blog-content/docs/Tree/BinaryTree/height_of_binary_tree', '7ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/sde-babu-blog-content/',
    component: ComponentCreator('/sde-babu-blog-content/', 'a48'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
