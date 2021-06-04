function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}export function chat(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (chat, styles) {
      ;pug_debug_line = 1;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"chat.css\"\u002F\u003E";
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([styles], [true]), false, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + "\u003Ch2 class=\"chatHeader\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chat.header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + "\u003Cp class=\"chatText\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat\u002Fui\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = chat.chatText) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "chat" in locals_for_with ?
        locals_for_with.chat :
        typeof chat !== 'undefined' ? chat : undefined, "styles" in locals_for_with ?
        locals_for_with.styles :
        typeof styles !== 'undefined' ? styles : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}