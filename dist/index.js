!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("type-r"),require("react")):"function"==typeof define&&define.amd?define(["type-r","react"],e):"object"==typeof exports?exports.ReactMVx=e(require("type-r"),require("react")):t.ReactMVx=e(t.Nested,t.React)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e){for(var n=null,r=t.mixins.length-1;r>=0;r--){var o=t.mixins[r],i=o[e];i&&(n||(n={}),c.tools.assign(n,i))}var s=t[e];return s&&(n?c.tools.assign(n,s):n=s),n}function o(t){var e,n,r,o={},u=c.Record.defaults(t).prototype;return u.forEachAttr(u._attributes,function(t,u){if("id"!==u){var a=t.value,c=t.type,p=t.options;if(o[u]=s(c,p.isRequired),p._onChange&&(n||(n={}),n[u]=i(p._onChange)),p.changeHandlers&&(r||(r={}),r[u]=p.changeHandlers),p.changeEvents){r||(r={});var l=r[u]||(r[u]=[]),f="string"===p.changeEvents?p.changeEvents:null;l.push(function(t,e,n){t&&n.stopListening(t),e&&n.listenTo(e,f||e._changeEventName,n.asyncUpdate)})}void 0!==a&&(e||(e={}),e[u]=t.convert(a))}}),{propTypes:o,defaults:e,watchers:n,changeHandlers:r}}function i(t){return"function"==typeof t?t:function(e,n){this[t]&&this[t](e,n)}}function s(t,e){var n=u(t);return e?n.isRequired:n}function u(t){switch(t){case Number:case Number.integer:return a.PropTypes.number;case String:return a.PropTypes.string;case Boolean:return a.PropTypes.bool;case Array:return a.PropTypes.array;case Function:return a.PropTypes.func;case Object:return a.PropTypes.object;case p:return a.PropTypes.node;case l:return a.PropTypes.element;case void 0:case null:return a.PropTypes.any;default:return a.PropTypes.instanceOf(t)}}var a=n(2),c=(n.n(a),n(0));n.n(c);e.c=r,e.d=o,n.d(e,"a",function(){return p}),n.d(e,"b",function(){return l});var p=function(){function t(){}return t}(),l=function(){function t(){}return t}()},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t,e){return void 0===e&&(e={}),t.mixins||(t.mixins=[]),n.i(o.a)(t,e),n.i(i.a)(t,e),n.i(s.a)(t,e),n.i(a.a)(t,e),n.i(u.a)(t,e),t}var o=n(11),i=n(4),s=n(8),u=n(7),a=n(9),c=n(1);n.d(e,"a",function(){return c.a}),n.d(e,"b",function(){return c.b}),e.c=r},function(t,e,n){"use strict";function r(t,e){var r=n.i(o.c)(t,"state");if(r||e.State){var a=e.State||i.Record;t.State=r?"function"==typeof r?r:a.defaults(r):a,t.mixins.push(s),t.mixins.push(u),delete t.state,delete t.attributes}}var o=n(1),i=n(0);n.n(i);e.a=r,n.d(e,"c",function(){return s}),n.d(e,"b",function(){return u});var s={state:null,componentWillMount:function(){var t=this.state=new this.State;t._owner=this,t._ownerKey="state"},context:{_nestedStore:i.Store},getStore:function(){var t,e;return(t=this.context)&&t._archetypeStore||(e=this.state)&&e._defaultStore},componentWillUnmount:function(){var t=this.state;t._owner=t._ownerKey=void 0,t.dispose(),this.state=void 0}},u={_onChildrenChange:function(){},componentDidMount:function(){this._onChildrenChange=this.asyncUpdate}}},function(t,e,n){"use strict";function r(t){for(var e=n.i(s.c)(t),r=e.mixins,u=void 0===r?[]:r,a=c(e,["mixins"]),l=0,f=u;l<f.length;l++){var h=f[l];n.i(i.mergeProps)(a,h,p)}return o.createClass(a)}var o=n(2),i=(n.n(o),n(0)),s=(n.n(i),n(3));n.d(e,"b",function(){return l}),e.a=r;var u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},c=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n},p={componentWillMount:"reverse",componentDidMount:"reverse",componentWillReceiveProps:"reverse",shouldComponentUpdate:"some",componentWillUpdate:"reverse",componentDidUpdate:"reverse",componentWillUnmount:"sequence",state:"merge",store:"merge",props:"merge",context:"merge",childContext:"merge",getChildContext:"mergeSequence"},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.linkAt=function(t){return this.state.linkAt(t)},e.prototype.linkAll=function(){return this.state.linkAll.apply(this,arguments)},e.define=function(t,e){var r=(i.tools.getBaseClass(this),i.tools.getChangedStatics(this,"state","store","props","autobind","context","childContext","pureRender")),o=i.tools.assign(r,t||{}),u=n.i(s.c)(o,this.prototype),a=u.getDefaultProps,p=u.propTypes,l=u.contextTypes,f=u.childContextTypes,h=c(u,["getDefaultProps","propTypes","contextTypes","childContextTypes"]);return a&&(this.defaultProps=u.getDefaultProps()),p&&(this.propTypes=p),l&&(this.contextTypes=l),f&&(this.childContextTypes=f),i.Mixable.define.call(this,h,e),this},e.prototype.assignToState=function(t,e){this.state.assignFrom((n={},n[e]=t,n));var n},e}(o.Component);l=a([i.extendable,n.i(i.mixinRules)(p)],l)},function(t,e,n){"use strict";function r(t){return t._links||(t._links=new t.Attributes({}))}function o(t,e,n){var r=t[n],o=e[n];return r&&r.value===o?r:t[n]=new a(e,n,o)}var i=n(0),s=(n.n(i),n(14)),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.a=s.a,i.Mixable.mixTo(s.a),i.Record.mixins({linkAt:function(t){return o(r(this),this,t)},linkAtPath:function(t,e){return new c(this,t,e)},linkAll:function(){var t=r(this);if(arguments.length)for(var e=0;e<arguments.length;e++)o(t,this,arguments[e]);else{var n=this.attributes;for(var i in n)void 0===n[i]||o(t,this,i)}return t}});var a=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.record=e,o.attr=n,o}return u(e,t),e.prototype.set=function(t){this.record[this.attr]=t},Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error?this.record.getValidationError(this.attr):this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),e}(s.a),c=function(t){function e(e,n,r){var o=t.call(this,e.deepGet(n))||this;return o.record=e,o.path=n,o.options=r,o}return u(e,t),Object.defineProperty(e.prototype,"error",{get:function(){return void 0===this._error&&(this._error=this.record.deepValidationError(this.path)||null),this._error},set:function(t){this._error=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_changeToken",{get:function(){return this.record._changeToken},enumerable:!0,configurable:!0}),e.prototype.set=function(t){this.record.deepSet(this.path,t,this.options)},e}(s.a);i.Record.Collection.mixins({linkContains:function(t){return new p(this,t)},linkAt:function(t){var e=this;return s.a.value(this[t],function(n){return e[t]=n})}});var p=function(t){function e(e,n){var r=t.call(this,Boolean(e._byId[n.cid]))||this;return r.collection=e,r.record=n,r}return u(e,t),e.prototype.set=function(t){this.collection.toggle(this.record,t)},e}(s.a)},function(t,e,n){"use strict";function r(t,e){var n=e._autobind,r=void 0===n?[]:n;t.autobind&&(t._autobind=t.autobind.split(/\s+/).concat(r),t.mixins.push(u),delete t.autobind),t.mixins.push(a)}function o(){this.shouldComponentUpdate===i||this._disposed||this.forceUpdate()}function i(){return!1}var s=n(0);n.n(s);e.a=r;var u={componentWillMount:function(){for(var t=0,e=this._autobind;t<e.length;t++){var n=e[t];this[n]=this[n].bind(this)}}},a=s.tools.assign({componentWillUnmount:function(){this.off(),this.stopListening(),this._disposed=!0},asyncUpdate:o,transaction:function(t){var e=this.shouldComponentUpdate,n=e!==i;n&&(this.shouldComponentUpdate=i),t(this.props,this.state),n&&(this.shouldComponentUpdate=e,this.asyncUpdate())}},s.Events)},function(t,e,n){"use strict";function r(t,e){var r=e._context,s=void 0===r?{}:r,u=e._childContext,a=void 0===u?{}:u,c=n.i(o.c)(t,"context");c&&(t._context=i({},s,c),t.contextTypes=n.i(o.d)(c).propTypes,delete t.context);var p=n.i(o.c)(t,"childContext");p&&(t._childContext=i({},a,p),t.childContextTypes=n.i(o.d)(p).propTypes,delete t.childContext)}var o=n(1);e.a=r;var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,e,n){"use strict";function r(t,e){var r=e.pureRender,o=e._props,p=void 0===o?{}:o,l=(e._listenToPropsArray,e._listenToPropsHash,n.i(i.c)(t,"props"));if(l){var f=t._props=u({},p,l),h=n.i(i.d)(f),v=h.propTypes,d=h.defaults,y=h.watchers,_=h.changeHandlers;t.propTypes=v,d&&(t.getDefaultProps=function(){return d}),y&&(t.mixins.unshift(c),t._watchers=y),_&&(t.mixins.unshift(a),t._changeHandlers=_),delete t.props}t._props&&(t.pureRender||r)&&t.mixins.push(n.i(s.a)(t._props))}function o(t){void 0===t&&(t={});var e=this,n=e._changeHandlers,r=e.props;for(var o in n)if(t[o]!==r[o])for(var i=0,s=n[o];i<s.length;i++){var u=s[i];u(r[o],t[o],this)}}var i=n(1),s=n(10);e.a=r;var u=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a={componentDidMount:o,componentDidUpdate:o},c={componentWillReceiveProps:function(t){var e=this,n=e._watchers,r=e.props;for(var o in n)t[o]!==r[o]&&n[o].call(this,t[o],o)},componentWillMount:function(){var t=this,e=t._watchers,n=t.props;for(var r in e)e[r].call(this,n[r],r)}}},function(t,e,n){"use strict";function r(t){var e=["var v; this._s = s && s._changeToken"],n=["var v; return ( s && s._changeToken !== t._s )"];for(var r in t){var o="( ( v = p."+r+") && v._changeToken ) || v";e.push("this."+r+"= "+o),n.push("t."+r+" !== ("+o+")")}var i=new Function("p","s",e.join(";")),s=new Function("t","p","s",n.join("||"));return i.prototype=null,{_changeTokens:null,shouldComponentUpdate:function(t){return s(this._changeTokens,t,this.state)},componentDidMount:function(){this._changeTokens=new i(this.props,this.state)},componentDidUpdate:function(){this._changeTokens=new i(this.props,this.state)}}}e.a=r},function(t,e,n){"use strict";function r(t,e){var r=n.i(o.c)(t,"store");r&&(delete t.store,r instanceof i.Store?(t.store=r,t.mixins.push(a)):(t.Store=r,t.mixins.push(c),t.mixins.push(s.b)),t.mixins.push(u))}var o=n(1),i=n(0),s=(n.n(i),n(4));e.a=r;var u={childContext:{_nestedStore:i.Store},getChildContext:function(){return{_nestedStore:this.store}},getStore:function(){return this.store},get:function(t){var e=s.c.getStore.call(this,t);return e&&e.get(t)}},a={componentDidMount:function(){this.listenTo(this.store,"change",this.asyncUpdate)}},c={componentWillMount:function(){var t=this.store=new this.Store;t._owner=this,t._ownerKey="store"},componentWillUnmount:function(){this.store._ownerKey=this.store._owner=void 0,this.store.dispose(),this.store=void 0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=(n.n(r),n(0)),i=(n.n(o),n(3)),s=n(6),u=n(5),a=Object.create(r);a.default=a,e.default=a,a.createClass=u.a,a.define=o.define,a.mixins=o.mixins,a.Node=i.a.value(null),a.Element=i.b.value(null),a.Link=s.a,a.Component=u.b,a.assignToState=u.b.prototype.assignToState},function(t,e,n){"use strict";function r(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case o:return a;case i:return u}return s}e.b=r,n.d(e,"a",function(){return a});var o=Array.prototype,i=Object.prototype,s={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},u={map:function(t,e){var n=[];for(var r in t.value){var o=e(t.at(r),r);void 0===o||n.push(o)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},a={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,i=0;o<n;o++){var s=e(t.at(o),o);void 0===s||(r[i++]=s)}return r.length===i||(r.length=i),r}}},function(t,e,n){"use strict";var r=n(13);n.d(e,"a",function(){return i});var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(){function t(t){this.value=t}return t.value=function(t,e){return new s(t,e)},Object.defineProperty(t.prototype,"validationError",{get:function(){return this.error},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new u(this,function(n){t(n),e.set(n)})},t.prototype.requestChange=function(t){this.set(t)},t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new u(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new a(this,t)},t.prototype.enabled=function(t){return new c(this,t||"")},t.prototype.contains=function(t){return new p(this,t)},t.prototype.push=function(){var t=r.a.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=r.a.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=r.a.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return n.i(r.b)(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,o=n.i(r.b)(e);this.set(o.remove(o.clone(e),t))},t.prototype.at=function(t){return new f(this,t)},t.prototype.clone=function(){var t=this.value;return n.i(r.b)(t).clone(t)},t.prototype.pick=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];t[n]=new f(this,n)}return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||l),this},t}(),s=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return o(e,t),e.prototype.set=function(t){},e}(i),u=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return o(e,t),e.prototype.set=function(t){},e}(i),a=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(i),c=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return o(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(i),p=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return o(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(i),l="Invalid value",f=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return o(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(i)}])});
//# sourceMappingURL=index.js.map