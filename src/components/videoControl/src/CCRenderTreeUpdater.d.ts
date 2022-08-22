import { EleRect } from "./CCRectFunctions";
declare function updateRenderTree(): void;
declare function getAllCoveredEleRectArray(absZIndex: number): EleRect[][];
export { updateRenderTree, getAllCoveredEleRectArray };
