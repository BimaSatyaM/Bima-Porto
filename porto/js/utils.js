const SS = {
    get:    (k, d=null) => { const v=sessionStorage.getItem(k); if(v===null) return d; if(v==='true') return true; if(v==='false') return false; const n=parseFloat(v); return isNaN(n)?v:n; },
    set:    (k,v) => sessionStorage.setItem(k, String(v)),
    remove: (k)   => sessionStorage.removeItem(k)
};

function formatTime(s) {
    if (isNaN(s)||s<0) return '0:00';
    return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
}

const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);