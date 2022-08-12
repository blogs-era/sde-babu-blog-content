"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[348],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),l=r(7392),u=r(7094),c=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,r,i=e.lazy,f=e.block,d=e.defaultValue,b=e.values,m=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===d?d:null!=(t=null!=d?d:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==T&&!v.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.U)(),O=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,a.useState)(T),N=x[0],_=x[1],E=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=O[m];null!=C&&C!==N&&v.some((function(e){return e.value===C}))&&_(C)}var B=function(e){var t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==N&&(j(t),_(n),null!=m&&w(m,String(n)))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;r=null!=(o=E[i])?o:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},h)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:B,onClick:B},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},9741:function(e,t,r){r.r(t),r.d(t,{Highlight:function(){return b},assets:function(){return f},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(5488),l=r(5162),u=["components"],c={sidebar_position:2,title:"Balanced Binary Tree"},s=void 0,p={unversionedId:"Tree/BinaryTree/balanced_binary_tree",id:"Tree/BinaryTree/balanced_binary_tree",title:"Balanced Binary Tree",description:"Level - Easy",source:"@site/docs/Tree/BinaryTree/balanced_binary_tree.mdx",sourceDirName:"Tree/BinaryTree",slug:"/Tree/BinaryTree/balanced_binary_tree",permalink:"/sde-babu-blog-content/docs/Tree/BinaryTree/balanced_binary_tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tree/BinaryTree/balanced_binary_tree.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Balanced Binary Tree"},sidebar:"tutorialSidebar",previous:{title:"Height of Binary Tree",permalink:"/sde-babu-blog-content/docs/Tree/BinaryTree/height_of_binary_tree"}},f={},d=[{value:"Complexity",id:"complexity",level:4}],b=function(e){var t=e.children,r=e.color;e.txt;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:d,Highlight:b};function h(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Level - ",(0,o.kt)(b,{color:"#25c2a0",mdxType:"Highlight"},"Easy")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    public int height(TreeNode root){\n        // if root is null then height is 0\n        if(root==null)return 0;\n        // move to extreme left : bottome up approach\n        int left = height(root.left);\n        int right = height(root.right);\n        // if any one return -1 means tree is not balanced\n        if(left==-1 || right==-1)return -1;\n        // if diff is biiger then return -1\n        int diff = Math.abs(left-right);\n        if(diff > 1)return -1; \n        // return the height of tree\n        return Math.max(left,right)+1;\n    }\n    public boolean isBalanced(TreeNode root) {\n        return height(root)!=-1 ? true : false;\n    }\n"))),(0,o.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"currently no other languages supported\n")))),(0,o.kt)("h4",{id:"complexity"},"Complexity"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Time Complexity: ",(0,o.kt)("inlineCode",{parentName:"p"},"O(N^2)"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Space Complexity: ",(0,o.kt)("inlineCode",{parentName:"p"},"O(h) ~ O(N)")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"h")," is the height of binary tree")))}h.isMDXComponent=!0}}]);