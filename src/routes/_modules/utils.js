export const makeObject =(h, d, f) => { // is this right???
  const filterColumns = f || ["inserted_at", "updated_at"];
  return h
      .filter(ki => !filterColumns.includes(ki))
      .map((ki, i) => [ki, d[i]])
      .reduce((o, [k, v]) => ({ ...o, [k]: v }), {});
}

export const sfx = (x) => { 
  if(x === undefined ){ return 1000 }
  else if(x === null) { return 100; } 
  else if(x === 0) { return 0; } 
  else { return x; } }

// export function a(a) {a.filter(v => v !== null)}
export const nullFirstarrayFix = (a) => {
  if(a[0] === null) {a.shift(); return a;}
  if(a[0]){
      if(a[0][0] === null){
          a.shift(); return a;
      }
  }
  return a;
}