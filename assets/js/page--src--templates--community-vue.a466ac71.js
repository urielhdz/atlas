(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CB7K:function(t,a,e){"use strict";e.r(a);var i=e("KQm4"),s=(e("TeQF"),e("ma9I"),e("rB9j"),e("EnZy"),e("pNMO"),e("4Brf"),e("afKu")),o=e.n(s),n={data:function(){return{socialMedia:["twitter","telegram","facebook","github","web","instagram"],icons:{twitter:["fab","twitter"],telegram:["fab","telegram"],facebook:["fab","facebook"],github:["fab","github"],web:["fas","link"],instagram:["fab","instagram"]},urls:{twitter:"https://twitter.com/",telegram:"https://t.me/",facebook:"https://facebook.com/",github:"https://github.com/",web:"",instagram:"https://instagram.com/"}}},computed:{hasTwitter:function(){return""!==this.$page.community.twitter},validSocial:function(){var t=this;return this.socialMedia.filter((function(a){return""!==t.$page.community[a]}))}},metaInfo:function(){var t=encodeURI("https://comunidades.lat".concat(this.$page.community.path,"?v=").concat(o()("sha256").update(this.$page.community.content).digest("hex"))),a=encodeURI("https://comunidades.lat".concat(this.$page.community.image.source,"?v=").concat(o()("sha256").update(this.$page.community.content).digest("hex"))),e=encodeURI("https://comunidades.lat/logo.png?v=".concat(o()("sha256").update(this.$page.community.content).digest("hex"))),s="https://motif.imgix.com/i?url=".concat(t)+"&image_url=".concat(a)+"&color=add5ff&"+"logo_url=".concat(e)+"&logo_alignment=top%2Cleft&text_alignment=bottom%2Ccenter&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d",n="comunidad"!==this.$page.community.title.split(" ")[0].toLowerCase()?"Comunidad ".concat(this.$page.community.title):this.$page.community.title;return this.$seo({title:n,baseUrl:"https://comunidades.lat",description:this.$page.community.description,keywords:"atlas,atlas comunidades,atlas tech,".concat(Object(i.a)(this.$page.community.tags)),lang:"es",language:"Spanish",image:s,openGraph:{title:this.$page.community.title,type:"website",image:s},twitter:{title:this.$page.community.title,type:"summary_large_image",image:s},script:[{src:"https://platform.twitter.com/widgets.js",body:!0}]})}},c=e("KHd+"),m=null,r=Object(c.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"container mt-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8"},[e("p",[e("g-image",{staticClass:"mb-1 image-fluid mx-auto d-block",attrs:{immediate:"",width:"200",src:t.$page.community.image,alt:"Logotipo "+t.$page.community.title}})],1),e("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-2",domProps:{innerHTML:t._s(t.$page.community.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-black",domProps:{innerHTML:t._s(t.$page.community.content)}})]),e("div",{staticClass:"col-lg-4 sidebar"},[e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Tags")]),e("div",{staticClass:"tagcloud"},t._l(t.$page.community.tags,(function(a){return e("g-link",{key:a.id,attrs:{to:a.path}},[t._v("\n              "+t._s(a.title)+"\n            ")])})),1)]),e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Sobre esta comunidad")]),e("p",[t._v("\n            "+t._s(t.$page.community.description)+"\n          ")])]),e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Ubicación")]),e("p",{staticClass:"fw-normal mb-0"},[e("font-awesome",{attrs:{size:"lg",icon:["fas","map-marker-alt"]}}),t._v("\n            "+t._s(t.$page.community.location)+"\n          ")],1)]),e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Redes")]),t._l(t.validSocial,(function(a){return e("p",{key:a},[e("font-awesome-icon",{attrs:{icon:[].concat(t.icons[a]),size:"lg","fixed-width":""}}),e("a",{attrs:{target:"_blank",rel:"noreferrer",href:t.urls[a]+t.$page.community[a]}},[t._v("\n              "+t._s(t.urls[a]+t.$page.community[a]))])],1)}))],2),t.hasTwitter?e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Twitter")]),e("a",{staticClass:"twitter-timeline",attrs:{"data-height":"400","data-dnt":"true",href:"https://twitter.com/"+t.$page.community.twitter}},[t._v("Tweets by "+t._s(t.$page.community.twitter))])]):t._e()])])])])}),[],!1,null,null,null);"function"==typeof m&&m(r);a.default=r.exports}}]);