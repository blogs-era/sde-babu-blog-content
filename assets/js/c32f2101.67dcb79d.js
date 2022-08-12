"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[118],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(6010),i="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),i=t(6010),l=t(2389),u=t(7392),o=t(7094),s=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,d=e.defaultValue,f=e.values,b=e.groupId,y=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,u.l)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),N=x.tabGroupChoices,O=x.setTabGroupChoices,T=(0,a.useState)(g),C=T[0],w=T[1],_=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=N[b];null!=E&&E!==C&&h.some((function(e){return e.value===E}))&&w(E)}var S=function(e){var n=e.currentTarget,t=_.indexOf(n),r=h[t].value;r!==C&&(j(n),w(r),null!=b&&O(b,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;t=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var i,l=_.indexOf(e.currentTarget)-1;t=null!=(i=_[l])?i:_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},2715:function(e,n,t){t.r(n),t.d(n,{Highlight:function(){return f},assets:function(){return m},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(5488),u=t(5162),o=["components"],s={sidebar_position:1,title:"Running Sum Array"},c=void 0,p={unversionedId:"Arrays/Prefix-Sum/running_sum",id:"Arrays/Prefix-Sum/running_sum",title:"Running Sum Array",description:"Level - Easy",source:"@site/docs/Arrays/Prefix-Sum/running_sum.mdx",sourceDirName:"Arrays/Prefix-Sum",slug:"/Arrays/Prefix-Sum/running_sum",permalink:"/docs/Arrays/Prefix-Sum/running_sum",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Arrays/Prefix-Sum/running_sum.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Running Sum Array"},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/docs/category/arrays"},next:{title:"Create a Balanced Binary Search Tree with sorted Array",permalink:"/docs/Tree/BinarySearchTree/create_bst_with_sorted_array"}},m={},d=[{value:"Brute Force Method",id:"brute-force-method",level:3},{value:"Complexity",id:"complexity",level:4},{value:"Optimal Approach",id:"optimal-approach",level:3},{value:"Complexity",id:"complexity-1",level:4}],f=function(e){var n=e.children,t=e.color;e.txt;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},b={toc:d,Highlight:f};function y(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Level - ",(0,i.kt)(f,{color:"#25c2a0",mdxType:"Highlight"},"Easy")),(0,i.kt)("h3",{id:"brute-force-method"},"Brute Force Method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iterate through the ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," array "),(0,i.kt)("li",{parentName:"ul"},"run a inner loop to get the sum of all the previous element, including the element at current index ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," ")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    public int[] runningSum(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        for(int i=0;i<n;i++){\n            if(i==0)result[i] = nums[i];\n            else{\n                for(int j=0;j<=i;j++){\n                    result[i]+=nums[j];\n                }\n            }\n        }\n        return result;\n}\n"))),(0,i.kt)(u.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"currently no other languages supported\n")))),(0,i.kt)("h4",{id:"complexity"},"Complexity"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Time Complexity: ",(0,i.kt)("inlineCode",{parentName:"p"},"O(N^2)"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Space Complexity: ",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)"))),(0,i.kt)("h3",{id:"optimal-approach"},"Optimal Approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix_sum")," array and iterate through the ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," array"),(0,i.kt)("li",{parentName:"ul"},"if ",(0,i.kt)("inlineCode",{parentName:"li"},"index==0")," means for first element , ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix_sum[index]=nums[index]")),(0,i.kt)("li",{parentName:"ul"},"else just add the ",(0,i.kt)("inlineCode",{parentName:"li"},"previous")," element to ",(0,i.kt)("inlineCode",{parentName:"li"},"current")," element, ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix_sum[index]=nums[index]+prefix_sum[index-1]"))),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," public int[] runningSum(int[] nums) {\n        int n = nums.length;\n        int[] prefix_sum = new int[n];\n        for(int i=0;i<n;i++){\n            if(i==0)prefix_sum[i] = nums[i];\n            else prefix_sum[i] = nums[i]+prefix_sum[i-1];\n        }\n        return prefix_sum;\n}\n"))),(0,i.kt)(u.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"currently no other languages supported\n")))),(0,i.kt)("h4",{id:"complexity-1"},"Complexity"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Time Complexity: ",(0,i.kt)("inlineCode",{parentName:"p"},"O(N)"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Space Complexity: ",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)"))))}y.isMDXComponent=!0}}]);