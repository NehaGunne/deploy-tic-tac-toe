(this["webpackJsonpfirst-global-app"]=this["webpackJsonpfirst-global-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),l=n(10),s=n.n(l),i=n(2),c=n(3),o=n(5),u=n(4),p=n(0),d=function(e){var t={height:"70px",borderBottom:"1px solid gray",marginBottom:"10px",margin:"0px"};return"dark"===e.theme&&(t.backgroundColor="black",t.color="white"),Object(p.jsx)("h1",{style:t,children:e.title})},j=function(e){return Object(p.jsxs)("div",{style:{margin:"10px",padding:"5px",textAlign:"center"},children:[Object(p.jsxs)("label",{children:["Enter player",e.id," name:"]}),Object(p.jsx)("input",{type:"text",onChange:function(t){return e.onNameChange(t,e.id)}})]})},h=n(11),b=n(9),x=function(e){console.log(e.isWinning);var t={color:e.value?"black":"transparent"},n=e.value||"-";return Object(p.jsx)("button",{onClick:function(){return e.onCellClick(e.id)},style:t,className:e.isWinning?"winner-cell cell":"cell",children:n})},v=function(e){return Object(p.jsx)("button",{className:"btn",onClick:function(){return e.onReset()},children:"Reset"})},f=function(e){return console.log(e.values),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"s.no"}),Object(p.jsx)("th",{children:"player"}),Object(p.jsx)("th",{children:"position"})]})}),Object(p.jsx)("tbody",{id:"tbody",children:e.values.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e[0][0]}),Object(p.jsx)("td",{children:e[0][2]}),Object(p.jsx)("td",{children:e[0][1]})]})}))})]})})},y=0;function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(h.a)(t[n],3),a=r[0],l=r[1],s=r[2];if(e[a]&&e[a]===e[l]&&e[a]===e[s])return{name:e[a],winningCells:t[n]}}return null}var m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleCellClick=function(e){var t=r.state.cells.slice();if(!O(t)&&!t[e]&&!r.state.cells[e]){var n=Object(b.a)(r.state.cells);n[e]=r.state.next;var a="x"===r.state.next?"o":"x",l=r.state.player===r.state.player1?r.state.player2:r.state.player1;r.setState({next:a,cells:n,player:l});var s=Object(b.a)(r.state.tableData);s.push([[++y,e,r.state.player]]),r.setState({tableData:s}),y%2!=0?(r.props.start2(),r.props.stop1()):(r.props.start1(),r.props.stop2())}},r.reset=function(){console.log("reset func"),r.setState({next:"o",cells:[null,null,null,null,null,null,null,null,null],player:r.props.player1,tableData:[]}),y=0,r.props.stop1(),r.props.stop2(),r.props.reset()},r.state={next:"o",cells:[null,null,null,null,null,null,null,null,null],player1:r.props.player1,player2:r.props.player2,player:r.props.player1,tableData:[]},r}return Object(c.a)(n,[{key:"render",value:function(){var e,t,n=this,r=O(this.state.cells);r?(this.props.stop1(),this.props.stop2(),"x"===r.name&&(t=this.state.player1),t=this.state.player2,e="Winner: "+r.name+" "+t):e="Next player: "+this.state.next+"  "+this.state.player;return 0===this.state.cells.filter((function(e){return null===e})).length&&(e="Game Tied"),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"next-player",children:e}),Object(p.jsxs)("div",{className:"game-card",children:[Object(p.jsx)("div",{className:"board",children:this.state.cells.map((function(e,t){return Object(p.jsx)(x,{isWinning:r?r.winningCells.includes(t):null,id:t,value:e,onCellClick:n.handleCellClick})}))}),Object(p.jsx)(f,{values:this.state.tableData})]}),Object(p.jsx)(v,{onReset:this.reset})]})}}]),n}(a.a.Component),g=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("p",{style:{border:"1px solid black",height:"20px",width:"50px",textAlign:"center",margin:"20px",borderRadius:"5px"},id:e.id,children:["00:0",e.time]})})},C=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).startTimer1=function(){r.id1=setInterval((function(){var e=r.state.value1;r.setState({value1:++e})}),1e3)},r.startTimer2=function(){r.id2=setInterval((function(){var e=r.state.value2;r.setState({value2:++e})}),1e3)},r.stopTimer1=function(){clearInterval(r.id1)},r.stopTimer2=function(){clearInterval(r.id2)},r.timerReset=function(){r.setState({value1:0,value2:0})},r.state={value1:0,value2:0},r.id1=0,r.id2=0,r}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{start1:function(){return e.startTimer1()},stop1:function(){return e.stopTimer1()},start2:function(){return e.startTimer2()},stop2:function(){return e.stopTimer2()},player1:this.props.player1,player2:this.props.player2,reset:function(){return e.timerReset()}}),Object(p.jsxs)("div",{className:"game-card",children:[Object(p.jsx)(g,{id:"timer1",time:this.state.value1}),Object(p.jsx)(g,{id:"timer2",time:this.state.value2})]})]})}}]),n}(a.a.Component),k=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).player1="",e.player2="",e.state={flag:!0},e.getPlayerName1=function(t,n){var r=t.target.value;e.player1=r},e.getPlayerName2=function(t,n){var r=t.target.value;e.player2=r},e.getBoard=function(){e.setState({flag:!1})},e}return Object(c.a)(n,[{key:"render_input",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(j,{id:1,onNameChange:function(t,n){return e.getPlayerName1(t,n)}}),Object(p.jsx)(j,{id:2,onNameChange:function(t,n){return e.getPlayerName2(t,n)}}),Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)("button",{className:"btn",onClick:this.getBoard,children:"Start"})})]})}},{key:"render_board",value:function(){return""==this.player1||""==this.player2?(this.render_input(),this.setState({flag:!0}),alert("names are empty")):this.state.flag?void 0:Object(p.jsx)("div",{children:Object(p.jsx)(C,{player1:this.player1,player2:this.player2})})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{title:"Tic Tac Toe",theme:"dark"}),!0===this.state.flag?this.render_input():this.render_board()]})}}]),n}(a.a.Component);n(17);s.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c7833655.chunk.js.map