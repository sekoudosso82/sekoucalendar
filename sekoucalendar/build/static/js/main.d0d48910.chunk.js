(this["webpackJsonpmy-to-do-list"]=this["webpackJsonpmy-to-do-list"]||[]).push([[0],{18:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),c=a(10),l=a(1),i=(a(35),a(6)),u=a(2),p=a(3),m=a(4),d=a(5),h=a(8),f=a(23),v=a(11),O={dateToDo:"",title:"",activeToDOList:[],username:"",currentUser:""},E=function(){return function(e){fetch("https://sekoudossocalendar.herokuapp.com/api/v1/tasks").then((function(e){return e.json()})).then((function(t){e({type:"FETCH_TO_DO_LISTS",payload:{activeToDOList:t}})}))}};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":case"LOGOUT_USER":return Object(v.a)({},e,{currentUser:t.payload});case"FETCH_TO_DO_LISTS":return Object(v.a)({},e,{activeToDOList:t.payload.activeToDOList});case"CREATE_TODO":return console.log("*****  payload create new todo  *****",t.payload),Object(v.a)({},e,{activeToDOList:[].concat(Object(f.a)(e.activeToDOList),[t.payload])});case"COMPLETE_TODO":return console.log("***** id  payload completed todo  *****",t.payload.id),Object(v.a)({},e,{activeToDOList:e.activeToDOList.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"REMOVE_TODO":return console.log("***** id payload delete todo  *****",t.payload.id),Object(v.a)({},e,{activeToDOList:Object(f.a)(e.activeToDOList.filter((function(e){return e.id!==t.payload.id})))});default:return e}},g=(a(40),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user_id:"",title:"",status:!1,dateToDo:""},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleAddNewTask=function(t){t.preventDefault();var a={user_id:e.props.currentUser.id,title:e.state.title,status:e.state.status,dateToDo:e.state.dateToDo};console.log("** new task",a),fetch("https://sekoudossocalendar.herokuapp.com/api/v1/tasks",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){t.errors?alert(t.errors):alert("Successfully added"),e.props.createNewTodo(t)})),e.setState({user_id:"",title:"",status:!1,dateToDo:""})},e}return Object(p.a)(a,[{key:"render",value:function(){return console.log("** new task current user ",this.props.currentUser.id),r.a.createElement("div",null,r.a.createElement("form",{className:"new-todo-form",onSubmit:this.handleAddNewTask},r.a.createElement("input",{className:"new-todo-input",type:"text",name:"title",placeholder:"new task here",value:this.state.title,onChange:this.handleChange}),r.a.createElement("input",{className:"new-todo-date-input",type:"date",name:"dateToDo",placeholder:"select date",value:this.state.dateToDo,onChange:this.handleChange}),r.a.createElement("button",{className:"new-todo-button",type:"Submit",value:"Submit"},"submit")))}}]),a}(n.Component)),T=Object(h.b)(null,(function(e){return{createNewTodo:function(t){return e({type:"CREATE_TODO",payload:t})}}}))(g),y=(a(26),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(){var t=e.props.id;fetch("https://sekoudossocalendar.herokuapp.com/api/v1/tasks/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){console.log("delete data id",t.id),e.props.deleteTodo(t)}))},e.markAsCompleted=function(t){t.preventDefault();var a=e.props.id;fetch("https://sekoudossocalendar.herokuapp.com/api/v1/tasks/".concat(a),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({status:!0})}).then((function(e){return e.json()})).then((function(t){e.props.completedTask(t)})),e.setState({targetItem:{}})},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"todo-item-container"},r.a.createElement("h3",null,this.props.title),r.a.createElement("h3",null,this.props.dateToDo),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:"completed-button",onClick:this.markAsCompleted},"Mark As Completed"),r.a.createElement("button",{className:"remove-button",onClick:this.handleDelete},"Remove")))}}]),a}(n.Component)),j=Object(h.b)(null,(function(e){return{deleteTodo:function(t){return e({type:"REMOVE_TODO",payload:t})},completedTask:function(t){return e({type:"COMPLETE_TODO",payload:t})}}}))(y),C=(a(27),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this;return console.log("**************** todolist activeToDOList ********",this.props.activeToDOList),r.a.createElement("div",{className:"list-wrapper"},r.a.createElement(T,{currentUser:this.props.currentUser}),this.props.activeToDOList.filter((function(t){return t.user_id===e.props.currentUser.id})).filter((function(e){return!1===e.status})).map((function(e){return r.a.createElement(j,e)})))}}]),a}(n.Component)),D=Object(h.b)((function(e){return{activeToDOList:e.activeToDOList}}),(function(e){return{fetchTodos:function(){return e(E())}}}))(C),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"complete-todo-item-container"},r.a.createElement("h3",null," THIS TASK HAS BEEN COMPLETED"),r.a.createElement("h3",null,"TITLE: ",this.props.title),r.a.createElement("h3",null,"COMPLETE DATE: ",this.props.dateToDo))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this;return console.log("**************** todolist complete currentUser********",this.props.currentUser),r.a.createElement("div",{className:"list-wrapper"},this.props.activeToDOList.filter((function(t){return t.user_id===e.props.currentUser.id})).filter((function(e){return!0===e.status})).map((function(e){return r.a.createElement(k,e)})))}}]),a}(n.Component),N=Object(h.b)((function(e){return{activeToDOList:e.activeToDOList}}),(function(e){return{fetchTodos:function(){return e(E())}}}))(w);a(18);var U=function(e){return r.a.createElement("div",{className:"user-controls"},r.a.createElement("button",{onClick:e.logout},e.currentUser?"LOG OUT":r.a.createElement("div",null,r.a.createElement(c.b,{to:"/login"},r.a.createElement("button",{className:"login"},"LOG IN")))))};var S=function(e){return console.log("**************** nav bar currentUser********",e.currentUser),r.a.createElement("div",{className:"  fixed-top navbar"},r.a.createElement(c.b,{to:"/"},r.a.createElement("div",{className:"navCLass "},"Home")),r.a.createElement(c.b,{to:"/complete"},r.a.createElement("div",{className:"navCLass "},"Complete Tasks")),r.a.createElement("div",{className:"navCLass"},r.a.createElement(U,{logout:e.logout,currentUser:e.currentUser})," "))},L=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),fetch("https://sekoudossocalendar.herokuapp.com/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){t.errors?alert(t.errors):e.props.setUser(t)}))},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"formLogin",onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-row loginMainDiv"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"salut"}," Hi ",this.state.username),r.a.createElement("input",Object(i.a)({className:"form-control loginInput formInput",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleChange},"placeholder","username")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",Object(i.a)({className:"form-control loginInput formInput",placeholder:"password",name:"password",value:this.state.password,type:"password",onChange:this.handleChange},"placeholder","password"))),r.a.createElement("br",null)),r.a.createElement("div",{className:"loginSubmit"},r.a.createElement("button",{className:"loginButton",type:"submit"},"Log In")),r.a.createElement(c.b,{to:"/signup"},r.a.createElement("button",{className:"signup"},"New User SIGN UP Please")))}}]),a}(r.a.Component),I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",passwordConfirmation:""},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.password===e.state.passwordConfirmation?fetch("https://sekoudossocalendar.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e.state.username,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){t.errors?alert(t.errors):(console.log("new signup data id",t.user.id),e.props.setUser(t))})):alert("Passwords don't match! check for case_sensitive Password should be atlease 3 characters"),e.setState({username:"",password:"",passwordConfirmation:""})},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"formLogin",onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-row loginMainDiv"},r.a.createElement("div",null,r.a.createElement("h1",{className:"salut"}," Hi ",this.state.username),r.a.createElement("input",{className:"form-control sellItemDivInput",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("input",{className:"form-control sellItemDivInput",placeholder:"password",name:"password",value:this.state.password,type:"password",onChange:this.handleChange}),r.a.createElement("input",{className:"form-control sellItemDivInput",placeholder:"passwordConfirmation",name:"passwordConfirmation",value:this.state.passwordConfirmation,type:"password",onChange:this.handleChange}),r.a.createElement("input",{className:"form-control sellItemDivInput",placeholder:"email",name:"email",value:this.state.email,type:"email",onChange:this.handleChange}),r.a.createElement("input",{className:"form-control sellItemDivInput",placeholder:"phone",name:"phone",value:this.state.phone,type:"phone",onChange:this.handleChange}),r.a.createElement("button",{className:"form-control sellItemDivInput",type:"submit"},"Sign Up"))))}}]),a}(r.a.Component),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null},e.setUser=function(t){e.setState({currentUser:t.user},(function(){localStorage.token=t.token,e.props.history.push("/tasks")}))},e.logout=function(){e.setState({currentUser:null},(function(){localStorage.removeItem("token"),e.props.history.push("/login")}))},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.token;t&&fetch("https://corona-backend1.herokuapp.com/api/v1/auto_login",{headers:{Authorization:t}}).then((function(e){return e.json()})).then((function(t){t.errors?alert(t.errors):e.setState({currentUser:t})})),this.props.fetchAllTodo()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{fixed:"top",currentUser:this.state.currentUser,logout:this.logout,handleChange:this.handleChange}),this.state.currentUser?r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/todolist",render:function(){return r.a.createElement(D,{currentUser:e.state.currentUser})}}),r.a.createElement(l.a,{path:"/complete",render:function(){return r.a.createElement(N,{currentUser:e.state.currentUser})}}),r.a.createElement(l.a,{path:"/",render:function(){return r.a.createElement(D,{currentUser:e.state.currentUser})}}))):r.a.createElement("div",null,r.a.createElement("h1",{className:"warning"}," Please Login or SignUp  "),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/signup",render:function(){return r.a.createElement(I,{setUser:e.setUser})}}),r.a.createElement(l.a,{path:"/login",render:function(t){return r.a.createElement(L,Object.assign({},t,{setUser:e.setUser}))}}))))}}]),a}(n.Component);var _=Object(h.b)((function(e){return{connectTodolist:e.activeToDOList}}),(function(e){return{fetchAllTodo:function(){return e(E())},loginUser:function(t){return e({type:"LOGIN_USER",payload:t})},logoutUser:function(t){return e({type:"LOGOUT_USER",payload:t})}}}))(A),P=a(14),M=a(29),R=Object(P.c)(b,Object(P.a)(M.a));s.a.render(r.a.createElement(h.a,{store:R},r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",component:_}))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d0d48910.chunk.js.map