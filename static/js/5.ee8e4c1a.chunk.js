(this.webpackJsonpworldgen=this.webpackJsonpworldgen||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"Biome",(function(){return q}));var n=a(2),c=a(3),r=a(5),i=a(1),l=a.n(i),o=[[],["minecraft:lake_water","minecraft:lake_lava"],[],["minecraft:monster_room"],[],[],["minecraft:ore_dirt","minecraft:ore_gravel","minecraft:ore_granite","minecraft:ore_diorite","minecraft:ore_andesite","minecraft:ore_coal","minecraft:ore_iron","minecraft:ore_gold","minecraft:ore_redstone","minecraft:ore_diamond","minecraft:ore_lapis","minecraft:disk_sand","minecraft:disk_clay","minecraft:disk_gravel"],[],["minecraft:patch_tall_grass_2","minecraft:plain_vegetation","minecraft:flower_plain_decorated","minecraft:patch_grass_plain","minecraft:brown_mushroom_normal","minecraft:red_mushroom_normal","minecraft:patch_sugar_cane","minecraft:patch_pumpkin","minecraft:spring_water","minecraft:spring_lava"],["minecraft:freeze_top_layer"]],s=["minecraft:village_plains","minecraft:pillager_outpost","minecraft:mineshaft","minecraft:stronghold","minecraft:ruined_portal"],u={ambient:[{type:"minecraft:bat",weight:10,minCount:8,maxCount:8}],creature:[{type:"minecraft:sheep",weight:12,minCount:4,maxCount:4},{type:"minecraft:pig",weight:10,minCount:4,maxCount:4},{type:"minecraft:chicken",weight:10,minCount:4,maxCount:4},{type:"minecraft:cow",weight:8,minCount:4,maxCount:4},{type:"minecraft:horse",weight:5,minCount:2,maxCount:6},{type:"minecraft:donkey",weight:1,minCount:1,maxCount:3}],misc:[],monster:[{type:"minecraft:spider",weight:100,minCount:4,maxCount:4},{type:"minecraft:zombie",weight:95,minCount:4,maxCount:4},{type:"minecraft:zombie_villager",weight:5,minCount:1,maxCount:1},{type:"minecraft:skeleton",weight:100,minCount:4,maxCount:4},{type:"minecraft:creeper",weight:100,minCount:4,maxCount:4},{type:"minecraft:slime",weight:100,minCount:4,maxCount:4},{type:"minecraft:enderman",weight:10,minCount:1,maxCount:4},{type:"minecraft:witch",weight:5,minCount:1,maxCount:1}],water_ambient:[],water_creature:[]},b={effects:{mood_sound:{sound:"minecraft:ambient.cave",tick_delay:6e3,block_search_extent:8,offset:2},sky_color:7907327,fog_color:12638463,water_color:4159204,water_fog_color:329011},carvers:{air:["minecraft:cave","minecraft:canyon"]},starts:s,features:o,spawners:u,category:"plains",precipitation:"rain",surface_builder:"minecraft:grass",scale:.05,downfall:.4,depth:.12,temperature:.8,player_spawn_friendly:!0,spawn_costs:{}},j=["ambient_entity_effect","angry_villager","ash","barrier","block","bubble","bubble_column_up","bubble_pop","campfire_cosy_smoke","campfire_signal_smoke","cloud","composter","crimson_spore","crit","current_down","damage_indicator","dolphin","dragon_breath","dripping_honey","dripping_lava","dripping_obsidian_tear","dripping_water","dust","effect","elder_guardian","enchant","enchanted_hit","end_rod","entity_effect","explosion","explosion_emitter","falling_dust","falling_honey","falling_lava","falling_nectar","falling_obsidian_tear","falling_water","firework","fishing","flame","flash","happy_villager","heart","instant_effect","item","item_slime","item_snowball","landing_honey","landing_lava","landing_obsidian_tear","large_smoke","lava","mycelium","nautilus","note","poof","portal","rain","reverse_portal","smoke","sneeze","soul","soul_fire_flame","spit","splash","squid_ink","sweep_attack","totem_of_undying","underwater","warped_spore","white_ash","witch"].map((function(e){return{value:"minecraft:"+e,label:e}})),d={options:{type:"minecraft:crimson_spore"},probability:.015},m=a(58),f=a(20),h=a(12),p=a(10),O=a(9),g=a(0),_=["ambient_sound"],v=["mood_sound"],x=["foliage_color","grass_color"],C=["particle"],y=l.a.memo((function(e){var t=e.effects,a=e.onChange,l=Object(i.useState)(t),o=Object(c.a)(l,2),s=o[0],u=o[1],b=Object(i.useState)(t.particle),j=Object(c.a)(b,2),f=j[0],p=j[1],y=Object(i.useContext)(h.a).vanilla.sounds,N=Object(i.useCallback)((function(e){a(Object(n.a)(Object(n.a)({},t),e))}),[t,a]),S=Object(i.useCallback)((function(e){a(Object(n.a)(Object(n.a)({},t),e)),u(Object(n.a)(Object(n.a)({},s),e))}),[s,t,a]),F=Object(i.useCallback)((function(e){a(null===e?function(e){e.ambient_sound;return Object(m.a)(e,_)}(t):Object(n.a)(Object(n.a)({},t),{},{ambient_sound:e.value}))}),[t,a]),M=Object(i.useCallback)((function(e){null===e?a(function(e){e.mood_sound;return Object(m.a)(e,v)}(t)):"undefined"===typeof t.mood_sound?a(Object(n.a)(Object(n.a)({},t),{},{mood_sound:Object(n.a)({tick_delay:6e3,block_search_extent:8,offset:2},e)})):a(Object(n.a)(Object(n.a)({},t),{},{mood_sound:Object(n.a)(Object(n.a)({},t.mood_sound),e)}))}),[t,a]),D=Object(i.useCallback)((function(e){a(Object(n.a)(Object(n.a)({},t),{},{particle:e})),p(e)}),[t,a]),P=Object(i.useCallback)((function(e){e.target.checked?a(Object(n.a)(Object(n.a)({},t),{},{foliage_color:s.foliage_color||10387789,grass_color:s.grass_color||9470285})):a(function(e){e.foliage_color,e.grass_color;return Object(m.a)(e,x)}(t))}),[s,t,a]),T=Object(i.useCallback)((function(e){e.target.checked?a(Object(n.a)(Object(n.a)({},t),{},{particle:f||d})):a(function(e){e.particle;return Object(m.a)(e,C)}(t))}),[a,t,f]),G=t.hasOwnProperty("foliage_color")||t.hasOwnProperty("grass_color"),B=t.hasOwnProperty("particle");return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("fieldset",{children:[Object(g.jsx)("legend",{children:"Biome effects"}),Object(g.jsxs)("div",{className:"form-group form-row",children:[Object(g.jsx)(r.a,{id:"sky_color",value:t.sky_color,upChange:N,children:"Sky color"}),Object(g.jsx)(r.a,{id:"fog_color",value:t.fog_color,upChange:N,children:"Fog color"}),Object(g.jsx)(r.a,{id:"water_color",value:t.water_color,upChange:N,children:"Water color"}),Object(g.jsx)(r.a,{id:"water_fog_color",value:t.water_fog_color,upChange:N,children:"Water fog color"}),G&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r.a,{id:"foliage_color",value:t.foliage_color||10387789,upChange:S,children:"Foliage color"}),Object(g.jsx)(r.a,{id:"grass_color",value:t.grass_color||9470285,upChange:S,children:"Grass color"})]}),Object(g.jsx)(r.b,{id:"block-toggle",checked:G,onChange:P,children:"Optionals"}),Object(g.jsx)(r.b,{id:"particle",checked:B,onChange:T,children:"Particle"})]}),B&&Object(g.jsx)(k,{particle:t.particle,onChange:D})]}),Object(g.jsxs)("fieldset",{children:[Object(g.jsx)("legend",{children:"Optionals sounds"}),Object(g.jsxs)("div",{className:"form-group form-row",children:["Ambient :",Object(g.jsx)("div",{style:{flexGrow:.95,flexShrink:1},children:Object(g.jsx)(O.b,{options:y,value:y.find((function(e){return t.ambient_sound===e.value})),onChange:F,isClearable:!0})})]}),Object(g.jsx)(w,{options:y,sound:t.mood_sound,onChange:M})]})]})})),w=l.a.memo((function(e){var t=e.onChange,a=e.options,n=e.sound,c=Object(i.useCallback)((function(e){t(null===e?null:{sound:e.value})}),[t]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"form-group form-row",children:["Mood :",Object(g.jsx)("div",{style:{flexGrow:.95,flexShrink:1},children:Object(g.jsx)(O.b,{options:a,value:a.find((function(e){return(n||{}).sound===e.value})),onChange:c,isClearable:!0})})]}),"object"===typeof n&&Object(g.jsxs)("div",{className:"form-row",style:{marginTop:"0.5rem"},children:[Object(g.jsx)(r.c,{id:"tick_delay",value:n.tick_delay,upChange:t,className:"mls",children:"Tick delay"}),Object(g.jsx)(r.c,{id:"block_search_extent",value:n.block_search_extent,upChange:t,className:"mls",children:"Block search extent"}),Object(g.jsx)(r.c,{id:"offset",value:n.offset,upChange:t,step:.1,className:"mls",children:"Offset"})]})]})})),k=l.a.memo((function(e){var t=e.onChange,a=e.particle;a=Object(p.e)(a||d,a,t);var c=Object(i.useCallback)((function(e){t(Object(n.a)(Object(n.a)({},a),{},{options:{type:e.value}}))}),[a,t]),l=Object(i.useCallback)((function(e){t(Object(n.a)(Object(n.a)({},a),{},{options:Object(n.a)(Object(n.a)({},a.options),e)}))}),[a,t]),o=Object(i.useCallback)((function(e){t(Object(n.a)(Object(n.a)({},a),{},{options:Object(n.a)(Object(n.a)({},a.options),e)}))}),[a,t]),s=Object(i.useCallback)((function(e){t(Object(n.a)(Object(n.a)({},a),{},{options:Object(n.a)(Object(n.a)({},a.options),{},{scale:e})}))}),[a,t]),u=Object(i.useCallback)((function(e){t(Object(n.a)(Object(n.a)({},a),{},{probability:e}))}),[a,t]),b=a.options;return Object(g.jsxs)("div",{className:"form-group form-row",children:[Object(g.jsx)("div",{style:{flexGrow:.95,flexShrink:1},children:Object(g.jsx)(O.b,{options:j,value:j.find((function(e){return b.type===e.value})),onChange:c})}),("minecraft:block"===b.type||"minecraft:falling_dust"===b.type)&&Object(g.jsx)("div",{style:{flexGrow:1},children:Object(g.jsx)(f.a,{block:b,onChange:l})}),"minecraft:dust"===b.type&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{r:b.r,g:b.g,b:b.b,onChange:o}),Object(g.jsx)(r.c,{id:"scale",value:b.scale,onChange:s,defaultValue:"1",step:"0.1",className:"mls",children:"Scale"})]}),Object(g.jsx)(r.c,{id:"probability",value:a.probability,onChange:u,step:"0.005",className:"mlm",children:"Probability"})]})})),N=l.a.memo((function(e){var t=e.r,a=e.g,n=e.b,c=e.onChange,l=Object(i.useCallback)((function(e){c({r:(e>>16&255)/255,g:(e>>8&255)/255,b:(255&e)/255})}),[c]),o=void 0;return"number"===typeof t&&"number"===typeof a&&"number"===typeof n&&(o=(t=255*t&255)<<16|(a=255*a&255)<<8|(n=255*n&255)),Object(g.jsx)(r.a,{value:o,defaultValue:230512,onChange:l,className:"mls",children:"Color"})})),S=a(14),F=a(8),M=a(18),D=l.a.memo((function(e){var t=e.onChange,a=e.data,c=Object(p.e)(a||u,a,t),r=Object(i.useContext)(h.a).vanilla.entities,l=Object(i.useCallback)((function(e,a){t(Object(n.a)(Object(n.a)({},c),{},Object(S.a)({},e,a)))}),[c,t]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{group:"ambient",data:c.ambient,onChange:l,entities:r,children:"Ambient"}),Object(g.jsx)(P,{group:"creature",data:c.creature,onChange:l,entities:r,children:"Creature"}),Object(g.jsx)(P,{group:"misc",data:c.misc,onChange:l,entities:r,children:"Miscellaneous"}),Object(g.jsx)(P,{group:"monster",data:c.monster,onChange:l,entities:r,children:"Monster"}),Object(g.jsx)(P,{group:"water_ambient",data:c.water_ambient,onChange:l,entities:r,children:"Water ambient"}),Object(g.jsx)(P,{group:"water_creature",data:c.water_creature,onChange:l,entities:r,children:"Water creature"})]})})),P=l.a.memo((function(e){var t=e.children,a=e.entities,n=e.data,r=void 0===n?[]:n,l=e.group,o=e.onChange,s=Object(M.a)(),u=Object(c.a)(s,2),b=u[0],j=u[1],d=b?"Less...":"More...",m=Object(p.c)((function(e){return o(l,e)}),r,(function(e){return{type:(a.filter((function(t){return!e.some((function(e){return e.type===t.value}))}))[0]||{value:"minecraft:cow"}).value,minCount:1,maxCount:1,weight:1}}),!0),f=Object(c.a)(m,4),h=f[0],O=f[1],_=f[2],v=f[3],x=Object(i.useCallback)((function(e){O(e),b||j()}),[O,j,b]);return b?Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"toggle-label",children:[t,Object(g.jsxs)("div",{className:"btn-group",children:[a.length>h.length&&Object(g.jsx)(F.a,{onClick:x,children:"Add"}),h.length>0&&Object(g.jsx)(F.a,{cat:"secondary",onClick:j,children:d})]})]}),h.map((function(e,t){var n=a.filter((function(t){return e.type===t.value||!h.some((function(e){return e.type===t.value}))}));return Object(g.jsx)(T,{data:e,onChange:_,onDelete:v,index:t,options:n},e.type)}))]}):Object(g.jsxs)("div",{className:"toggle-label",children:[t,Object(g.jsxs)("div",{className:"btn-group",children:[h.length>0&&Object(g.jsx)(F.a,{cat:"secondary",onClick:j,children:d}),h.length<1&&Object(g.jsx)(F.a,{onClick:x,children:"Add"})]})]})})),T=l.a.memo((function(e){var t=e.data,a=e.index,c=e.options,l=e.onChange,o=e.onDelete,s=Object(i.useCallback)((function(e){l(Object(n.a)(Object(n.a)({},t),{},{type:e.value}),t)}),[t,l]),u=Object(i.useCallback)((function(e){l(Object(n.a)(Object(n.a)({},t),e),t)}),[t,l]),b=function(e){var a=Object.keys(e)[0],c=e[a];("minCount"===a&&c<=t.maxCount||"maxCount"===a&&c>=t.minCount)&&l(Object(n.a)(Object(n.a)({},t),{},Object(S.a)({},a,c)),t)},j=Object(i.useCallback)((function(e){o(e,a)}),[a,o]),d=Object(i.useMemo)((function(){return c.find((function(e){return e.value===t.type}))}),[t.type,c]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Mob type"})," : ",Object(g.jsx)(O.b,{options:c,value:d,onChange:s})]}),Object(g.jsxs)("div",{className:"form-group form-row",children:[Object(g.jsx)(r.c,{id:"weight",value:t.weight,upChange:u,children:"Weight"}),Object(g.jsx)(r.c,{id:"minCount",value:t.minCount,max:t.maxCount,upChange:b,children:"Min count"}),Object(g.jsx)(r.c,{id:"maxCount",value:t.maxCount,min:t.minCount,upChange:b,children:"Max count"}),Object(g.jsx)("div",{className:"form-inline",children:Object(g.jsx)(F.a,{cat:"danger",onClick:j,children:"Delete"})})]}),Object(g.jsx)("hr",{})]})})),G=l.a.memo((function(e){var t=e.onChange,a=e.starts;a=Object(p.e)(a||s,a,t);var n=Object(i.useCallback)((function(e){t(null===e?[]:e.map((function(e){return e.value})))}),[t]),c=Object(i.useMemo)((function(){return["pillager_outpost","mineshaft","mineshaft_mesa","mansion","jungle_pyramid","desert_pyramid","igloo","shipwreck","shipwreck_beached","swamp_hut","stronghold","monument","ocean_ruin_cold","ocean_ruin_warm","fortress","nether_fossil","end_city","buried_treasure","bastion_remnant","village_plains","village_desert","village_savanna","village_snovy","village_taiga","ruined_portal","ruined_portal_desert","ruined_portal_jungle","ruined_portal_swamp","ruined_portal_mountain","ruined_portal_ocean","ruined_portal_nether"].map((function(e){return{value:"minecraft:"+e,label:"minecraft:"+e}}))}),[]);return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"starts",children:"Structures"}),Object(g.jsx)(O.b,{isMulti:!0,id:"starts",options:c,onChange:n,value:c.filter((function(e){return a.includes(e.value)}))})]})})),B=a(89),W=a(11),z=l.a.memo((function(e){var t=e.onChange,a=e.features,n=Object(i.useCallback)((function(e,n){t(a.map((function(t,a){return e===a?n:t})))}),[a,t]);return Object(p.e)(a||o,a,t),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Features"}),Object(g.jsx)("p",{className:"help",children:Object(g.jsx)("small",{className:"text-muted",children:"Each generation feature is associated with a priority. The higher the priority, the later the feature will be applied."})}),Object(g.jsx)("ol",{children:a.map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsx)(A,{value:e,onChange:n,priority:t})},t)}))})]})})),A=l.a.memo((function(e){var t=e.onChange,a=e.priority,n=e.value,c=Object(W.c)("features"),r=Object(i.useCallback)((function(e){t(a,null===e?[]:e.map((function(e){return e.value})))}),[t,a]);return Object(g.jsx)(O.b,{isMulti:!0,options:c,onChange:r,defaultValue:c.filter((function(e){return n.includes(e.value)}))})})),V=a(35),E=a(29),J=a(30);function q(e){var t=e.data,a=void 0===t?b:t,l=e.onSave,o=Object(i.useState)(a),s=Object(c.a)(o,2),u=s[0],j=s[1],d=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{carvers:e})}))}),[]),m=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{starts:e})}))}),[]),f=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{effects:e})}))}),[]),h=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{features:e})}))}),[]),p=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{spawners:e})}))}),[]),O=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{surface_builder:e.value})}))}),[]),_=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{precipitation:e.value})}))}),[]),v=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),{},{category:e.value})}))}),[]),x=Object(i.useCallback)((function(e){j((function(t){return Object(n.a)(Object(n.a)({},t),e)}))}),[]),C=Object(i.useCallback)((function(e){var t=e.target.checked;j((function(e){return Object(n.a)(Object(n.a)({},e),{},{player_spawn_friendly:t})}))}),[]),w=Object(i.useCallback)((function(e){e.preventDefault();var t=Object.fromEntries(new FormData(e.target));l(Object(n.a)(Object(n.a)({},u),t))}),[l,u]);return Object(g.jsxs)("form",{onSubmit:w,children:[Object(g.jsxs)(J.a,{example:"arctic",type:"biomes",value:u.key,expectBreakage:"undefined"!==typeof a.key,onSelectLoad:j,children:["biome",Object(g.jsx)(E.a,{data:u})]}),Object(g.jsx)(y,{effects:u.effects,onChange:f}),Object(g.jsxs)("fieldset",{children:[Object(g.jsx)(L,{category:u.category,onChange:v}),Object(g.jsx)(R,{value:u.precipitation,onChange:_})]}),Object(g.jsxs)("fieldset",{children:[Object(g.jsx)("legend",{children:"Generation"}),Object(g.jsx)(I,{value:u.surface_builder,onChange:O}),Object(g.jsx)(G,{starts:u.starts,onChange:m}),Object(g.jsx)(z,{features:u.features,onChange:h})]}),Object(g.jsx)(B.a,{carvers:u.carvers,onChange:d}),Object(g.jsxs)("fieldset",{children:[Object(g.jsx)("legend",{children:"Creatures"}),Object(g.jsx)(D,{data:u.spawners,onChange:p})]}),Object(g.jsxs)("fieldset",{children:[Object(g.jsx)("legend",{children:"Settings"}),Object(g.jsxs)("div",{className:"form-group form-row",children:[Object(g.jsx)(r.b,{id:"player_spawn_friendly",checked:"boolean"!==typeof u.player_spawn_friendly||u.player_spawn_friendly,onChange:C,children:"Player spawn friendly"}),Object(g.jsx)(r.c,{id:"creature_spawn_probability",value:u.creature_spawn_probability,defaultValue:.1,step:.1,required:!1,upChange:x,children:"Creature spawn probability"})]}),Object(g.jsxs)("div",{className:"form-group form-row",children:[Object(g.jsx)(r.c,{id:"scale",value:u.scale||.05,min:V.b,step:.05,upChange:x,children:"Scale"}),Object(g.jsx)(r.c,{id:"downfall",value:u.downfall||.4,min:V.b,step:.1,upChange:x,children:"Downfall"}),Object(g.jsx)(r.c,{id:"depth",value:u.depth||.12,min:V.b,step:.01,upChange:x,children:"Depth"}),Object(g.jsx)(r.c,{id:"temperature",value:u.temperature||.8,min:V.b,step:.1,upChange:x,children:"Temperature"}),Object(g.jsx)("p",{className:"mts",children:Object(g.jsxs)("small",{className:"text-muted",children:["The ",Object(g.jsx)("em",{children:"scale"})," parameter defines terrain amplitude, ",Object(g.jsx)("em",{children:"downfall"})," controls grass and foliage color, ",Object(g.jsx)("em",{children:"depth"})," is the difference from sea level, ",Object(g.jsx)("em",{children:"temperature"})," controls some gameplay features like whether snow golems take damage. The default values are those of the plains biome."]})})]})]}),Object(g.jsx)(F.a,{type:"submit",children:"Save"})]})}var L=l.a.memo((function(e){var t=e.category,a=void 0===t?"plains":t,n=e.onChange,c=[{value:"beach",label:"Beach"},{value:"desert",label:"Desert"},{value:"extreme_hills",label:"Extreme hills"},{value:"forest",label:"Forest"},{value:"icy",label:"Icy"},{value:"jungle",label:"Jungle"},{value:"mesa",label:"Mesa"},{value:"nether",label:"Nether"},{value:"none",label:"None"},{value:"ocean",label:"Ocean"},{value:"plains",label:"Plains"},{value:"river",label:"River"},{value:"savanna",label:"Savanna"},{value:"swamp",label:"Swamp"},{value:"taiga",label:"Taiga"},{value:"the_end",label:"The end"}];return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"category",children:"Category"}),Object(g.jsx)(O.b,{options:c,value:c.find((function(e){return e.value===a})),onChange:n})]})})),R=l.a.memo((function(e){var t=e.onChange,a=e.value,n=void 0===a?"rain":a,c=[{value:"none",label:"None"},{value:"rain",label:"Rain"},{value:"snow",label:"Snow"}];return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"precipitation",children:"Precipitation"}),Object(g.jsx)(O.b,{options:c,value:c.find((function(e){return e.value===n})),onChange:t})]})})),I=l.a.memo((function(e){var t=e.onChange,a=e.value,n=void 0===a?"minecraft:grass":a,c=Object(W.c)("surfaces");return Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"surface_builder",children:"Surface builder"}),Object(g.jsx)(O.b,{options:c,value:c.find((function(e){return e.value===n})),onChange:t})]})}));t.default=q}}]);
//# sourceMappingURL=5.ee8e4c1a.chunk.js.map