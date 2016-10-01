webpackJsonp([1,0],[function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=o(17),r=a(i),s=o(13),n=a(s);new r["default"]({el:"body",components:{App:n["default"]}})},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(14),r=a(i),s=o(16),n=a(s),l=o(15),c=a(l);$(".linear").height($(window).height()),t["default"]={data:function(){return{now_page:0,bra:{color:[],type_color:[],basic:[],type_basic:[],detail:[],type_detail:[]}}},methods:{reload_chart:function(){switch(this.now_page){case 0:this.$broadcast("reload-basic-chart");break;case 1:this.$broadcast("reload-color-chart");break;case 2:this.$broadcast("reload-detail-chart")}},next:function(){this.now_page=(this.now_page+1)%3,console.log(this.now_page),this.reload_chart()},previous:function(){this.now_page=(this.now_page+2)%3,console.log(this.now_page),this.reload_chart()}},ready:function(){var e=this;$.getJSON("/static/bra.json",function(t){console.log(t);var o=e.bra;$.each(t.basic,function(e,t){"whole"!=e&&(o.basic.push({value:t,name:e+"杯"}),o.type_basic.push(e+"杯"))}),$.each(t.color,function(e,t){"whole"!=e&&(o.color.push({value:t,name:e}),o.type_color.push(e))}),$.each(t.detail,function(e,a){var i=t.detail.whole;"whole"!=e&&a>=1e3&&(o.detail.push((100*a/i).toFixed(3)),o.type_detail.push(e))}),e.bra=o,e.reload_chart()})},components:{basic:r["default"],color:c["default"],detail:n["default"]}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{bra:Object},events:{"reload-basic-chart":function(){$("#basic").width(.7*document.body.clientWidth),console.log("reload-basic-chart");var e=echarts.init(document.getElementById("basic")),t={title:{text:"淘宝网用户购买文胸尺寸饼状图",subtext:"仅具参考意义",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",y:"60px",left:"center",data:this.bra.type_basic},series:[{name:"该尺寸购买人数",type:"pie",radius:"55%",center:["50%","60%"],data:this.bra.basic,color:["#EEB422","#708090","#FFA07A","#8B658B","#EE3B3B","#6B8E23","#5F9EA0","#FFC125","#696969"],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{bra:Object},events:{"reload-color-chart":function(){$("#color").width(.7*document.body.clientWidth),console.log("reload-color-chart");var e=echarts.init(document.getElementById("color")),t={title:{text:"淘宝网用户购买文胸颜色饼状图",subtext:"仅具参考意义",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",y:"60px",left:"center",data:this.bra.type_color},series:[{name:"该颜色购买人数",type:"pie",radius:"55%",center:["50%","60%"],data:this.bra.color,color:["#EEB422","#BEBEBE","#FFA07A","#8B658B","#EE3B3B","#6B8E23","#5F9EA0","#FFC125","#696969"],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{bra:Object},events:{"reload-detail-chart":function(){$("#detail").width(.7*document.body.clientWidth),console.log("reload-detail-chart");var e=echarts.init(this.$el),t={title:{text:"各胸围尺寸所占人数柱状图",x:"center"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,legend:{orient:"horizontal",y:"30px",left:"center",data:["各尺寸所占人数百分比"]},xAxis:[{type:"category",data:this.bra.type_detail}],yAxis:[{type:"value",name:"人数/%",min:0,max:20,interval:5,axisLabel:{formatter:"{value}"}}],series:[{name:"各尺寸所占人数百分比",type:"bar",data:this.bra.detail,color:"#191970"}]};e.setOption(t)}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=' <div id=app> <div id=main> <basic :bra.sync=bra v-bind:style="{ display: now_page == 0 ? \'block\' : \'none\'}"></basic> <color :bra.sync=bra v-bind:style="{ display: now_page == 1 ? \'block\' : \'none\'}"></color> <detail :bra.sync=bra v-bind:style="{ display: now_page == 2 ? \'block\' : \'none\'}"></detail> </div> <nav> <ul class=pager> <li class=previous @click=previous> <a href=#> <span class="glyphicon glyphicon-arrow-left" aria-hidden=true style="font-size: 22px"></span> </a> </li> <li class=next @click=next> <a href=#> <span class="glyphicon glyphicon-arrow-right" aria-hidden=true style="font-size: 22px"></span> </a> </li> </ul> </nav> </div> '},function(e,t){e.exports=" <div id=basic></div> "},function(e,t){e.exports=" <div id=color></div> "},function(e,t){e.exports=" <div id=detail></div> "},function(e,t,o){var a,i;o(5),a=o(1),i=o(9),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,o){var a,i;o(6),a=o(2),i=o(10),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,o){var a,i;o(7),a=o(3),i=o(11),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,o){var a,i;o(8),a=o(4),i=o(12),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}]);
//# sourceMappingURL=app.452ee9ed57853cb61154.js.map