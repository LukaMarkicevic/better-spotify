(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(31),s=c.n(r),i=(c(48),c(107)),o=c(5);function u(){return Object(o.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(o.jsx)("a",{className:"btn btn-success btn-lg",href:"https://accounts.spotify.com/authorize?client_id=cfc90945a74b46ad8db89e6716d59e65&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",children:"Login With Spotify"})})}var l=c(7),d=c(8),f=c.n(d);var h=c(41);function j(e){var t=e.accessToken,c=e.trackUri,a=Object(n.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return i(!0)}),[c]),t?Object(o.jsx)(h.a,{token:t,showSaveIcon:!0,callback:function(e){e.isPlaying||i(!1)},play:s,uris:c?[c]:[]}):null}function b(e){var t=e.track,c=e.chooseTrack;return Object(o.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:function(){c(t)},children:[Object(o.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"}}),Object(o.jsxs)("div",{className:"ml-3",children:[Object(o.jsx)("div",{children:t.title}),Object(o.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var O=c(108),m=c(40),p=new(c.n(m).a)({clientId:"cfc90945a74b46ad8db89e6716d59e65"});function v(e){var t=function(e){var t=Object(n.useState)(),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(n.useState)(),h=Object(l.a)(d,2),j=h[0],b=h[1];return Object(n.useEffect)((function(){f.a.post("http://localhost:3001/login",{code:e}).then((function(e){r(e.data.accessToken),u(e.data.refreshToken),b(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(n.useEffect)((function(){if(o&&j){var e=setInterval((function(){f.a.post("http://localhost:3001/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),b(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(j-60));return function(){return clearInterval(e)}}}),[o,j]),a}(e.code),c=Object(n.useState)(""),a=Object(l.a)(c,2),r=a[0],s=a[1],u=Object(n.useState)([]),d=Object(l.a)(u,2),h=d[0],m=d[1],v=Object(n.useState)(),x=Object(l.a)(v,2),y=x[0],g=x[1],k=Object(n.useState)(""),w=Object(l.a)(k,2),S=w[0],T=w[1];function N(e){g(e),s(""),T("")}return Object(n.useEffect)((function(){y&&f.a.get("http://localhost:3001/lyrics",{params:{track:y.title,artist:y.artist}}).then((function(e){T(e.data.lyrics)}))}),[y]),Object(n.useEffect)((function(){t&&p.setAccessToken(t)}),[t]),Object(n.useEffect)((function(){if(!r)return m([]);if(t){var e=!1;return p.searchTracks(r).then((function(t){e||m(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[r,t]),Object(o.jsxs)(i.a,{className:"d-flex flex-column py-2",style:{height:"100vh"},children:[Object(o.jsx)(O.a.Control,{type:"search",placeholder:"Search Songs/Artists",value:r,onChange:function(e){return s(e.target.value)}}),Object(o.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflowY:"auto"},children:[h.map((function(e){return Object(o.jsx)(b,{track:e,chooseTrack:N},e.uri)})),0===h.length&&Object(o.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:S})]}),Object(o.jsx)("div",{children:Object(o.jsx)(j,{accessToken:t,trackUri:null===y||void 0===y?void 0:y.uri})})]})}var x=new URLSearchParams(window.location.search).get("code");var y=function(){return x?Object(o.jsx)(v,{code:x}):Object(o.jsx)(u,{})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))},86:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.5a362707.chunk.js.map