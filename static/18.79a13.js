webpackJsonp([18],{"/mHU":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Dd8w"),o=t.n(i),a=t("bOdI"),s=t.n(a),l=t("+6Bu"),r=t.n(l),d=t("Zrlr"),c=t.n(d),u=t("wxAW"),p=t.n(u),A=t("zwoO"),h=t.n(A),f=t("Pf15"),m=t.n(f),g=t("U7vG"),w=t.n(g),b=t("KSGD"),C=t.n(b),x=t("1hE6");function _(){}var y=function(n){function e(n){c()(this,e);var t=h()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));k.call(t);var i=!1;return i="checked"in n?!!n.checked:!!n.defaultChecked,t.state={checked:i},t}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){var n=this.props,e=n.autoFocus,t=n.disabled;e&&!t&&this.focus()}},{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:!!n.checked})}},{key:"setChecked",value:function(n){this.props.disabled||("checked"in this.props||this.setState({checked:n}),this.props.onChange(n))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var n,e=this.props,t=e.className,i=e.prefixCls,a=e.disabled,l=e.loadingIcon,d=e.checkedChildren,c=e.tabIndex,u=e.unCheckedChildren,p=r()(e,["className","prefixCls","disabled","loadingIcon","checkedChildren","tabIndex","unCheckedChildren"]),A=this.state.checked,h=a?-1:c||0,f=x((n={},s()(n,t,!!t),s()(n,i,!0),s()(n,i+"-checked",A),s()(n,i+"-disabled",a),n));return w.a.createElement("span",o()({},p,{className:f,tabIndex:h,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.toggle,onMouseUp:this.handleMouseUp}),l,w.a.createElement("span",{className:i+"-inner"},A?d:u))}}]),e}(g.Component),k=function(){var n=this;this.toggle=function(){var e=n.props.onClick,t=!n.state.checked;n.setChecked(t),e(t)},this.handleKeyDown=function(e){37===e.keyCode?n.setChecked(!1):39===e.keyCode?n.setChecked(!0):32!==e.keyCode&&13!==e.keyCode||n.toggle()},this.handleMouseUp=function(e){n.node&&n.node.blur(),n.props.onMouseUp&&n.props.onMouseUp(e)},this.saveNode=function(e){n.node=e}};y.propTypes={className:C.a.string,prefixCls:C.a.string,disabled:C.a.bool,checkedChildren:C.a.any,unCheckedChildren:C.a.any,onChange:C.a.func,onMouseUp:C.a.func,onClick:C.a.func,tabIndex:C.a.number,checked:C.a.bool,defaultChecked:C.a.bool,autoFocus:C.a.bool,loadingIcon:C.a.node},y.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:_,onClick:_},e.default=y},"1hE6":function(n,e,t){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var a=typeof i;if("string"===a||"number"===a)n.push(i);else if(Array.isArray(i)&&i.length){var s=o.apply(null,i);s&&n.push(s)}else if("object"===a)for(var l in i)t.call(i,l)&&i[l]&&n.push(l)}}return n.join(" ")}void 0!==n&&n.exports?(o.default=o,n.exports=o):(i=function(){return o}.apply(e,[]))===undefined||(n.exports=i)}()},"4f3B":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),o=r(t("U7vG")),a=t("4n+p"),s=r(t("xRFt")),l=t("+S37");function r(n){return n&&n.__esModule?n:{default:n}}var d=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,o.default.Component),i(e,[{key:"render",value:function(){return o.default.createElement(s.default,this.props)}}]),e}();e.default=(0,a.connect)(function(n){return{loading:n.equipmentBackupConfig.loading,modalVisible:n.equipmentBackupConfig.modalVisible,modalTitle:n.equipmentBackupConfig.modalTitle,modalContent:n.equipmentBackupConfig.modalContent,modalOk:n.equipmentBackupConfig.modalOk,modalCancel:n.equipmentBackupConfig.modalCancel,onOk:n.equipmentBackupConfig.onOk,onCancel:n.equipmentBackupConfig.onCancel,equipmentId:n.equipmentBackupConfig.equipmentId,equipmentNode:n.equipmentBackupConfig.equipmentNode}},function(n,e){return{dispatch:n,update:function(e){n((0,l.updateEquipmentBackupConfigData)(e))},onSubmit:function(e){n((0,l.submitEquipmentConfig)(e))},onReturn:function(){e.history.push("/console/equipment-backup-list")}}})(d)},"DEW/":function(n,e,t){var i=t("Twfi");"string"==typeof i&&(i=[[n.i,i,""]]);t("fjbf")(i,{});i.locals&&(n.exports=i.locals)},DPXQ:function(n,e,t){"use strict";t("QhmJ"),t("DEW/")},DSNT:function(n,e,t){n.exports=t("/mHU")},RjUz:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=g(t("Dd8w")),o=g(t("bOdI")),a=g(t("Zrlr")),s=g(t("wxAW")),l=g(t("zwoO")),r=g(t("Pf15")),d=m(t("U7vG")),c=m(t("KSGD")),u=g(t("DSNT")),p=g(t("kTQ8")),A=g(t("JkBm")),h=g(t("nKQF")),f=g(t("vgHw"));function m(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function g(n){return n&&n.__esModule?n:{default:n}}var w=function(n){function e(){(0,a.default)(this,e);var n=(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.saveSwitch=function(e){n.rcSwitch=e},n}return(0,r.default)(e,n),(0,s.default)(e,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){var n,e=this.props,t=e.prefixCls,a=e.size,s=e.loading,l=e.className,r=l===undefined?"":l,c=(0,p.default)(r,(n={},(0,o.default)(n,t+"-small","small"===a),(0,o.default)(n,t+"-loading",s),n)),m=s?d.createElement(f.default,{type:"loading",className:t+"-loading-icon"}):null;return d.createElement(h.default,{insertExtraNode:!0},d.createElement(u.default,(0,i.default)({},(0,A.default)(this.props,["loading"]),{className:c,ref:this.saveSwitch,loadingIcon:m})))}}]),e}(d.Component);e.default=w,w.defaultProps={prefixCls:"ant-switch"},w.propTypes={prefixCls:c.string,size:c.oneOf(["small","default","large"]),className:c.string},n.exports=e.default},Twfi:function(n,e,t){(e=n.exports=t("FZ+f")(!0)).push([n.i,'.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY{font-family:Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-variant:tabular-nums;line-height:1.5;color:rgba(0,0,0,.65);margin:0;padding:0;list-style:none;position:relative;display:inline-block;box-sizing:border-box;height:22px;min-width:44px;line-height:20px;vertical-align:middle;border-radius:100px;border:1px solid transparent;background-color:rgba(0,0,0,.25);cursor:pointer;transition:all .36s;user-select:none}.node_modules-antd-lib-switch-style-index_ant-switch-inner--2i7A5lU0{color:#fff;font-size:12px;margin-left:24px;margin-right:6px;display:block}.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:after,.node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{position:absolute;width:18px;height:18px;left:1px;top:1px;border-radius:18px;background-color:#fff;content:" ";cursor:pointer;transition:all .36s cubic-bezier(.78,.14,.15,.86)}.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:after{box-shadow:0 2px 4px 0 rgba(0,35,11,.2)}.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:active:after,.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:active:before{width:24px}.node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{background:transparent;z-index:1;display:none;font-size:12px}.node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN svg{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto}.node_modules-antd-lib-switch-style-index_ant-switch-loading--agXWnVH0 .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{display:inline-block;color:rgba(0,0,0,.65)}.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e.node_modules-antd-lib-switch-style-index_ant-switch-loading--agXWnVH0 .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{color:#1890ff}.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:focus{box-shadow:0 0 0 2px rgba(24,144,255,.2);outline:0}.node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY:focus:hover{box-shadow:none}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT{height:16px;min-width:28px;line-height:14px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT .node_modules-antd-lib-switch-style-index_ant-switch-inner--2i7A5lU0{margin-left:18px;margin-right:3px;font-size:12px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT:after{width:12px;height:12px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT:active:after,.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT:active:before{width:16px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{width:12px;height:12px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e .node_modules-antd-lib-switch-style-index_ant-switch-inner--2i7A5lU0{margin-left:3px;margin-right:18px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{left:100%;margin-left:-13px}.node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT.node_modules-antd-lib-switch-style-index_ant-switch-loading--agXWnVH0 .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{transform:scale(.66667);font-weight:700}.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e{background-color:#1890ff}.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e .node_modules-antd-lib-switch-style-index_ant-switch-inner--2i7A5lU0{margin-left:6px;margin-right:24px}.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e:after{left:100%;transform:translateX(-100%);margin-left:-1px}.node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e .node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN{left:100%;margin-left:-19px}.node_modules-antd-lib-switch-style-index_ant-switch-disabled--2cZm8SDN,.node_modules-antd-lib-switch-style-index_ant-switch-loading--agXWnVH0{pointer-events:none;opacity:.4}@keyframes node_modules-antd-lib-switch-style-index_AntSwitchSmallLoadingCircle--32NoHmQW{0%{transform-origin:50% 50%;transform:rotate(0deg) scale(.66667)}to{transform-origin:50% 50%;transform:rotate(1turn) scale(.66667)}}',"",{version:3,sources:["D:/siacloud2/sia-cloud-foundation-v2/frontend/node_modules/antd/lib/switch/style/D:/siacloud2/sia-cloud-foundation-v2/frontend/node_modules/antd/lib/switch/style/index.less","D:/siacloud2/sia-cloud-foundation-v2/frontend/node_modules/antd/lib/switch/style/D:/siacloud2/sia-cloud-foundation-v2/frontend/node_modules/antd/lib/style/mixins/reset.less","D:/siacloud2/sia-cloud-foundation-v2/frontend/node_modules/antd/lib/switch/style/index.less"],names:[],mappings:"AAMA,+DCHE,2JAAA,AACA,eAAA,AACA,0BAAA,AACA,gBAAA,AACA,sBAAA,AAEA,SAAA,AACA,UAAA,AACA,gBAAA,ADHA,kBAAA,AACA,qBAAA,AACA,sBAAA,AACA,YAAA,AACA,eAAA,AACA,iBAAA,AACA,sBAAA,AACA,oBAAA,AACA,6BAAA,AACA,iCAAA,AACA,eAAA,AACA,oBAAA,AACA,gBAAA,CEMD,AFJC,qEACE,WAAA,AACA,eAAA,AACA,iBAAA,AACA,iBAAA,AACA,aAAA,CEMH,AFHC,iJAEE,kBAAA,AACA,WAAA,AACA,YAAA,AACA,SAAA,AACA,QAAA,AACA,mBAAA,AACA,sBAAA,AACA,YAAA,AACA,eAAA,AACA,iDAAA,CEKH,AFFC,qEACE,uCAAA,CEIH,AFDC,yJAEE,UAAA,CEGH,AFAC,4EAGE,uBAAA,AACA,UAAA,AACA,aAAA,AACA,cAAA,CEAH,AFNC,gFAQI,kBAAA,AACA,OAAA,AACA,MAAA,AACA,QAAA,AACA,SAAA,AACA,WAAA,CECL,AFGC,mJACE,qBAAA,AACA,qBAAA,CEDH,AFIC,yNACE,aAAA,CEFH,AFKC,qEACE,yCAAA,AACA,SAAA,CEHH,AFMC,2EACE,eAAA,CEJH,AFOC,qEACE,YAAA,AACA,eAAA,AACA,gBAAA,CELH,AFEC,0IAMI,iBAAA,AACA,iBAAA,AACA,cAAA,CELL,AFQG,2EACE,WAAA,AACA,WAAA,CENL,AFSG,qKAEE,UAAA,CEPL,AFWC,iJACE,WAAA,AACA,WAAA,CETH,AFYC,gNAEI,gBAAA,AACA,iBAAA,CEXL,AFeC,uNACE,UAAA,AACA,iBAAA,CEbH,AFgBC,uNAEE,wBAAA,AACA,eAAA,CEfH,AFkBC,uEACE,wBAAA,CEhBH,AFeC,4IAII,gBAAA,AACA,iBAAA,CEhBL,AFmBG,6EACE,UAAA,AACA,4BAAA,AACA,gBAAA,CEjBL,AFqBC,mJACE,UAAA,AACA,iBAAA,CEnBH,AFsBC,+IAEE,oBAAA,AACA,UAAA,CEpBH,AFwBD,0FACE,GACE,yBAAA,AACA,oCAAA,CEtBD,AFwBD,GACE,yBAAA,AACA,qCAAA,CEtBD,CACF",file:"index.less",sourcesContent:['@import "../../style/themes/default";\n@import "../../style/mixins/index";\n\n@switch-prefix-cls: ~"@{ant-prefix}-switch";\n@switch-duration: .36s;\n\n.@{switch-prefix-cls} {\n  .reset-component;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: @switch-height;\n  min-width: 44px;\n  line-height: @switch-height - 2px;\n  vertical-align: middle;\n  border-radius: 100px;\n  border: 1px solid transparent;\n  background-color: @disabled-color;\n  cursor: pointer;\n  transition: all @switch-duration;\n  user-select: none;\n\n  &-inner {\n    color: #fff;\n    font-size: @font-size-sm;\n    margin-left: 24px;\n    margin-right: 6px;\n    display: block;\n  }\n\n  &-loading-icon,\n  &:after {\n    position: absolute;\n    width: @switch-height - 4px;\n    height: @switch-height - 4px;\n    left: 1px;\n    top: 1px;\n    border-radius: 18px;\n    background-color: @component-background;\n    content: " ";\n    cursor: pointer;\n    transition: all @switch-duration @ease-in-out-circ;\n  }\n\n  &:after {\n    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, .2);\n  }\n\n  &:active:before,\n  &:active:after {\n    width: 24px;\n  }\n\n  &-loading-icon {\n    // loading default use animation\n    // animation: loadingCircle 1s infinite linear;\n    background: transparent;\n    z-index: 1;\n    display: none;\n    font-size: 12px;\n    svg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n    }\n  }\n\n  &-loading &-loading-icon {\n    display: inline-block;\n    color: @text-color;\n  }\n\n  &-checked&-loading &-loading-icon {\n    color: @switch-color;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px fade(@switch-color, 20%);\n    outline: 0;\n  }\n\n  &:focus:hover {\n    box-shadow: none;\n  }\n\n  &-small {\n    height: @switch-sm-height;\n    min-width: 28px;\n    line-height: @switch-sm-height - 2px;\n\n    .@{switch-prefix-cls}-inner {\n      margin-left: 18px;\n      margin-right: 3px;\n      font-size: @font-size-sm;\n    }\n\n    &:after {\n      width: @switch-sm-height - 4px;\n      height: @switch-sm-height - 4px;\n    }\n\n    &:active:before,\n    &:active:after {\n      width: 16px;\n    }\n  }\n\n  &-small &-loading-icon {\n    width: @switch-sm-height - 4px;\n    height: @switch-sm-height - 4px;\n  }\n\n  &-small&-checked {\n    .@{switch-prefix-cls}-inner {\n      margin-left: 3px;\n      margin-right: 18px;\n    }\n  }\n\n  &-small&-checked &-loading-icon {\n    left: 100%;\n    margin-left: @switch-sm-checked-margin-left;\n  }\n\n  &-small&-loading &-loading-icon {\n    // animation: AntSwitchSmallLoadingCircle 1s infinite linear;\n    transform: scale(0.66667);\n    font-weight: bold;\n  }\n\n  &-checked {\n    background-color: @switch-color;\n\n    .@{switch-prefix-cls}-inner {\n      margin-left: 6px;\n      margin-right: 24px;\n    }\n\n    &:after {\n      left: 100%;\n      transform: translateX(-100%);\n      margin-left: -1px;\n    }\n  }\n\n  &-checked &-loading-icon {\n    left: 100%;\n    margin-left: -19px;\n  }\n\n  &-loading,\n  &-disabled {\n    pointer-events: none;\n    opacity: @switch-disabled-opacity;\n  }\n}\n\n@keyframes AntSwitchSmallLoadingCircle {\n  0% {\n    transform-origin: 50% 50%;\n    transform: rotate(0deg) scale(0.66667);\n  }\n  100% {\n    transform-origin: 50% 50%;\n    transform: rotate(360deg) scale(0.66667);\n  }\n}\n',"@import '../themes/default';\n\n.reset-component() {\n  font-family: @font-family;\n  font-size: @font-size-base;\n  font-variant: tabular-nums;\n  line-height: @line-height-base;\n  color: @text-color;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n",'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-switch {\n  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: 22px;\n  min-width: 44px;\n  line-height: 20px;\n  vertical-align: middle;\n  border-radius: 100px;\n  border: 1px solid transparent;\n  background-color: rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  transition: all 0.36s;\n  user-select: none;\n}\n.ant-switch-inner {\n  color: #fff;\n  font-size: 12px;\n  margin-left: 24px;\n  margin-right: 6px;\n  display: block;\n}\n.ant-switch-loading-icon,\n.ant-switch:after {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 1px;\n  top: 1px;\n  border-radius: 18px;\n  background-color: #ffffff;\n  content: " ";\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-switch:after {\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n}\n.ant-switch:active:before,\n.ant-switch:active:after {\n  width: 24px;\n}\n.ant-switch-loading-icon {\n  background: transparent;\n  z-index: 1;\n  display: none;\n  font-size: 12px;\n}\n.ant-switch-loading-icon svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.ant-switch-loading .ant-switch-loading-icon {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {\n  color: #1890ff;\n}\n.ant-switch:focus {\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n  outline: 0;\n}\n.ant-switch:focus:hover {\n  box-shadow: none;\n}\n.ant-switch-small {\n  height: 16px;\n  min-width: 28px;\n  line-height: 14px;\n}\n.ant-switch-small .ant-switch-inner {\n  margin-left: 18px;\n  margin-right: 3px;\n  font-size: 12px;\n}\n.ant-switch-small:after {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small:active:before,\n.ant-switch-small:active:after {\n  width: 16px;\n}\n.ant-switch-small .ant-switch-loading-icon {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-inner {\n  margin-left: 3px;\n  margin-right: 18px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -13px;\n}\n.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {\n  transform: scale(0.66667);\n  font-weight: bold;\n}\n.ant-switch-checked {\n  background-color: #1890ff;\n}\n.ant-switch-checked .ant-switch-inner {\n  margin-left: 6px;\n  margin-right: 24px;\n}\n.ant-switch-checked:after {\n  left: 100%;\n  transform: translateX(-100%);\n  margin-left: -1px;\n}\n.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -19px;\n}\n.ant-switch-loading,\n.ant-switch-disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n@keyframes AntSwitchSmallLoadingCircle {\n  0% {\n    transform-origin: 50% 50%;\n    transform: rotate(0deg) scale(0.66667);\n  }\n  100% {\n    transform-origin: 50% 50%;\n    transform: rotate(360deg) scale(0.66667);\n  }\n}\n'],sourceRoot:""}]),e.locals={"ant-switch":"node_modules-antd-lib-switch-style-index_ant-switch--3NTpInsY","ant-switch-inner":"node_modules-antd-lib-switch-style-index_ant-switch-inner--2i7A5lU0","ant-switch-loading-icon":"node_modules-antd-lib-switch-style-index_ant-switch-loading-icon--3-BCSlnN","ant-switch-loading":"node_modules-antd-lib-switch-style-index_ant-switch-loading--agXWnVH0","ant-switch-checked":"node_modules-antd-lib-switch-style-index_ant-switch-checked--3rofFb1e","ant-switch-small":"node_modules-antd-lib-switch-style-index_ant-switch-small--2rlZMsdT","ant-switch-disabled":"node_modules-antd-lib-switch-style-index_ant-switch-disabled--2cZm8SDN",AntSwitchSmallLoadingCircle:"node_modules-antd-lib-switch-style-index_AntSwitchSmallLoadingCircle--32NoHmQW"}},xRFt:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=h(t("trpn")),o=h(t("yF52")),a=h(t("0b0c")),s=h(t("G3dI")),l=h(t("vaID")),r=h(t("RjUz")),d=h(t("IidI")),c=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();t("Op6J"),t("tNTX"),t("kxBb"),t("/Hhv"),t("nclB"),t("DPXQ"),t("1uA9");var u=h(t("U7vG")),p=t("Pq8k"),A=t("+S37");function h(n){return n&&n.__esModule?n:{default:n}}t("uRMb");var f=d.default.Group,m=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,u.default.Component),c(e,[{key:"componentWillMount",value:function(){var n=this.props.location.query.equipmentId;this.props.dispatch((0,A.initEquipmentBackupConfig)(n))}},{key:"handleChange",value:function(n,e){var t=[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(this.props.equipmentNode)),i=t[e];i&&(i.ifBackup=n,this.props.update({name:"equipmentNode",value:t}))}},{key:"render",value:function(){var n=this,e=[{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_name_title"}),dataIndex:"name",width:"18%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_alias_title"}),dataIndex:"alias",width:"12%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_description_title"}),dataIndex:"description",width:"20%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_dataType_title"}),dataIndex:"dataType",width:"10%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_dataUnit_title"}),dataIndex:"dataUnit",width:"10%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_sampleMode_title"}),dataIndex:"sampleMode",width:"10%"},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_period_title"}),dataIndex:"period",width:"10%",render:function(n){return n+"ms"}},{title:this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_ifBackup_title"}),dataIndex:"ifBackup",width:"10%",render:function(e,t,i){return u.default.createElement(r.default,{checked:e,checkedChildren:n.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_on_label"}),unCheckedChildren:n.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_off_label"}),onChange:function(e){return n.handleChange(e,i)}})}}];return u.default.createElement(i.default,{spinning:this.props.loading,size:"large"},u.default.createElement(l.default,{visible:this.props.modalVisible,title:this.props.modalTitle&&this.props.intl.formatMessage({id:this.props.modalTitle}),okText:this.props.modalOk&&this.props.intl.formatMessage({id:this.props.modalOk}),cancelText:this.props.modalCancel&&this.props.intl.formatMessage({id:this.props.modalCancel}),onOk:this.props.onOk,onCancel:this.props.onCancel},u.default.createElement("p",null,this.props.modalContent&&this.props.intl.formatMessage({id:this.props.modalContent}))),u.default.createElement(a.default,{type:"flex",justify:"center"},u.default.createElement(s.default,{span:24},u.default.createElement(a.default,null,u.default.createElement(s.default,{span:24},u.default.createElement("h3",null,this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_equipmentGuid_label"},{equipmentId:this.props.equipmentId})))),u.default.createElement(a.default,null,u.default.createElement(s.default,{span:24},u.default.createElement(f,null,u.default.createElement(d.default,{type:"primary",onClick:function(){return n.props.onReturn()}},this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_return_label"})),u.default.createElement(d.default,{type:"primary",onClick:function(){return n.props.onSubmit({collectNodeConfigs:n.props.equipmentNode})}},this.props.intl.formatMessage({id:"scenes_Equipment_EquipmentBackup_EquipmentBackupConfig_submit_label"}))))),u.default.createElement(a.default,{style:{paddingTop:30}},u.default.createElement(s.default,{sm:24,md:24,lg:24},u.default.createElement(o.default,{rowKey:"id",columns:e,dataSource:this.props.equipmentNode,pagination:!1,size:"middle",bordered:!0}))))))}}]),e}();e.default=(0,p.injectIntl)(m)}});