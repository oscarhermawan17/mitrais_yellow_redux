(this.webpackJsonpmitrais_yellow_redux=this.webpackJsonpmitrais_yellow_redux||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var o=n(32),a=n(33),r=n(36),c=n(34),l=n(37),i=n(0),d=n.n(i),s=n(20),u=n.n(s),p=n(18),m=n(13),f=n(35),E=n(14),_=n(68),O=n.n(_),T=n(69),D=n(9),h=n(22);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={isPending:!1,todos:[],error:""},S=function(e,t){return"asc"===t?e.sort((function(e,t){return e.deadline>t.deadline?1:-1})):"desc"===t?e.sort((function(e,t){return e.deadline>t.deadline?-1:1})):[]},v=Object(E.c)({requestTodos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_TODO_PENDING":return g({},e,{isPending:!0});case"REQUEST_TODO_SUCCESS":var n=t.payload.map((function(e){return g({},e,{deadline:new Date(e.deadline)})}));return g({},e,{todos:n,isPending:!1});case"REQUEST_TODO_FAILED":return g({},e,{error:t.payload,isPending:!1});case"POST_CREATE_TODO_PENDING":return g({},e,{isPending:!1});case"POST_CREATE_TODO_SUCCESS":var o=[].concat(Object(D.a)(e.todos),[t.payload]);return g({},e,{todos:o,isPending:!1});case"POST_CREATE_TODO_FAILED":case"PUT_UPDATE_TODO_PENDING":return g({},e,{isPending:!1});case"PUT_UPDATE_TODO_SUCCESS":var a=e.todos.map((function(e){return e.id===t.payload.id?t.payload:e}));return g({},e,{todos:a,isPending:!1});case"PUT_UPDATE_TODO_FAILED":case"DELETE_TODO_PENDING":return g({},e,{isPending:!1});case"DELETE_TODO_SUCCESS":var r=e.todos.filter((function(e){return e.id!==t.payload}));return g({},e,{todos:r,isPending:!1});case"DELETE_TODO_FAILED":return g({},e,{isPending:!1});case"SORTING":var c=e.todos.filter((function(e){return e.done})),l=e.todos.filter((function(e){return new Date(e.deadline)>new Date&&!e.done})),i=e.todos.filter((function(e){return new Date(e.deadline)<new Date&&!e.done}));if("done"===t.payload.section){var d=S(c,t.payload.sortingValue);return console.log(d),g({},e,{todos:[].concat(Object(D.a)(l),Object(D.a)(i),Object(D.a)(d))})}if("todo"===t.payload.section){var s=S(l,t.payload.sortingValue);return g({},e,{todos:[].concat(Object(D.a)(i),Object(D.a)(c),Object(D.a)(s))})}if("passed"===t.payload.section){var u=S(i,t.payload.sortingValue);return g({},e,{todos:[].concat(Object(D.a)(l),Object(D.a)(c),Object(D.a)(u))})}return g({},e,{todos:[]});default:return e}}}),P=Object(E.d)(v,Object(E.a)(T.a,O.a)),C=n(23),w=n.n(C),j=function(e){return e.todos.map((function(t){return d.a.createElement("div",{className:"todo_content",key:t.id},d.a.createElement("div",null,t.description),d.a.createElement("div",null,(n=t.deadline,"".concat(new Date(n).getDate(),"/").concat(new Date(n).getMonth()+1,"/").concat(new Date(n).getFullYear()," ").concat(new Date(n).getHours(),":").concat(new Date(n).getMinutes()))),d.a.createElement("div",{className:"manage_btn"},d.a.createElement("button",{onClick:function(){return e.updateSingleTodo(t)},className:"btn gold"},"Edit")," \xa0",d.a.createElement("button",{onClick:function(){return e.deleteSingleTodo(t.id)},className:"btn merah"},"Delete")));var n}))},N=function(e){return d.a.createElement("div",{className:e.modal},d.a.createElement("div",{className:"modal-content"},d.a.createElement("table",null,d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,"Description"),d.a.createElement("td",null,d.a.createElement("input",{type:"text",value:e.form_todo.description,name:"name",onChange:function(t){return e.onChangeValueTodo(t.target.value,"description")}})," ")),d.a.createElement("tr",null,d.a.createElement("td",null,"Deadline "),d.a.createElement("td",null,e.children)),"upd"===e.choose_page?d.a.createElement("tr",null,d.a.createElement("td",null,"Is Done ? "),d.a.createElement("td",null,d.a.createElement("input",{type:"radio",name:"done",value:!1,onChange:function(t){return e.onChangeValueTodo(!1,"done")},checked:!1===e.form_todo.done})," Not Yet",d.a.createElement("br",null),d.a.createElement("input",{type:"radio",name:"done",value:!0,onChange:function(t){return e.onChangeValueTodo(!0,"done")},checked:!0===e.form_todo.done})," Done")):null)),"upd"===e.choose_page?d.a.createElement("button",{onClick:function(){return e.create_and_update_todo("upd")},className:"btn"},"Update Todo"):d.a.createElement("button",{onClick:function(){return e.create_and_update_todo("cre")},className:"btn"},"Create Todo"),d.a.createElement("button",{onClick:e.cancel_modal,className:"btn"},"Cancel")))},k=n(70),U=n.n(k),A=n(71),I=n.n(A);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).onChangeDate=function(t){var n=L({},e.state.form_todo,{deadline:t});return e.setState({form_todo:n})},e.state={modal_action:"",form_todo:{id:"",description:"",deadline:new Date,done:!0},choose_page:"",modal:"display_none modal",sections:[{type:"todo",title:"Your Todo List",style_wrapper:"section_1 left_float gold",style_title_color:"title_content kuning"},{type:"done",title:"Your Done Todo",style_wrapper:"section_2 left_float hijau_muda",style_title_color:"title_content hijau"},{type:"passed",title:"Your Passed Todo",style_wrapper:"section_3 left_float biru",style_title_color:"title_content dodgerblue"}]},e}return Object(l.a)(t,e),Object(a.a)(t,[{key:"validationDate",value:function(e){return e>I()(new Date).add(2,"hours")}},{key:"validationTodoDescription",value:function(e){return/^(?=.{1,10}$)[0-9a-zA-Z&/.,!?@ ]+$/.test(e)}},{key:"popUpModalTodo",value:function(e,t){var n=this;if("upd"===e)console.log("masuk upd",e,t),this.setState({form_todo:t},(function(){return console.log(n.state.form_todo)}));else{var o={description:"",deadline:new Date,done:!1};this.setState({form_todo:o})}this.setState({choose_page:e},(function(){return n.setState({modal:"modal"})}))}},{key:"splitTodoDonePasses",value:function(e){return"done"===e?this.props.todos.filter((function(e){return e.done})):"passed"===e?this.props.todos.filter((function(e){return new Date(e.deadline)<new Date&&!e.done})):"todo"===e?this.props.todos.filter((function(e){return new Date(e.deadline)>new Date&&!e.done})):[]}},{key:"sendPropsTodos",value:function(e,t){return this.splitTodoDonePasses(e)}},{key:"componentDidMount",value:function(){this.props.onRequestTodos()}},{key:"deleteSingleTodo",value:function(e){!0===window.confirm("Are you sure delete this Todo ?")&&this.props.onDeleteSingleTodo(e)}},{key:"cancelModal",value:function(){var e=this,t={description:"",deadline:new Date,done:!1};this.setState({form_todo:t},(function(){return e.setState({modal:"display_none modal"})}))}},{key:"createAndUpdateTodo",value:function(e){this.validationTodoDescription(this.state.form_todo.description)?("upd"===e?this.props.onUpdateSingleTodo(this.state.form_todo):"cre"===e?this.validationDate(this.state.form_todo.deadline)?this.props.onCreateSingleTodo(this.state.form_todo):alert("Please input Deadline minimum 2 hours Later"):alert("wrong"),this.setState({modal:"display_none modal"})):alert("Description incorect, maximum letter is 10 and just use a-Z 0-9 and &/.,!?@[space]")}},{key:"onChangeValueTodo",value:function(e,t){var n=L({},this.state.form_todo,Object(h.a)({},t,e));this.setState({form_todo:n})}},{key:"render",value:function(){var e=this;return this.props.isPending?d.a.createElement("div",null,"loading..."):d.a.createElement("article",null,d.a.createElement("div",{className:"goto_center"},d.a.createElement("button",{className:"btn",onClick:function(){return e.popUpModalTodo("cre")}},"CREATE NEW TODO")),d.a.createElement(N,{modal:this.state.modal,cancel_modal:function(){return e.cancelModal()},modal_action:this.state.modal_action,form_todo:this.state.form_todo,onChangeValueTodo:function(t,n){return e.onChangeValueTodo(t,n)},create_and_update_todo:function(t){return e.createAndUpdateTodo(t)},onChangeDate:this.onChangeDate,choose_page:this.state.choose_page},d.a.createElement(U.a,{onChange:this.onChangeDate,value:new Date(this.state.form_todo.deadline)})),this.state.sections.map((function(t){return d.a.createElement("section",{key:t.title,className:t.style_wrapper},d.a.createElement("div",{className:"coba"},d.a.createElement("div",{className:t.style_title_color},d.a.createElement("h4",null,t.title)),d.a.createElement("div",{className:"goto_center"},d.a.createElement("button",{className:"btn",onClick:function(){return e.props.onSortingTodo({section:t.type,sortingValue:"asc"})}},"Sort Asc Date")," \xa0",d.a.createElement("button",{className:"btn",onClick:function(){return e.props.onSortingTodo({section:t.type,sortingValue:"desc"})}},"Sort Desc Date")),d.a.createElement(j,{deleteSingleTodo:function(t){return e.deleteSingleTodo(t)},updateSingleTodo:function(t){return e.popUpModalTodo("upd",t)},todos:e.sendPropsTodos(t.type)})))})),d.a.createElement("div",{className:"clear_left"}))}}]),t}(d.a.Component),G=Object(f.b)((function(e){return{todos:e.requestTodos.todos,isPending:e.requestTodos.isPending,error:e.requestTodos.error}}),(function(e){return{onCreateSingleTodo:function(t){return e(function(e){return function(t){t({type:"POST_CREATE_TODO_PENDING"}),w.a.post("https://cdc-web-frontend.herokuapp.com/todos",e).then((function(e){console.log(e),t({type:"POST_CREATE_TODO_SUCCESS",payload:e.data})})).catch((function(e){t({type:"POST_CREATE_TODO_FAILED",payload:e})}))}}(t))},onUpdateSingleTodo:function(t){return e(function(e){return function(t){console.log("TOOODOOO",e),t({type:"PUT_UPDATE_TODO_PENDING"}),w.a.put("https://cdc-web-frontend.herokuapp.com/todos/".concat(e.id),e).then((function(n){t({type:"PUT_UPDATE_TODO_SUCCESS",payload:e})})).catch((function(e){t({type:"PUT_UPDATE_TODO_FAILED",payload:e})}))}}(t))},onRequestTodos:function(){return e((function(e){e({type:"REQUEST_TODO_PENDING"}),w.a.get("https://cdc-web-frontend.herokuapp.com/todos").then((function(t){e({type:"REQUEST_TODO_SUCCESS",payload:t.data})})).catch((function(t){e({type:"REQUEST_TODO_FAILED",payload:t})}))}))},onDeleteSingleTodo:function(t){return e(function(e){return function(t){t({type:"DELETE_TODO_PENDING"}),w.a.delete("https://cdc-web-frontend.herokuapp.com/todos/".concat(e)).then((function(n){console.log(n),t({type:"DELETE_TODO_SUCCESS",payload:e})})).catch((function(e){t({type:"DELETE_TODO_FAILED",payload:e})}))}}(t))},onSortingTodo:function(t){return e(function(e){return function(t){t({type:"SORTING",payload:e})}}(t))}}}))(V),F=function(e){return d.a.createElement("div",{className:"simple_page"},e.title)},M=function(){return d.a.createElement("nav",null,d.a.createElement("ul",null,d.a.createElement("li",{className:"left_float"},d.a.createElement(p.b,{to:"/"},"Home")),d.a.createElement("li",{className:"left_float"},d.a.createElement(p.b,{to:"/todos"},"Todos")),d.a.createElement("li",{className:"left_float"},d.a.createElement(p.b,{to:"/testing"},"Are you Lost?"))),d.a.createElement("div",{className:"clear_left"}))},x=function(){return d.a.createElement("footer",null,"Oscar Hermawan ",d.a.createElement("br",null),"oscar.hermawan\xa9mitrais.com")},q=(n(143),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("header",{className:"App-header"},"MITRAIS TODO"),d.a.createElement(p.a,null,d.a.createElement(M,null),d.a.createElement(m.c,null,d.a.createElement(m.a,{exact:!0,path:"/todos",render:function(){return d.a.createElement(G,null)}}),d.a.createElement(m.a,{exact:!0,path:"/",render:function(){return d.a.createElement(F,{title:"Home"})}}),d.a.createElement(m.a,{path:"/",render:function(){return d.a.createElement(F,{title:"Are you lost? 404"})}}))),d.a.createElement(x,null))}}]),t}(d.a.Component));u.a.render(d.a.createElement(f.a,{store:P},d.a.createElement(q,null)),document.getElementById("root"))},73:function(e,t,n){e.exports=n(144)}},[[73,1,2]]]);
//# sourceMappingURL=main.49070d46.chunk.js.map