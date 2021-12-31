(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1a05":function(e,t,r){"use strict";r("c80e")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("h1",{staticClass:"h1-title"},[e._v("Заполните форму:")]),r("form",{staticClass:"form__registration",attrs:{name:"formRegistration",action:"#",method:"post",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[r("FormInput",{attrs:{isValid:e.v$.form.firstName.$error?"invalid":"",error:e.firstNameMessage,label:"Имя*:",inputType:"text"},on:{getInput:e.addFirstName}}),r("FormInput",{attrs:{isValid:e.v$.form.lastName.$error?"invalid":"",error:e.lastNameMessage,label:"Фамилия*:",inputType:"text"},on:{getInput:e.addLastName}}),r("FormInput",{attrs:{label:"Отчество:",inputType:"text"},on:{getInput:e.addSecondName}}),r("FormDate",{attrs:{title:"Дата рождения"},on:{getDate:e.addBirthDay}}),r("FormInputPhone",{attrs:{isValid:e.v$.form.phone.$error?"invalid":"",error:e.phoneMessage,label:"Номер телефона:"},on:{getPhone:e.addPhone}}),r("FormGender",{attrs:{title:"Пол"},on:{getRadio:e.addGender}}),r("FormMultiSelect",{attrs:{title:"Группа клиентов",isValid:e.v$.form.clientGroups.$error?"invalid":"",options:this.clientGroup},on:{getFavorites:e.addClientGroup}}),r("FormSelect",{attrs:{title:"Лечащий врач",item_name:"doctor",options:this.doctors},on:{getSelected:e.addDoctor}}),r("FormCheckbox",{attrs:{title:"Согласие на отправку СМС",label:"Не отправлять СМС"},on:{getCheckbox:e.addNoSMS}}),r("h2",{staticClass:"h2-title"},[e._v("Адрес:")]),r("FormInput",{attrs:{label:"Индекс:"},on:{getInput:e.addIndex}}),r("FormInput",{attrs:{label:"Страна:",inputType:"text"},on:{getInput:e.addCountry}}),r("FormInput",{attrs:{label:"Область:",inputType:"text"},on:{getInput:e.addRegion}}),r("FormInput",{attrs:{isValid:e.v$.form.adds.city.$error?"invalid":"",error:e.cityMessage,inputType:"text",label:"Город*:"},on:{getInput:e.addCity}}),r("FormInput",{attrs:{label:"Улица:",inputType:"text"},on:{getInput:e.addStreet}}),r("FormInput",{attrs:{label:"Дом:"},on:{getInput:e.addHause}}),r("h2",{staticClass:"h2-title"},[e._v("Паспорт:")]),r("FormSelect",{attrs:{title:"Тип документа*",isValid:e.v$.form.passport.document.$error?"invalid":"",options:this.documents},on:{getSelected:e.addDocument}}),r("FormInput",{attrs:{label:"Серия:",inputType:"number"},on:{getInput:e.addSeries}}),r("FormInput",{attrs:{label:"Номер:",inputType:"number"},on:{getInput:e.addNumber}}),r("FormInput",{attrs:{label:"Кем выдан:"},on:{getInput:e.addIssuedBy}}),r("FormDate",{attrs:{title:"Дата выдачи документа"},on:{getDate:e.addIssuedDate}}),r("div",{staticClass:"register__item register__item_button"},[e.v$.form.$error&&e.v$.form.$invalid?r("p",{staticClass:"register__validate-message register__validate-message_invalid"},[e._v("Проверьте правильность заполнения формы")]):e.v$.form.$error||e.v$.form.$invalid||!e.isFormValid?r("p",{staticClass:"register__validate-message register__validate-message_none"},[e._v("-")]):r("p",{staticClass:"register__validate-message register__validate-message_valid"},[e._v("Пользователь успешно создан")]),r("button",{staticClass:"register__submit",attrs:{type:"submit"}},[e._v("Отправить")])])],1)])])},n=[],i=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item register__item_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"register__input",class:e.isValid,attrs:{type:"text",maxlength:"40",placeholder:" "},domProps:{value:e.text},on:{input:[function(t){t.target.composing||(e.text=t.target.value)},e.changeInput]}}),r("label",{staticClass:"register__placeholder",class:e.isValid},[e._v(e._s(e.label))]),r("div",{staticClass:"register__help",class:e.isValid},[e._v("*"+e._s(e.error))])])}),o=[],l={name:"FormInput",props:{label:String,isValid:String,error:String,inputType:String},data:function(){return{text:""}},methods:{changeInput:function(){"text"===this.inputType&&(this.text=this.text.replace(/[^a-zа-яё]/gi,"")),"number"===this.inputType&&(this.text=this.text.replace(/[^0-9]/g,"")),this.$emit("getInput",this.text)}}},u=l,c=r("2877"),d=Object(c["a"])(u,i,o,!1,null,null,null),m=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item register__item_date"},[r("h3",{staticClass:"register__title"},[e._v(e._s(e.title)+":")]),r("div",{staticClass:"register__date"},[r("div",{staticClass:"date__item"},[r("span",{staticClass:"register__span"},[e._v("Год:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"register__select",attrs:{name:"year"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.year=t.target.multiple?r:r[0]},e.changeDate]}},e._l(e.years,(function(t,a){return r("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)]),r("div",{staticClass:"date__item"},[r("span",{staticClass:"register__span"},[e._v("Месяц:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"register__select",attrs:{name:"month"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.month=t.target.multiple?r:r[0]},e.changeDate]}},e._l(e.months,(function(t,a){return r("option",{key:a,domProps:{value:t}},[e._v(e._s(e.getMonth(t)))])})),0)]),r("div",{staticClass:"date__item"},[r("span",{staticClass:"register__span"},[e._v("День:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"register__select",attrs:{name:"day"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.day=t.target.multiple?r:r[0]},e.changeDate]}},e._l(e.createDays(),(function(t,a){return r("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)])])])},v=[],h={name:"FormDate",props:{title:String},data:function(){return{year:1900,month:1,day:1,years:this.createYears(),months:this.createMonths()}},methods:{createYears:function(){for(var e=(new Date).getFullYear(),t=[],r=1900;r<=e;r++)t[r-1900]=r;return t},createMonths:function(){for(var e=[],t=1;t<=12;t++)e[t-1]=t;return e},createDays:function(){for(var e=[],t=this.getDays(this.year,this.month),r=1;r<=t;r++)e[r-1]=r;return this.day=this.day<=t?this.day:1,e},getDays:function(e,t){if(2===t&&e%4===0)return 29;switch(t){case 1:return 31;case 2:return 28;case 3:return 31;case 4:return 30;case 5:return 31;case 6:return 30;case 7:return 31;case 8:return 31;case 9:return 30;case 10:return 31;case 11:return 30;case 12:return 31;default:return t}},getMonth:function(e){switch(e){case 1:return"Январь";case 2:return"Февраль";case 3:return"Март";case 4:return"Апрель";case 5:return"Май";case 6:return"Июнь";case 7:return"Июль";case 8:return"Август";case 9:return"Сентябрь";case 10:return"Октябрь";case 11:return"Ноябрь";case 12:return"Декабрь"}},changeDate:function(){var e={year:this.year,month:this.month,day:this.day};this.$emit("getDate",e)}},computed:{}},f=h,_=Object(c["a"])(f,p,v,!1,null,null,null),g=_.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item register__item_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"register__input",class:e.isValid,attrs:{type:"text",name:"phone",placeholder:" "},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.createMask],focus:e.createMask,blur:e.createMask}}),r("label",{staticClass:"register__placeholder",class:e.isValid},[e._v(e._s(e.label))]),r("div",{staticClass:"register__help",class:e.isValid},[e._v("*"+e._s(e.error))])])},b=[],$=(r("00b4"),{name:"FormInputPhone",props:{label:String,isValid:String,error:String},data:function(){return{value:"",t:!1}},methods:{setCursorPosition:function(e,t){if(t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var r=t.createTextRange();r.collapse(!0),r.moveEnd("character",e),r.moveStart("character",e),r.select()}},createMask:function(e){var t=this,r="7 (___) ___ __ __",a=0,s=document.querySelector('[name="phone"]'),n=r.replace(/\D/g,""),i=this.value.replace(/\D/g,"");if(n.length>=i.length&&(i=n),this.value=r.replace(/./g,(function(e){return/[_\d]/.test(e)&&a<i.length?i.charAt(a++):a>=i.length?"":e})),"focus"===e.type){this.t=!1;var o=setInterval((function(){t.setCursorPosition(t.value.length,s),t.t&&clearInterval(o)}),10)}"blur"===e.type?(this.t=!0,1==this.value.length&&(this.value="")):this.setCursorPosition(this.value.length,s),this.$emit("getPhone",this.value)}}}),S=$,C=Object(c["a"])(S,y,b,!1,null,null,null),x=C.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item  register__item_radio"},[r("h3",{staticClass:"register__title"},[e._v(e._s(e.title)+":")]),r("div",{staticClass:"register__radio"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],staticClass:"form__radio",attrs:{type:"radio",name:"gender",value:"male"},domProps:{checked:e._q(e.gender,"male")},on:{change:[function(t){e.gender="male"},e.changeRadio]}}),r("span",{staticClass:"form__radio-button"},[e._v("Мужской")])])]),r("div",{staticClass:"register__radio"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],staticClass:"form__radio",attrs:{type:"radio",name:"gender",value:"female"},domProps:{checked:e._q(e.gender,"female")},on:{change:[function(t){e.gender="female"},e.changeRadio]}}),r("span",{staticClass:"form__radio-button"},[e._v("Женский")])])])])},M=[],F={name:"FormInput",props:{title:String},data:function(){return{gender:"male"}},methods:{changeRadio:function(){this.$emit("getRadio",this.gender)}}},N=F,D=(r("1a05"),Object(c["a"])(N,I,M,!1,null,null,null)),P=D.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item register__item_select"},[r("h3",{staticClass:"register__title"},[e._v(e._s(e.title)+":")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.favorites,expression:"favorites"}],staticClass:"register__multiselect",class:e.isValid,attrs:{multiple:"",size:e.options.length},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.favorites=t.target.multiple?r:r[0]},e.favoritesArray]}},e._l(e.options,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0),r("div",{staticClass:"register__help",class:e.isValid},[e._v("*Поле обязательно для заполнения")])])},O=[],V={name:"FormInput",props:{title:String,options:Array,isValid:String},data:function(){return{favorites:[]}},methods:{favoritesArray:function(){this.$emit("getFavorites",this.favorites)}}},w=V,j=Object(c["a"])(w,k,O,!1,null,null,null),A=j.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item  register__item_select"},[r("h3",{staticClass:"register__title"},[e._v(e._s(e.title)+":")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"register__select",class:e.isValid,on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]},e.selectedArray]}},e._l(e.options,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0),r("div",{staticClass:"register__help",class:e.isValid},[e._v("*Поле обязательно для заполнения")])])},q=[],G={name:"FormInput",props:{title:String,options:Array,isValid:String},data:function(){return{selected:String}},methods:{selectedArray:function(){this.$emit("getSelected",this.selected)}}},R=G,L=Object(c["a"])(R,T,q,!1,null,null,null),E=L.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__item register__item_checkbox"},[r("h3",{staticClass:"register__title"},[e._v(e._s(e.title)+":")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.noSMS,expression:"noSMS"}],staticClass:"form__checkbox",attrs:{type:"checkbox",name:"agreement"},domProps:{checked:Array.isArray(e.noSMS)?e._i(e.noSMS,null)>-1:e.noSMS},on:{change:[function(t){var r=e.noSMS,a=t.target,s=!!a.checked;if(Array.isArray(r)){var n=null,i=e._i(r,n);a.checked?i<0&&(e.noSMS=r.concat([n])):i>-1&&(e.noSMS=r.slice(0,i).concat(r.slice(i+1)))}else e.noSMS=s},e.changeCheckbox]}}),r("span",{staticClass:"form__checkbox-button"},[e._v(e._s(e.label))])])])},H=[],Y={name:"FormInput",props:{title:String,label:String},data:function(){return{noSMS:!1}},methods:{changeCheckbox:function(){this.$emit("getCheckbox",this.noSMS)}}},z=Y,J=Object(c["a"])(z,B,H,!1,null,null,null),Z=J.exports,K=r("25a0"),Q=r("e3e1"),U={name:"App",setup:function(){return{v$:Object(K["a"])()}},components:{FormInput:m,FormDate:g,FormInputPhone:x,FormGender:P,FormMultiSelect:A,FormSelect:E,FormCheckbox:Z},data:function(){return{errorMessage1:"Поле обязательно для заполнения",errorMessage2:"Минимальное количество символов: 2",isFormValid:!1,doctors:[{label:"Иванов",value:"Ivanov"},{label:"Захаров",value:"Zaharov"},{label:"Чернышева",value:"Chebisheva"}],documents:[{label:"Паспорт",value:"Passport"},{label:"Свидетельство о рождении",value:"Birth certificate"},{label:"Вод. удостоверение",value:"Driver license"}],clientGroup:[{label:"VIP",value:"VIP"},{label:"Проблемные",value:"problem"},{label:"ОМС",value:"CHI"}],form:{firstName:"",lastName:"",secondName:"",birthDate:{year:1900,month:1,day:1},phone:"",gender:"male",clientGroups:[],doctor:"",noSMS:!1,adds:{index:"",country:"",region:"",city:"",street:"",hauseNumber:""},passport:{document:"",series:"",number:"",issuedBy:"",dateOfIssue:{year:1900,month:1,day:1}}}}},methods:{addFirstName:function(e){this.form.firstName=e},addLastName:function(e){this.form.lastName=e},addSecondName:function(e){this.form.secondName=e},addBirthDay:function(e){this.form.birthDate=e},addPhone:function(e){this.form.phone=e.replace(/[()\s]/g,"")},addGender:function(e){this.form.gender=e},addClientGroup:function(e){this.form.clientGroups=e},addDoctor:function(e){this.form.doctor=e},addNoSMS:function(e){this.form.noSMS=e},addIndex:function(e){this.form.adds.index=e},addCountry:function(e){this.form.adds.country=e},addRegion:function(e){this.form.adds.region=e},addCity:function(e){this.form.adds.city=e},addStreet:function(e){this.form.adds.street=e},addHause:function(e){this.form.adds.hauseNumber=e},addDocument:function(e){this.form.passport.document=e},addSeries:function(e){this.form.passport.series=e},addNumber:function(e){this.form.passport.number=e},addIssuedBy:function(e){this.form.passport.issuedBy=e},addIssuedDate:function(e){this.form.passport.dateOfIssue=e},checkForm:function(){this.v$.form.$touch(),this.v$.form.$error||(this.isFormValid=!0)}},validations:function(){return{form:{firstName:{required:Q["b"],minLength:Object(Q["a"])(2)},lastName:{required:Q["b"],minLength:Object(Q["a"])(2)},phone:{required:Q["b"],minLength:Object(Q["a"])(11)},clientGroups:[{required:Q["b"]}],adds:{city:{required:Q["b"],minLength:Object(Q["a"])(2)}},passport:{document:{required:Q["b"]}}}}},computed:{firstNameMessage:function(){return this.v$.form.firstName.$error&&this.v$.form.firstName.required.$invalid?this.errorMessage1:this.v$.form.firstName.$error&&this.v$.form.firstName.minLength.$invalid?this.errorMessage2:""},lastNameMessage:function(){return this.v$.form.lastName.$error&&this.v$.form.lastName.required.$invalid?this.errorMessage1:this.v$.form.lastName.$error&&this.v$.form.lastName.minLength.$invalid?this.errorMessage2:""},cityMessage:function(){return this.v$.form.adds.city.$error&&this.v$.form.adds.city.required.$invalid?this.errorMessage1:this.v$.form.adds.city.$error&&this.v$.form.adds.city.minLength.$invalid?this.errorMessage2:""},phoneMessage:function(){return this.v$.form.phone.$error&&this.v$.form.phone.required.$invalid?this.errorMessage1:this.v$.form.phone.$error&&this.v$.form.phone.minLength.$invalid?this.errorMessage2:""}}},W=U,X=(r("5c0b"),Object(c["a"])(W,s,n,!1,null,null,null)),ee=X.exports;a["default"].config.devtools=!0,a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(ee)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},c80e:function(e,t,r){}});
//# sourceMappingURL=app.3933ddd1.js.map