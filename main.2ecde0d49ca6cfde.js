              || (${V} == "string" && ${X} && ${X} == +${X})`).assign(ne,I._`+${X}`);case"integer":return void q.elseIf(I._`${V} === "boolean" || ${X} === null
              || (${V} === "string" && ${X} && ${X} == +${X} && !(${X} % 1))`).assign(ne,I._`+${X}`);case"boolean":return void q.elseIf(I._`${X} === "false" || ${X} === 0 || ${X} === null`).assign(ne,!1).elseIf(I._`${X} === "true" || ${X} === 1`).assign(ne,!0);case"null":return q.elseIf(I._`${X} === "" || ${X} === 0 || ${X} === false`),void q.assign(ne,null);case"array":q.elseIf(I._`${V} === "string" || ${V} === "number"
              || ${V} === "boolean" || ${X} === null`).assign(ne,I._`[${X}]`)}}q.else(),j(Y),q.endIf(),q.if(I._`${ne} !== undefined`,()=>{q.assign(X,ne),function O({gen:Y,parentData:G,parentDataProperty:z},q){Y.if(I._`${G} !== undefined`,()=>Y.assign(I._`${G}[${z}]`,q))}(Y,ne)})}(Y,G,Q):j(Y)})}return V};const x=new Set(["string","number","integer","boolean","null"]);function N(Y,G,z,q=v.Correct){const X=q===v.Correct?I.operators.EQ:I.operators.NEQ;let Q;switch(Y){case"null":return I._`${G} ${X} null`;case"array":Q=I._`Array.isArray(${G})`;break;case"object":Q=I._`${G} && typeof ${G} == "object" && !Array.isArray(${G})`;break;case"integer":Q=V(I._`!(${G} % 1) && !isNaN(${G})`);break;case"number":Q=V();break;default:return I._`typeof ${G} ${X} ${Y}`}return q===v.Correct?Q:(0,I.not)(Q);function V(ne=I.nil){return(0,I.and)(I._`typeof ${G} == "number"`,ne,z?I._`isFinite(${G})`:I.nil)}}function F(Y,G,z,q){if(1===Y.length)return N(Y[0],G,z,q);let X;const Q=(0,a.toHash)(Y);if(Q.array&&Q.object){const V=I._`typeof ${G} != "object"`;X=Q.null?V:I._`!${G} || ${V}`,delete Q.null,delete Q.array,delete Q.object}else X=I.nil;Q.number&&delete Q.integer;for(const V in Q)X=(0,I.and)(X,N(V,G,z,q));return X}s.checkDataType=N,s.checkDataTypes=F;const L={message:({schema:Y})=>`must be ${Y}`,params:({schema:Y,schemaValue:G})=>"string"==typeof Y?I._`{type: ${Y}}`:I._`{type: ${G}}`};function j(Y){const G=function H(Y){const{gen:G,data:z,schema:q}=Y,X=(0,a.schemaRefOrVal)(Y,q,"type");return{gen:G,keyword:"type",data:z,schema:q.type,schemaCode:X,schemaValue:X,parentSchema:q,params:{},it:Y}}(Y);(0,A.reportError)(G,L)}s.reportTypeError=j},57866:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.assignDefaults=void 0;const p=g(56382),_=g(97990);function I(a,v,y){const{gen:b,compositeRule:C,data:x,opts:E}=a;if(void 0===y)return;const P=p._`${x}${(0,p.getProperty)(v)}`;if(C)return void(0,_.checkStrictMode)(a,`default is ignored for: ${P}`);let O=p._`${P} === undefined`;"empty"===E.useDefaults&&(O=p._`${O} || ${P} === null || ${P} === ""`),b.if(O,p._`${P} = ${(0,p.stringify)(y)}`)}s.assignDefaults=function A(a,v){const{properties:y,items:b}=a.schema;if("object"===v&&y)for(const C in y)I(a,C,y[C].default);else"array"===v&&Array.isArray(b)&&b.forEach((C,x)=>I(a,x,C.default))}},66764:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.getData=s.KeywordCxt=s.validateFunctionCode=void 0;const p=g(8007),_=g(59078),A=g(20368),I=g(59078),a=g(57866),v=g(22707),y=g(62639),b=g(56382),C=g(5976),x=g(31880),E=g(97990),P=g(75091);function N({gen:we,validateName:ce,schema:Oe,schemaEnv:Te,opts:Be},$e){Be.code.es5?we.func(ce,b._`${C.default.data}, ${C.default.valCxt}`,Te.$async,()=>{we.code(b._`"use strict"; ${Y(Oe,Be)}`),function L(we,ce){we.if(C.default.valCxt,()=>{we.var(C.default.instancePath,b._`${C.default.valCxt}.${C.default.instancePath}`),we.var(C.default.parentData,b._`${C.default.valCxt}.${C.default.parentData}`),we.var(C.default.parentDataProperty,b._`${C.default.valCxt}.${C.default.parentDataProperty}`),we.var(C.default.rootData,b._`${C.default.valCxt}.${C.default.rootData}`),ce.dynamicRef&&we.var(C.default.dynamicAnchors,b._`${C.default.valCxt}.${C.default.dynamicAnchors}`)},()=>{we.var(C.default.instancePath,b._`""`),we.var(C.default.parentData,b._`undefined`),we.var(C.default.parentDataProperty,b._`undefined`),we.var(C.default.rootData,C.default.data),ce.dynamicRef&&we.var(C.default.dynamicAnchors,b._`{}`)})}(we,Be),we.code($e)}):we.func(ce,b._`${C.default.data}, ${function F(we){return b._`{${C.default.instancePath}="", ${C.default.parentData}, ${C.default.parentDataProperty}, ${C.default.rootData}=${C.default.data}${we.dynamicRef?b._`, ${C.default.dynamicAnchors}={}`:b.nil}}={}`}(Be)}`,Te.$async,()=>we.code(Y(Oe,Be)).code($e))}function Y(we,ce){const Oe="object"==typeof we&&we[ce.schemaId];return Oe&&(ce.code.source||ce.code.process)?b._`/*# sourceURL=${Oe} */`:b.nil}function G(we,ce){q(we)&&(Q(we),z(we))?function X(we,ce){const{schema:Oe,gen:Te,opts:Be}=we;Be.$comment&&Oe.$comment&&d(we),function r(we){const ce=we.schema[we.opts.schemaId];ce&&(we.baseId=(0,x.resolveUrl)(we.opts.uriResolver,we.baseId,ce))}(we),function u(we){if(we.schema.$async&&!we.schemaEnv.$async)throw new Error("async schema in sync schema")}(we);const $e=Te.const("_errs",C.default.errors);V(we,$e),Te.var(ce,b._`${$e} === ${C.default.errors}`)}(we,ce):(0,p.boolOrEmptySchema)(we,ce)}function z({schema:we,self:ce}){if("boolean"==typeof we)return!we;for(const Oe in we)if(ce.RULES.all[Oe])return!0;return!1}function q(we){return"boolean"!=typeof we.schema}function Q(we){(0,E.checkUnknownRules)(we),function ne(we){const{schema:ce,errSchemaPath:Oe,opts:Te,self:Be}=we;ce.$ref&&Te.ignoreKeywordsWithRef&&(0,E.schemaHasRulesButRef)(ce,Be.RULES)&&Be.logger.warn(`$ref: keywords ignored in schema at path "${Oe}"`)}(we)}function V(we,ce){if(we.opts.jtd)return D(we,[],!1,ce);const Oe=(0,_.getSchemaTypes)(we.schema);D(we,Oe,!(0,_.coerceAndCheckDataType)(we,Oe),ce)}function d({gen:we,schemaEnv:ce,schema:Oe,errSchemaPath:Te,opts:Be}){const $e=Oe.$comment;if(!0===Be.$comment)we.code(b._`${C.default.self}.logger.log(${$e})`);else if("function"==typeof Be.$comment){const qe=b.str`${Te}/$comment`,Ve=we.scopeValue("root",{ref:ce.root});we.code(b._`${C.default.self}.opts.$comment(${$e}, ${qe}, ${Ve}.schema)`)}}function D(we,ce,Oe,Te){const{gen:Be,schema:$e,data:qe,allErrors:Ve,opts:Tt,self:nt}=we,{RULES:ot}=nt;function Ft(st){(0,A.shouldUseGroup)($e,st)&&(st.type?(Be.if((0,I.checkDataType)(st.type,qe,Tt.strictNumbers)),R(we,st),1===ce.length&&ce[0]===st.type&&Oe&&(Be.else(),(0,I.reportTypeError)(we)),Be.endIf()):R(we,st),Ve||Be.if(b._`${C.default.errors} === ${Te||0}`))}!$e.$ref||!Tt.ignoreKeywordsWithRef&&(0,E.schemaHasRulesButRef)($e,ot)?(Tt.jtd||function S(we,ce){we.schemaEnv.meta||!we.opts.strictTypes||(function f(we,ce){if(ce.length){if(!we.dataTypes.length)return void(we.dataTypes=ce);ce.forEach(Oe=>{ee(we.dataTypes,Oe)||_e(we,`type "${Oe}" not allowed by context "${we.dataTypes.join(",")}"`)}),function de(we,ce){const Oe=[];for(const Te of we.dataTypes)ee(ce,Te)?Oe.push(Te):ce.includes("integer")&&"number"===Te&&Oe.push("integer");we.dataTypes=Oe}(we,ce)}}(we,ce),we.opts.allowUnionTypes||function T(we,ce){ce.length>1&&(2!==ce.length||!ce.includes("null"))&&_e(we,"use allowUnionTypes to allow union type keyword")}(we,ce),function te(we,ce){const Oe=we.self.RULES.all;for(const Te in Oe){const Be=Oe[Te];if("object"==typeof Be&&(0,A.shouldUseRule)(we.schema,Be)){const{type:$e}=Be.definition;$e.length&&!$e.some(qe=>Z(ce,qe))&&_e(we,`missing type "${$e.join(",")}" for keyword "${Te}"`)}}}(we,we.dataTypes))}(we,ce),Be.block(()=>{for(const st of ot.rules)Ft(st);Ft(ot.post)})):Be.block(()=>Ce(we,"$ref",ot.all.$ref.definition))}function R(we,ce){const{gen:Oe,schema:Te,opts:{useDefaults:Be}}=we;Be&&(0,a.assignDefaults)(we,ce.type),Oe.block(()=>{for(const $e of ce.rules)(0,A.shouldUseRule)(Te,$e)&&Ce(we,$e.keyword,$e.definition,ce.type)})}function Z(we,ce){return we.includes(ce)||"number"===ce&&we.includes("integer")}function ee(we,ce){return we.includes(ce)||"integer"===ce&&we.includes("number")}function _e(we,ce){ce+=` at "${we.schemaEnv.baseId+we.errSchemaPath}" (strictTypes)`,(0,E.checkStrictMode)(we,ce,we.opts.strictTypes)}s.validateFunctionCode=function O(we){q(we)&&(Q(we),z(we))?function j(we){const{schema:ce,opts:Oe,gen:Te}=we;N(we,()=>{Oe.$comment&&ce.$comment&&d(we),function M(we){const{schema:ce,opts:Oe}=we;void 0!==ce.default&&Oe.useDefaults&&Oe.strictSchema&&(0,E.checkStrictMode)(we,"default is ignored in the schema root")}(we),Te.let(C.default.vErrors,null),Te.let(C.default.errors,0),Oe.unevaluated&&function H(we){const{gen:ce,validateName:Oe}=we;we.evaluated=ce.const("evaluated",b._`${Oe}.evaluated`),ce.if(b._`${we.evaluated}.dynamicProps`,()=>ce.assign(b._`${we.evaluated}.props`,b._`undefined`)),ce.if(b._`${we.evaluated}.dynamicItems`,()=>ce.assign(b._`${we.evaluated}.items`,b._`undefined`))}(we),V(we),function l(we){const{gen:ce,schemaEnv:Oe,validateName:Te,ValidationError:Be,opts:$e}=we;Oe.$async?ce.if(b._`${C.default.errors} === 0`,()=>ce.return(C.default.data),()=>ce.throw(b._`new ${Be}(${C.default.vErrors})`)):(ce.assign(b._`${Te}.errors`,C.default.vErrors),$e.unevaluated&&function m({gen:we,evaluated:ce,props:Oe,items:Te}){Oe instanceof b.Name&&we.assign(b._`${ce}.props`,Oe),Te instanceof b.Name&&we.assign(b._`${ce}.items`,Te)}(we),ce.return(b._`${C.default.errors} === 0`))}(we)})}(we):N(we,()=>(0,p.topBoolOrEmptySchema)(we))};class me{constructor(ce,Oe,Te){if((0,v.validateKeywordUsage)(ce,Oe,Te),this.gen=ce.gen,this.allErrors=ce.allErrors,this.keyword=Te,this.data=ce.data,this.schema=ce.schema[Te],this.$data=Oe.$data&&ce.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,E.schemaRefOrVal)(ce,this.schema,Te,this.$data),this.schemaType=Oe.schemaType,this.parentSchema=ce.schema,this.params={},this.it=ce,this.def=Oe,this.$data)this.schemaCode=ce.gen.const("vSchema",ge(this.$data,ce));else if(this.schemaCode=this.schemaValue,!(0,v.validSchemaType)(this.schema,Oe.schemaType,Oe.allowUndefined))throw new Error(`${Te} value must be ${JSON.stringify(Oe.schemaType)}`);("code"in Oe?Oe.trackErrors:!1!==Oe.errors)&&(this.errsCount=ce.gen.const("_errs",C.default.errors))}result(ce,Oe,Te){this.failResult((0,b.not)(ce),Oe,Te)}failResult(ce,Oe,Te){this.gen.if(ce),Te?Te():this.error(),Oe?(this.gen.else(),Oe(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(ce,Oe){this.failResult((0,b.not)(ce),void 0,Oe)}fail(ce){if(void 0===ce)return this.error(),void(this.allErrors||this.gen.if(!1));this.gen.if(ce),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(ce){if(!this.$data)return this.fail(ce);const{schemaCode:Oe}=this;this.fail(b._`${Oe} !== undefined && (${(0,b.or)(this.invalid$data(),ce)})`)}error(ce,Oe,Te){if(Oe)return this.setParams(Oe),this._error(ce,Te),void this.setParams({});this._error(ce,Te)}_error(ce,Oe){(ce?P.reportExtraError:P.reportError)(this,this.def.error,Oe)}$dataError(){(0,P.reportError)(this,this.def.$dataError||P.keyword$DataError)}reset(){if(void 0===this.errsCount)throw new Error('add "trackErrors" to keyword definition');(0,P.resetErrorsCount)(this.gen,this.errsCount)}ok(ce){this.allErrors||this.gen.if(ce)}setParams(ce,Oe){Oe?Object.assign(this.params,ce):this.params=ce}block$data(ce,Oe,Te=b.nil){this.gen.block(()=>{this.check$data(ce,Te),Oe()})}check$data(ce=b.nil,Oe=b.nil){if(!this.$data)return;const{gen:Te,schemaCode:Be,schemaType:$e,def:qe}=this;Te.if((0,b.or)(b._`${Be} === undefined`,Oe)),ce!==b.nil&&Te.assign(ce,!0),($e.length||qe.validateSchema)&&(Te.elseIf(this.invalid$data()),this.$dataError(),ce!==b.nil&&Te.assign(ce,!1)),Te.else()}invalid$data(){const{gen:ce,schemaCode:Oe,schemaType:Te,def:Be,it:$e}=this;return(0,b.or)(function qe(){if(Te.length){if(!(Oe instanceof b.Name))throw new Error("ajv implementation error");const Tt=Array.isArray(Te)?Te:[Te];return b._`${(0,I.checkDataTypes)(Tt,Oe,$e.opts.strictNumbers,I.DataType.Wrong)}`}return b.nil}(),function Ve(){if(Be.validateSchema){const Tt=ce.scopeValue("validate$data",{ref:Be.validateSchema});return b._`!${Tt}(${Oe})`}return b.nil}())}subschema(ce,Oe){const Te=(0,y.getSubschema)(this.it,ce);(0,y.extendSubschemaData)(Te,this.it,ce),(0,y.extendSubschemaMode)(Te,ce);const Be={...this.it,...Te,items:void 0,props:void 0};return G(Be,Oe),Be}mergeEvaluated(ce,Oe){const{it:Te,gen:Be}=this;Te.opts.unevaluated&&(!0!==Te.props&&void 0!==ce.props&&(Te.props=E.mergeEvaluated.props(Be,ce.props,Te.props,Oe)),!0!==Te.items&&void 0!==ce.items&&(Te.items=E.mergeEvaluated.items(Be,ce.items,Te.items,Oe)))}mergeValidEvaluated(ce,Oe){const{it:Te,gen:Be}=this;if(Te.opts.unevaluated&&(!0!==Te.props||!0!==Te.items))return Be.if(Oe,()=>this.mergeEvaluated(ce,b.Name)),!0}}function Ce(we,ce,Oe,Te){const Be=new me(we,Oe,ce);"code"in Oe?Oe.code(Be,Te):Be.$data&&Oe.validate?(0,v.funcKeywordCode)(Be,Oe):"macro"in Oe?(0,v.macroKeywordCode)(Be,Oe):(Oe.compile||Oe.validate)&&(0,v.funcKeywordCode)(Be,Oe)}s.KeywordCxt=me;const ae=/^\/(?:[^~]|~0|~1)*$/,he=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function ge(we,{dataLevel:ce,dataNames:Oe,dataPathArr:Te}){let Be,$e;if(""===we)return C.default.rootData;if("/"===we[0]){if(!ae.test(we))throw new Error(`Invalid JSON-pointer: ${we}`);Be=we,$e=C.default.rootData}else{const nt=he.exec(we);if(!nt)throw new Error(`Invalid JSON-pointer: ${we}`);const ot=+nt[1];if(Be=nt[2],"#"===Be){if(ot>=ce)throw new Error(Tt("property/index",ot));return Te[ce-ot]}if(ot>ce)throw new Error(Tt("data",ot));if($e=Oe[ce-ot],!Be)return $e}let qe=$e;const Ve=Be.split("/");for(const nt of Ve)nt&&($e=b._`${$e}${(0,b.getProperty)((0,E.unescapeJsonPointer)(nt))}`,qe=b._`${qe} && ${$e}`);return qe;function Tt(nt,ot){return`Cannot access ${nt} ${ot} levels up, current level is ${ce}`}}s.getData=ge},22707:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateKeywordUsage=s.validSchemaType=s.funcKeywordCode=s.macroKeywordCode=void 0;const p=g(56382),_=g(5976),A=g(92812),I=g(75091);function y(O){const{gen:N,data:F,it:L}=O;N.if(L.parentData,()=>N.assign(F,p._`${L.parentData}[${L.parentDataProperty}]`))}function x(O,N,F){if(void 0===F)throw new Error(`keyword "${N}" failed to compile`);return O.scopeValue("keyword","function"==typeof F?{ref:F}:{ref:F,code:(0,p.stringify)(F)})}s.macroKeywordCode=function a(O,N){const{gen:F,keyword:L,schema:j,parentSchema:H,it:Y}=O,G=N.macro.call(Y.self,j,H,Y),z=x(F,L,G);!1!==Y.opts.validateSchema&&Y.self.validateSchema(G,!0);const q=F.name("valid");O.subschema({schema:G,schemaPath:p.nil,errSchemaPath:`${Y.errSchemaPath}/${L}`,topSchemaRef:z,compositeRule:!0},q),O.pass(q,()=>O.error(!0))},s.funcKeywordCode=function v(O,N){var F;const{gen:L,keyword:j,schema:H,parentSchema:Y,$data:G,it:z}=O;!function C({schemaEnv:O},N){if(N.async&&!O.$async)throw new Error("async keyword in sync schema")}(z,N);const q=!G&&N.compile?N.compile.call(z.self,H,Y,z):N.validate,X=x(L,j,q),Q=L.let("valid");function r(d=(N.async?p._`await `:p.nil)){const l=z.opts.passContext?_.default.this:_.default.self,m=!("compile"in N&&!G||!1===N.schema);L.assign(Q,p._`${d}${(0,A.callValidateCode)(O,X,l,m)}`,N.modifying)}function u(d){var l;L.if((0,p.not)(null!==(l=N.valid)&&void 0!==l?l:Q),d)}O.block$data(Q,function V(){if(!1===N.errors)r(),N.modifying&&y(O),u(()=>O.error());else{const d=N.async?function ne(){const d=L.let("ruleErrs",null);return L.try(()=>r(p._`await `),l=>L.assign(Q,!1).if(p._`${l} instanceof ${z.ValidationError}`,()=>L.assign(d,p._`${l}.errors`),()=>L.throw(l))),d}():function M(){const d=p._`${X}.errors`;return L.assign(d,null),r(p.nil),d}();N.modifying&&y(O),u(()=>function b(O,N){const{gen:F}=O;F.if(p._`Array.isArray(${N})`,()=>{F.assign(_.default.vErrors,p._`${_.default.vErrors} === null ? ${N} : ${_.default.vErrors}.concat(${N})`).assign(_.default.errors,p._`${_.default.vErrors}.length`),(0,I.extendErrors)(O)},()=>O.error())}(O,d))}}),O.ok(null!==(F=N.valid)&&void 0!==F?F:Q)},s.validSchemaType=function E(O,N,F=!1){return!N.length||N.some(L=>"array"===L?Array.isArray(O):"object"===L?O&&"object"==typeof O&&!Array.isArray(O):typeof O==L||F&&typeof O>"u")},s.validateKeywordUsage=function P({schema:O,opts:N,self:F,errSchemaPath:L},j,H){if(Array.isArray(j.keyword)?!j.keyword.includes(H):j.keyword!==H)throw new Error("ajv implementation error");const Y=j.dependencies;if(Y?.some(G=>!Object.prototype.hasOwnProperty.call(O,G)))throw new Error(`parent schema must have dependencies of ${H}: ${Y.join(",")}`);if(j.validateSchema&&!j.validateSchema(O[H])){const z=`keyword "${H}" value is invalid at path "${L}": `+F.errorsText(j.validateSchema.errors);if("log"!==N.validateSchema)throw new Error(z);F.logger.error(z)}}},62639:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.extendSubschemaMode=s.extendSubschemaData=s.getSubschema=void 0;const p=g(56382),_=g(97990);s.getSubschema=function A(v,{keyword:y,schemaProp:b,schema:C,schemaPath:x,errSchemaPath:E,topSchemaRef:P}){if(void 0!==y&&void 0!==C)throw new Error('both "keyword" and "schema" passed, only one allowed');if(void 0!==y){const O=v.schema[y];return void 0===b?{schema:O,schemaPath:p._`${v.schemaPath}${(0,p.getProperty)(y)}`,errSchemaPath:`${v.errSchemaPath}/${y}`}:{schema:O[b],schemaPath:p._`${v.schemaPath}${(0,p.getProperty)(y)}${(0,p.getProperty)(b)}`,errSchemaPath:`${v.errSchemaPath}/${y}/${(0,_.escapeFragment)(b)}`}}if(void 0!==C){if(void 0===x||void 0===E||void 0===P)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:C,schemaPath:x,topSchemaRef:P,errSchemaPath:E}}throw new Error('either "keyword" or "schema" must be passed')},s.extendSubschemaData=function I(v,y,{dataProp:b,dataPropType:C,data:x,dataTypes:E,propertyName:P}){if(void 0!==x&&void 0!==b)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:O}=y;if(void 0!==b){const{errorPath:F,dataPathArr:L,opts:j}=y;N(O.let("data",p._`${y.data}${(0,p.getProperty)(b)}`,!0)),v.errorPath=p.str`${F}${(0,_.getErrorPath)(b,C,j.jsPropertySyntax)}`,v.parentDataProperty=p._`${b}`,v.dataPathArr=[...L,v.parentDataProperty]}if(void 0!==x){N(x instanceof p.Name?x:O.let("data",x,!0)),void 0!==P&&(v.propertyName=P)}function N(F){v.data=F,v.dataLevel=y.dataLevel+1,v.dataTypes=[],y.definedProperties=new Set,v.parentData=y.data,v.dataNames=[...y.dataNames,F]}E&&(v.dataTypes=E)},s.extendSubschemaMode=function a(v,{jtdDiscriminator:y,jtdMetadata:b,compositeRule:C,createErrors:x,allErrors:E}){void 0!==C&&(v.compositeRule=C),void 0!==x&&(v.createErrors=x),void 0!==E&&(v.allErrors=E),v.jtdDiscriminator=y,v.jtdMetadata=b}},25910:(ie,s,g)=>{"use strict";var p=g(59344).default;Object.defineProperty(s,"__esModule",{value:!0}),s.CodeGen=s.Name=s.nil=s.stringify=s.str=s._=s.KeywordCxt=void 0;var _=g(66764);Object.defineProperty(s,"KeywordCxt",{enumerable:!0,get:function(){return _.KeywordCxt}});var A=g(56382);Object.defineProperty(s,"_",{enumerable:!0,get:function(){return A._}}),Object.defineProperty(s,"str",{enumerable:!0,get:function(){return A.str}}),Object.defineProperty(s,"stringify",{enumerable:!0,get:function(){return A.stringify}}),Object.defineProperty(s,"nil",{enumerable:!0,get:function(){return A.nil}}),Object.defineProperty(s,"Name",{enumerable:!0,get:function(){return A.Name}}),Object.defineProperty(s,"CodeGen",{enumerable:!0,get:function(){return A.CodeGen}});const I=g(20496),a=g(80140),v=g(62848),y=g(17140),b=g(56382),C=g(31880),x=g(59078),E=g(97990),P=g(64775),O=g(51364),N=(T,te)=>new RegExp(T,te);N.code="new RegExp";const F=["removeAdditional","useDefaults","coerceTypes"],L=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),j={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},H={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},Y=200;function G(T){var te,Z,ee,de,_e,me,Ce,ae,he,ge,we,ce,Oe,Te,Be,$e,qe,Ve,Tt,nt,ot,Ft,st,ut,tn;const Le=T.strict,Se=null===(te=T.code)||void 0===te?void 0:te.optimize,Ee=!0===Se||void 0===Se?1:Se||0,ue=null!==(ee=null===(Z=T.code)||void 0===Z?void 0:Z.regExp)&&void 0!==ee?ee:N,le=null!==(de=T.uriResolver)&&void 0!==de?de:O.default;return{strictSchema:null===(me=null!==(_e=T.strictSchema)&&void 0!==_e?_e:Le)||void 0===me||me,strictNumbers:null===(ae=null!==(Ce=T.strictNumbers)&&void 0!==Ce?Ce:Le)||void 0===ae||ae,strictTypes:null!==(ge=null!==(he=T.strictTypes)&&void 0!==he?he:Le)&&void 0!==ge?ge:"log",strictTuples:null!==(ce=null!==(we=T.strictTuples)&&void 0!==we?we:Le)&&void 0!==ce?ce:"log",strictRequired:null!==(Te=null!==(Oe=T.strictRequired)&&void 0!==Oe?Oe:Le)&&void 0!==Te&&Te,code:T.code?{...T.code,optimize:Ee,regExp:ue}:{optimize:Ee,regExp:ue},loopRequired:null!==(Be=T.loopRequired)&&void 0!==Be?Be:Y,loopEnum:null!==($e=T.loopEnum)&&void 0!==$e?$e:Y,meta:null===(qe=T.meta)||void 0===qe||qe,messages:null===(Ve=T.messages)||void 0===Ve||Ve,inlineRefs:null===(Tt=T.inlineRefs)||void 0===Tt||Tt,schemaId:null!==(nt=T.schemaId)&&void 0!==nt?nt:"$id",addUsedSchema:null===(ot=T.addUsedSchema)||void 0===ot||ot,validateSchema:null===(Ft=T.validateSchema)||void 0===Ft||Ft,validateFormats:null===(st=T.validateFormats)||void 0===st||st,unicodeRegExp:null===(ut=T.unicodeRegExp)||void 0===ut||ut,int32range:null===(tn=T.int32range)||void 0===tn||tn,uriResolver:le}}class z{constructor(te={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,te=this.opts={...te,...G(te)};const{es5:Z,lines:ee}=this.opts.code;this.scope=new b.ValueScope({scope:{},prefixes:L,es5:Z,lines:ee}),this.logger=function u(T){if(!1===T)return r;if(void 0===T)return console;if(T.log&&T.warn&&T.error)return T;throw new Error("logger must implement log, warn and error methods")}(te.logger);const de=te.validateFormats;te.validateFormats=!1,this.RULES=(0,v.getRules)(),q.call(this,j,te,"NOT SUPPORTED"),q.call(this,H,te,"DEPRECATED","warn"),this._metaOpts=M.call(this),te.formats&&V.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),te.keywords&&ne.call(this,te.keywords),"object"==typeof te.meta&&this.addMetaSchema(te.meta),Q.call(this),te.validateFormats=de}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:te,meta:Z,schemaId:ee}=this.opts;let de=P;"id"===ee&&(de={...P},de.id=de.$id,delete de.$id),Z&&te&&this.addMetaSchema(de,de[ee],!1)}defaultMeta(){const{meta:te,schemaId:Z}=this.opts;return this.opts.defaultMeta="object"==typeof te?te[Z]||te:void 0}validate(te,Z){let ee;if("string"==typeof te){if(ee=this.getSchema(te),!ee)throw new Error(`no schema with key or ref "${te}"`)}else ee=this.compile(te);const de=ee(Z);return"$async"in ee||(this.errors=ee.errors),de}compile(te,Z){const ee=this._addSchema(te,Z);return ee.validate||this._compileSchemaEnv(ee)}compileAsync(te,Z){if("function"!=typeof this.opts.loadSchema)throw new Error("options.loadSchema should be a function");const{loadSchema:ee}=this.opts;return de.call(this,te,Z);function de(Be,$e){return _e.apply(this,arguments)}function _e(){return(_e=p(function*(Be,$e){yield me.call(this,Be.$schema);const qe=this._addSchema(Be,$e);return qe.validate||ae.call(this,qe)})).apply(this,arguments)}function me(Be){return Ce.apply(this,arguments)}function Ce(){return(Ce=p(function*(Be){Be&&!this.getSchema(Be)&&(yield de.call(this,{$ref:Be},!0))})).apply(this,arguments)}function ae(Be){return he.apply(this,arguments)}function he(){return(he=p(function*(Be){try{return this._compileSchemaEnv(Be)}catch($e){if(!($e instanceof a.default))throw $e;return ge.call(this,$e),yield we.call(this,$e.missingSchema),ae.call(this,Be)}})).apply(this,arguments)}function ge({missingSchema:Be,missingRef:$e}){if(this.refs[Be])throw new Error(`AnySchema ${Be} is loaded but ${$e} cannot be resolved`)}function we(Be){return ce.apply(this,arguments)}function ce(){return(ce=p(function*(Be){const $e=yield Oe.call(this,Be);this.refs[Be]||(yield me.call(this,$e.$schema)),this.refs[Be]||this.addSchema($e,Be,Z)})).apply(this,arguments)}function Oe(Be){return Te.apply(this,arguments)}function Te(){return(Te=p(function*(Be){const $e=this._loading[Be];if($e)return $e;try{return yield this._loading[Be]=ee(Be)}finally{delete this._loading[Be]}})).apply(this,arguments)}}addSchema(te,Z,ee,de=this.opts.validateSchema){if(Array.isArray(te)){for(const me of te)this.addSchema(me,void 0,ee,de);return this}let _e;if("object"==typeof te){const{schemaId:me}=this.opts;if(_e=te[me],void 0!==_e&&"string"!=typeof _e)throw new Error(`schema ${me} must be string`)}return Z=(0,C.normalizeId)(Z||_e),this._checkUnique(Z),this.schemas[Z]=this._addSchema(te,ee,Z,de,!0),this}addMetaSchema(te,Z,ee=this.opts.validateSchema){return this.addSchema(te,Z,!0,ee),this}validateSchema(te,Z){if("boolean"==typeof te)return!0;let ee;if(ee=te.$schema,void 0!==ee&&"string"!=typeof ee)throw new Error("$schema must be a string");if(ee=ee||this.opts.defaultMeta||this.defaultMeta(),!ee)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const de=this.validate(ee,te);if(!de&&Z){const _e="schema is invalid: "+this.errorsText();if("log"!==this.opts.validateSchema)throw new Error(_e);this.logger.error(_e)}return de}getSchema(te){let Z;for(;"string"==typeof(Z=X.call(this,te));)te=Z;if(void 0===Z){const{schemaId:ee}=this.opts,de=new y.SchemaEnv({schema:{},schemaId:ee});if(Z=y.resolveSchema.call(this,de,te),!Z)return;this.refs[te]=Z}return Z.validate||this._compileSchemaEnv(Z)}removeSchema(te){if(te instanceof RegExp)return this._removeAllSchemas(this.schemas,te),this._removeAllSchemas(this.refs,te),this;switch(typeof te){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const Z=X.call(this,te);return"object"==typeof Z&&this._cache.delete(Z.schema),delete this.schemas[te],delete this.refs[te],this}case"object":{const Z=te;this._cache.delete(Z);let ee=te[this.opts.schemaId];return ee&&(ee=(0,C.normalizeId)(ee),delete this.schemas[ee],delete this.refs[ee]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(te){for(const Z of te)this.addKeyword(Z);return this}addKeyword(te,Z){let ee;if("string"==typeof te)ee=te,"object"==typeof Z&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),Z.keyword=ee);else{if("object"!=typeof te||void 0!==Z)throw new Error("invalid addKeywords parameters");if(ee=(Z=te).keyword,Array.isArray(ee)&&!ee.length)throw new Error("addKeywords: keyword must be string or non-empty array")}if(l.call(this,ee,Z),!Z)return(0,E.eachItem)(ee,_e=>m.call(this,_e)),this;R.call(this,Z);const de={...Z,type:(0,x.getJSONTypes)(Z.type),schemaType:(0,x.getJSONTypes)(Z.schemaType)};return(0,E.eachItem)(ee,0===de.type.length?_e=>m.call(this,_e,de):_e=>de.type.forEach(me=>m.call(this,_e,de,me))),this}getKeyword(te){const Z=this.RULES.all[te];return"object"==typeof Z?Z.definition:!!Z}removeKeyword(te){const{RULES:Z}=this;delete Z.keywords[te],delete Z.all[te];for(const ee of Z.rules){const de=ee.rules.findIndex(_e=>_e.keyword===te);de>=0&&ee.rules.splice(de,1)}return this}addFormat(te,Z){return"string"==typeof Z&&(Z=new RegExp(Z)),this.formats[te]=Z,this}errorsText(te=this.errors,{separator:Z=", ",dataVar:ee="data"}={}){return te&&0!==te.length?te.map(de=>`${ee}${de.instancePath} ${de.message}`).reduce((de,_e)=>de+Z+_e):"No errors"}$dataMetaSchema(te,Z){const ee=this.RULES.all;te=JSON.parse(JSON.stringify(te));for(const de of Z){const _e=de.split("/").slice(1);let me=te;for(const Ce of _e)me=me[Ce];for(const Ce in ee){const ae=ee[Ce];if("object"!=typeof ae)continue;const{$data:he}=ae.definition,ge=me[Ce];he&&ge&&(me[Ce]=f(ge))}}return te}_removeAllSchemas(te,Z){for(const ee in te){const de=te[ee];(!Z||Z.test(ee))&&("string"==typeof de?delete te[ee]:de&&!de.meta&&(this._cache.delete(de.schema),delete te[ee]))}}_addSchema(te,Z,ee,de=this.opts.validateSchema,_e=this.opts.addUsedSchema){let me;const{schemaId:Ce}=this.opts;if("object"==typeof te)me=te[Ce];else{if(this.opts.jtd)throw new Error("schema must be object");if("boolean"!=typeof te)throw new Error("schema must be object or boolean")}let ae=this._cache.get(te);if(void 0!==ae)return ae;ee=(0,C.normalizeId)(me||ee);const he=C.getSchemaRefs.call(this,te,ee);return ae=new y.SchemaEnv({schema:te,schemaId:Ce,meta:Z,baseId:ee,localRefs:he}),this._cache.set(ae.schema,ae),_e&&!ee.startsWith("#")&&(ee&&this._checkUnique(ee),this.refs[ee]=ae),de&&this.validateSchema(te,!0),ae}_checkUnique(te){if(this.schemas[te]||this.refs[te])throw new Error(`schema with key or id "${te}" already exists`)}_compileSchemaEnv(te){if(te.meta?this._compileMetaSchema(te):y.compileSchema.call(this,te),!te.validate)throw new Error("ajv implementation error");return te.validate}_compileMetaSchema(te){const Z=this.opts;this.opts=this._metaOpts;try{y.compileSchema.call(this,te)}finally{this.opts=Z}}}function q(T,te,Z,ee="error"){for(const de in T){const _e=de;_e in te&&this.logger[ee](`${Z}: option ${de}. ${T[_e]}`)}}function X(T){return T=(0,C.normalizeId)(T),this.schemas[T]||this.refs[T]}function Q(){const T=this.opts.schemas;if(T)if(Array.isArray(T))this.addSchema(T);else for(const te in T)this.addSchema(T[te],te)}function V(){for(const T in this.opts.formats){const te=this.opts.formats[T];te&&this.addFormat(T,te)}}function ne(T){if(Array.isArray(T))this.addVocabulary(T);else{this.logger.warn("keywords option as map is deprecated, pass array");for(const te in T){const Z=T[te];Z.keyword||(Z.keyword=te),this.addKeyword(Z)}}}function M(){const T={...this.opts};for(const te of F)delete T[te];return T}s.default=z,z.ValidationError=I.default,z.MissingRefError=a.default;const r={log(){},warn(){},error(){}};const d=/^[a-z_$][a-z0-9_$:-]*$/i;function l(T,te){const{RULES:Z}=this;if((0,E.eachItem)(T,ee=>{if(Z.keywords[ee])throw new Error(`Keyword ${ee} is already defined`);if(!d.test(ee))throw new Error(`Keyword ${ee} has invalid name`)}),te&&te.$data&&!("code"in te)&&!("validate"in te))throw new Error('$data keyword must have "code" or "validate" function')}function m(T,te,Z){var ee;const de=te?.post;if(Z&&de)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:_e}=this;let me=de?_e.post:_e.rules.find(({type:ae})=>ae===Z);if(me||(me={type:Z,rules:[]},_e.rules.push(me)),_e.keywords[T]=!0,!te)return;const Ce={keyword:T,definition:{...te,type:(0,x.getJSONTypes)(te.type),schemaType:(0,x.getJSONTypes)(te.schemaType)}};te.before?D.call(this,me,Ce,te.before):me.rules.push(Ce),_e.all[T]=Ce,null===(ee=te.implements)||void 0===ee||ee.forEach(ae=>this.addKeyword(ae))}function D(T,te,Z){const ee=T.rules.findIndex(de=>de.keyword===Z);ee>=0?T.rules.splice(ee,0,te):(T.rules.push(te),this.logger.warn(`rule ${Z} is not defined`))}function R(T){let{metaSchema:te}=T;void 0!==te&&(T.$data&&this.opts.$data&&(te=f(te)),T.validateSchema=this.compile(te,!0))}const S={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function f(T){return{anyOf:[T,S]}}},40834:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const p=g(12559);p.code='require("ajv/dist/runtime/equal").default',s.default=p},26344:(ie,s)=>{"use strict";function g(p){const _=p.length;let a,A=0,I=0;for(;I<_;)A++,a=p.charCodeAt(I++),a>=55296&&a<=56319&&I<_&&(a=p.charCodeAt(I),56320==(64512&a)&&I++);return A}Object.defineProperty(s,"__esModule",{value:!0}),s.default=g,g.code='require("ajv/dist/runtime/ucs2length").default'},51364:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const p=g(96482);p.code='require("ajv/dist/runtime/uri").default',s.default=p},20496:(ie,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});class g extends Error{constructor(_){super("validation failed"),this.errors=_,this.ajv=this.validation=!0}}s.default=g},29282:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateAdditionalItems=void 0;const p=g(56382),_=g(97990),I={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:v}})=>p.str`must NOT have more than ${v} items`,params:({params:{len:v}})=>p._`{limit: ${v}}`},code(v){const{parentSchema:y,it:b}=v,{items:C}=y;Array.isArray(C)?a(v,C):(0,_.checkStrictMode)(b,'"additionalItems" is ignored when "items" is not an array of schemas')}};function a(v,y){const{gen:b,schema:C,data:x,keyword:E,it:P}=v;P.items=!0;const O=b.const("len",p._`${x}.length`);if(!1===C)v.setParams({len:y.length}),v.pass(p._`${O} <= ${y.length}`);else if("object"==typeof C&&!(0,_.alwaysValidSchema)(P,C)){const F=b.var("valid",p._`${O} <= ${y.length}`);b.if((0,p.not)(F),()=>function N(F){b.forRange("i",y.length,O,L=>{v.subschema({keyword:E,dataProp:L,dataPropType:_.Type.Num},F),P.allErrors||b.if((0,p.not)(F),()=>b.break())})}(F)),v.ok(F)}}s.validateAdditionalItems=a,s.default=I},75459:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const p=g(92812),_=g(56382),A=g(5976),I=g(97990),v={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:y})=>_._`{additionalProperty: ${y.additionalProperty}}`},code(y){const{gen:b,schema:C,parentSchema:x,data:E,errsCount:P,it:O}=y;if(!P)throw new Error("ajv implementation error");const{allErrors:N,opts:F}=O;if(O.props=!0,"all"!==F.removeAdditional&&(0,I.alwaysValidSchema)(O,C))return;const L=(0,p.allSchemaProperties)(x.properties),j=(0,p.allSchemaProperties)(x.patternProperties);function G(X){b.code(_._`delete ${E}[${X}]`)}function z(X){if("all"===F.removeAdditional||F.removeAdditional&&!1===C)G(X);else{if(!1===C)return y.setParams({additionalProperty:X}),y.error(),void(N||b.break());if("object"==typeof C&&!(0,I.alwaysValidSchema)(O,C)){const Q=b.name("valid");"failing"===F.removeAdditional?(q(X,Q,!1),b.if((0,_.not)(Q),()=>{y.reset(),G(X)})):(q(X,Q),N||b.if((0,_.not)(Q),()=>b.break()))}}}function q(X,Q,V){const ne={keyword:"additionalProperties",dataProp:X,dataPropType:I.Type.Str};!1===V&&Object.assign(ne,{compositeRule:!0,createErrors:!1,allErrors:!1}),y.subschema(ne,Q)}(function H(){b.forIn("key",E,X=>{L.length||j.length?b.if(function Y(X){let Q;if(L.length>8){const V=(0,I.schemaRefOrVal)(O,x.properties,"properties");Q=(0,p.isOwnProperty)(b,V,X)}else Q=L.length?(0,_.or)(...L.map(V=>_._`${X} === ${V}`)):_.nil;return j.length&&(Q=(0,_.or)(Q,...j.map(V=>_._`${(0,p.usePattern)(y,V)}.test(${X})`))),(0,_.not)(Q)}(X),()=>z(X)):z(X)})})(),y.ok(_._`${P} === ${A.default.errors}`)}};s.default=v},46186:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const p=g(97990),_={keyword:"allOf",schemaType:"array",code(A){const{gen:I,schema:a,it:v}=A;if(!Array.isArray(a))throw new Error("ajv implementation error");const y=I.name("valid");a.forEach((b,C)=>{if((0,p.alwaysValidSchema)(v,b))return;const x=A.subschema({keyword:"allOf",schemaProp:C},y);A.ok(y),A.mergeEvaluated(x)})}};s.default=_},60290:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const _={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:g(92812).validateUnion,error:{message:"must match a schema in anyOf"}};s.default=_},25738:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const p=g(56382),_=g(97990),I={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:a,max:v}})=>void 0===v?p.str`must contain at least ${a} valid item(s)`:p.str`must contain at least ${a} and no more than ${v} valid item(s)`,params:({params:{min:a,max:v}})=>void 0===v?p._`{minContains: ${a}}`:p._`{minContains: ${a}, maxContains: ${v}}`},code(a){const{gen:v,schema:y,parentSchema:b,data:C,it:x}=a;let E,P;const{minContains:O,maxContains:N}=b;x.opts.next?(E=void 0===O?1:O,P=N):E=1;const F=v.const("len",p._`${C}.length`);if(a.setParams({min:E,max:P}),void 0===P&&0===E)return void(0,_.checkStrictMode)(x,'"minContains" == 0 without "maxContains": "contains" keyword ignored');if(void 0!==P&&E>P)return(0,_.checkStrictMode)(x,'"minContains" > "maxContains" is always invalid'),void a.fail();if((0,_.alwaysValidSchema)(x,y)){let G=p._`${F} >= ${E}`;return void 0!==P&&(G=p._`${G} && ${F} <= ${P}`),void a.pass(G)}x.items=!0;const L=v.name("valid");function j(){const G=v.name("_valid"),z=v.let("count",0);H(G,()=>v.if(G,()=>function Y(G){v.code(p._`${G}++`),void 0===P?v.if(p._`${G} >= ${E}`,()=>v.assign(L,!0).break()):(v.if(p._`${G} > ${P}`,()=>v.assign(L,!1).break()),1===E?v.assign(L,!0):v.if(p._`${G} >= ${E}`,()=>v.assign(L,!0)))}(z)))}function H(G,z){v.forRange("i",0,F,q=>{a.subschema({keyword:"contains",dataProp:q,dataPropType:_.Type.Num,compositeRule:!0},G),z()})}void 0===P&&1===E?H(L,()=>v.if(L,()=>v.break())):0===E?(v.let(L,!0),void 0!==P&&v.if(p._`${C}.length > 0`,j)):(v.let(L,!1),j()),a.result(L,()=>a.reset())}};s.default=I},1886:(ie,s,g)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateSchemaDeps=s.validatePropertyDeps=s.error=void 0;const p=g(56382),_=g(97990),A=g(92812);s.error={message:({params:{property:b,depsCount:C,deps:x}})=>{const E=1===C?"property":"properties";return p.str`must have ${E} ${x} when property ${b} is present`},params:({params:{property:b,depsCount:C,deps:x,missingProperty:E}})=>p._`{property: ${b},
    missingProperty: ${E},
    depsCount: ${C},