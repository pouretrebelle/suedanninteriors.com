webpackJsonp([0xbd55f38a5e3c],{173:function(e,t,a){"use strict";function n(e,t){if(!e){if(s)throw new Error(r);throw new Error(r+": "+(t||""))}}Object.defineProperty(t,"__esModule",{value:!0});var s=!0,r="Invariant failed";t.default=n},174:function(e,t,a){"use strict";function n(e,t){if(!s){if(e)return;var a="Warning: "+t;"undefined"!=typeof console&&console.warn(a);try{throw Error(a)}catch(e){}}}var s=!0;e.exports=n},140:function(e,t){e.exports={wrapper:"src-components-pages-CaseStudy----CaseStudy-module---wrapper---3yzx5",content:"src-components-pages-CaseStudy----CaseStudy-module---content---1RSM-",studyList:"src-components-pages-CaseStudy----CaseStudy-module---studyList---1zZtg",studyItem:"src-components-pages-CaseStudy----CaseStudy-module---studyItem---jn5Ta",studyTitle:"src-components-pages-CaseStudy----CaseStudy-module---studyTitle---1Q-LZ"}},114:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),o=n(l),d=a(3),i=n(d),c=a(53),f=n(c),m=a(45),p=n(m),y=a(44),h=n(y),g=a(140),v=n(g),E=function(e){function t(a){return s(this,t),r(this,e.call(this,a))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.studies,a=e.children,n=e.className;return o.default.createElement("div",{className:(0,p.default)(v.default.wrapper,n)},o.default.createElement("div",{className:v.default.content},a),o.default.createElement("ul",{className:v.default.studyList},t.map(function(e,t){return o.default.createElement("li",{key:t,className:v.default.studyItem},o.default.createElement(f.default,{to:e.link,className:v.default.studyLink},o.default.createElement(h.default,{imagePath:e.cover,aspectRatio:1/3,options:{c:"fill"}}),o.default.createElement("h3",{className:v.default.studyTitle},e.title)))})))},t}(l.Component);E.propTypes={children:i.default.node,className:i.default.string,studies:i.default.arrayOf(i.default.shape({link:i.default.string,title:i.default.string,cover:i.default.string}))},t.default=E,e.exports=t.default},425:function(e,t){e.exports={article:"src-components-pages-Testimonials----Testimonials-module---article---3gI8G",quote:"src-components-pages-Testimonials----Testimonials-module---quote---3x6HA",quoteName:"src-components-pages-Testimonials----Testimonials-module---quoteName---10TTJ",quoteAddress:"src-components-pages-Testimonials----Testimonials-module---quoteAddress---377id"}},305:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(1),r=n(s),u=a(3),l=n(u),o=a(31),d=(n(o),a(32)),i=n(d),c=a(114),f=n(c),m=a(425),p=n(m),y=function(e){var t=e.testimonials;return r.default.createElement("div",null,r.default.createElement(i.default,{title:"Testimonials"}),t.map(function(e,t){return r.default.createElement(f.default,{studies:[{link:e.caseStudyLink,title:e.caseStudyTitle,cover:e.caseStudyCover}],key:t,className:p.default.article},r.default.createElement("blockquote",{className:p.default.quote,dangerouslySetInnerHTML:{__html:e.html}}),r.default.createElement("cite",{className:p.default.quoteName},e.name),e.address&&r.default.createElement("h4",{className:p.default.quoteAddress},e.address))}))};y.propTypes={testimonials:l.default.arrayOf(l.default.shape({name:l.default.string,address:l.default.string,html:l.default.string}))},t.default=y,e.exports=t.default},312:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),u=n(r),l=a(53),o=(n(l),a(305)),d=n(o),i=function(e){var t=e.data,a=e.pathContext,n=t.allMarkdownRemark;a.slug;return u.default.createElement("div",null,u.default.createElement(d.default,{testimonials:n.edges.map(function(e){return s({},e.node.frontmatter,{html:e.node.html})})}))};t.pageQuery="** extracted graphql fragment **";t.default=i}});
//# sourceMappingURL=component---src-pages-testimonials-js-177a2a3ae908d8fb2f2e.js.map