"use strict";(self.webpackChunkoneaj_angular=self.webpackChunkoneaj_angular||[]).push([[102],{2244:(w,v,a)=>{a.d(v,{G:()=>b});var i=a(433),l=a(590),t=a(8256),C=a(7556),p=a(4940),c=a(6895);const f=function(d){return{"is-invalid":d}};let b=(()=>{class d{constructor(h,s,m,u,T){this.formBuilder=h,this.authenticationService=s,this.router=m,this.authFackservice=u,this.route=T,this.submitted=!1,this.error="",this.year=(new Date).getFullYear(),this.authenticationService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&this.authFackservice.login(this.f.email.value,this.f.password.value).pipe((0,l.P)()).subscribe(h=>{this.router.navigate(["/"])},h=>{this.error=h||""})}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}}return d.\u0275fac=function(h){return new(h||d)(t.Y36(i.qu),t.Y36(C.h),t.Y36(p.F0),t.Y36(C.h),t.Y36(p.gz))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-login"]],decls:23,vars:7,consts:[[1,"container-fluid"],[1,"col-2"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/logo-dash.png","alt","logo",1,"p-5","img-fluid"],[1,"row","p-5"],[1,"col-md-5","mt-5","ml-md-5"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/login.png","alt","logo",1,"img-fluid"],[1,"col-md-1"],[1,"col-md-5","ml-md-5","mt-5"],[1,"display-4"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-4"],["type","email","autocomplete","off","formControlName","email","placeholder","name@example.com",1,"form-control",3,"ngClass"],["for","floatingInput"],["type","password","formControlName","password","autocomplete","off","placeholder","Password",1,"form-control",3,"ngClass"],["for","floatingPassword"],[1,"mb-4"],["type","submit",1,"btn","btn-success"]],template:function(h,s){1&h&&(t.TgZ(0,"header",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t._UZ(6,"div",6),t.TgZ(7,"div",7)(8,"h1",8),t._uU(9,"Login"),t.qZA(),t.TgZ(10,"p"),t._uU(11,"To be connected with us please login with email and password"),t.qZA(),t.TgZ(12,"form",9),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(13,"div",10),t._UZ(14,"input",11),t.TgZ(15,"label",12),t._uU(16,"Email address"),t.qZA()(),t.TgZ(17,"div",10),t._UZ(18,"input",13),t.TgZ(19,"label",14),t._uU(20,"Password"),t.qZA()(),t.TgZ(21,"div",15),t._UZ(22,"input",16),t.qZA()()()()()),2&h&&(t.xp6(12),t.Q6J("formGroup",s.loginForm),t.xp6(2),t.Q6J("ngClass",t.VKq(3,f,s.submitted&&s.f.email.errors)),t.xp6(4),t.Q6J("ngClass",t.VKq(5,f,s.submitted&&s.f.password.errors)))},dependencies:[c.mk,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),d})()},8102:(w,v,a)=>{a.r(v),a.d(v,{LayoutModule:()=>h});var i=a(6895),l=a(4940),t=a(8256),C=a(7556);let p=(()=>{class s{constructor(u){this.auth=u}ngOnInit(){this.currentUser=this.auth.currentUserValue,this.portals=this.currentUser.portals,console.log(this.currentUser.portals)}}return s.\u0275fac=function(u){return new(u||s)(t.Y36(C.h))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-home"]],decls:58,vars:1,consts:[[1,"col","p-3","bg-white",2,"box-shadow","0px 15px 10px -15px #bebebe"],[1,"row"],[1,"col"],[1,"display-8","pl-4"],["aria-hidden","true",1,"fa","fa-fighter-jet"],[1,"col-4"],["href","#",1,"btn","btn-sm","btn-outline-dark","float-end",2,"margin-left","10px"],[1,"fa","fa-refresh",2,"padding-left","5px","padding-right","5px"],[1,"fa","fa-filter",2,"padding-left","5px","padding-right","5px"],[1,"fa","fa-file",2,"padding-left","5px","padding-right","5px"],[1,"col","mt-5"],[1,"row","p-4"],[1,"col-5"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/logistics-business.jpg","alt","logo",2,"height","100% !important","width","100% !important","border-radius","30px"],[1,"col","text-center","d-flex","align-items-center"],[1,"display-5"],[1,"display-1","text-primary-1"],[1,"col","p-5","mt-4"],[1,"col","text-center"],[1,"display-7"],[1,"col","p-4","m-2","text-center","bg-white","border-radius-1"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/icon1.png","alt","logo"],[1,"text-justify"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/icon2.png","alt","logo"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/icon3.png","alt","logo"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/icon4.png","alt","logo"]],template:function(u,T){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),t._UZ(4,"i",4),t._uU(5),t.qZA()(),t.TgZ(6,"div",5)(7,"a",6),t._UZ(8,"span",7),t.qZA(),t.TgZ(9,"a",6),t._UZ(10,"span",8),t._uU(11," Filter"),t.qZA(),t.TgZ(12,"a",6),t._UZ(13,"span",9),t._uU(14,"Get Quote"),t.qZA()()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"div",12),t._UZ(18,"img",13),t.qZA(),t.TgZ(19,"div",14)(20,"div",2)(21,"span")(22,"span",15),t._uU(23,"A LOGWINGS INITIATIVE "),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"span",16),t._uU(26,"DASHBOARD WINGS"),t.qZA()()()()(),t.TgZ(27,"div",17)(28,"div",18)(29,"h5",19),t._uU(30,"Our Service"),t.qZA(),t.TgZ(31,"h1",19),t._uU(32,"What we provide"),t.qZA()(),t.TgZ(33,"div",1)(34,"div",20),t._UZ(35,"img",21),t.TgZ(36,"h5",19),t._uU(37,"Quotation Dashboard"),t.qZA(),t.TgZ(38,"p",22),t._uU(39,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout."),t.qZA()(),t.TgZ(40,"div",20),t._UZ(41,"img",23),t.TgZ(42,"h5",19),t._uU(43,"AR Dashboard"),t.qZA(),t.TgZ(44,"p",22),t._uU(45,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout."),t.qZA()(),t.TgZ(46,"div",20),t._UZ(47,"img",24),t.TgZ(48,"h5",19),t._uU(49,"AP Dashboard"),t.qZA(),t.TgZ(50,"p",22),t._uU(51,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout."),t.qZA()(),t.TgZ(52,"div",20),t._UZ(53,"img",25),t.TgZ(54,"h5",19),t._uU(55,"GP Dashboard"),t.qZA(),t.TgZ(56,"p",22),t._uU(57,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout."),t.qZA()()()()()),2&u&&(t.xp6(5),t.hij(" | Welcome back ",T.currentUser.username,""))},styles:["#COL[_ngcontent-%COMP%]{border-radius:30px!important;box-shadow:0 0 10px #fff}.w-90[_ngcontent-%COMP%]{width:90%!important;margin-left:3%!important}#container[_ngcontent-%COMP%]{position:relative;text-align:center;color:#fff;width:100%!important}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]}),s})();var c=a(5107),f=a(2244),b=a(2310);const d=[{path:"",component:p,canActivate:[c.a]},{path:"home",component:p,canActivate:[c.a]},{path:"quotation-dashboard-new",component:b.M,canActivate:[c.a]},{path:"logout",component:f.G,canActivate:[c.a]}];let _=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[l.Bz.forChild(d),l.Bz]}),s})(),h=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[i.ez,_]}),s})()},2310:(w,v,a)=>{a.d(v,{M:()=>L});class i{constructor(){this.reason={reason_for_not_securing_the_business:[],quotation_ref:[],event_percent:[]},this.convered_vs_lost={No:[],Yes:[],month:[]},this.local_vs_overseas_quotations={routed:[],number_of_quotation:[]},this.segmentwise_quotation={"AIR EXPORTS":[],"AIR IMPORTS":[],"FCL EXPORTS":[],"FCL IMPORTS":[],"LCL EXPORTS":[],"LCL IMPORTS":[],Month:[]},this.segmentwise={No:[],Yes:[],Total:[],segment:[],conversion_percent:[]},this.month_on_month_conversion={No:[],Yes:[],percentage:[],month:[]},this.customerwise="",this.segmentwise_convertion={"AIR EXPORTS":[],"AIR IMPORTS":[],"FCL EXPORTS":[],"FCL IMPORTS":[],"LCL EXPORTS":[],"LCL IMPORTS":[],"AIR EXPORTS Percentage":[],"AIR IMPORTS Percentage":[],"FCL EXPORTS Percentage":[],"FCL IMPORTS Percentage":[],"LCL EXPORTS Percentage":[],"LCL IMPORTS Percentage":[],Month:[]},this.top_card={total:"0",converted:"0",lost:"0",hold:"0"}}}var l=a(433),t=a(8256),C=a(529),p=a(7556);let c=(()=>{class o{constructor(){this.quotation=new i}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=a(6895),b=a(6205);function d(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",27),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.monthOnMonthConversionPercentage.series)("chart",e.monthOnMonthConversionPercentage.chart)("markers",e.monthOnMonthConversionPercentage.markers)("dataLabels",e.monthOnMonthConversionPercentage.dataLabels)("stroke",e.monthOnMonthConversionPercentage.stroke)("colors",e.monthOnMonthConversionPercentage.colors)("title",e.monthOnMonthConversionPercentage.title)("xaxis",e.monthOnMonthConversionPercentage.xaxis)}}function _(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",28),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.quotesConvertedVsLostCountChart.series)("chart",e.quotesConvertedVsLostCountChart.chart)("xaxis",e.quotesConvertedVsLostCountChart.xaxis)("stroke",e.quotesConvertedVsLostCountChart.stroke)("dataLabels",e.quotesConvertedVsLostCountChart.dataLabels)("yaxis",e.quotesConvertedVsLostCountChart.yaxis)("labels",e.quotesConvertedVsLostCountChart.labels)("legend",e.quotesConvertedVsLostCountChart.legend)("title",e.quotesConvertedVsLostCountChart.title)("subtitle",e.quotesConvertedVsLostCountChart.subtitle)("colors",e.quotesConvertedVsLostCountChart.colors)}}function h(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",29),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.segmentwiseQuoteConversionPercentageYTDChart.series)("chart",e.segmentwiseQuoteConversionPercentageYTDChart.chart)("xaxis",e.segmentwiseQuoteConversionPercentageYTDChart.xaxis)("stroke",e.segmentwiseQuoteConversionPercentageYTDChart.stroke)("plotOptions",e.segmentwiseQuoteConversionPercentageYTDChart.plotOptions)("dataLabels",e.segmentwiseQuoteConversionPercentageYTDChart.dataLabels)("yaxis",e.segmentwiseQuoteConversionPercentageYTDChart.yaxis)("labels",e.segmentwiseQuoteConversionPercentageYTDChart.labels)("legend",e.segmentwiseQuoteConversionPercentageYTDChart.legend)("title",e.segmentwiseQuoteConversionPercentageYTDChart.title)("subtitle",e.segmentwiseQuoteConversionPercentageYTDChart.subtitle)("colors",e.segmentwiseQuoteConversionPercentageYTDChart.colors)}}function s(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",29),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.reasonsForLoosingTheBusinessChart.series)("chart",e.reasonsForLoosingTheBusinessChart.chart)("xaxis",e.reasonsForLoosingTheBusinessChart.xaxis)("stroke",e.reasonsForLoosingTheBusinessChart.stroke)("plotOptions",e.reasonsForLoosingTheBusinessChart.plotOptions)("dataLabels",e.reasonsForLoosingTheBusinessChart.dataLabels)("yaxis",e.reasonsForLoosingTheBusinessChart.yaxis)("labels",e.reasonsForLoosingTheBusinessChart.labels)("legend",e.reasonsForLoosingTheBusinessChart.legend)("title",e.reasonsForLoosingTheBusinessChart.title)("subtitle",e.reasonsForLoosingTheBusinessChart.subtitle)("colors",e.reasonsForLoosingTheBusinessChart.colors)}}function m(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",30),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.segmentwiseChart.series)("chart",e.segmentwiseChart.chart)("dataLabels",e.segmentwiseChart.dataLabels)("plotOptions",e.segmentwiseChart.plotOptions)("yaxis",e.segmentwiseChart.yaxis)("legend",e.segmentwiseChart.legend)("fill",e.segmentwiseChart.fill)("stroke",e.segmentwiseChart.stroke)("tooltip",e.segmentwiseChart.tooltip)("xaxis",e.segmentwiseChart.xaxis)("colors",e.segmentwiseChart.colors)}}function u(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",28),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.segmentwiseNumberOfQuotationsChart.series)("chart",e.segmentwiseNumberOfQuotationsChart.chart)("xaxis",e.segmentwiseNumberOfQuotationsChart.xaxis)("stroke",e.segmentwiseNumberOfQuotationsChart.stroke)("dataLabels",e.segmentwiseNumberOfQuotationsChart.dataLabels)("yaxis",e.segmentwiseNumberOfQuotationsChart.yaxis)("labels",e.segmentwiseNumberOfQuotationsChart.labels)("legend",e.segmentwiseNumberOfQuotationsChart.legend)("title",e.segmentwiseNumberOfQuotationsChart.title)("subtitle",e.segmentwiseNumberOfQuotationsChart.subtitle)("colors",e.segmentwiseNumberOfQuotationsChart.colors)}}function T(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",31),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.localVsOversisOptions.series)("chart",e.localVsOversisOptions.chart)("labels",e.localVsOversisOptions.labels)("responsive",e.localVsOversisOptions.responsive)}}function Z(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",28),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.segmentwiseNumnberOfQuotationsConvertedChart.series)("chart",e.segmentwiseNumnberOfQuotationsConvertedChart.chart)("xaxis",e.segmentwiseNumnberOfQuotationsConvertedChart.xaxis)("stroke",e.segmentwiseNumnberOfQuotationsConvertedChart.stroke)("dataLabels",e.segmentwiseNumnberOfQuotationsConvertedChart.dataLabels)("yaxis",e.segmentwiseNumnberOfQuotationsConvertedChart.yaxis)("labels",e.segmentwiseNumnberOfQuotationsConvertedChart.labels)("legend",e.segmentwiseNumnberOfQuotationsConvertedChart.legend)("title",e.segmentwiseNumnberOfQuotationsConvertedChart.title)("subtitle",e.segmentwiseNumnberOfQuotationsConvertedChart.subtitle)("colors",e.segmentwiseNumnberOfQuotationsConvertedChart.colors)}}function x(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"apx-chart",28),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("series",e.segmentwiseQuotationConversionPercentageChart.series)("chart",e.segmentwiseQuotationConversionPercentageChart.chart)("xaxis",e.segmentwiseQuotationConversionPercentageChart.xaxis)("stroke",e.segmentwiseQuotationConversionPercentageChart.stroke)("dataLabels",e.segmentwiseQuotationConversionPercentageChart.dataLabels)("yaxis",e.segmentwiseQuotationConversionPercentageChart.yaxis)("labels",e.segmentwiseQuotationConversionPercentageChart.labels)("legend",e.segmentwiseQuotationConversionPercentageChart.legend)("title",e.segmentwiseQuotationConversionPercentageChart.title)("subtitle",e.segmentwiseQuotationConversionPercentageChart.subtitle)("colors",e.segmentwiseQuotationConversionPercentageChart.colors)}}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"div",9)(3,"div",2)(4,"h2",34),t._uU(5,"Fillter"),t.qZA()(),t.TgZ(6,"div",2)(7,"button",35),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.fillter=!g.fillter)}),t._UZ(8,"i",36),t.qZA()()(),t.TgZ(9,"form",37)(10,"label",38),t._uU(11,"From Date"),t.qZA(),t._UZ(12,"input",39),t.TgZ(13,"label",40),t._uU(14,"To Date"),t.qZA(),t._UZ(15,"input",41),t.TgZ(16,"input",42),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.applyFilter())}),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(9),t.Q6J("formGroup",e.filterForm)}}function q(o,r){1&o&&(t.TgZ(0,"div",43),t._UZ(1,"img",44),t.qZA())}let L=(()=>{class o{constructor(e,n,g,P){this.apiService=e,this.formbuilder=n,this.auth=g,this.quotationService=P,this.quotation=new i,this.loading=!1,this.fillter=!1,this.filterForm=this.formbuilder.group({from_date:["",[l.kI.required]],to_date:["",[l.kI.required]]})}loadData(){this.loading=!0;let e=this.filterForm.value;e.tenant_id=this.auth.currentUserValue.tenantid,this.apiService.post("https://1t9ge895ff.execute-api.ap-south-1.amazonaws.com/dashboard",JSON.stringify(e),{responseType:"text"}).subscribe({next:n=>{const g=JSON.parse(n);return setTimeout(()=>{this.loading=!1,this.monthOnMonthQuoteConvertedVsLostChart(),this.monthOnMonthConversionPercentageChart(),this.quotesConvertedVsLostCount(),this.segmentwiseQuoteConversionPercentageYTD(),this.reasonsForLoosingTheBusiness(),this.Segmentwise(),this.segmentwiseNumberOfQuotations(),this.localVsOversisChartOptions(),this.segmentwiseNumnberOfQuotationsConverted(),this.segmentwiseQuotationConversionPercentage()}),this.quotation=g,g},error:n=>console.log(n)})}applyFilter(){localStorage.setItem("quotationFilter",JSON.stringify(this.filterForm.value)),console.log(this.filterForm),this.fillter=!this.fillter,this.loadData()}fillterReset(){localStorage.setItem("quotationFilter",JSON.stringify({from_date:"",to_date:""})),this.filterForm.reset(),this.loadData()}ngOnInit(){this.filterForm.patchValue(JSON.parse(String(localStorage.getItem("quotationFilter")))),this.loadData()}monthOnMonthQuoteConvertedVsLostChart(){this.monthOnMonthQuoteConvertedVsLost={series:[{name:"NO",data:this.quotation.month_on_month_conversion.No??[0,1]},{name:"YES",data:this.quotation.month_on_month_conversion.Yes??[0,1]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},markers:{size:5},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.month_on_month_conversion.month??[0,1]}}}monthOnMonthConversionPercentageChart(){this.monthOnMonthConversionPercentage={series:[{name:"Percentage",data:this.quotation.month_on_month_conversion.percentage??[0,1]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},markers:{size:4},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.month_on_month_conversion.month??[0,1]}}}quotesConvertedVsLostCount(){this.quotesConvertedVsLostCountChart={series:[{name:"Converted",data:this.quotation.convered_vs_lost.Yes??[]},{name:"Lost",data:this.quotation.convered_vs_lost.No??[]}],chart:{height:250,type:"area"},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.convered_vs_lost.month??[]},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},tooltip:{x:{format:"text"}}}}segmentwiseQuoteConversionPercentageYTD(){this.segmentwiseQuoteConversionPercentageYTDChart={series:[{data:this.quotation.segmentwise.conversion_percent}],chart:{height:250,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},grid:{borderColor:"#f1f1f1"},xaxis:{categories:this.quotation.segmentwise.segment}}}reasonsForLoosingTheBusiness(){this.reasonsForLoosingTheBusinessChart={series:[{name:"Shipment Count",data:this.quotation.reason.quotation_ref},{name:"Percentage",data:this.quotation.reason.event_percent}],chart:{height:250,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},grid:{borderColor:"#f1f1f1"},xaxis:{categories:this.quotation.reason.reason_for_not_securing_the_business}}}Segmentwise(){this.segmentwiseChart={series:[{name:"NO",data:this.quotation.segmentwise.No??[0,1]},{name:"YES",data:this.quotation.segmentwise.Yes??[0,1]}],chart:{height:250,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!0},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:this.quotation.segmentwise.segment??[]},yaxis:{title:{}},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},tooltip:{y:{formatter:function(e){return e+" Quotation's"}}}}}segmentwiseNumberOfQuotations(){this.segmentwiseNumberOfQuotationsChart={series:[{name:"AIR EXPORTS",data:this.quotation.segmentwise_quotation["AIR EXPORTS"]},{name:"AIR IMPORTS",data:this.quotation.segmentwise_quotation["AIR IMPORTS"]},{name:"FCL EXPORTS",data:this.quotation.segmentwise_quotation["FCL EXPORTS"]},{name:"FCL IMPORTS",data:this.quotation.segmentwise_quotation["FCL IMPORTS"]},{name:"LCL EXPORTS",data:this.quotation.segmentwise_quotation["LCL EXPORTS"]},{name:" LCL IMPORTS",data:this.quotation.segmentwise_quotation["LCL IMPORTS"]}],chart:{height:250,type:"area"},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.segmentwise_quotation.Month},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}localVsOversisChartOptions(){this.localVsOversisOptions={series:this.quotation.local_vs_overseas_quotations.number_of_quotation,chart:{height:300,type:"donut"},labels:this.quotation.local_vs_overseas_quotations.routed,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}segmentwiseNumnberOfQuotationsConverted(){this.segmentwiseNumnberOfQuotationsConvertedChart={series:[{name:"AIR EXPORTS",data:this.quotation.segmentwise_convertion["AIR EXPORTS"]},{name:"AIR IMPORTS",data:this.quotation.segmentwise_convertion["AIR IMPORTS"]},{name:"FCL EXPORTS",data:this.quotation.segmentwise_convertion["FCL EXPORTS"]},{name:"FCL IMPORTS",data:this.quotation.segmentwise_convertion["FCL IMPORTS"]},{name:"LCL EXPORTS",data:this.quotation.segmentwise_convertion["LCL EXPORTS"]},{name:" LCL IMPORTS",data:this.quotation.segmentwise_convertion["LCL IMPORTS"]}],chart:{height:350,type:"area"},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.segmentwise_convertion.Month},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}segmentwiseQuotationConversionPercentage(){this.segmentwiseQuotationConversionPercentageChart={series:[{name:"AIR EXPORTS",data:this.quotation.segmentwise_convertion["AIR EXPORTS Percentage"]},{name:"AIR IMPORTS",data:this.quotation.segmentwise_convertion["AIR IMPORTS Percentage"]},{name:"FCL EXPORTS",data:this.quotation.segmentwise_convertion["FCL EXPORTS Percentage"]},{name:"FCL IMPORTS",data:this.quotation.segmentwise_convertion["FCL IMPORTS Percentage"]},{name:"LCL EXPORTS",data:this.quotation.segmentwise_convertion["LCL EXPORTS Percentage"]},{name:" LCL IMPORTS",data:this.quotation.segmentwise_convertion["LCL IMPORTS Percentage"]}],chart:{height:350,type:"area"},dataLabels:{enabled:!0},stroke:{curve:"smooth"},xaxis:{categories:this.quotation.segmentwise_convertion.Month},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.eN),t.Y36(l.qu),t.Y36(p.h),t.Y36(c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:103,vars:15,consts:[[1,"col",2,"width","80vw !important","margin-left","2% !important"],[1,"row","p-3","bg-white",2,"border-radius","10px !important"],[1,"col"],[1,"display-7","text-primary-1"],["href","#",1,"btn","btn-outline-dark","m-1","float-end",3,"click"],[1,"fa","fa-refresh"],[1,"fa","fa-filter"],[1,"row","mt-3"],[1,"col","p-3","bg-primary-3","border-radius-1","m-2"],[1,"row"],[1,"display-7"],[1,"col-2"],[1,"fa","fa-file","display-5","float-end"],[1,"col","p-3","bg-success-1","border-radius-1","m-2"],[1,"fa","fa-check-circle","display-5","float-end"],[1,"col","p-3","bg-danger-1","border-radius-1","m-2"],[1,"fa","fa-window-close","display-5","float-end"],[1,"col","p-3","bg-warning-1","border-radius-1","m-2"],[1,"fa","fa-stop-circle","display-5","float-end"],[1,"col","m-2","p-3","bg-white","border-radius-1",2,"overflow","hidden !important"],["class","card-body",4,"ngIf"],[1,"col-4","m-2","p-3","bg-white","border-radius-1",2,"overflow","hidden !important"],[1,"col-6","m-2","p-3","bg-white","border-radius-1",2,"overflow","hidden !important"],[1,"col-8","m-2","p-3","bg-white","border-radius-1",2,"overflow","hidden !important"],["class","container-fluid p-5","id","fillter",4,"ngIf"],["class","col text-center",4,"ngIf"],[1,"card-body"],[3,"series","chart","markers","dataLabels","stroke","colors","title","xaxis"],[3,"series","chart","xaxis","stroke","dataLabels","yaxis","labels","legend","title","subtitle","colors"],[3,"series","chart","xaxis","stroke","plotOptions","dataLabels","yaxis","labels","legend","title","subtitle","colors"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis","colors"],[3,"series","chart","labels","responsive"],["id","fillter",1,"container-fluid","p-5"],["id","filterInside",1,"container","p-5","w-50","m-auto"],[1,"text-white"],["id","closebtn",1,"btn","btn-outline-light","text-right",3,"click"],[1,"fas","fa-times-circle"],[1,"form-group","mt-5",3,"formGroup"],["for","",1,"text-white"],["type","month","name","from_date","id","from_date","formControlName","from_date",1,"form-control","mt-3"],["for","",1,"text-white","mt-4"],["type","month","name","to_date","id","to_date","formControlName","to_date",1,"form-control","mt-3"],["type","submit","value","Apply Fillter",1,"btn","btn-success","mt-4",3,"click"],[1,"col","text-center"],["src","https://dashboardarapgp.s3.ap-south-1.amazonaws.com/loading.gif","alt","logo",1,"img-fluid"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Quotation Dashboard"),t.qZA()(),t.TgZ(5,"div",2)(6,"button",4),t.NdJ("click",function(){return n.fillterReset()}),t._UZ(7,"span",5),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){return n.fillter=!n.fillter}),t._UZ(9,"span",6),t._uU(10," Filter "),t.qZA()()(),t.TgZ(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",2)(15,"h6"),t._uU(16,"Total Quotation"),t.qZA(),t.TgZ(17,"span")(18,"span",10),t._uU(19),t.qZA(),t.TgZ(20,"span"),t._uU(21,"100%"),t.qZA()()(),t.TgZ(22,"div",11),t._UZ(23,"i",12),t.qZA()()(),t.TgZ(24,"div",13)(25,"div",9)(26,"div",2)(27,"h6"),t._uU(28,"Converted Quotation"),t.qZA(),t.TgZ(29,"span")(30,"span",10),t._uU(31),t.qZA(),t.TgZ(32,"span"),t._uU(33,"100%"),t.qZA()()(),t.TgZ(34,"div",11),t._UZ(35,"i",14),t.qZA()()(),t.TgZ(36,"div",15)(37,"div",9)(38,"div",2)(39,"h6"),t._uU(40,"Lost Quotation"),t.qZA(),t.TgZ(41,"span")(42,"span",10),t._uU(43),t.qZA(),t.TgZ(44,"span"),t._uU(45,"100%"),t.qZA()()(),t.TgZ(46,"div",11),t._UZ(47,"i",16),t.qZA()()(),t.TgZ(48,"div",17)(49,"div",9)(50,"div",2)(51,"h6"),t._uU(52,"Hold Quotation"),t.qZA(),t.TgZ(53,"span")(54,"span",10),t._uU(55),t.qZA(),t.TgZ(56,"span"),t._uU(57,"100%"),t.qZA()()(),t.TgZ(58,"div",11),t._UZ(59,"i",18),t.qZA()()()(),t.TgZ(60,"div",7)(61,"div",19)(62,"h5"),t._uU(63,"Month wise Quote Converted Percentage"),t.qZA(),t.YNc(64,d,2,8,"div",20),t.qZA()(),t.TgZ(65,"div",7)(66,"div",19)(67,"h5"),t._uU(68,"Month wise Quote Converted Vs Lost"),t.qZA(),t.YNc(69,_,2,11,"div",20),t.qZA(),t.TgZ(70,"div",21)(71,"h5"),t._uU(72,"Segmentwise Quote Conversion Percentage"),t.qZA(),t.YNc(73,h,2,12,"div",20),t.qZA()(),t.TgZ(74,"div",7)(75,"div",22)(76,"h5"),t._uU(77,"Reasons for Loosing The Business"),t.qZA(),t.YNc(78,s,2,12,"div",20),t.qZA(),t.TgZ(79,"div",19)(80,"h5"),t._uU(81,"Segmentwise Conversion vs Lost"),t.qZA(),t.YNc(82,m,2,11,"div",20),t.qZA()(),t.TgZ(83,"div",7)(84,"div",23)(85,"h5"),t._uU(86,"Segmentwise Number of Quotations"),t.qZA(),t.YNc(87,u,2,11,"div",20),t.qZA(),t.TgZ(88,"div",19)(89,"h5"),t._uU(90,"Segmentwise Conversion vs Lost"),t.qZA(),t.YNc(91,T,2,4,"div",20),t.qZA()(),t.TgZ(92,"div",7)(93,"div",19)(94,"h5"),t._uU(95,"Segmentwise Number of Quotations Converted"),t.qZA(),t.YNc(96,Z,2,11,"div",20),t.qZA(),t.TgZ(97,"div",19)(98,"h5"),t._uU(99,"Segmentwise Quotation Conversion Percentage"),t.qZA(),t.YNc(100,x,2,11,"div",20),t.qZA()()(),t.YNc(101,O,17,1,"div",24),t.YNc(102,q,2,0,"div",25)),2&e&&(t.xp6(19),t.Oqu(n.quotation.top_card.total),t.xp6(12),t.Oqu(n.quotation.top_card.converted),t.xp6(12),t.Oqu(n.quotation.top_card.lost),t.xp6(12),t.Oqu(n.quotation.top_card.hold),t.xp6(9),t.Q6J("ngIf",n.monthOnMonthConversionPercentage&&n.quotation.month_on_month_conversion.percentage.length>0),t.xp6(5),t.Q6J("ngIf",n.quotesConvertedVsLostCountChart&&n.quotation.month_on_month_conversion.percentage.length>0),t.xp6(4),t.Q6J("ngIf",n.segmentwiseQuoteConversionPercentageYTDChart&&n.quotation.month_on_month_conversion.percentage.length>0),t.xp6(5),t.Q6J("ngIf",n.quotesConvertedVsLostCountChart&&n.quotation.month_on_month_conversion.percentage.length>0),t.xp6(4),t.Q6J("ngIf",n.segmentwiseChart),t.xp6(5),t.Q6J("ngIf",n.segmentwiseNumberOfQuotationsChart),t.xp6(4),t.Q6J("ngIf",n.localVsOversisOptions),t.xp6(5),t.Q6J("ngIf",n.segmentwiseNumnberOfQuotationsConvertedChart),t.xp6(4),t.Q6J("ngIf",n.segmentwiseQuotationConversionPercentageChart),t.xp6(1),t.Q6J("ngIf",n.fillter),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[f.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,b.x]}),o})()}}]);