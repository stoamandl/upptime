function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e,t,n,r,s,o,i){const a=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(a){const s=l(t,n,r,i);e.p(s,a)}}function d(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let h,p,m=!1;function g(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function b(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:g(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode!==e&&e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function w(e,t,n){m&&!n?b(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function E(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function S(e){return document.createTextNode(e)}function x(){return S(" ")}function T(){return S("")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function N(e){return function(t){return t.preventDefault(),e.call(this,t)}}function I(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:I(e,r,t[r])}function L(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function k(e,t,n,r,s=!1){R(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function O(e,t,n,r){return k(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?E(t):_(t)))}function C(e,t){return k(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>S(t)),!0)}function H(e){return C(e," ")}function U(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function j(e){const t=U(e,"HTML_TAG_START",0),n=U(e,"HTML_TAG_END",t);if(t===n)return new z;R(e);const r=e.splice(t,n+1);y(r[0]),y(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new z(s)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function G(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){h=!0}}return h}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=A(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function B(e,t=document.body){return Array.from(t.querySelectorAll(e))}class z extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}}function K(e){p=e}function J(){if(!p)throw new Error("Function called outside component initialization");return p}function V(e){J().$$.on_mount.push(e)}function W(e){J().$$.after_update.push(e)}function F(e){J().$$.on_destroy.push(e)}const Y=[],X=[],Z=[],Q=[],ee=Promise.resolve();let te=!1;function ne(e){Z.push(e)}let re=!1;const se=new Set;function oe(){if(!re){re=!0;do{for(let e=0;e<Y.length;e+=1){const t=Y[e];K(t),ie(t.$$)}for(K(null),Y.length=0;X.length;)X.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];se.has(t)||(se.add(t),t())}Z.length=0}while(Y.length);for(;Q.length;)Q.pop()();te=!1,re=!1,se.clear()}}function ie(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const ae=new Set;let ce;function le(){ce={r:0,c:[],p:ce}}function ue(){ce.r||s(ce.c),ce=ce.p}function de(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function fe(e,t,n,r){if(e&&e.o){if(ae.has(e))return;ae.add(e),ce.c.push((()=>{ae.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function he(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function me(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function be(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||ne((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(ne)}function ve(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){-1===e.$$.dirty[0]&&(Y.push(e),te||(te=!0,ee.then(oe)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(t,n,o,i,a,c,l,u=[-1]){const d=p;K(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let h=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),h&&we(t,e)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const e=L(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&de(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),m=!1,oe()}K(d)}class $e{$destroy(){ve(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _e=[];function Ee(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!_e.length;for(const e of s)e[1](),_e.push(e,t);if(e){for(let e=0;e<_e.length;e+=2)_e[e][0](_e[e+1]);_e.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Se={};var xe={owner:"stoamandl",repo:"upptime",assignees:["stoamandl"],sites:[{name:"binaryfour",url:"https://binaryfour.de"},{name:"Cloud binaryfour",url:"https://cloud.binaryfour.de"},{name:"Zweiradwerke",url:"https://zweiradwerke.de"},{name:"Cloud Zweiradwerke",url:"https://cloud.zweiradwerke.de"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://binaryfour.de/favicon.ico",name:"Binaryfour Upptime Status",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"Website",href:"https://binaryfour.de"}]},path:"https://stoamandl.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Te(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ae(t){let n,r,s,o=xe["status-website"]&&!xe["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=_("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){I(n,"alt",""),c(n.src,r=xe["status-website"].logoUrl)||I(n,"src",r),I(n,"class","svelte-a08hsz")},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}(),i=xe["status-website"]&&!xe["status-website"].hideNavTitle&&function(t){let n,r,s=xe["status-website"].name+"";return{c(){n=_("div"),r=S(s)},l(e){n=O(e,"DIV",{});var t=L(n);r=C(t,s),t.forEach(y)},m(e,t){w(e,n,t),b(n,r)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("div"),r=_("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=L(n);r=O(t,"A",{href:!0,class:!0});var a=L(r);o&&o.l(a),s=H(a),i&&i.l(a),a.forEach(y),t.forEach(y),this.h()},h(){I(r,"href",xe["status-website"].logoHref||xe.path),I(r,"class","logo svelte-a08hsz")},m(e,t){w(e,n,t),b(n,r),o&&o.m(r,null),b(r,s),i&&i.m(r,null)},p(e,t){xe["status-website"]&&!xe["status-website"].hideNavLogo&&o.p(e,t),xe["status-website"]&&!xe["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&y(n),o&&o.d(),i&&i.d()}}}function Ne(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=_("li"),n=_("a"),r=S(a),i=x(),this.h()},l(e){t=O(e,"LI",{});var s=L(t);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=C(o,a),o.forEach(y),i=H(s),s.forEach(y),this.h()},h(){I(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),I(n,"href",o=e[1].href.replace("$OWNER",xe.owner).replace("$REPO",xe.repo)),I(n,"class","svelte-a08hsz")},m(e,s){w(e,t,s),b(t,n),b(n,r),b(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&I(n,"aria-current",s)},d(e){e&&y(t)}}}function Ie(t){let n,r,s,o,i,a=xe["status-website"]&&xe["status-website"].logoUrl&&Ae(),c=xe["status-website"]&&xe["status-website"].navbar&&function(e){let t,n=xe["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ne(Te(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);w(e,t,n)},p(e,s){if(1&s){let o;for(n=xe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Te(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ne(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),l=xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&function(t){let n,r,s,o=xe.i18n.navGitHub+"";return{c(){n=_("li"),r=_("a"),s=S(o),this.h()},l(e){n=O(e,"LI",{});var t=L(n);r=O(t,"A",{href:!0,class:!0});var i=L(r);s=C(i,o),i.forEach(y),t.forEach(y),this.h()},h(){I(r,"href",`https://github.com/${xe.owner}/${xe.repo}`),I(r,"class","svelte-a08hsz")},m(e,t){w(e,n,t),b(n,r),b(r,s)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("nav"),r=_("div"),a&&a.c(),s=x(),o=_("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=L(n);r=O(t,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=H(u),o=O(u,"UL",{class:!0});var d=L(o);c&&c.l(d),i=H(d),l&&l.l(d),d.forEach(y),u.forEach(y),t.forEach(y),this.h()},h(){I(o,"class","svelte-a08hsz"),I(r,"class","container svelte-a08hsz"),I(n,"class","svelte-a08hsz")},m(e,t){w(e,n,t),b(n,r),a&&a.m(r,null),b(r,s),b(r,o),c&&c.m(o,null),b(o,i),l&&l.m(o,null)},p(e,[t]){xe["status-website"]&&xe["status-website"].logoUrl&&a.p(e,t),xe["status-website"]&&xe["status-website"].navbar&&c.p(e,t),xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&y(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Pe(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends $e{constructor(e){super(),ye(this,e,Pe,Ie,i,{segment:0})}}var Re={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function ke(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ce(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Re[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+ke(Oe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ce(ke(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Oe(s[8])+'" alt="'+Oe(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Oe(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ce(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Oe(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[8]=t[n],r}function Me(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",`${xe.path}/themes/${(xe["status-website"]||{}).theme||"light"}.css`)},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function De(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",(xe["status-website"]||{}).themeUrl)},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function Ge(t){let n,r;return{c(){n=_("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),L(n).forEach(y),this.h()},h(){c(n.src,r=t[8].src)||I(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function qe(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){I(n,"rel",t[3].rel),I(n,"href",t[3].href),I(n,"media",t[3].media)},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function Be(t){let n;return{c(){n=_("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){I(n,"name",t[3].name),I(n,"content",t[3].content)},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function ze(t){let n,r,s,o,i,a,c,d,f,h,p,m,g,v,E,S,A,N,P=Ce(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"",R=(xe["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(xe["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,r=T(),this.h()},l(e){n=j(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),w(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();let k=((xe["status-website"]||{}).themeUrl?De:Me)(t),C=(xe["status-website"]||{}).scripts&&function(e){let t,n=(xe["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);w(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=je(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ge(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),U=(xe["status-website"]||{}).links&&function(e){let t,n=(xe["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);w(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ue(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),M=(xe["status-website"]||{}).metaTags&&function(e){let t,n=(xe["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(He(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);w(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=He(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),D=xe["status-website"].css&&function(t){let n,r,s=`<style>${xe["status-website"].css}</style>`;return{c(){n=new z,r=T(),this.h()},l(e){n=j(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),w(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),G=xe["status-website"].js&&function(t){let n,r,s=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new z,r=T(),this.h()},l(e){n=j(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),w(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),q=(xe["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(xe["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,r=T(),this.h()},l(e){n=j(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),w(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();m=new Le({props:{segment:t[0]}});const K=t[2].default,J=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(K,t,t[1],null);return{c(){R&&R.c(),n=T(),k.c(),r=_("link"),s=_("link"),o=_("link"),C&&C.c(),i=T(),U&&U.c(),a=T(),M&&M.c(),c=T(),D&&D.c(),d=T(),G&&G.c(),f=T(),h=x(),q&&q.c(),p=x(),me(m.$$.fragment),g=x(),v=_("main"),J&&J.c(),E=x(),S=_("footer"),A=_("p"),this.h()},l(e){const t=B('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=T(),k.l(t),r=O(t,"LINK",{rel:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(t),i=T(),U&&U.l(t),a=T(),M&&M.l(t),c=T(),D&&D.l(t),d=T(),G&&G.l(t),f=T(),t.forEach(y),h=H(e),q&&q.l(e),p=H(e),ge(m.$$.fragment,e),g=H(e),v=O(e,"MAIN",{class:!0});var l=L(v);J&&J.l(l),l.forEach(y),E=H(e),S=O(e,"FOOTER",{class:!0});var u=L(S);A=O(u,"P",{}),L(A).forEach(y),u.forEach(y),this.h()},h(){I(r,"rel","stylesheet"),I(r,"href",`${xe.path}/global.css`),I(s,"rel","icon"),I(s,"type","image/svg"),I(s,"href",(xe["status-website"]||{}).faviconSvg||(xe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),I(o,"rel","icon"),I(o,"type","image/png"),I(o,"href",(xe["status-website"]||{}).favicon||"/logo-192.png"),I(v,"class","container"),I(S,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),b(document.head,n),k.m(document.head,null),b(document.head,r),b(document.head,s),b(document.head,o),C&&C.m(document.head,null),b(document.head,i),U&&U.m(document.head,null),b(document.head,a),M&&M.m(document.head,null),b(document.head,c),D&&D.m(document.head,null),b(document.head,d),G&&G.m(document.head,null),b(document.head,f),w(e,h,t),q&&q.m(e,t),w(e,p,t),be(m,e,t),w(e,g,t),w(e,v,t),J&&J.m(v,null),w(e,E,t),w(e,S,t),b(S,A),A.innerHTML=P,N=!0},p(e,[t]){(xe["status-website"]||{}).customHeadHtml&&R.p(e,t),k.p(e,t),(xe["status-website"]||{}).scripts&&C.p(e,t),(xe["status-website"]||{}).links&&U.p(e,t),(xe["status-website"]||{}).metaTags&&M.p(e,t),xe["status-website"].css&&D.p(e,t),xe["status-website"].js&&G.p(e,t),(xe["status-website"]||{}).customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),J&&J.p&&(!N||2&t)&&u(J,K,e,e[1],N?t:-1,null,null)},i(e){N||(de(m.$$.fragment,e),de(J,e),N=!0)},o(e){fe(m.$$.fragment,e),fe(J,e),N=!1},d(e){R&&R.d(e),y(n),k.d(e),y(r),y(s),y(o),C&&C.d(e),y(i),U&&U.d(e),y(a),M&&M.d(e),y(c),D&&D.d(e),y(d),G&&G.d(e),y(f),e&&y(h),q&&q.d(e),e&&y(p),ve(m,e),e&&y(g),e&&y(v),J&&J.d(e),e&&y(E),e&&y(S)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends $e{constructor(e){super(),ye(this,e,Ke,ze,i,{segment:0})}}function Ve(e){let t,n,r=e[1].stack+"";return{c(){t=_("pre"),n=S(r)},l(e){t=O(e,"PRE",{});var s=L(t);n=C(s,r),s.forEach(y)},m(e,r){w(e,t,r),b(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&M(n,r)},d(e){e&&y(t)}}}function We(t){let n,r,s,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Ve(t);return{c(){r=x(),s=_("h1"),o=S(t[0]),i=x(),a=_("p"),c=S(d),l=x(),f&&f.c(),u=T(),this.h()},l(e){B('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=H(e),s=O(e,"H1",{class:!0});var n=L(s);o=C(n,t[0]),n.forEach(y),i=H(e),a=O(e,"P",{class:!0});var h=L(a);c=C(h,d),h.forEach(y),l=H(e),f&&f.l(e),u=T(),this.h()},h(){I(s,"class","svelte-17w3omn"),I(a,"class","svelte-17w3omn")},m(e,t){w(e,r,t),w(e,s,t),b(s,o),w(e,i,t),w(e,a,t),b(a,c),w(e,l,t),f&&f.m(e,t),w(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&d!==(d=e[1].message+"")&&M(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Ve(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&y(r),e&&y(s),e&&y(i),e&&y(a),e&&y(l),f&&f.d(e),e&&y(u)}}}function Fe(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Ye extends $e{constructor(e){super(),ye(this,e,Fe,We,i,{status:0,error:1})}}function Xe(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&me(n.$$.fragment),r=T()},l(e){n&&ge(n.$$.fragment,e),r=T()},m(e,t){n&&be(n,e,t),w(e,r,t),s=!0},p(e,t){const s=16&t?he(o,[pe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){le();const e=n;fe(e.$$.fragment,1,0,(()=>{ve(e,1)})),ue()}i?(n=new i(a()),me(n.$$.fragment),de(n.$$.fragment,1),be(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&de(n.$$.fragment,e),s=!0)},o(e){n&&fe(n.$$.fragment,e),s=!1},d(e){e&&y(r),n&&ve(n,e)}}}function Ze(e){let t,n;return t=new Ye({props:{error:e[0],status:e[1]}}),{c(){me(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Qe(e){let t,n,r,s;const o=[Ze,Xe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=T()},l(e){n.l(e),r=T()},m(e,n){i[t].m(e,n),w(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(le(),fe(i[c],1,1,(()=>{i[c]=null})),ue(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){s||(de(n),s=!0)},o(e){fe(n),s=!1},d(e){i[t].d(e),e&&y(r)}}}function et(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Qe]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){me(n.$$.fragment)},l(e){ge(n.$$.fragment,e)},m(e,t){be(n,e,t),r=!0},p(e,[t]){const r=12&t?he(s,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(de(n.$$.fragment,e),r=!0)},o(e){fe(n.$$.fragment,e),r=!1},d(e){ve(n,e)}}}function tt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return W(l),u=Se,d=r,J().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class nt extends $e{constructor(e){super(),ye(this,e,tt,et,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],st=[{js:()=>Promise.all([import("./index.997f7919.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.24ca9975.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].06ea869a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].45cd68c1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.b1d9376a.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ot=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function at(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let lt,ut=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ft={};let ht,pt;function mt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function gt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ht))return null;let t=e.pathname.slice(ht.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<ot.length;n+=1){const r=ot[n],s=r.pattern.exec(t);if(s){const n=mt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function bt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=gt(s);if(o){yt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),dt.pushState({id:lt},"",s.href)}}function vt(){return{x:pageXOffset,y:pageYOffset}}function wt(e){if(ft[lt]=vt(),e.state){const t=gt(new URL(location.href));t?yt(t,e.state.id):location.href=location.href}else!function(e){ut=e}(ut+1),function(e){lt=e}(ut),dt.replaceState({id:lt},"",location.href)}function yt(e,t,n,r){return at(this,void 0,void 0,(function*(){const s=!!t;if(s)lt=t;else{const e=vt();ft[lt]=e,lt=t=++ut,ft[lt]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ft[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ft[lt]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $t(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let _t,Et=null;function St(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=gt(new URL(e,$t(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:Gt(t)}),Et.promise}(t.href)}function xt(e){clearTimeout(_t),_t=setTimeout((()=>{St(e)}),20)}function Tt(e,t={noscroll:!1,replaceState:!1}){const n=gt(new URL(e,$t(document)));if(n){const r=yt(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:lt},"",e),r}return location.href=e,new Promise((()=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,It,Pt,Lt=!1,Rt=[],kt="{}";const Ot={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ee(null),session:Ee(At&&At.session)};let Ct,Ht,Ut;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return at(this,void 0,void 0,(function*(){Nt&&Ot.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:Gt(e)}(e),n=It={},r=yield t,{redirect:s}=r;if(n===It)if(s)yield Tt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Dt(n,t,jt(t,e.page))}}))}function Dt(e,t,n){return at(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),Nt?Nt.$set(t):(t.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.level0={props:yield Pt},t.notify=Ot.page.notify,Nt=new nt({target:Ut,props:t,hydrate:!0})),Rt=e,kt=JSON.stringify(n.query),Lt=!0,Ht=!1}))}function Gt(e){return at(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Pt){const e=()=>({});Pt=At.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>at(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==kt)return!0;const s=Rt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(Ht||u||!Rt[a]||Rt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield st[t.i].js();let o;o=Lt||!At.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ct):{}:At.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:t.i}}else h=Rt[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qt,Bt,zt;Ot.session.subscribe((e=>at(void 0,void 0,void 0,(function*(){if(Ct=e,!Lt)return;Ht=!0;const t=gt(new URL(location.href)),n=It={},{redirect:r,props:s,branch:o}=yield Gt(t);n===It&&(r?yield Tt(r.location,{replaceState:!0}):yield Dt(o,s,jt(s,t.page)))})))),qt={target:document.querySelector("#sapper")},Bt=qt.target,Ut=Bt,zt=At.baseUrl,ht=zt,pt=Mt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",bt),addEventListener("popstate",wt),addEventListener("touchstart",St),addEventListener("mousemove",xt),At.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=At;Pt||(Pt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Pt},level1:{props:{status:o,error:i},component:Ye},segments:s},c=mt(n);Dt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ut},"",t);const n=gt(new URL(location.href));if(n)return yt(n,ut,!0,e)}));export{ve as A,A as B,s as C,X as D,j as E,c as F,f as G,z as H,B as I,Ce as J,E as K,Tt as L,D as M,N,t as O,P,he as Q,W as R,$e as S,F as T,d as U,pe as V,ne as W,q as X,L as a,C as b,O as c,y as d,_ as e,I as f,w as g,b as h,ye as i,x as j,H as k,le as l,fe as m,e as n,ue as o,de as p,V as q,xe as r,i as s,S as t,M as u,T as v,$ as w,me as x,ge as y,be as z};

import __inject_styles from './inject_styles.803b7e80.js';