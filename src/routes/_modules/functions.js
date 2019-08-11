import { makeObject, sfx, nullFirstarrayFix } from './utils.js';
export { makeObject, sfx, nullFirstarrayFix } from './utils.js';

import StorageDB from "./indexdb/storage.js";

const port = process.env.NODE_ENV === 'development' ? '8300' : '8300'
const domain = process.env.NODE_ENV === 'development' ? 'localhost' : 'marvelartjewellery.com'
const server = process.env.NODE_ENV === 'development' ? `http://${domain}:${port}` : `http://${domain}:${port}`;
export const img_url = `${server}/demo/v1/user/download_id?path=`
export const thumb_url = `${server}/demo/v1/user/thumb_id?path=`
export const ws_server = process.env.NODE_ENV === 'development' ? `ws://${domain}:${port}/echo` : `ws://${domain}:${port}/echo`;

export function all_h(t, p) {  return [ t, "header", sfx(p)]; }

export function all(t, p) {  return [ t, "data", sfx(p)]; }

function save(t, p) {return `save_${t}_data${sfx(p)}`}
export function m_save_(t, p) { return save(`material_${t}`, p) }
export function p_save_(t, p) { return save(`product_${t}`, p) }
export function s_save_(t, p) { return save(`setting_${t}`, p) }
export function e_save_(t, p) { return save(`entity_${t}`, p) }
export function a_save_(t, p) { return save(`account_${t}`, p) }
export function f_save_(t, p) { return save(`mfg_${t}`, p) }
export function node_save_(t, p) { return save(`node_${t}`, p) }

function del(t, p) {return `del_${t}_data${sfx(p)}`}
export function m_del_(t, p) { return del(`material_${t}`, p) }
export function p_del_(t, p) { return del(`product_${t}`, p) }
export function s_del_(t, p) { return del(`setting_${t}`, p) }
export function e_del_(t, p) { return del(`entity_${t}`, p) }
export function a_del_(t, p) { return del(`account_${t}`, p) }
export function f_del_(t, p) { return del(`mfg_${t}`, p) }
export function node_del_(t, p) { return del(`node_${t}`, p) }

const e_category = all("category", 111);
export const menuCategories = (S) => new Promise((resolve, reject) => { S.bind_(e_category, (data) => { resolve(data); S.unbind(e_category)  }, [[null, "=NULL"],[null, null, null, null, 0]]); });
const e_entity = all("entity", 110)
export const getUser = (S, id) => new Promise((resolve, reject) => { S.bind_(e_entity, (data) => { resolve(data); S.unbind(e_entity) }, [[`=${id}`]]); });

export const productImageBase = async (S, id) => {
    if (false && process.browser) { 
        const url = await new Promise((resolve, reject) => {
        S.bind_("product_attachment_data", "", "", (data) => {
            if(data instanceof Blob){
                const url = URL.createObjectURL(data)
                resolve(url)
            } else {
                resolve("")
            }
            // const reader = new FileReader();
            // reader.onload = function(e) { 
            // 	const url = e.target.result
            // 	resolve(url)
            // };
            // reader.readAsDataURL(data);
            }, id);
         });
        return url
    } else {
        return `${img_url}${id}`
    }
}

/*
import cookie from 'cookie'
export const setCookie  = res => {
    res.setHeader('Set-Cookie', cookie.serialize('name', "Dobo", {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
    }));
}*/

export const authCeck = async(S) => {
    const fns = [];
    //const { Server: S_ } = await import("../_modules/ws_events_dispatcher.js");
    //let S; if (typeof S_ == "function") { S = new S_(); } else { S = S_; }

    const isAuth = await new Promise((resolve, reject) => { S.bind_( "is_admin_auth", "", "", data => { 
      resolve(data); }, [[]] );
		});
		if(!isAuth){
      if(window.location.pathname !== "/admin/account/Login"){
          window.location.href = "/admin/account/Login"
      }
    }
    S.unbind_(fns)
    return isAuth;
}

