import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '120'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '96f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd77'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fe2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '892'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '61f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '166'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a8a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bb6'),
    routes: [
      {
        path: '/docs/Arrays/BasicQues/majority_element',
        component: ComponentCreator('/docs/Arrays/BasicQues/majority_element', 'c95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/CycleTechniques/duplicate_in_array',
        component: ComponentCreator('/docs/Arrays/CycleTechniques/duplicate_in_array', '9cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/CycleTechniques/find_all_duplicates',
        component: ComponentCreator('/docs/Arrays/CycleTechniques/find_all_duplicates', '512'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/CycleTechniques/first_missing_pos',
        component: ComponentCreator('/docs/Arrays/CycleTechniques/first_missing_pos', '7ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Interval/merge_intervals',
        component: ComponentCreator('/docs/Arrays/Interval/merge_intervals', '28d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/KadaneAlgo/max_product_subarray',
        component: ComponentCreator('/docs/Arrays/KadaneAlgo/max_product_subarray', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/KadaneAlgo/max_subarray',
        component: ComponentCreator('/docs/Arrays/KadaneAlgo/max_subarray', '640'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Matrix/set_matrix_0',
        component: ComponentCreator('/docs/Arrays/Matrix/set_matrix_0', '4af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Matrix/spiral_matrix',
        component: ComponentCreator('/docs/Arrays/Matrix/spiral_matrix', '8f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/N-Sum/sum',
        component: ComponentCreator('/docs/Arrays/N-Sum/sum', '0df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/N-Sum/sum',
        component: ComponentCreator('/docs/Arrays/N-Sum/sum', '2d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/N-Sum/sum',
        component: ComponentCreator('/docs/Arrays/N-Sum/sum', '44d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/N-Sum/sum-closest',
        component: ComponentCreator('/docs/Arrays/N-Sum/sum-closest', 'b81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Prefix-Sum/continuous-subarray-sum',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/continuous-subarray-sum', 'c80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Prefix-Sum/pivot_index',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/pivot_index', '749'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Prefix-Sum/running_sum',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/running_sum', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Prefix-Sum/subarray_sum_divisible_k',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/subarray_sum_divisible_k', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/Prefix-Sum/subarray_sum_equals_k',
        component: ComponentCreator('/docs/Arrays/Prefix-Sum/subarray_sum_equals_k', 'f72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/container_with_most_water',
        component: ComponentCreator('/docs/Arrays/TwoPointers/container_with_most_water', 'b40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/merge_sorted_arrays',
        component: ComponentCreator('/docs/Arrays/TwoPointers/merge_sorted_arrays', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/move_zeroes',
        component: ComponentCreator('/docs/Arrays/TwoPointers/move_zeroes', '8af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/next_permutation',
        component: ComponentCreator('/docs/Arrays/TwoPointers/next_permutation', '772'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/remove-duplicates-from-sorted-array',
        component: ComponentCreator('/docs/Arrays/TwoPointers/remove-duplicates-from-sorted-array', 'a0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/sort_colors',
        component: ComponentCreator('/docs/Arrays/TwoPointers/sort_colors', 'f91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/squares_sorted_arr',
        component: ComponentCreator('/docs/Arrays/TwoPointers/squares_sorted_arr', 'a70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Arrays/TwoPointers/trapping_rain_water',
        component: ComponentCreator('/docs/Arrays/TwoPointers/trapping_rain_water', '5b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/BitManipulation/power_of_2',
        component: ComponentCreator('/docs/BitManipulation/power_of_2', '5cc'),
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
        path: '/docs/category/dynamicprogramming',
        component: ComponentCreator('/docs/category/dynamicprogramming', 'b59'),
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
        path: '/docs/category/linkedlist',
        component: ComponentCreator('/docs/category/linkedlist', 'a9c'),
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
        path: '/docs/category/segment-trees',
        component: ComponentCreator('/docs/category/segment-trees', '93b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/stack',
        component: ComponentCreator('/docs/category/stack', '7ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Design/lfu_cache',
        component: ComponentCreator('/docs/Design/lfu_cache', 'fc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Design/lru_cache',
        component: ComponentCreator('/docs/Design/lru_cache', '2b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Design/min_stack',
        component: ComponentCreator('/docs/Design/min_stack', 'b64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Design/time-based-key-value-store',
        component: ComponentCreator('/docs/Design/time-based-key-value-store', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/1D-DP/coin_change',
        component: ComponentCreator('/docs/DynamicProgramming/1D-DP/coin_change', 'ae1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/1D-DP/decode_ways',
        component: ComponentCreator('/docs/DynamicProgramming/1D-DP/decode_ways', '116'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/1D-DP/jump_game',
        component: ComponentCreator('/docs/DynamicProgramming/1D-DP/jump_game', '76c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/1D-DP/longest_increasing_subsequence',
        component: ComponentCreator('/docs/DynamicProgramming/1D-DP/longest_increasing_subsequence', '15b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/1D-DP/unique_binary_search_trees',
        component: ComponentCreator('/docs/DynamicProgramming/1D-DP/unique_binary_search_trees', '66e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/2D-DP/maxlen_repeated_subarray',
        component: ComponentCreator('/docs/DynamicProgramming/2D-DP/maxlen_repeated_subarray', '23a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/2D-DP/minimum-difficulty-of-a-job-schedule',
        component: ComponentCreator('/docs/DynamicProgramming/2D-DP/minimum-difficulty-of-a-job-schedule', '6de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_1',
        component: ComponentCreator('/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_1', 'dfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_2',
        component: ComponentCreator('/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_2', 'b4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_3',
        component: ComponentCreator('/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_3', '9ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_4',
        component: ComponentCreator('/docs/DynamicProgramming/BuySellStocks/buy_sell_stocks_4', 'a22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DP-Rectangle/count-square-submatrices-with-all-ones',
        component: ComponentCreator('/docs/DynamicProgramming/DP-Rectangle/count-square-submatrices-with-all-ones', '61e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DP-Rectangle/maximal_rectangle',
        component: ComponentCreator('/docs/DynamicProgramming/DP-Rectangle/maximal_rectangle', '3f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DP-Rectangle/maximal_square',
        component: ComponentCreator('/docs/DynamicProgramming/DP-Rectangle/maximal_square', 'd2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DPStrings/longest_common_subsequence',
        component: ComponentCreator('/docs/DynamicProgramming/DPStrings/longest_common_subsequence', '5f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DPStrings/longest_common_substring',
        component: ComponentCreator('/docs/DynamicProgramming/DPStrings/longest_common_substring', '817'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/DPStrings/longest_valid_paranthesis',
        component: ComponentCreator('/docs/DynamicProgramming/DPStrings/longest_valid_paranthesis', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/frog_jump',
        component: ComponentCreator('/docs/DynamicProgramming/frog_jump', '178'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DynamicProgramming/PreComputation/product_except_self',
        component: ComponentCreator('/docs/DynamicProgramming/PreComputation/product_except_self', '955'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/clone_graph',
        component: ComponentCreator('/docs/Graph/clone_graph', '20b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/CycleDetection/directed_graph',
        component: ComponentCreator('/docs/Graph/CycleDetection/directed_graph', '9d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/CycleDetection/undirected_graph',
        component: ComponentCreator('/docs/Graph/CycleDetection/undirected_graph', '052'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/DisjointSetUnion/introduction',
        component: ComponentCreator('/docs/Graph/DisjointSetUnion/introduction', '636'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/DisjointSetUnion/number_of_operation',
        component: ComponentCreator('/docs/Graph/DisjointSetUnion/number_of_operation', 'fd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/DisjointSetUnion/redundant_connection',
        component: ComponentCreator('/docs/Graph/DisjointSetUnion/redundant_connection', '22c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/FloodFill/introduction',
        component: ComponentCreator('/docs/Graph/FloodFill/introduction', 'f76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/FloodFill/pacific_atlantic_water_flow',
        component: ComponentCreator('/docs/Graph/FloodFill/pacific_atlantic_water_flow', 'f3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/FloodFill/replace_o_x_surrounded_x',
        component: ComponentCreator('/docs/Graph/FloodFill/replace_o_x_surrounded_x', '747'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/is_graph_bipartite',
        component: ComponentCreator('/docs/Graph/is_graph_bipartite', '341'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/ShortestPath/Dijkstra/cheapest-flights-within-k-stops',
        component: ComponentCreator('/docs/Graph/ShortestPath/Dijkstra/cheapest-flights-within-k-stops', 'd45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/ShortestPath/Dijkstra/introduction',
        component: ComponentCreator('/docs/Graph/ShortestPath/Dijkstra/introduction', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/ShortestPath/Dijkstra/network_delay_time',
        component: ComponentCreator('/docs/Graph/ShortestPath/Dijkstra/network_delay_time', '033'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/TarjanAlgo/introduction',
        component: ComponentCreator('/docs/Graph/TarjanAlgo/introduction', '536'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Graph/TopoSort/introduction',
        component: ComponentCreator('/docs/Graph/TopoSort/introduction', '779'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/gas_station',
        component: ComponentCreator('/docs/Greedy/gas_station', '5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/jump_game',
        component: ComponentCreator('/docs/Greedy/jump_game', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/max_events_canbe_attended',
        component: ComponentCreator('/docs/Greedy/max_events_canbe_attended', 'd79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/max_number_1s',
        component: ComponentCreator('/docs/Greedy/max_number_1s', '549'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/min_cost_leaf_values',
        component: ComponentCreator('/docs/Greedy/min_cost_leaf_values', '459'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/min_time_to_make_rope_colorful',
        component: ComponentCreator('/docs/Greedy/min_time_to_make_rope_colorful', 'f55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/minimum-deletions-to-make-character-frequencies-unique',
        component: ComponentCreator('/docs/Greedy/minimum-deletions-to-make-character-frequencies-unique', '8e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Greedy/non_overlapping_intervals',
        component: ComponentCreator('/docs/Greedy/non_overlapping_intervals', 'e90'),
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
        path: '/docs/HashMaps/introduction',
        component: ComponentCreator('/docs/HashMaps/introduction', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HashMaps/top_k_freq',
        component: ComponentCreator('/docs/HashMaps/top_k_freq', '579'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Heap/Heap/median_stream',
        component: ComponentCreator('/docs/Heap/Heap/median_stream', 'f8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Heap/introduction',
        component: ComponentCreator('/docs/Heap/introduction', '7af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Heap/PriorityQueue/k-closest-points',
        component: ComponentCreator('/docs/Heap/PriorityQueue/k-closest-points', '8c4'),
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
        path: '/docs/LinkedList/Basic/merge_2_sorted_list',
        component: ComponentCreator('/docs/LinkedList/Basic/merge_2_sorted_list', '3f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/Basic/reorder_list',
        component: ComponentCreator('/docs/LinkedList/Basic/reorder_list', '61b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/Basic/reverse_linked_list',
        component: ComponentCreator('/docs/LinkedList/Basic/reverse_linked_list', 'f5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/Basic/swap_nodes_in_pair',
        component: ComponentCreator('/docs/LinkedList/Basic/swap_nodes_in_pair', '2cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/copy_list_random_pointer',
        component: ComponentCreator('/docs/LinkedList/copy_list_random_pointer', '1d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/intersection_linked_list',
        component: ComponentCreator('/docs/LinkedList/intersection_linked_list', '845'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/ListCycle/first_node_in_cycle',
        component: ComponentCreator('/docs/LinkedList/ListCycle/first_node_in_cycle', 'aa2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/Maths/add_number_2',
        component: ComponentCreator('/docs/LinkedList/Maths/add_number_2', '328'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/Maths/add_two_numers',
        component: ComponentCreator('/docs/LinkedList/Maths/add_two_numers', '6d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/odd_even',
        component: ComponentCreator('/docs/LinkedList/odd_even', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/partition_list',
        component: ComponentCreator('/docs/LinkedList/partition_list', 'c01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/remove_duplicate_1',
        component: ComponentCreator('/docs/LinkedList/remove_duplicate_1', '16e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/remove_duplicate_2',
        component: ComponentCreator('/docs/LinkedList/remove_duplicate_2', '318'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/remove_nth_node_from_end',
        component: ComponentCreator('/docs/LinkedList/remove_nth_node_from_end', 'a5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/rotate_list',
        component: ComponentCreator('/docs/LinkedList/rotate_list', '4b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/LinkedList/segregate_even_odd',
        component: ComponentCreator('/docs/LinkedList/segregate_even_odd', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/atoi',
        component: ComponentCreator('/docs/Maths/atoi', '231'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/min_moves_for_equal_array',
        component: ComponentCreator('/docs/Maths/min_moves_for_equal_array', 'e45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/missing_num',
        component: ComponentCreator('/docs/Maths/missing_num', 'af1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/multiply_string',
        component: ComponentCreator('/docs/Maths/multiply_string', 'ddb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/permutation_sequence',
        component: ComponentCreator('/docs/Maths/permutation_sequence', 'fed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/plus_one',
        component: ComponentCreator('/docs/Maths/plus_one', '5f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Maths/pow_x_n',
        component: ComponentCreator('/docs/Maths/pow_x_n', 'ff4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Queue/BFS/introduction',
        component: ComponentCreator('/docs/Queue/BFS/introduction', '75c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Queue/BFS/number_of_island',
        component: ComponentCreator('/docs/Queue/BFS/number_of_island', 'f89'),
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
        path: '/docs/Recursion/Backtracking/combination_sum_1',
        component: ComponentCreator('/docs/Recursion/Backtracking/combination_sum_1', '3ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/Backtracking/generate_paranthesis',
        component: ComponentCreator('/docs/Recursion/Backtracking/generate_paranthesis', '832'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/Backtracking/partition_k_eqal_sum_subset',
        component: ComponentCreator('/docs/Recursion/Backtracking/partition_k_eqal_sum_subset', '8fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/Backtracking/subset_1',
        component: ComponentCreator('/docs/Recursion/Backtracking/subset_1', '74e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/introduction',
        component: ComponentCreator('/docs/Recursion/DFS/introduction', '94e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/longest_increasing_path_matrix',
        component: ComponentCreator('/docs/Recursion/DFS/longest_increasing_path_matrix', 'f73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/making_large_island',
        component: ComponentCreator('/docs/Recursion/DFS/making_large_island', '228'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/number_of_closed_island',
        component: ComponentCreator('/docs/Recursion/DFS/number_of_closed_island', 'b93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/number_of_island',
        component: ComponentCreator('/docs/Recursion/DFS/number_of_island', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/shortest_bridge',
        component: ComponentCreator('/docs/Recursion/DFS/shortest_bridge', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/word_search',
        component: ComponentCreator('/docs/Recursion/DFS/word_search', '608'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Recursion/DFS/word_search_2',
        component: ComponentCreator('/docs/Recursion/DFS/word_search_2', '262'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/capacity_to_ship_package_within_ddays',
        component: ComponentCreator('/docs/Searching/BinarySearch/capacity_to_ship_package_within_ddays', 'd03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/find_peak',
        component: ComponentCreator('/docs/Searching/BinarySearch/find_peak', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/first_last_pos',
        component: ComponentCreator('/docs/Searching/BinarySearch/first_last_pos', '287'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/introduction',
        component: ComponentCreator('/docs/Searching/BinarySearch/introduction', '443'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/median_2_sorted_arrays',
        component: ComponentCreator('/docs/Searching/BinarySearch/median_2_sorted_arrays', 'bd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/min_in_roated_sorted_array',
        component: ComponentCreator('/docs/Searching/BinarySearch/min_in_roated_sorted_array', 'e5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/min_roated_sorted_array_with_duplicates',
        component: ComponentCreator('/docs/Searching/BinarySearch/min_roated_sorted_array_with_duplicates', 'ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/minimum_limit_of_balls_in_bag',
        component: ComponentCreator('/docs/Searching/BinarySearch/minimum_limit_of_balls_in_bag', 'e89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Searching/BinarySearch/search_in_rotated',
        component: ComponentCreator('/docs/Searching/BinarySearch/search_in_rotated', '489'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SegmentTrees/intro',
        component: ComponentCreator('/docs/SegmentTrees/intro', '1e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SlidingWindow/longest_substring_without_repeat',
        component: ComponentCreator('/docs/SlidingWindow/longest_substring_without_repeat', 'ed4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SlidingWindow/longest-repeating-character-replacement',
        component: ComponentCreator('/docs/SlidingWindow/longest-repeating-character-replacement', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SlidingWindow/longest-substring-with-at-least-k-repeating-characters',
        component: ComponentCreator('/docs/SlidingWindow/longest-substring-with-at-least-k-repeating-characters', '090'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SlidingWindow/min_window_substring',
        component: ComponentCreator('/docs/SlidingWindow/min_window_substring', '702'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sorting/MergeSort/introduction',
        component: ComponentCreator('/docs/Sorting/MergeSort/introduction', '772'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sorting/MergeSort/reverse_pairs',
        component: ComponentCreator('/docs/Sorting/MergeSort/reverse_pairs', '03f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/introduction',
        component: ComponentCreator('/docs/Stack/MonotonicStack/introduction', 'e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/largest_rectange_histogram',
        component: ComponentCreator('/docs/Stack/MonotonicStack/largest_rectange_histogram', '89f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/maximum_binary_tree',
        component: ComponentCreator('/docs/Stack/MonotonicStack/maximum_binary_tree', '2c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/most_competitive_subsequence',
        component: ComponentCreator('/docs/Stack/MonotonicStack/most_competitive_subsequence', 'b6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/next_greater_element',
        component: ComponentCreator('/docs/Stack/MonotonicStack/next_greater_element', 'e0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/MonotonicStack/remove_k_digits',
        component: ComponentCreator('/docs/Stack/MonotonicStack/remove_k_digits', 'ed6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/reverse_polish_notation',
        component: ComponentCreator('/docs/Stack/reverse_polish_notation', '26c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Stack/sum-of-subarray-minimums',
        component: ComponentCreator('/docs/Stack/sum-of-subarray-minimums', 'e70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/all_anagrams',
        component: ComponentCreator('/docs/Strings/all_anagrams', '9dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/count_say',
        component: ComponentCreator('/docs/Strings/count_say', 'a40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/group_anagrams',
        component: ComponentCreator('/docs/Strings/group_anagrams', '734'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/minimum-remove-to-make-valid-parentheses',
        component: ComponentCreator('/docs/Strings/minimum-remove-to-make-valid-parentheses', '60e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/number_of_palindromic_substrings',
        component: ComponentCreator('/docs/Strings/number_of_palindromic_substrings', '929'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/Recursive/palindrome_partitioning',
        component: ComponentCreator('/docs/Strings/Recursive/palindrome_partitioning', '38f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/Recursive/restore_ip',
        component: ComponentCreator('/docs/Strings/Recursive/restore_ip', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/reorganize_strings',
        component: ComponentCreator('/docs/Strings/reorganize_strings', '93e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Strings/substring_search',
        component: ComponentCreator('/docs/Strings/substring_search', '8bc'),
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
        path: '/docs/Tree/BinarySearchTree/bst_iterator',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/bst_iterator', '935'),
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
        path: '/docs/Tree/BinarySearchTree/delete_node_bst',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/delete_node_bst', '8bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/is_valid_bst',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/is_valid_bst', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/kth_smallest_elemnt_bst',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/kth_smallest_elemnt_bst', '26b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/range_sum_bst',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/range_sum_bst', '630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/recover_bst',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/recover_bst', 'af4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinarySearchTree/unique_bst_2',
        component: ComponentCreator('/docs/Tree/BinarySearchTree/unique_bst_2', '497'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/AncestorPath/burn_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/AncestorPath/burn_tree', '8c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/AncestorPath/nodes_at_k_dis',
        component: ComponentCreator('/docs/Tree/BinaryTree/AncestorPath/nodes_at_k_dis', 'b5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/balanced_binary_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/balanced_binary_tree', '131'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/binary_tree_paths',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/binary_tree_paths', '2cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/count_good_node_inbt',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/count_good_node_inbt', 'eed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/flatten_bt_to_linkedlist',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/flatten_bt_to_linkedlist', 'beb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/height_of_binary_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/height_of_binary_tree', '12a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/invert_binary_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/invert_binary_tree', 'd6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/merge_2_binary_trees',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/merge_2_binary_trees', '232'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/same_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/same_tree', 'd6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/subtree_of_another_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/subtree_of_another_tree', '28e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/sum_left_leaf',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/sum_left_leaf', 'da4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BasicTreeQues/symmetric_tree',
        component: ComponentCreator('/docs/Tree/BinaryTree/BasicTreeQues/symmetric_tree', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/BTView/vertical_view_bt',
        component: ComponentCreator('/docs/Tree/BinaryTree/BTView/vertical_view_bt', 'bf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/CommonAncestor/lca',
        component: ComponentCreator('/docs/Tree/BinaryTree/CommonAncestor/lca', 'f1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/CommonAncestor/lca_bst',
        component: ComponentCreator('/docs/Tree/BinaryTree/CommonAncestor/lca_bst', '0fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/CommonAncestor/min_distance_bw_2_nodes',
        component: ComponentCreator('/docs/Tree/BinaryTree/CommonAncestor/min_distance_bw_2_nodes', 'd01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/CommonAncestor/step-by-step-directions-from-a-binary-tree-node-to-another',
        component: ComponentCreator('/docs/Tree/BinaryTree/CommonAncestor/step-by-step-directions-from-a-binary-tree-node-to-another', 'c34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/CompleteTree/count_complete_tree_nodes',
        component: ComponentCreator('/docs/Tree/BinaryTree/CompleteTree/count_complete_tree_nodes', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/ConstructBinaryTreeFromTraversal/construct_from_inorder_preorder',
        component: ComponentCreator('/docs/Tree/BinaryTree/ConstructBinaryTreeFromTraversal/construct_from_inorder_preorder', '5ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/ConstructBinaryTreeFromTraversal/construct_from_preorder_postorder',
        component: ComponentCreator('/docs/Tree/BinaryTree/ConstructBinaryTreeFromTraversal/construct_from_preorder_postorder', '170'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/PathSum/max_path_sum',
        component: ComponentCreator('/docs/Tree/BinaryTree/PathSum/max_path_sum', 'f9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/PathSum/path_sum',
        component: ComponentCreator('/docs/Tree/BinaryTree/PathSum/path_sum', 'cf9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/PathSum/path_sum_2',
        component: ComponentCreator('/docs/Tree/BinaryTree/PathSum/path_sum_2', '45f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/PathSum/path_sum_3',
        component: ComponentCreator('/docs/Tree/BinaryTree/PathSum/path_sum_3', '63c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/PathSum/sum_of_distances_intree',
        component: ComponentCreator('/docs/Tree/BinaryTree/PathSum/sum_of_distances_intree', '798'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/inorder',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/inorder', '60c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/level_order_traversal',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/level_order_traversal', 'fca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/maximum_width_bt',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/maximum_width_bt', 'df0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/populate_next_right_pointer',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/populate_next_right_pointer', '2fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/serialize_deserialize_bt',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/LevelOrderTraversal/serialize_deserialize_bt', '8c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/postorder',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/postorder', 'dbe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tree/BinaryTree/Traversals/preorder',
        component: ComponentCreator('/docs/Tree/BinaryTree/Traversals/preorder', '5d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Trie/introduction',
        component: ComponentCreator('/docs/Trie/introduction', '683'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Trie/replace_words',
        component: ComponentCreator('/docs/Trie/replace_words', '94e'),
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
