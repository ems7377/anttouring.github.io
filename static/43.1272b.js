webpackJsonp([43],{"/WOX":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=A(a("trpn")),n=A(a("IidI")),l=A(a("0b0c")),i=A(a("G3dI")),r=A(a("rpsp")),s=A(a("vgHw")),p=A(a("1cZb")),d=A(a("uuhB")),u=A(a("37+n")),c=A(a("vaID")),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();a("Op6J"),a("1uA9"),a("kxBb"),a("/Hhv"),a("Nmhe"),a("ZJow"),a("YaoS"),a("TZP0"),a("8QNH"),a("nclB");var m=A(a("U7vG")),_=A(a("mtWM")),h=a("Pq8k"),g=a("qVSZ"),b=A(a("SOi3"));function A(e){return e&&e.__esModule?e:{default:e}}var y=c.default.confirm,M=u.default.Item,E=d.default.TextArea,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onSubmitBeforeCheck=function(e){a.props.form.validateFields(function(t,o){t||(o.status=e,o.logo=a.props.logoImage[0].response,o.createUserId=a.props.createUserId,o.createUserName=a.props.createUserName,o.createCompanyId=a.props.createCompanyId,o.createCompanyName=a.props.createCompanyName,o.application=a.props.mainApplication,a.props.onSubmit(o))})},a.checkApplicationName=function(e,t,o){a.props.form;t?(0,_.default)({url:"/api-application/checkApplicationName/"+t,method:"GET"}).then(function(e){e.data?o(a.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_sameName_content"})):o()}):o()},a.checkApplicationEnName=function(e,t,o){a.props.form;t?(0,_.default)({url:"/api-application/checkApplicationEnName/"+t,method:"GET"}).then(function(e){e.data?o(a.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_sameEnName_content"})):o()}):o()},a.checkApplicationCode=function(e,t,o){a.props.form;t?(0,_.default)({url:"/api-application/checkApplicationCode/"+t,method:"GET"}).then(function(e){e.data?o(a.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_sameCode_content"})):o()}):o()},a.handleCancelLogo=function(){a.props.update({name:"visibleLogo",value:!1})},a.handlePreviewLogo=function(e){a.props.update({name:"visibleLogo",value:!0})},a.handleRemoveLogo=function(){a.props.update({name:"logoImage",value:[]}),a.props.form.setFieldsValue({logo:""})},a.handleChangeLogo=function(e){var t=e.file,o=e.fileList;"error"===t.status?p.default.error(t.response.message,5):(a.props.update({name:"logoImage",value:o}),a.props.update({name:"previewLogo",value:t.url||t.thumbUrl}))},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,m.default.Component),f(t,[{key:"componentWillMount",value:function(){this.props.dispatch((0,g.initialModulePage)({application:this.props.location.query.application}))}},{key:"componentDidMount",value:function(){}}]),f(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return m.default.createElement(o.default,{spinning:this.props.loading,size:"large"},m.default.createElement(c.default,{visible:this.props.modalVisible,title:this.props.modalTitle&&this.props.intl.formatMessage({id:this.props.modalTitle}),okText:this.props.modalOk&&this.props.intl.formatMessage({id:this.props.modalOk}),cancelText:this.props.modalCancel&&this.props.intl.formatMessage({id:this.props.modalCancel}),onOk:this.props.onOk,onCancel:this.props.onCancel},m.default.createElement("p",null,this.props.modalContent&&this.props.intl.formatMessage({id:this.props.modalContent}))),m.default.createElement(l.default,{type:"flex",justify:"center"},m.default.createElement(i.default,{span:24},m.default.createElement(u.default,{layout:"horizontal"},m.default.createElement(l.default,null,m.default.createElement(i.default,{span:12},m.default.createElement(M,{label:m.default.createElement("span",null,this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationLogo_label"}),m.default.createElement(b.default,{title:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationLogo_helpTip"})}))},t("logo",{rules:[{required:!0,message:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_uploadLogo_message"})}]})(m.default.createElement(r.default,{accept:"image/*",action:"/api-imagefiles/",listType:"picture-card",data:function(e){return{File:e}},fileList:this.props.logoImage,onRemove:this.handleRemoveLogo,onPreview:this.handlePreviewLogo,onChange:this.handleChangeLogo},this.props.logoImage.length<1&&m.default.createElement("div",null,m.default.createElement(s.default,{type:"plus"}),m.default.createElement("div",{className:"ant-upload-text"},this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_uploadLogo_label"}))))),m.default.createElement(c.default,{visible:this.props.visibleLogo,footer:null,onCancel:this.handleCancelLogo},m.default.createElement("img",{alt:"logo",style:{width:"100%"},src:this.props.previewLogo})))),m.default.createElement(i.default,{span:12},m.default.createElement(M,{label:m.default.createElement("span",null,this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationCode_label"}),m.default.createElement(b.default,{title:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationCode_helpTip"})}))},t("code",{rules:[{required:!0,message:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_promptCode_message"})},{validator:this.checkApplicationCode}]})(m.default.createElement(d.default,{name:"code",placeholder:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationCode_placeholder"})}))))),m.default.createElement(l.default,{gutter:16,type:"flex",justify:"space-between"},m.default.createElement(i.default,{span:12},m.default.createElement(M,{label:m.default.createElement("span",null,this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationName_label"}),m.default.createElement(b.default,{title:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationName_helpTip"})}))},t("name",{rules:[{required:!0,message:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_promptName_message"})},{validator:this.checkApplicationName}]})(m.default.createElement(d.default,{name:"name",placeholder:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationName_placeholder"})})))),m.default.createElement(i.default,{span:12},m.default.createElement(M,{label:m.default.createElement("span",null,this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationEnName_label"}),m.default.createElement(b.default,{title:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationEnName_helpTip"})}))},t("enName",{rules:[{required:!0,message:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_promptEnName_message"})},{validator:this.checkApplicationEnName}]})(m.default.createElement(d.default,{name:"enName",placeholder:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_applicationEnName_placeholder"})}))))),m.default.createElement(l.default,null,m.default.createElement(i.default,{span:24},m.default.createElement(M,{label:m.default.createElement("span",null,this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_description_label"}),m.default.createElement(b.default,{title:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_description_helpTip"})}))},t("description",{rules:[{required:!0,message:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_promptDescription_message"})}]})(m.default.createElement(E,{name:"description",placeholder:this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_description_placeholder"}),autosize:{minRows:4,maxRows:8}}))))),m.default.createElement(l.default,{style:{paddingTop:16}},m.default.createElement(n.default,{onClick:function(){return e.props.onReturn()}},this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_return_label"})),m.default.createElement(n.default,{type:"primary",onClick:function(){y({title:e.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_submit_content"}),okText:e.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_submit_label"}),cancelText:e.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_modal_save_label"}),onOk:function(){e.onSubmitBeforeCheck("1")},onCancel:function(){e.onSubmitBeforeCheck("0")}})}},this.props.intl.formatMessage({id:"scenes_Application_ModuleAdd_submit_label"})))))))}}]),t}();v=u.default.create()(v),t.default=(0,h.injectIntl)(v)},"2BYI":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),n=s(a("U7vG")),l=a("4n+p"),i=s(a("/WOX")),r=a("qVSZ");function s(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),o(t,[{key:"render",value:function(){return n.default.createElement(i.default,this.props)}}]),t}();t.default=(0,l.connect)(function(e){return{loading:e.moduleAdd.loading,isAuthenticated:e.authentication.isAuthenticated,createUserId:e.authentication.isAuthenticated?e.authentication.userId:"",createUserName:e.authentication.isAuthenticated?e.authentication.username:"",createCompanyId:e.userData.enterprises.length>0?e.userData.enterprises[e.userData.currentEnterprise].id:"",createCompanyName:e.userData.enterprises.length>0?e.userData.enterprises[e.userData.currentEnterprise].name:"",modalVisible:e.moduleAdd.modalVisible,modalTitle:e.moduleAdd.modalTitle,modalContent:e.moduleAdd.modalContent,modalOk:e.moduleAdd.modalOk,modalCancel:e.moduleAdd.modalCancel,onOk:e.moduleAdd.onOk,onCancel:e.moduleAdd.onCancel,visibleLogo:e.moduleAdd.visibleLogo,previewLogo:e.moduleAdd.previewLogo,logoImage:e.moduleAdd.logoImage,logo:e.moduleAdd.logo,mainApplication:e.moduleAdd.mainApplication}},function(e,t){return{dispatch:e,update:function(t){e((0,r.updateModuleData)(t))},onSubmit:function(t){e((0,r.submitModule)(t))},onReturn:function(){t.history.goBack()}}})(p)},SOi3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(a("ExGt")),n=r(a("vgHw")),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();a("2r77"),a("ZJow");var i=r(a("U7vG"));function r(e){return e&&e.__esModule?e:{default:e}}a("uRMb");var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),l(t,[{key:"render",value:function(){return i.default.createElement(o.default,this.props," ",i.default.createElement(n.default,{type:"question-circle-o",style:{fontSize:16,color:"#0088cc"}})," ")}}]),t}();t.default=s}});