webpackJsonp([35783957827783],{423:function(e,t){e.exports={grid:"src-components-pages-Homepage----Homepage-module---grid---xspr7",contentWrapper:"src-components-pages-Homepage----Homepage-module---contentWrapper---31ARN"}},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l,i,s=n(1),p=r(s),c=n(2),f=r(c),d=n(42),m=n(171),g=r(m),h=n(81),y=r(h),_=n(423),b=r(_),w=(l=(0,d.inject)("UIStore"),l(i=(0,d.observer)(i=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return u(t,e),t.prototype.componentDidMount=function(){this.props.UIStore.setStretchContentHeightFalse()},t.prototype.componentWillUnmount=function(){this.props.UIStore.setStretchContentHeightTrue()},t.prototype.render=function(){var e=this.props,t=e.gridImages,n=e.children,r=e.UIStore;return p.default.createElement("div",null,p.default.createElement(g.default,{title:"Sue Dann Interiors"}),p.default.createElement(y.default,{images:t.slice(0,r.windowWidth>1200?5:6),gridClassName:b.default.grid},p.default.createElement("div",{className:b.default.contentWrapper},n)))},t}(s.Component))||i)||i);w.propTypes={gridImages:f.default.arrayOf(f.default.shape({title:f.default.string,path:f.default.string})),children:f.default.node,UIStore:f.default.object},t.default=w,e.exports=t.default},310:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(1),a=r(o),u=n(31),l=(r(u),n(30)),i=(r(l),n(303)),s=r(i),p=function(e){var t=e.data,n=(e.pathContext,t.markdownRemark),r=t.galleriesJson;return a.default.createElement("div",null,a.default.createElement(s.default,{gridImages:r.images.map(function(e){return{title:e.title,path:"homepage/"+e.path}})},a.default.createElement("main",{dangerouslySetInnerHTML:{__html:n.html}})))};t.pageQuery="** extracted graphql fragment **";t.default=p}});
//# sourceMappingURL=component---src-pages-index-js-c83ffc8856dbfd75b9b9.js.map