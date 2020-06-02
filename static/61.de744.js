webpackJsonp([61],{BnXb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=undefined;var n=y(a("1cZb")),s=y(a("aCj6")),l=y(a("IidI")),i=y(a("vaID")),r=y(a("vgHw")),u=y(a("NJOH")),c=y(a("09Ma")),d=y(a("uuhB")),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a("YaoS"),a("kJGR"),a("1uA9"),a("nclB"),a("ZJow"),a("mKHw"),a("c686"),a("TZP0");var f=a("U7vG"),h=y(f),p=y(a("mtWM")),_=a("Pq8k"),g=a("Zfgq"),m=a("4n+p");function y(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=d.default.Search,E=c.default.TreeNode,w=d.default.TextArea,x=u.default.Option,k=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,l=Array(s),i=0;i<s;i++)l[i]=arguments[i];return a=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={roles:[],userMap:{},users:[],notifiers:[],types:[],selfTypes:[],selectType:"",selectSelfType:"",title:"",description:"",successModalVisible:!1,notificationObj:"",createdOn:"",page:0,size:1e3},v(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchRoles(this.props.enterpriseId,this.state.page,this.state.size).then(function(t){var a=[],n=[];return t.forEach(function(t){a.push(e.fetchRoleUsers(e.props.enterpriseId,t.id,e.state.page,e.state.size)),n.push(t.name)}),Promise.all(a)}).then(function(t){var a={};return t.forEach(function(t,n){var s=t.data.content.map(function(e){return{name:e.username,id:e.id}});null!==s&&s!==undefined&&s.length>0&&(a[e.state.roles[n].name]=s)}),e.setState({userMap:a}),t}).then(function(t){return e.fetchCompanyUsers(e.props.enterpriseId)}).then(function(t){return e.fetchMessageTypes()}).then(function(t){return e.fetchMessageSelfDefinedTypes()})}},{key:"render",value:function(){var e=this,t=(this.language("user_service_message_msg_new_modal_fail_retry_label"),this.language("user_service_message_msg_new_modal_fail_back_label")),a=this.language("user_service_message_msg_new_modal_fail_header_label"),n=this.language("user_service_message_msg_new_modal_fail_content"),o=this.language("user_service_message_msg_new_modal_success_drawback_label"),f=this.language("user_service_message_msg_new_modal_success_back_label"),p=this.language("user_service_message_msg_new_modal_success_header_label"),_=this.language("user_service_message_msg_new_modal_success_type_label"),m=this.language("user_service_message_msg_new_modal_success_created_at_label"),y=this.language("user_service_message_msg_new_modal_success_content_label"),v=this.language("user_service_message_msg_new_modal_success_people_label"),k=this.language("user_service_message_msg_new_modal_success_publisher_label"),T=this.language("user_service_message_msg_new_modal_success_receiver_label"),S=this.language("user_service_message_msg_new_search_placeholder_label"),C=this.language("user_service_message_msg_new_receiver_label"),O=this.language("user_service_message_msg_new_type_label"),M=this.language("user_service_message_msg_new_self_type_label"),j=this.language("user_service_message_msg_new_title_label"),I=this.language("user_service_message_msg_new_title_placeholder_label"),P=this.language("user_service_message_msg_new_content_label"),A=this.language("user_service_message_msg_new_content_placeholder_label"),D=this.language("user_service_message_msg_new_publish_btn_label"),R=this.language("user_service_message_msg_new_back_btn_label"),G=this.language("user_service_message_msg_new_success_txt"),z=this.language("user_service_message_msg_new_fail_txt"),V=this.language("user_service_message_msg_new_drawback_success_txt"),U=this.language("user_service_message_msg_new_drawback_fail_txt"),H=[];this.state.users.forEach(function(e){H.push(h.default.createElement(x,{key:e.id},e.name))});var J=[];for(var K in this.state.userMap)J.push(h.default.createElement(E,{title:K,key:""+K},this.state.userMap[K].map(function(e){return h.default.createElement(E,{title:e.name,key:e.id})})));return h.default.createElement("div",{style:{background:"rgb(236,236,236)",height:"100vh",padding:"24px"}},h.default.createElement(i.default,{visible:!1,okText:t,cancelText:t,onOk:function(){},onCancel:function(){}},h.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},h.default.createElement(r.default,{type:"close-circle",style:{color:"red",fontSize:48,padding:16}}),h.default.createElement("h2",null,a),h.default.createElement("p",null,n))),h.default.createElement(i.default,{visible:this.state.successModalVisible,okText:o,cancelText:f,onOk:function(){return e.onWithdrawClick.bind(e)(V,U)},onCancel:function(){return e.setState({successModalVisible:!1})}},h.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},h.default.createElement(r.default,{type:"check-circle",style:{color:"green",fontSize:48,padding:16}}),h.default.createElement("h2",null,p)),h.default.createElement("table",{style:{width:"100%"}},h.default.createElement("tbody",null,h.default.createElement("tr",null,h.default.createElement("td",{style:{width:100,padding:8,textAlign:"right"}},_,":"),h.default.createElement("td",{style:{padding:8,textAlign:"left"}},this.state.selectType)),h.default.createElement("tr",null,h.default.createElement("td",{style:{width:100,padding:8,textAlign:"right"}},m,":"),h.default.createElement("td",{style:{padding:8,textAlign:"left"}},this.state.createdOn)),h.default.createElement("tr",null,h.default.createElement("td",{style:{width:100,padding:8,textAlign:"right"}},y,":"),h.default.createElement("td",{style:{padding:8,textAlign:"left"}},this.state.description)),h.default.createElement("tr",null,h.default.createElement("td",{style:{width:100,padding:8,textAlign:"right"}},v,":"),h.default.createElement("td",{style:{padding:8,textAlign:"left"}},h.default.createElement("div",null,k+": "+this.props.username),h.default.createElement("div",null,T+": "+this.state.notifiers.filter(function(t){return-1===Object.keys(e.state.userMap).indexOf(t)}).map(function(t){return e.state.users.filter(function(e){return e.id===t})[0].name}).join(", "))))))),h.default.createElement(s.default,{title:"发布消息"},h.default.createElement("div",{style:{margin:"0 auto",padding:"24px 24px 8px 24px",border:"1px solid rgba(0,0,0,.1)",borderRadius:"0px 0px 4px 4px",background:"white"}},h.default.createElement("div",{style:{display:"flex"}},h.default.createElement("div",{style:{width:200,border:"1px solid rgba(0,0,0,.1)",marginRight:"8px",padding:"8px"}},h.default.createElement(b,{placeholder:S}),h.default.createElement(c.default,{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],checkedKeys:this.state.notifiers,onSelect:this.onSelect.bind(this),onCheck:this.onCheck.bind(this)},J)),h.default.createElement("div",{style:{flexGrow:1,padding:"16px",border:"1px solid rgba(0,0,0,.1)"}},h.default.createElement("div",{style:{padding:8,display:"flex",alignItems:"center"}},h.default.createElement("div",{style:{width:"61px"}},C,":"),h.default.createElement(u.default,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:[],value:this.state.notifiers.filter(function(t){return-1===Object.keys(e.state.userMap).indexOf(t)}),onChange:this.handleChange.bind(this)},H)),h.default.createElement("div",{style:{padding:"16px 0"}},h.default.createElement("div",{style:{padding:8,display:"flex",alignItems:"center"}},h.default.createElement("div",{style:{width:"56px"}},O,":"),h.default.createElement(u.default,{value:this.state.selectType,style:{width:120,paddingRight:16},onChange:this.handleTypeChange.bind(this)},this.state.types.map(function(e){return h.default.createElement(x,{value:e,key:e},e)})),h.default.createElement("div",{style:{width:"56px"}},M,":"),h.default.createElement(u.default,{style:{width:120},value:this.state.selectSelfType,onChange:this.handleSelfTypeChange.bind(this)},this.state.selfTypes.map(function(e){return h.default.createElement(x,{value:e.code,key:e.code},e.name)}))),h.default.createElement("div",{style:{padding:"8px",display:"flex",alignItems:"center"}},h.default.createElement("div",{style:{width:"56px"}},j,":"),h.default.createElement(d.default,{name:"title",placeholder:I,value:this.state.title,onChange:this.onInputChange.bind(this)})),h.default.createElement("div",{style:{padding:"8px",display:"flex"}},h.default.createElement("div",{style:{width:"56px"}},P,":"),h.default.createElement(w,{name:"description",rows:8,placeholder:A,value:this.state.description,onChange:this.onInputChange.bind(this)}))))),h.default.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:8}},h.default.createElement(l.default,{type:"primary",style:{marginRight:16},onClick:function(){return e.onSubmitClick.bind(e)(G,z)}},D),h.default.createElement(l.default,{onClick:function(){return g.browserHistory.push("/console/message-sent")}},R)))))}},{key:"fetchRoles",value:function(e,t,a){var n=this;return(0,p.default)({url:"/api-user/enterprises/"+e+"/roles?page="+t+"&size="+a,method:"GET"}).then(function(e){var t=e.data.content.map(function(e){return{id:e.id,code:e.code,name:e.name,description:e.description}});return n.setState({roles:t}),t},function(e){}).catch(function(e){})}},{key:"fetchRoleUsers",value:function(e,t,a,n){return(0,p.default)({url:"/api-user/enterprises/"+e+"/roles/"+t+"/users?username=&belongs=true&page="+a+"&size="+n,method:"GET"}).then(function(e){return e},function(e){}).catch(function(e){})}},{key:"fetchCompanyUsers",value:function(e){var t=this;return(0,p.default)({url:"/api-user/enterprises/"+e+"/users",method:"GET"}).then(function(e){return t.setState({users:e.data.map(function(e){return{name:e.username,id:e.id}})}),e},function(e){}).catch(function(e){})}},{key:"fetchMessageTypes",value:function(){var e=this;(0,p.default)({url:"/api-user/messageTypes",method:"GET"}).then(function(t){var a=[];return new Set(t.data._embedded.messageTypes.map(function(e){return e.type})).forEach(function(e){return a.push(e)}),e.setState({types:a}),t},function(e){}).catch(function(e){})}},{key:"fetchMessageSelfDefinedTypes",value:function(){var e=this;(0,p.default)({url:"/api-user/messageSelfDefinedTypes",method:"GET"}).then(function(t){return e.setState({selfTypes:t.data.map(function(e){return{name:e.name,code:e.code}})}),t},function(e){}).catch(function(e){})}},{key:"onSelect",value:function(e,t){}},{key:"onCheck",value:function(e,t){var a=new Set(e);this.setState({notifiers:Array.from(a)})}},{key:"handleChange",value:function(e){this.setState({notifiers:e})}},{key:"handleTypeChange",value:function(e){this.setState({selectType:e})}},{key:"handleSelfTypeChange",value:function(e){this.setState({selectSelfType:e})}},{key:"onInputChange",value:function(e){var t,a,n;this.setState((t={},a=e.target.name,n=e.target.value,a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t))}},{key:"onSubmitClick",value:function(e,t){var a=this,s=this.state.notifiers.filter(function(e){return-1===Object.keys(a.state.userMap).indexOf(e)});(0,p.default)({url:"/api-user/notificationObjects",method:"POST",data:{actorId:this.props.userId,notifierIds:s.join(","),title:this.state.title,description:this.state.description,type:this.state.selectType,selfType:this.state.selectSelfType,action:"发布"}}).then(function(t){n.default.success(e),a.setState({successModalVisible:!0,notificationObj:t.data.id,createdOn:t.data.createdOn})}).catch(function(e){n.default.error(t)})}},{key:"onWithdrawClick",value:function(e,t){var a=this;(0,p.default)({url:"/api-user/notificaitonObjects/"+this.state.notificationObj,method:"DELETE"}).then(function(t){n.default.success(e),a.setState({successModalVisible:!1})}).catch(function(e){n.default.error(t)})}},{key:"language",value:function(e){return this.props.intl.formatMessage({id:e})}}]),t}(),T=t.mapStateToProps=function(e){return{enterpriseId:e.userData.enterprises[e.userData.currentEnterprise].id,username:e.authentication.username,userId:e.authentication.userId}},S=t.mapDispatchToProps=function(e){return{dispatch:e}};t.default=(0,m.connect)(T,S)((0,_.injectIntl)(k))}});