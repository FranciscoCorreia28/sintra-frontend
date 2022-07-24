import{r as n,R as m}from"./react.9acfbd05.js";import{C as F,n as u,F as tn}from"./styled-components.dd10576b.js";var X;function ie(e,t){return e[t]}function Ne(e,t){return t.split(".").reduce((o,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return o[r[i]][r[i+1]];return o[a]},e)}function nn(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function on(e=[],t,o="id"){const a=e.slice(),r=ie(t,o);return r?a.splice(a.findIndex(i=>ie(i,o)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function gt(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function ue(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const D=()=>null;function ft(e,t=[],o=[]){let a={},r=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function Oe(e,t=[],o="id"){const a=ie(e,o);return a?t.some(r=>ie(r,o)===a):t.some(r=>r===e)}function Se(e,t){return t?e.findIndex(o=>be(o.id,t)):-1}function be(e,t){return e==t}function an(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,g=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const y=g?[...e.selectedRows,...r.filter(p=>!Oe(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!Oe(p,r,a));return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:y.length,selectedRows:y,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:g?i:0,selectedRows:g?r:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:g}=t;return g?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:on(e.selectedRows,r,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:nn(e.selectedRows,r),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const g=[...e.selectedRows,...r.filter(b=>!Oe(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:g.length,allSelected:!1,selectedRows:g,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,g=r&&s,b=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),g&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const rn=F`
	pointer-events: none;
	opacity: 0.4;
`,ln=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&rn};
	${({theme:e})=>e.table.style};
`,sn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,dn=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&sn};
	${({theme:e})=>e.head.style};
`,cn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Ct=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,gn=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,pn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,un=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,de=u.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,yt=u(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&F`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Ct`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&gn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&pn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&un(e)`
    display: none;
  `};
`,bn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,xn=u(yt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&bn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var mn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:y,onDragLeave:p}){const{style:h,classNames:j}=ft(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(xn,{id:e,"data-column-id":t.id,role:"gridcell",className:j,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:h,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:y,onDragLeave:p},!t.cell&&n.exports.createElement("div",{"data-tag":r},function(R,w,H,f){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(R,f):w&&typeof w=="function"?w(R,f):Ne(R,w)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),Rt=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=D}){const g=t,b=g!=="input"?o.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),y=n.exports.useMemo(()=>function(p,...h){let j;return Object.keys(p).map(R=>p[R]).forEach((R,w)=>{typeof R=="function"&&(j=Object.assign(Object.assign({},p),{[Object.keys(p)[w]]:R(...h)}))}),j||p}(o,a),[o,a]);return n.exports.createElement(g,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:b,onClick:i?D:s,name:e,"aria-label":e,checked:r,disabled:i},y,{onChange:D}))});const hn=u(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function wn({name:e,keyField:t,row:o,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:g,selectableRowDisabled:b,onSelectedRow:y}){const p=!(!b||!b(o));return n.exports.createElement(hn,{onClick:h=>h.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(Rt,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{y({type:"SELECT_SINGLE_ROW",row:o,isSelected:r,keyField:t,rowCount:a,singleSelect:g})},disabled:p}))}const fn=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Cn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.exports.createElement(fn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const yn=u(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Rn({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:r,disabled:i=!1}){return n.exports.createElement(yn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.exports.createElement(Cn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:r}))}const vn=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Sn=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.exports.createElement(vn,{className:i,extendedRowStyle:a},n.exports.createElement(t,Object.assign({data:e},o)))}),ke,We,pt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ke||(ke={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(We||(We={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(pt||(pt={}));const En=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,On=F`
	&:hover {
		cursor: pointer;
	}
`,kn=u.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&En};
	${({pointerOnHover:e})=>e&&On};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Pn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:g,expandableRowsComponentProps:b,expandableRowsHideExpander:y,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:h=!1,highlightOnHover:j=!1,id:R,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:f=D,onRowDoubleClicked:P=D,onRowMouseEnter:$=D,onRowMouseLeave:S=D,onRowExpandToggled:O=D,onSelectedRow:L=D,pointerOnHover:M=!1,row:C,rowCount:v,rowIndex:U,selectableRowDisabled:A=null,selectableRows:N=!1,selectableRowsComponent:Q,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:Pe,onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:me}){const[V,he]=n.exports.useState(o);n.exports.useEffect(()=>{he(o)},[o]);const Z=n.exports.useCallback(()=>{he(!V),O(!V,C)},[V,O,C]),Fe=M||s&&(p||h),je=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(f(C,E),!a&&s&&p&&Z())},[a,p,s,Z,f,C]),we=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(P(C,E),!a&&s&&h&&Z())},[a,h,s,Z,P,C]),Ie=n.exports.useCallback(E=>{$(C,E)},[$,C]),Y=n.exports.useCallback(E=>{S(C,E)},[S,C]),q=ie(C,H),{style:fe,classNames:Ce}=ft(C,t,["rdt_TableRow"]),Te=ne&&oe,Le=w?fe:{},Me=ae&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(kn,{id:`row-${R}`,role:"row",striped:Me,highlightOnHover:j,pointerOnHover:!a&&Fe,dense:r,onClick:je,onDoubleClick:we,onMouseEnter:Ie,onMouseLeave:Y,className:Ce,selected:Te,style:fe},N&&n.exports.createElement(wn,{name:`select-row-${q}`,keyField:H,row:C,rowCount:v,selected:oe,selectableRowsComponent:Q,selectableRowsComponentProps:k,selectableRowDisabled:A,selectableRowsSingle:ce,onSelectedRow:L}),s&&!y&&n.exports.createElement(Rn,{id:q,expandableIcon:i,expanded:V,row:C,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.exports.createElement(mn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:C,rowIndex:U,isDragging:be(Pe,E.id),onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:me}))),s&&V&&n.exports.createElement(Sn,{key:`expander-${q}`,data:C,extendedRowStyle:Le,extendedClassNames:Ce,ExpanderComponent:g,expanderComponentProps:b}))}const Dn=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Hn=({sortActive:e,sortDirection:t})=>m.createElement(Dn,{sortActive:e,sortDirection:t},"\u25B2"),$n=u(yt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,Fn=F`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&F`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,jn=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Fn};
`,In=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Tn=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:g,paginationServer:b,persistSelectedOnSort:y,selectableRowsVisibleOnly:p,onSort:h,onDragStart:j,onDragOver:R,onDragEnd:w,onDragEnter:H,onDragLeave:f}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,$]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;be(a.id,e.id)&&(k=r===X.ASC?X.DESC:X.ASC),h({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:g&&b&&!y||s||p})},L=k=>n.exports.createElement(Hn,{sortActive:k,sortDirection:r}),M=()=>n.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),C=!(!e.sortable||!be(a.id,e.id)),v=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,Q=e.sortable&&i&&e.right;return n.exports.createElement($n,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:be(e.id,o),onDragStart:j,onDragOver:R,onDragEnd:w,onDragEnter:H,onDragLeave:f},e.name&&n.exports.createElement(jn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:O,onKeyPress:v?void 0:k=>{k.key==="Enter"&&O()},sortActive:!v&&C,disabled:v},!v&&Q&&M(),!v&&A&&L(C),typeof e.name=="string"?n.exports.createElement(In,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&N&&M(),!v&&U&&L(C)))});const Ln=u(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Mn({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:g,selectableRowDisabled:b,onSelectAllRows:y}){const p=i.length>0&&!a,h=b?t.filter(w=>!b(w)):t,j=h.length===0,R=Math.min(t.length,h.length);return n.exports.createElement(Ln,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(Rt,{name:"select-all-rows",component:s,componentOptions:g,onClick:()=>{y({type:"SELECT_ALL_ROWS",rows:h,rowCount:R,mergeSelections:r,keyField:o})},checked:a,indeterminate:p,disabled:j}))}function vt(e=ke.AUTO){const t=typeof window=="object",[o,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],g=i.dir==="rtl"||s.dir==="rtl";a(r&&g)}},[e,t]),o}const An=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,_n=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ut=u.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function zn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:r}){const i=vt(r),s=a>0;return o?n.exports.createElement(ut,{visible:s},n.exports.cloneElement(o,{selectedCount:a})):n.exports.createElement(ut,{visible:s,rtl:i},n.exports.createElement(An,null,((g,b,y)=>{if(b===0)return null;const p=b===1?g.singular:g.plural;return y?`${b} ${g.message||""} ${p}`:`${b} ${p} ${g.message||""}`})(e,a,i)),n.exports.createElement(_n,null,t))}const Nn=u.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Wn=u.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Bn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Gn=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:g=!0})=>n.exports.createElement(Nn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Wn,null,e),t&&n.exports.createElement(Bn,null,t),g&&n.exports.createElement(zn,{contextMessage:o,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function St(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}const Vn={left:"flex-start",right:"flex-end",center:"center"},Un=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Vn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Qn=e=>{var{align:t="right",wrapContent:o=!0}=e,a=St(e,["align","wrapContent"]);return n.exports.createElement(Un,Object.assign({align:t,wrapContent:o},a))},Yn=u.div`
	display: flex;
	flex-direction: column;
`,Jn=u.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&F`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&F`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,bt=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Kn=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Xn=u(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Zn=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,qn=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.createElement("path",{d:"M7 10l5 5 5-5z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),eo=u.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,to=u.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,no=e=>{var{defaultValue:t,onChange:o}=e,a=St(e,["defaultValue","onChange"]);return n.exports.createElement(to,null,n.exports.createElement(eo,Object.assign({onChange:o,defaultValue:t},a)),n.exports.createElement(qn,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return m.createElement("div",null,"To add an expander pass in a component instance via ",m.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),m.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),m.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:m.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:m.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:We.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),m.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),m.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ke.AUTO,onChangePage:D,onChangeRowsPerPage:D,onRowClicked:D,onRowDoubleClicked:D,onRowMouseEnter:D,onRowMouseLeave:D,onRowExpandToggled:D,onSelectedRowsChange:D,onSort:D,onColumnOrderChange:D},oo={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ao=u.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ee=u.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,ro=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Ct`
    width: 100%;
    justify-content: space-around;
  `};
`,Et=u.span`
	flex-shrink: 1;
	user-select: none;
`,lo=u(Et)`
	margin: 0 24px;
`,io=u(Et)`
	margin: 0 4px;
`;var so=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:g=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:y=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:h=l.onChangePage}){const j=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=n.exports.useState(ne);return n.exports.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),R=vt(a),w=j.width&&j.width>599,H=ue(t,e),f=o*e,P=f-e+1,$=o===1,S=o===H,O=Object.assign(Object.assign({},oo),y),L=o===H?`${P}-${t} ${O.rangeSeparatorText} ${t}`:`${P}-${f} ${O.rangeSeparatorText} ${t}`,M=n.exports.useCallback(()=>h(o-1),[o,h]),C=n.exports.useCallback(()=>h(o+1),[o,h]),v=n.exports.useCallback(()=>h(1),[h]),U=n.exports.useCallback(()=>h(ue(t,e)),[h,t,e]),A=n.exports.useCallback(k=>p(Number(k.target.value),o),[o,p]),N=r.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&N.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Q=n.exports.createElement(no,{onChange:A,defaultValue:e,"aria-label":O.rowsPerPageText},N);return n.exports.createElement(ao,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(io,null,O.rowsPerPageText),Q),w&&n.exports.createElement(lo,null,L),n.exports.createElement(ro,null,n.exports.createElement(Ee,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:v,disabled:$,isRTL:R},s),n.exports.createElement(Ee,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:M,disabled:$,isRTL:R},b),!w&&Q,n.exports.createElement(Ee,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:C,disabled:S,isRTL:R},g),n.exports.createElement(Ee,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:R},i)))});const te=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var co=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===go}(t)}(e)},go=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function po(e,t,o){return e.concat(t).map(function(a){return xe(a,o)})}function xt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function mt(e,t){try{return t in e}catch{return!1}}function uo(e,t,o){var a={};return o.isMergeableObject(e)&&xt(e).forEach(function(r){a[r]=xe(e[r],o)}),xt(t).forEach(function(r){(function(i,s){return mt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(mt(e,r)&&o.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return se;var g=s.customMerge(i);return typeof g=="function"?g:se}(r,o)(e[r],t[r],o):a[r]=xe(t[r],o))}),a}function se(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||po,o.isMergeableObject=o.isMergeableObject||co,o.cloneUnlessOtherwiseSpecified=xe;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):uo(e,t,o):xe(t,o)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return se(o,a,t)},{})};var bo=se;const ht={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},wt={default:ht,light:ht,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function xo(e,t,o,a){const[r,i]=n.exports.useState(()=>gt(e)),[s,g]=n.exports.useState(""),b=n.exports.useRef("");te(()=>{i(gt(e))},[e]);const y=n.exports.useCallback(f=>{var P,$,S;const{attributes:O}=f.target,L=(P=O.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;L&&(b.current=((S=($=r[Se(r,L)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",g(b.current))},[r]),p=n.exports.useCallback(f=>{var P;const{attributes:$}=f.target,S=(P=$.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&b.current&&S!==b.current){const O=Se(r,b.current),L=Se(r,S),M=[...r];M[O]=r[L],M[L]=r[O],i(M),t(M)}},[t,r]),h=n.exports.useCallback(f=>{f.preventDefault()},[]),j=n.exports.useCallback(f=>{f.preventDefault()},[]),R=n.exports.useCallback(f=>{f.preventDefault(),b.current="",g("")},[]),w=function(f=!1){return f?X.ASC:X.DESC}(a),H=n.exports.useMemo(()=>r[Se(r,o==null?void 0:o.toString())]||{},[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:y,handleDragEnter:p,handleDragOver:h,handleDragLeave:j,handleDragEnd:R,defaultSortDirection:w,defaultSortColumn:H}}var wo=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:g=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:y=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:h=l.selectableRowsSingle,selectableRowsHighlight:j=l.selectableRowsHighlight,selectableRowsNoSelectAll:R=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:f=l.selectableRowDisabled,selectableRowsComponent:P=l.selectableRowsComponent,selectableRowsComponentProps:$=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:L=l.expandableIcon,onChangeRowsPerPage:M=l.onChangeRowsPerPage,onChangePage:C=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:A=l.paginationTotalRows,paginationDefaultPage:N=l.paginationDefaultPage,paginationResetDefaultPage:Q=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ce=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:ae=l.paginationIconNext,paginationIconPrevious:Pe=l.paginationIconPrevious,paginationComponent:De=l.paginationComponent,paginationComponentOptions:He=l.paginationComponentOptions,responsive:$e=l.responsive,progressPending:G=l.progressPending,progressComponent:me=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:he=l.noDataComponent,disabled:Z=l.disabled,noTableHead:Fe=l.noTableHead,noHeader:je=l.noHeader,fixedHeader:we=l.fixedHeader,fixedHeaderScrollHeight:Ie=l.fixedHeaderScrollHeight,pagination:Y=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:fe=l.subHeaderAlign,subHeaderWrap:Ce=l.subHeaderWrap,subHeaderComponent:Te=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Ot=l.contextComponent,expandableRows:ye=l.expandableRows,onRowClicked:Be=l.onRowClicked,onRowDoubleClicked:Ge=l.onRowDoubleClicked,onRowMouseEnter:Ve=l.onRowMouseEnter,onRowMouseLeave:Ue=l.onRowMouseLeave,sortIcon:kt=l.sortIcon,onSort:Pt=l.onSort,sortFunction:Qe=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:Dt=l.expandableRowsComponent,expandableRowsComponentProps:Ht=l.expandableRowsComponentProps,expandableRowDisabled:Ye=l.expandableRowDisabled,expandableRowsHideExpander:Je=l.expandableRowsHideExpander,expandOnRowClicked:$t=l.expandOnRowClicked,expandOnRowDoubleClicked:Ft=l.expandOnRowDoubleClicked,expandableRowExpanded:Ke=l.expandableRowExpanded,expandableInheritConditionalStyles:jt=l.expandableInheritConditionalStyles,defaultSortFieldId:It=l.defaultSortFieldId,defaultSortAsc:Tt=l.defaultSortAsc,clearSelectedRows:Xe=l.clearSelectedRows,conditionalRowStyles:Lt=l.conditionalRowStyles,theme:Ze=l.theme,customStyles:qe=l.customStyles,direction:ge=l.direction,onColumnOrderChange:Mt=l.onColumnOrderChange}=e,{tableColumns:et,draggingColumnId:tt,handleDragStart:nt,handleDragEnter:ot,handleDragOver:at,handleDragLeave:rt,handleDragEnd:lt,defaultSortDirection:At,defaultSortColumn:_t}=xo(o,Mt,It,Tt),[{rowsPerPage:J,currentPage:_,selectedRows:_e,allSelected:it,selectedCount:st,selectedColumn:W,sortDirection:re,toggleOnSelectedRowsChange:zt},ee]=n.exports.useReducer(an,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:_t,toggleOnSelectedRowsChange:!1,sortDirection:At,currentPage:N,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:dt=!1,persistSelectedOnPageChange:Re=!1}=U,ct=!(!v||!Re&&!dt),Nt=Y&&!G&&t.length>0,Wt=De||so,Bt=n.exports.useMemo(()=>((c={},x="default",T="default")=>{const z=wt[x]?x:T;return bo({table:{style:{color:(d=wt[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},c);var d})(qe,Ze),[qe,Ze]),Gt=n.exports.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),I=n.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const c=W.sortFunction,x=re===X.ASC?c:(T,z)=>-1*c(T,z);return[...t].sort(x)}return function(c,x,T,z){return x?z&&typeof z=="function"?z(c.slice(0),x,T):c.slice(0).sort((d,ve)=>{let K,B;if(typeof x=="string"?(K=Ne(d,x),B=Ne(ve,x)):(K=x(d),B=x(ve)),T==="asc"){if(K<B)return-1;if(K>B)return 1}if(T==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):c}(t,W==null?void 0:W.selector,re,Qe)},[Ae,W,re,t,Qe]),pe=n.exports.useMemo(()=>{if(Y&&!v){const c=_*J,x=c-J;return I.slice(x,c)}return I},[_,Y,v,J,I]),Vt=n.exports.useCallback(c=>{ee(c)},[]),Ut=n.exports.useCallback(c=>{ee(c)},[]),Qt=n.exports.useCallback(c=>{ee(c)},[]),Yt=n.exports.useCallback((c,x)=>Be(c,x),[Be]),Jt=n.exports.useCallback((c,x)=>Ge(c,x),[Ge]),Kt=n.exports.useCallback((c,x)=>Ve(c,x),[Ve]),Xt=n.exports.useCallback((c,x)=>Ue(c,x),[Ue]),le=n.exports.useCallback(c=>ee({type:"CHANGE_PAGE",page:c,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:Re}),[v,Re,w]),Zt=n.exports.useCallback(c=>{const x=ue(A||pe.length,c),T=ze(_,x);v||le(T),ee({type:"CHANGE_ROWS_PER_PAGE",page:T,rowsPerPage:c})},[_,le,v,A,pe.length]);if(Y&&!v&&I.length>0&&pe.length===0){const c=ue(I.length,J),x=ze(_,c);le(x)}te(()=>{O({allSelected:it,selectedCount:st,selectedRows:_e.slice(0)})},[zt]),te(()=>{Pt(W,re,I.slice(0))},[W,re]),te(()=>{C(_,A||I.length)},[_]),te(()=>{M(J,_)},[J]),te(()=>{le(N)},[N,Q]),te(()=>{if(Y&&v&&A>0){const c=ue(A,J),x=ze(_,c);_!==x&&le(x)}},[A]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Xe})},[h,Xe]),n.exports.useEffect(()=>{if(!H)return;const c=I.filter(T=>H(T)),x=h?c.slice(0,1):c;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:x,totalRows:I.length,mergeSelections:ct})},[t,H]);const qt=w?pe:I,en=Re||h||R;return n.exports.createElement(tn,{theme:Bt},!je&&(!!a||!!r)&&n.exports.createElement(Gn,{title:a,actions:r,showMenu:!Le,selectedCount:st,direction:ge,contextActions:E,contextComponent:Ot,contextMessage:Me}),q&&n.exports.createElement(Qn,{align:fe,wrapContent:Ce},Te),n.exports.createElement(Jn,Object.assign({responsive:$e,fixedHeader:we,fixedHeaderScrollHeight:Ie},Gt),n.exports.createElement(Kn,null,G&&!V&&n.exports.createElement(bt,null,me),n.exports.createElement(ln,{disabled:Z,className:"rdt_Table",role:"table"},!Fe&&(!!V||I.length>0&&!G)&&n.exports.createElement(dn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:we},n.exports.createElement(cn,{className:"rdt_TableHeadRow",role:"row",dense:y},p&&(en?n.exports.createElement(de,{style:{flex:"0 0 48px"}}):n.exports.createElement(Mn,{allSelected:it,selectedRows:_e,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:f,rowData:qt,keyField:i,mergeSelections:ct,onSelectAllRows:Ut})),ye&&!Je&&n.exports.createElement(Xn,null),et.map(c=>n.exports.createElement(Tn,{key:c.id,column:c,selectedColumn:W,disabled:G||I.length===0,pagination:Y,paginationServer:v,persistSelectedOnSort:dt,selectableRowsVisibleOnly:w,sortDirection:re,sortIcon:kt,sortServer:Ae,onSort:Vt,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt,draggingColumnId:tt})))),!I.length&&!G&&n.exports.createElement(Zn,null,he),G&&V&&n.exports.createElement(bt,null,me),!G&&I.length>0&&n.exports.createElement(Yn,{className:"rdt_TableBody",role:"rowgroup"},pe.map((c,x)=>{const T=ie(c,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(T)?x:T,d=Oe(c,_e,i),ve=!!(ye&&Ke&&Ke(c)),K=!!(ye&&Ye&&Ye(c));return n.exports.createElement(Pn,{id:z,key:z,keyField:i,"data-row-id":z,columns:et,row:c,rowCount:I.length,rowIndex:x,selectableRows:p,expandableRows:ye,expandableIcon:L,highlightOnHover:g,pointerOnHover:b,dense:y,expandOnRowClicked:$t,expandOnRowDoubleClicked:Ft,expandableRowsComponent:Dt,expandableRowsComponentProps:Ht,expandableRowsHideExpander:Je,defaultExpanderDisabled:K,defaultExpanded:ve,expandableInheritConditionalStyles:jt,conditionalRowStyles:Lt,selected:d,selectableRowsHighlight:j,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:f,selectableRowsSingle:h,striped:s,onRowExpandToggled:S,onRowClicked:Yt,onRowDoubleClicked:Jt,onRowMouseEnter:Kt,onRowMouseLeave:Xt,onSelectedRow:Qt,draggingColumnId:tt,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt})}))))),Nt&&n.exports.createElement("div",null,n.exports.createElement(Wt,{onChangePage:le,onChangeRowsPerPage:Zt,rowCount:A||I.length,currentPage:_,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:Pe,paginationComponentOptions:He})))});export{wo as Q};