export const productImage = async (S, parray) => {
    for (let c of parray) {
        const idx = c[48].findIndex(v => v[3])
        const main = idx > -1 ? c[48][idx][0] : 0
        const i = await productImageBase(S, main)
        c.push(i)
    }
}
export const get_p_purity_idx = (c, purity_id) => {
    let idx;
    if(purity_id){
        idx = c[46].findIndex(v => v[0] === purity_id)
    } else {
        idx = c[46].findIndex(v => v[2] === true)
    }
    // if(idx == -1) { idx = p_purities.findIndex(v => v[0] === 6) } // gold 18k
    if(idx == -1) { idx = c[46].length ? 0 : -1 }
    return idx;
}
export const get_p_purity_tone_idx = (tarray, tone_id) => {
    let idx;
    if(tone_id){
        idx = tarray.findIndex(v => v[0] === tone_id)
    } else {
        idx = tarray.findIndex(v => v[3] === true)
    }
    // if(idx == -1) { idx = p_purities.findIndex(v => v[0] === 6) } // gold 18k
    if(idx == -1) { idx = tarray.length ? 0 : -1 }
    return idx;
}
export const product_purity_price = (parray, purity_id, fn, tone_id, tfn) => {
    for (let c of (parray)) {
        const idx = get_p_purity_idx(c, fn ? fn(c) : purity_id)
        let main = 0; //46 =  [purity_id, [[tone_id, weight, price]] ]
        if(idx > -1) { 
            const tone_array = (c[46][idx][1])
            const tone_idx = get_p_purity_tone_idx(tone_array, tfn ? fn(tone_array) : tone_id)
            if(tone_idx > -1) {
                main = tone_array[tone_idx][2]
            }
        }
        c.push(main);
    }
}
export const get_p_clarity_idx = (c, clarity_id) => {
        let idx;
        if(clarity_id) {
            idx = c[45].findIndex(v => v[0] === clarity_id)
        } else {
            idx = c[45].findIndex(v => v[4] === true)
        }
        if(idx == -1) { idx = c[45].length ? 0 : -1 }
        return idx;
}
export const product_clarity_price = (parray, clarity_id, fn) => {
    for (let c of parray) {
        const idx = get_p_clarity_idx(c, fn ? fn(c) : clarity_id)
        const main = idx > -1 ? c[45][idx][3] : 0
        c.push(main)
    }
}

export const first = a => a[0] && a[0][0] || 0

const getIndexValue = (arr, idx, pos) => { return idx > -1 && arr[idx] ? arr[idx][pos] : "" }
export const getClarityName = (clarities, id) => { const idx = clarities.findIndex(v => v[0] === id); return getIndexValue(clarities, idx, 3); };
export const getToneName = (tones, id) => { const idx = tones.findIndex(v => v[0] === id); return getIndexValue(tones, idx, 3); };
export const getPurityName = (purities, id) => { const idx = purities.findIndex(v => v[0] === id); return getIndexValue(purities, idx, 3); };

export const getToneIdx = (product, purity_idx, tone_id) => {
    const purityRow = product.p_purities_purity_id[purity_idx]
    let toneIdx=purityRow[1].findIndex(x=>x[0]===tone_id)
    if(toneIdx == -1) toneIdx = 0
    return toneIdx;
  }
export const getPurityPrice = (product, purity_idx, tone_id) => {
    const purityRow = product.p_purities_purity_id[purity_idx]
    const toneIdx = getToneIdx(product, purity_idx, tone_id)
    return purityRow[1].length ? purityRow[1][toneIdx][2] : 0
}
export const getPrice = (product, purity_idx, tone_id, clarityPrice) => {
    return getPurityPrice(product, purity_idx, tone_id) + clarityPrice + (product.p_cs_total_p_cs_total[0][2] || 0) + product.p_making_charges
  }

export const getTotal = (product, purity_idx, tone_id, clarityPrice) => {
    const price = getPrice(product, purity_idx, tone_id, clarityPrice)
    const dis = product.p_discount_per / 100
    const totalValue = price - (price * dis)
    return totalValue.toFixed(0)
  }
export const getWeight = (product, purity_idx, tone_id) => {
    const purityRow = product.p_purities_purity_id[purity_idx]
    const toneIdx = getToneIdx(product, purity_idx, tone_id)
    return purityRow[1].length ? purityRow[1][toneIdx][1] : 0
}
// purity price + clarity price + making amount + p_cs_total
export const getTotalArray = (p) => {
    const price = p[p.length - 1] + p[p.length - 2] + p[54] + (p[51][0][2] || 0);
    const dis = p[55] / 100
    const totalValue = price - (price * dis)
    return totalValue
}
// check it already logged in
export const isAuthFn = async (S, type="user") => {
    const auth = await new Promise((resolve, reject) => { S.bind_( `is_${type}_auth`, data => { S.unbind(`is_${type}_auth`); resolve(data); }, [[]] ); });
    return auth;
}
export const getPost = async (S, slug="home") => {
    const page = await new Promise((resolve, reject) => {
        S.bind_( all("post", 112), data => { S.unbind(all("post", 112)); resolve(data); }, [[null, 'post', null, null, `=${slug}`]] ); // 6=code // = means excact
    });
    return page;
}
export const getSetting = async (S) => {
    const setting = await new Promise((resolve, reject) => {
        S.bind_( all("setting", 112), data => { S.unbind(all("setting", 112)); resolve(data);}, [[]] );
    });
    return setting;
}
export const getSettingKey = async (S, key="mobile") => {
    const setting = await new Promise((resolve, reject) => {
        S.bind_( all("setting", 112), data => { S.unbind(all("setting", 112)); resolve(data);}, [[`=${key}`]] );
    });
    return setting;
}
export const getSettingCache = async (key) => {
    const db = new StorageDB("setting", 1);
    const setting = await db.getItem(key)
    return setting;
}
export const getFooterData = async(S)=>{
    const mobile = await getSettingKey(S, "mobile");
    return {mobile}
}
export const getHeaderData = async(S)=>{
    const company = await getSettingKey(S, "company_name");
    return {company}
}