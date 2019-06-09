import * as R from "ramda";
import * as RA from 'ramda-adjunct'

import { writable } from "svelte/store";
export const isAuth = writable(null);
export const currBranch = writable({ id: '' });
export const currUser = writable({ id: "", username: 'nothing' });
export const branchesList = writable([]);
export const menuNodes = writable([]);
export const globalSettings = writable([]);
export const userSettings = writable([]);

export async function init() {
    // Try to verify cookies...
    /*
    const currBranch2 = await currBranchRefetch()
    const currUser2 = await currUserRefetch()

    if (currBranch2 && currUser2) {
        const branchesList2 = await branchListRefetch()
        const menuNodes2 = await menuRefetch()

        // some times cause problem when too fast logout List may be null
        if (branchesList2.length && menuNodes2.length) {
            isAuth.set(true)
        } else {
            isAuth.set(false)
        }
        globalSettingsRefetch()
        userSettingsRefetch()
    } else {
        isAuth.set(false)
    }
    */
   isAuth.set(true)
}

export async function authChange(v) {
    if (v === false) {
        clearStores()
        isAuth.set(false)
    } else {
        await init()
        isAuth.set(true)
    }
}

// clear every global stores
export function clearStores() {
    isAuth.set(null);
    currBranch.set({ id: '' });
    currUser.set({ id: "", username: 'nothing' });
    branchesList.set([]);
    menuNodes.set([]);
    globalSettings.set([]);
    userSettings.set([]);

    // Also cear cookies
};

