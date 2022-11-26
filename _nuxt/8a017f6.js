(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,r){"use strict";r.r(e);r(34),r(14),r(95);var l=r(42),o=Object(l.a)({name:"NavBar",components:{},setup:function(){var t=Object(l.d)().i18n;return{getLocale:function(e){return t.locales.find((function(i){return i.code===e}))}}}}),n=r(48),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",[e("nav",{staticClass:"bg-white border-gray-200 px-4 lg:px-6 py-2.5"},[e("div",{staticClass:"flex flex-wrap justify-between items-start mx-auto max-w-screen-xl"},[e("nuxt-link",{staticClass:"flex items-center",attrs:{to:t.localePath("/")}},[e("span",{staticClass:"self-center text-xl font-semibold whitespace-nowrap flex flex-col sm:flex-row gap-1 sm:gap-3"},[e("span",[t._v("Pascal Gangloff")]),t._v(" "),e("span",{staticClass:"text-gray-400 text-lg"},[t._v(t._s(t.$i18n.t("sculptor")))])])]),t._v(" "),e("div",{staticClass:"flex items-center lg:order-2"},[e("button",{staticClass:"inline-flex items-center text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-5 py-2.5 focus:outline-none",attrs:{type:"button","data-dropdown-toggle":"language-dropdown"}},[t._v("\n          "+t._s(t.$i18n.localeProperties.fullName)+"\n          "),e("svg",{staticClass:"ml-1 w-4 h-4",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])]),t._v(" "),e("div",{staticClass:"hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow",attrs:{id:"language-dropdown"}},t._l(t.$i18n.availableLocales.filter((function(i){return i!==t.$i18n.locale})),(function(r){var l;return e("ul",{key:"lang-".concat(r),staticClass:"py-1",attrs:{role:"none"}},[e("li",[e("nuxt-link",{staticClass:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100",attrs:{to:t.switchLocalePath(r),role:"menuitem"}},[e("div",{staticClass:"inline-flex items-center"},[t._v("\n                  "+t._s(null===(l=t.getLocale(r))||void 0===l?void 0:l.fullName)+"\n                ")])])],1)])})),0),t._v(" "),e("button",{staticClass:"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",attrs:{"data-collapse-toggle":"mobile-menu-search",type:"button","aria-controls":"mobile-menu-search","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),e("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("svg",{staticClass:"hidden w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),e("div",{staticClass:"hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1",attrs:{id:"mobile-menu-search"}},[e("ul",{staticClass:"flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},[e("li",[e("nuxt-link",{staticClass:"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0",attrs:{to:t.localePath("about")}},[t._v("\n              "+t._s(t.$i18n.t("menu.about"))+"\n            ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0",attrs:{to:t.localePath("contact")}},[t._v("\n              "+t._s(t.$i18n.t("menu.contact"))+"\n            ")])],1)])])],1)])])}),[],!1,null,null,null);e.default=component.exports},160:function(t,e,r){"use strict";r.r(e);var l=r(42),o=Object(l.a)({name:"AppFooter",components:{},props:{},setup:function(){return{}}}),n=r(48),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",{staticClass:"bg-white sm:flex sm:items-center sm:justify-between py-4 sm:py-6 xl:py-8 mx-auto max-w-screen-xl"},[e("p",{staticClass:"mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0"},[t._v("\n    © 2022\n    "),e("a",{staticClass:"hover:underline",attrs:{href:"/",target:"_blank"}},[t._v(" Pascal Gangloff ")]),t._v("\n    - "+t._s(t.$i18n.t("footer.rights"))+"\n  ")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center space-x-1"},[e("a",{staticClass:"inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600",attrs:{href:"http://www.facebook.com/Pascal-Gangloff-Sculpteur-264155560455248","data-tooltip-target":"tooltip-facebook"}},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Facebook")])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700",attrs:{id:"tooltip-facebook",role:"tooltip"}},[t._v("\n      Like us on Facebook\n      "),e("div",{staticClass:"tooltip-arrow",attrs:{"data-popper-arrow":""}})])}],!1,null,null,null);e.default=component.exports},165:function(t,e,r){"use strict";var l=r(0),o=r(240),n=r.n(o);l.c.use(n.a)},243:function(t,e,r){"use strict";var l=r(42),o=r(159),n=r(160),c=Object(l.a)({name:"DefaultLayout",components:{NavBar:o.default,AppFooter:n.default}}),d=r(48),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("NavBar"),t._v(" "),e("div",{staticClass:"max-w-screen-xl mx-auto mt-10 px-5 xl:px-0"},[e("Nuxt")],1),t._v(" "),e("AppFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:r(159).default,AppFooter:r(160).default})},245:function(t,e,r){r(246),t.exports=r(247)}},[[245,6,1,7]]]);