(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/sutt.ea80f759.png"},31:function(e,a,t){e.exports=t(55)},39:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},48:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(5),i=t.n(n),r=t(27),o=t.n(r),s=(t(39),t(41),t(12));t(43);function c(e){var a=e.email,t=e.setEmail,n=e.password,r=e.setPassword,o=e.handleLogin,s=e.handleSignUp,c=e.hasAccount,l=e.setHasAccount,m=e.emailError,d=e.passwordError;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Login"},i.a.createElement("div",{className:"part1 part"},i.a.createElement("div",{className:"login"},"Login"),i.a.createElement("div",{className:"whylogin"},"Get access to your Orders, Wishlist and Recommendations"),i.a.createElement("div",{className:"Login-img"},i.a.createElement("img",{src:"./sutt.png",alt:""}),"SuKart")),i.a.createElement("div",{className:"part2 part"},i.a.createElement("div",{className:"closeLogin",onClick:function(){var e=document.querySelector(".Login").style;"translateY(-2000px)"===e.transform?e.transform="translateY(0px)":e.transform="translateY(-2000px)"}},i.a.createElement("div",{className:"close-login-bar close-login-bar1"}),i.a.createElement("div",{className:"close-login-bar close-login-bar2"})),i.a.createElement("div",{className:"email"},i.a.createElement("input",{placeholder:"Name",type:"text",autoFocus:!0,required:!0}),i.a.createElement("input",{placeholder:"Email Address",type:"text",autoFocus:!0,required:!0,value:a,onChange:function(e){return t(e.target.value)}}),i.a.createElement("p",{className:"errMsg"},m)),i.a.createElement("div",{className:"password"},i.a.createElement("input",{placeholder:"Password",type:"password",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),i.a.createElement("p",{className:"errMsg"},d)),i.a.createElement("div",{className:"btn-container"},c?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Login-btn",onClick:o},"Sign in"),i.a.createElement("p",{className:"hasAccQuery"},"Don't have an Account ?",i.a.createElement("span",{onClick:function(){return l(!c)}}," Sign up"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Login-btn",onClick:s},"Sign up"),i.a.createElement("p",{className:"hasAccQuery"},"Already have an Account ?",i.a.createElement("span",{onClick:function(){return l(!c)}}," Sign in"))),i.a.createElement("p",null,i.a.createElement("u",null,"or")),i.a.createElement("div",{className:"Login-btn google-login"},"Login with Google")),i.a.createElement("div",{className:"onlyForBITSian"},"Only for BITSians, ",i.a.createElement("br",null),"Login with BITS ID only"))))}var l=t(28),m=(t(45),t(56),t(47),t(8)),d=l.a.initializeApp({apiKey:"AIzaSyCdrCFX2sjxMunIQyKosRs7erlMZwzZ0mw",authDomain:"su-kart.firebaseapp.com",projectId:"su-kart",storageBucket:"su-kart.appspot.com",messagingSenderId:"592539837806",appId:"1:592539837806:web:cb51f7bdf7493b3dc0cd7f"}),g=(Object(m.S)(d),d),u=(t(48),t(29)),p=t.n(u);function h(){var e=function(){var e=document.querySelector(".Login").style;"translateY(-2000px)"===e.transform?e.transform="translateY(0px)":e.transform="translateY(-2000px)"},a=function(){document.querySelector(".Cart").style.display="block",document.querySelector(".Favourites").style.display="block",document.querySelector(".Log-out").style.display="block",document.querySelector(".Log-in").style.display="none"},t=Object(n.useState)(""),r=Object(s.a)(t,2),o=(r[0],r[1]),l=Object(n.useState)(""),m=Object(s.a)(l,2),d=m[0],u=m[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),y=f[0],S=f[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),v=(b[0],b[1],Object(n.useState)("")),k=Object(s.a)(v,2),w=k[0],A=k[1],L=Object(n.useState)(""),C=Object(s.a)(L,2),N=C[0],j=C[1],_=Object(n.useState)(!1),I=Object(s.a)(_,2),F=I[0],D=I[1],T=function(){A(""),j("")},M=function(){g.auth().onAuthStateChanged(function(e){e?(u(""),S(""),o(e)):o("")})};return Object(n.useEffect)(function(){M()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{email:d,setEmail:u,password:y,setPassword:S,handleLogin:function(){T(),g.auth().signInWithEmailAndPassword(d,y).catch(function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":A(e.message);break;case"auth/wrong-password":j(e.message)}}),alert("Login Successfull"),e(),a()},handleSignUp:function(){T(),g.auth().createUserWithEmailAndPassword(d,y).catch(function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":A(e.message);break;case"auth/weak-password":j(e.message)}}),e(),a()},hasAccount:F,setHasAccount:D,emailError:w,passwordError:N}),i.a.createElement("div",{className:"Navbar"},i.a.createElement("div",{className:"pageicon nav-ele"},i.a.createElement("div",{className:"pi-image"},i.a.createElement("img",{className:"logo",src:p.a,alt:""})),i.a.createElement("div",{className:"head"},"SuKart")),i.a.createElement("div",{className:"search nav-ele"},i.a.createElement("input",{className:"searchin",placeholder:"\ud83d\udd0d | Search"})),i.a.createElement("div",{className:"username nav-ele"},"Hi ","user",","),i.a.createElement("div",{className:"Cart nav-ele"},"Cart"),i.a.createElement("div",{className:"Favourites nav-ele"},"Favourites"),i.a.createElement("div",{className:"Log-in nav-ele",onClick:e},"Log-in"),i.a.createElement("div",{className:"Log-out nav-ele",onClick:function(){g.auth().signOut(),alert("Ypu have logged out successfully"),document.querySelector(".Cart").style.display="none",document.querySelector(".Favourites").style.display="none",document.querySelector(".Log-out").style.display="none",document.querySelector(".Log-in").style.display="block"}},"Log-out"),i.a.createElement("div",{className:"closeNavbar-for-small-devices"},i.a.createElement("span",{className:"material-symbols-outlined"},"expand_more"))))}t(51);function f(e){return i.a.createElement("div",{className:"bar1-ele"},i.a.createElement("img",{className:"bar1-img",src:e.img,alt:""}))}var y=[{id:1,name:"Appliances",img:"./assets/Appliances.jpg"},{id:2,name:"Audio",img:"./assets/Audio.jpg"},{id:3,name:"Beauty",img:"./assets/Beauty.jpg"},{id:4,name:"Electronics",img:"./assets/Electronics.jpg"},{id:5,name:"Footwear",img:"./assets/Footwear.jpg"},{id:6,name:"MensWear",img:"./assets/MensWear.jpg"},{id:7,name:"SmartPhones",img:"./assets/SmartPhones.jpg"},{id:8,name:"WeatSide",img:"./assets/WestSide.jpg"},{id:9,name:"WomensWear",img:"./assets/WomensWear.jpg"}];function S(){var e=y.map(function(e){return i.a.createElement(f,{key:e.id,img:e.img})});return i.a.createElement("div",{className:"bar1"},e)}t(53);function E(e){var a=i.a.useState(1),t=Object(s.a)(a,2),n=t[0],r=t[1],o=i.a.useState(!1),c=Object(s.a)(o,2),l=c[0],m=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Card"},i.a.createElement("div",{className:"card-img"},i.a.createElement("img",{src:e.img,alt:""})),i.a.createElement("div",{className:"number buy-opt"},i.a.createElement("div",{className:"minus",onClick:function(){r(function(e){return e>1?e-1:e})}},"-"),i.a.createElement("div",{className:"count"+e.cardid},n),i.a.createElement("div",{className:"add",onClick:function(){r(function(e){return e+1})}},"+")),i.a.createElement("div",{className:"BN buy-opt"},"Buy Now"),i.a.createElement("div",{className:"ATC buy-opt"},"Add to Cart"),i.a.createElement("div",{className:"Name"},i.a.createElement("div",{className:"name"},e.name),i.a.createElement("div",{className:"ATF",onClick:function(){m(!0===l?function(e){return!1}:function(e){return!0})}},l?i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"red"},"\u2665")):i.a.createElement(i.a.Fragment,null,"\u2665"))),i.a.createElement("div",{className:"SD"},"This product is very useful, you must definitely but it.")))}var b=[{id:1,name:"Appliances",img:"./assets/Appliances.jpg"},{id:2,name:"Audio",img:"./assets/Audio.jpg"},{id:3,name:"Beauty",img:"./assets/Beauty.jpg"},{id:4,name:"Electronics",img:"./assets/Electronics.jpg"},{id:5,name:"Footwear",img:"./assets/Footwear.jpg"},{id:6,name:"MensWear",img:"./assets/MensWear.jpg"},{id:7,name:"SmartPhones",img:"./assets/SmartPhones.jpg"},{id:8,name:"WeatSide",img:"./assets/WestSide.jpg"},{id:9,name:"WomensWear",img:"./assets/WomensWear.jpg"}];function v(){var e=b.map(function(e){return i.a.createElement(E,{key:e.id,cardid:e.id,img:e.img,name:e.name})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Daily Necessities"),i.a.createElement("div",{className:"section2 section"},e))}var k=[{id:1,name:"Apogee Merchandize",img:"./assets/BITSMerchandize/Apogee Merchandize.jpg"},{id:2,name:"Charcoal Grey Hoodie",img:"./assets/BITSMerchandize/Charcoal Grey Hoodie.jpg"},{id:3,name:"Apogee Merchandize",img:"./assets/BITSMerchandize/BITS OFFICIAL HOODIE (1).jpg"},{id:4,name:"Sweatshirt",img:"./assets/BITSMerchandize/Sweatshirt.jpg"},{id:5,name:"Varsity Jacket",img:"./assets/BITSMerchandize/Varsity Jacket Front.jpg"},{id:6,name:"Lite Le T-Shirt",img:"./assets/BITSMerchandize/Lite Le T-Shirt.jpeg"},{id:7,name:"BITS OFFICIAL HOODIE",img:"./assets/BITSMerchandize/BITS OFFICIAL HOODIE (1).jpg"},{id:8,name:"MNA - Keychain",img:"./assets/BITSMerchandize/MNA - Keychain.jpeg"},{id:9,name:"Apogee Merchandize",img:"./assets/BITSMerchandize/Apogee Merchandize.jpg"}];function w(){var e=k.map(function(e){return i.a.createElement(E,{key:e.id,cardid:e.id,img:e.img,name:e.name})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"BITS Merchandize"),i.a.createElement("div",{className:"section3 section"},e))}var A=[{id:1,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",rating:{rate:3.9,count:120}},{id:2,title:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men's clothing",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",rating:{rate:4.1,count:259}},{id:3,title:"Mens Cotton Jacket",price:55.99,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men's clothing",image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",rating:{rate:4.7,count:500}},{id:4,title:"Mens Casual Slim Fit",price:15.99,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",category:"men's clothing",image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",rating:{rate:2.1,count:430}},{id:5,title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",category:"jewelery",image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",rating:{rate:4.6,count:400}},{id:6,title:"Solid Gold Petite Micropave ",price:168,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",category:"jewelery",image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3.9,count:70}},{id:7,title:"White Gold Plated Princess",price:9.99,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",category:"jewelery",image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3,count:400}},{id:8,title:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",category:"jewelery",image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",rating:{rate:1.9,count:100}},{id:9,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:64,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",category:"electronics",image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",rating:{rate:3.3,count:203}},{id:10,title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",category:"electronics",image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",rating:{rate:2.9,count:470}},{id:11,title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",category:"electronics",image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",rating:{rate:4.8,count:319}},{id:12,title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",rating:{rate:4.8,count:400}},{id:13,title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price:599,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",category:"electronics",image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",rating:{rate:2.9,count:250}},{id:14,title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",price:999.99,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",category:"electronics",image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",rating:{rate:2.2,count:140}},{id:15,title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",price:56.99,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",category:"women's clothing",image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",rating:{rate:2.6,count:235}},{id:16,title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",price:29.95,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",category:"women's clothing",image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",rating:{rate:2.9,count:340}},{id:17,title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",price:39.99,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women's clothing",image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",rating:{rate:3.8,count:679}},{id:18,title:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:9.85,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",category:"women's clothing",image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",rating:{rate:4.7,count:130}},{id:19,title:"Opna Women's Short Sleeve Moisture",price:7.95,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",category:"women's clothing",image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",rating:{rate:4.5,count:146}},{id:20,title:"DANVOUY Womens T Shirt Casual Cotton Short",price:12.99,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",category:"women's clothing",image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",rating:{rate:3.6,count:145}}];function L(){var e=A.map(function(e){return i.a.createElement(E,{key:e.id,cardid:e.id,img:e.image,name:e.title})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Cloth in Style"),i.a.createElement("div",{className:"section4 section"},e))}function C(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(S,null),i.a.createElement(v,null),i.a.createElement(w,null),i.a.createElement(L,null),"Work.In.Progress")}var N=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,57)).then(function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),i(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null))),N()}},[[31,3,2]]]);
//# sourceMappingURL=main.30837415.chunk.js.map