(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"projects":[{"id":1,"name":"mathLab","demo_url":"","github":{"frontend":"https://github.com/laurenyz/mathLab-frontend","backend":"https://github.com/laurenyz/mathLab-backend"},"languages":["Ruby, Javascript"],"backend":"Ruby on Rails","frontend":"React","libraries":["Redux","Thunk","Action Cable","Active Storage","Material-Ui","React-to-Print","bcrypt"],"description":"mathLab is a resource for math students and teachers. It has two main features: a math forum, and a live-editing document. Without logging in, users can view posts and replies, as well as create and share \u201cscratchpads\u201d (live-editing documents). Once logged in, users can create posts, create replies, and can upvote replies. Users can also save scratchpads, which they can access in their account along with their published posts. Finally, users can update profile pictures which update on the frontend right away and persist in the backend (stored in Cloudinary)."},{"id":2,"name":"portfolio","demo_url":"","github":"https://github.com/laurenyz/portfolio","languages":["Javascript"],"backend":"","frontend":"React","libraries":["Material-Ui"],"description":"My portfolio"},{"id":3,"name":"Stargazers","demo_url":"","github":{"frontend":"https://github.com/matteoaricci/stargazers-frontend","backend":"https://github.com/matteoaricci/stargazers-backend"},"languages":["Ruby, Javascript"],"backend":"Ruby on Rails","frontend":"React","libraries":["Redux","Bootstrap","bcrypt"],"description":"A collaborative project that was built to explore the functionality of React. Users can search through constellations, planets, and astrological signs, they can favorite specific constellations and planets and they can search for other users with common interests."},{"id":4,"name":"BounceAround","demo_url":"","github":{"frontend":"https://github.com/matteoaricci/bouncearound/tree/master/bounce-frontend","backend":"https://github.com/matteoaricci/bouncearound/tree/master/bounce-backend"},"languages":["Ruby, Javascript"],"backend":"Ruby on Rails","frontend":"Vanilla Javascript","libraries":["P5","bcrypt"],"description":"A collaborative project that was built to explore the fundamentals of vanilla Javascript and DOM manipulation. This is a basic game where users must draw barriers to get a ball from its initial start point to the end goal"},{"id":5,"name":"Fetch","demo_url":"","github":"https://github.com/laurenyz/fetch","languages":["Ruby"],"backend":"Ruby on Rails","frontend":"Ruby on Rails","libraries":["bcrypt"],"description":"Fetch is a pet sitting app with login features for pet owners and pet sitters (aka PetXperts).  Pet owners can view available services and PetXperts in their area and can book appointments."},{"id":6,"name":"Zombo","demo_url":"","github":"https://github.com/IdleScV/ZOMBO","languages":["Ruby"],"backend":"","frontend":"","libraries":["Faker"],"description":"mathLab is a resource for math students and teachers.  It has two main features: a math forum, and a live-editing document.  Without logging in, users can view posts and replies, as well as create and share \u201cscratchpads\u201d (live-editing documents).  Once logged in, users can create posts, create replies, and can upvote replies.  Users can also save scratchpads, which they can access in their account along with their published posts.  Finally, users can update profile pictures which update on the frontend right away and persist in the backend (stored in Cloudinary)."}]}')},35:function(e,t,a){e.exports=a(54)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){var n={"./BounceAround.png":48,"./Fetch.png":49,"./Stargazers.png":50,"./Zombo.png":51,"./mathLab.png":52,"./portfolio.png":53};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=47},48:function(e,t,a){e.exports=a.p+"static/media/BounceAround.42a13aa7.png"},49:function(e,t,a){e.exports=a.p+"static/media/Fetch.42a13aa7.png"},50:function(e,t,a){e.exports=a.p+"static/media/Stargazers.42a13aa7.png"},51:function(e,t,a){e.exports=a.p+"static/media/Zombo.42a13aa7.png"},52:function(e,t,a){e.exports=a.p+"static/media/mathLab.42a13aa7.png"},53:function(e,t,a){e.exports=a.p+"static/media/portfolio.42a13aa7.png"},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=(a(40),a(41),a(4)),s=a(76),u=a(78),l=a(84),p=a(79),d=Object(c.f)((function(e){return o.a.createElement("div",null,o.a.createElement(s.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(p.a,{onClick:function(){e.history.push("/")},style:{cursor:"pointer"}},"Lauren Yu"),o.a.createElement(l.a,{onClick:function(){e.history.push("/projects")}},"Projects"),o.a.createElement(l.a,{onClick:function(){}},"Resume"),o.a.createElement(l.a,{onClick:function(){e.history.push("/about")}},"About"),o.a.createElement(l.a,{onClick:function(){window.open("https://medium.com/@laurenkyu")}},"Blog"),o.a.createElement(l.a,{onClick:function(){e.history.push("/contact")}},"Contact"))))})),h=a(29),m=a.n(h),b=a(81),g=a(82),f=a(80),v=Object(f.a)((function(e){return{root:{minWidth:300},greenUpvoteButton:{color:m.a[400]},media:{height:0,paddingTop:"56.25%"},deleteBtn:{marginLeft:"auto"}}})),y=function(e){var t=v();return o.a.createElement(b.a,{className:t.root,variant:"outlined"},o.a.createElement(g.a,{className:t.media,image:a(47)("./".concat(e.project.name,".png")),title:"mathLab"}),"ProjectCard",e.project.name)},w=a(30),E=a(83),k=function(){return o.a.createElement("div",null,o.a.createElement(E.a,{container:!0},w.projects.map((function(e){return o.a.createElement(E.a,{item:!0},o.a.createElement(y,{key:e.id,project:e}))}))))},R=function(){return o.a.createElement("div",null,"AboutMeContainer")},x=function(){return o.a.createElement("div",null,"ContactContainer")},j=function(){return o.a.createElement("div",null,"ProjectShowPage")},C=function(){return o.a.createElement("div",null,"Homescreen")};var O=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:C}),o.a.createElement(c.a,{exact:!0,path:"/projects/:id",component:j}),o.a.createElement(c.a,{exact:!0,path:"/projects",component:k}),o.a.createElement(c.a,{exact:!0,path:"/about",component:R}),o.a.createElement(c.a,{exact:!0,path:"/contact",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(21);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L.a,{basename:"/portfolio"},o.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.be87a820.chunk.js.map