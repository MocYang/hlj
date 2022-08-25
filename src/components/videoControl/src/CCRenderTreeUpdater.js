import CCRenderTree from "./CCRenderTree";
import { getFinalRect } from "./CCRectFunctions";
let g_self_tree = new CCRenderTree(window);
let g_allCovered = [];
let g_hikcc_coverd = [];
let g_treeUpdated = false;
let g_lastAbsZIndex = -1;
let g_lastAllCovered = [];
function updateRenderTree() {
    let eleFullSreen = document.fullscreenElement;
    g_self_tree.buildTree(eleFullSreen);
    let eleToQuery = eleFullSreen ? eleFullSreen : document;
    g_allCovered = [];
    g_hikcc_coverd = Array.from(eleToQuery.querySelectorAll("[hikcc_cover=opaque]"));
    for (let win_now = window, win_parent = window.parent; win_now !== window.top;) {
        let frames = win_parent.document.querySelectorAll("frame,iframe");
        for (const frame of frames) {
            if (frame.contentWindow === win_now) {
                if (!eleFullSreen) {
                    let tree = new CCRenderTree(win_parent, win_parent.document.fullscreenElement);
                    g_allCovered.push(tree.getAllCovered(frame));
                }
                else {
                    g_allCovered.push([]);
                }
                break;
            }
        }
        win_now = win_parent;
        win_parent = win_parent.parent;
    }
    g_treeUpdated = true;
}
function getAllCoveredEleRectArray(absZIndex) {
    let needToUpdate = false;
    if (g_treeUpdated) {
        needToUpdate = true;
        g_treeUpdated = false;
    }
    else if (g_lastAbsZIndex !== absZIndex) {
        needToUpdate = true;
    }
    if (needToUpdate) {
        let tempArray = null;
        if (absZIndex >= 0) {
            tempArray = [g_hikcc_coverd.concat(g_self_tree.getAllCoveredByAbsZIndex(absZIndex))];
        }
        else {
            tempArray = [g_hikcc_coverd];
        }
        g_lastAllCovered = tempArray.concat(g_allCovered);
    }
    g_lastAbsZIndex = absZIndex;
    return g_lastAllCovered.map((eleArray) => {
        return eleArray.map((e) => {
            return getFinalRect(e);
        });
    });
}
export { updateRenderTree, getAllCoveredEleRectArray };
