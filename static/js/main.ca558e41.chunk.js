(this["webpackJsonpff-card-list"]=this["webpackJsonpff-card-list"]||[]).push([[0],{36:function(t,e,a){},37:function(t,e,a){},40:function(t,e){},42:function(t,e){},60:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),r=a(27),i=a.n(r),l=(a(36),a(37),a(10)),c=a(2),o=a(3),d=a(5),u=a(4),p=a(20),h=a(29),f=a.n(h),m=a(31),j=a(13),y=a(0),_=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"set-header",children:"PR"===this.props.setData.opus?"Promo Exclusive":"Opus ".concat(this.props.setData.opus)})}}]),a}(s.Component),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.card,e=[];switch(this.props.displayMode){case"want":e.push(Object(y.jsx)("div",{className:"card-quantity",children:"Need: ".concat(3-t.current_playset_amount)},"want"));break;case"trade":t.current_non_foil_playset_amount<3&&e.push(Object(y.jsx)("div",{className:"card-quantity",children:"Trade Amt: ".concat(t.total_amount-t.current_playset_amount)},"trade")),e.push(Object(y.jsx)("div",{className:"card-quantity underline",children:"Have"},"have")),t.quantities.forEach((function(t,a){"Regular"!==t.design_type?t.quantity>0&&e.push(Object(y.jsx)("div",{className:"card-quantity",children:"".concat(t.design_type,": ").concat(t.quantity)},a)):t.quantity>3&&e.push(Object(y.jsx)("div",{className:"card-quantity",children:"".concat(t.design_type,": ").concat(t.quantity-3)},a))}));break;case"trade-down":e.push(Object(y.jsxs)("div",{className:"card-quantity",children:[Object(y.jsx)("span",{className:"underline",children:"Need"}),": ","".concat(3-t.current_non_foil_playset_amount)]},"trade")),e.push(Object(y.jsx)("div",{className:"card-quantity underline",children:"Have"},"have")),t.quantities.forEach((function(t,a){"Regular"!==t.design_type&&t.quantity>0&&e.push(Object(y.jsx)("div",{className:"card-quantity",children:"".concat(t.design_type,": ").concat(t.quantity)},a))}))}return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("img",{src:t.image?t.image:"https://upload.wikimedia.org/wikipedia/en/b/b4/Final_Fantasy_CCG.jpg",alt:"",className:"card-img"}),Object(y.jsxs)("div",{className:"card-data",children:[Object(y.jsx)("div",{className:"card-name",children:t.name}),Object(y.jsx)("div",{className:"card-code",children:t.serial}),e]})]})}}]),a}(s.Component),v=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=[];return this.props.setData.cards.forEach((function(a,s){e.push(Object(y.jsx)(b,{displayMode:t.props.displayMode,card:a},s))})),Object(y.jsxs)("div",{className:"card-set",children:[e.length>0&&e,e.length<=0&&Object(y.jsx)("div",{children:"No Results for Set."})]})}}]),a}(s.Component),O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(_,{setData:this.props.setData}),Object(y.jsx)(v,{displayMode:this.props.displayMode,setData:this.props.setData})]})}}]),a}(s.Component),g=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=[],a=["All"];this.props.cardData.forEach((function(s){e.push(s.opus),s.cards.forEach((function(e){e.quantities.forEach((function(e){("trade-down"!==t.props.displayMode||"trade-down"===t.props.displayMode&&"Regular"!==e.design_type)&&(a.includes(e.design_type)||a.push(e.design_type))}))}))}));(e=e.sort((function(t,e){return t.localeCompare(e,"en",{numeric:!0})}))).unshift("All");var s=["All","L","H","R","C"];return"trade-down"!==this.props.displayMode&&s.push("PR Only"),Object(y.jsxs)("div",{className:"filter-options",children:[Object(y.jsx)("div",{className:"filter-option-desc",children:"Set:"}),Object(y.jsx)("ul",{className:"filter-option-collection",children:e.map((function(e){return Object(y.jsx)("li",{onClick:function(){return t.props.updateFilter("sets",e)},className:"filter-option-item ".concat(t.props.filters.sets.includes(e)?"selected":""),children:e},e)}))}),Object(y.jsx)("div",{className:"filter-option-desc",children:"Rarity"}),Object(y.jsx)("ul",{className:"filter-option-collection",children:s.map((function(e){return Object(y.jsx)("li",{onClick:function(){return t.props.updateFilter("rarities",e)},className:"filter-option-item ".concat(t.props.filters.rarities.includes(e)?"selected":""),children:e},e)}))}),"want"!==this.props.displayMode&&Object(y.jsx)("div",{className:"filter-option-desc",children:"Design:"}),"want"!==this.props.displayMode&&Object(y.jsx)("ul",{className:"filter-option-collection",children:a.map((function(e){return Object(y.jsx)("li",{onClick:function(){return t.props.updateFilter("designs",e)},className:"filter-option-item ".concat(t.props.filters.designs.includes(e)?"selected":""),children:e},e)}))})]})}}]),a}(s.Component),x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).sortedAndFilteredCardData=function(){var t=Object(m.a)(s.props.cardData).sort((function(t,e){return t.opus.localeCompare(e.opus,"en",{numeric:!0})}));t=t.map((function(t){return Object(l.a)({},t)})),s.props.filters.sets&&!s.props.filters.sets.includes("All")&&(t=t.filter((function(t){return s.props.filters.sets.includes("All")||s.props.filters.sets.includes(t.opus)})));for(var e=0;e<t.length;e++)s.props.filters.rarities&&!s.props.filters.rarities.includes("All")&&(t[e].cards=t[e].cards.filter((function(t){var e=t.serial.startsWith("PR")?"PR Only":t.serial[t.serial.length-1];return s.props.filters.rarities.includes(e)}))),s.props.filters.designs&&!s.props.filters.designs.includes("All")&&(t[e].cards=t[e].cards.filter((function(t){return t.quantities.map((function(t){return"Regular"!==t.design_type&&t.quantity>0||"Regular"===t.design_type&&t.quantity>3?t.design_type:null})).some((function(t){return s.props.filters.designs.includes(t)}))}))),t[e].cards=t[e].cards.filter((function(t){switch(s.props.displayMode){case"want":return t.current_playset_amount<3;case"trade":return t.current_playset_amount>=3&&t.total_amount>t.current_playset_amount;case"trade-down":return t.current_playset_amount>t.current_non_foil_playset_amount;default:return!1}}));return t},s.handleScroll=s.handleScroll.bind(Object(j.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),document.documentElement.scrollTop=this.props.initialScrollPos}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(t){this.props.setScrollPos(t.target.scrollingElement.scrollTop)}},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)(g,{filters:this.props.filters,updateFilter:this.props.updateFilter,displayMode:this.props.displayMode,cardData:this.props.cardData}),this.sortedAndFilteredCardData().map((function(e,a){return e.cards.length>0?Object(y.jsx)(O,{displayMode:t.props.displayMode,setData:e},a):null}))]})}}]),a}(s.Component),q=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).headerItemClicked=function(e){e===t.props.displayMode?window.scroll({top:0,left:0,behavior:"smooth"}):t.props.changeDisplay(e)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{className:"want-trade-header",children:[Object(y.jsx)("div",{className:"header-option ".concat("want"===this.props.displayMode?"selected-header":""),onClick:function(){return t.headerItemClicked("want")},children:"Want"}),Object(y.jsx)("div",{className:"header-option ".concat("trade"===this.props.displayMode?"selected-header":""),onClick:function(){return t.headerItemClicked("trade")},children:"Trade"}),Object(y.jsx)("div",{className:"header-option ".concat("trade-down"===this.props.displayMode?"selected-header":""),onClick:function(){return t.headerItemClicked("trade-down")},children:"Trade Down"})]})}}]),a}(s.Component),k=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).setDisplayMode=function(t){s.setState({display_mode:t})},s.setScrollPos=function(t){var e=Object(l.a)({},s.state.scroll_pos);e[s.state.display_mode]=t,s.setState({scroll_pos:e})},s.updateFilter=function(t,e){var a=Object(l.a)({},s.state.filters);if("All"===e||"sets"===t||a[s.state.display_mode][t].includes("All"))a[s.state.display_mode][t]=[],a[s.state.display_mode][t].push(e);else if(a[s.state.display_mode][t].includes(e)){var n=a[s.state.display_mode][t].indexOf(e);n>-1&&a[s.state.display_mode][t].splice(n,1)}else a[s.state.display_mode][t].push(e);s.setState({filters:a})},s.state={promo_card_data:null,ffdecks_data:null,collection_data:null,card_set_data:null,display_mode:"want",scroll_pos:{},filters:{want:{sets:["All"],rarities:["All"]},trade:{sets:["All"],designs:["All"],rarities:["L","H","PR Only"]},"trade-down":{sets:["All"],designs:["All"],rarities:["L","H"]}}},s}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(t,e,a){if((null===e.promo_card_data||null===e.ffdecks_data||null===e.collection_data)&&null!==this.state.promo_card_data&&null!==this.state.ffdecks_data&&null!==this.state.collection_data){var s=[];this.state.ffdecks_data.cards.forEach((function(t){var e={};e.name=t.name,e.image=t.image,e.serial=t.serial_number,e.serial+="Promo"!==t.rarity?t.rarity[0]:"",e.quantities=[],e.quantities.push({design_type:"Regular",quantity:0,playset_important:!0}),e.current_playset_amount=0,e.current_non_foil_playset_amount=0,e.opus="-"===t.serial_number[1]?t.serial_number[0]:t.serial_number.substring(0,2),s.push(e)})),this.state.collection_data.forEach((function(t,e){if(e>0){var a=t[1]+("Promo"!==t[2]?t[2][0]:""),n=s.findIndex((function(t){return t.serial===a}));n>=0?(s[n].quantities[0].quantity=parseInt(t[3]),s[n].current_non_foil_playset_amount=Math.min(parseInt(t[3]),3),s[n].quantities.push({design_type:"Foil",quantity:parseInt(t[4]),playset_important:!1})):console.log("missing serial from collection"+a)}})),this.state.promo_card_data.forEach((function(t,e){if(e>0){var a=t[0],n=s.findIndex((function(t){return t.serial===a}));if(n>=0)s[n].quantities.push({design_type:t[3].replace("Full Art","FA").replace("Prerelease","PreR").replace("Promo","PR").replace("Alternate","Alt"),quantity:parseInt(t[1]),playset_important:!1});else{console.log("missing serial from promos"+a);var r={};r.name=t[2],r.serial=t[0],r.quantities=[],r.quantities.push({design_type:"Regular",quantity:0,playset_important:!0}),r.quantities.push({design_type:t[3].replace("Full Art","FA").replace("Prerelease","PreR").replace("Promo","PR").replace("Alternate","Alt"),quantity:parseInt(t[1]),playset_important:!1}),r.current_playset_amount=0,r.current_non_foil_playset_amount=0,r.opus="-"===r.serial[1]?r.serial[0]:r.serial.substring(0,2),s.push(r)}}}));for(var n=0;n<s.length;n++)s[n].total_amount=s[n].quantities.reduce((function(t,e){return t+e.quantity}),0),s[n].current_playset_amount=Math.min(3,s[n].total_amount);var r=[];s.forEach((function(t){var e=r.findIndex((function(e){return e.opus===t.opus}));e<0&&(r.push({opus:t.opus,cards:[]}),e=r.length-1),r[e].cards.push(t)})),this.setState({card_set_data:r})}}},{key:"componentDidMount",value:function(){var t=this;Object(p.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vTNKDBLs5ncNghesIYn2C4JlnJ5TZBNUmPZRsjAk9tyVxqoAcTs69QijdIo0Ys3_svdyCXwDlf814J5/pub?output=csv",{complete:function(e){t.setState({promo_card_data:e.data})}}),Object(p.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQyqsRmAvUeC9CXLXgZCyFTQBtGt6g6qq94q7USpcS8PeP7Z0o9iA3j5DoYqkFG6YGYMpv6_VqNtALC/pub?output=csv",{complete:function(e){t.setState({collection_data:e.data})}}),fetch("https://ffdecks.com/api/cards/basic").then((function(t){return t.json()})).then((function(e){t.setState({ffdecks_data:e}),console.log("ffdecks_data_fetched")}))}},{key:"render",value:function(){return this.state.card_set_data?Object(y.jsxs)("div",{style:{height:"100%"},children:[Object(y.jsx)(q,{changeDisplay:this.setDisplayMode,displayMode:this.state.display_mode}),"want"===this.state.display_mode&&Object(y.jsx)(x,{filters:this.state.filters.want,updateFilter:this.updateFilter,setScrollPos:this.setScrollPos,initialScrollPos:this.state.scroll_pos.want,cardData:this.state.card_set_data,displayMode:this.state.display_mode}),"trade"===this.state.display_mode&&Object(y.jsx)(x,{filters:this.state.filters.trade,updateFilter:this.updateFilter,setScrollPos:this.setScrollPos,initialScrollPos:this.state.scroll_pos.trade,cardData:this.state.card_set_data,displayMode:this.state.display_mode}),"trade-down"===this.state.display_mode&&Object(y.jsx)(x,{filters:this.state.filters["trade-down"],updateFilter:this.updateFilter,setScrollPos:this.setScrollPos,initialScrollPos:this.state.scroll_pos["trade-down"],cardData:this.state.card_set_data.filter((function(t){return"PR"!==t.opus})),displayMode:this.state.display_mode})]}):Object(y.jsx)(f.a,{color:"black",loading:!0,size:150})}}]),a}(s.Component);a(30).polyfill();var w=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(k,{})})},N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),r(t),i(t)}))};i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.ca558e41.chunk.js.map