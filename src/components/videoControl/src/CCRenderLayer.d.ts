import CCRenderObject from "./CCRenderObject";
declare class CCRenderLayer {
    rootObj: CCRenderObject;
    childNegativeLayers: CCRenderLayer[];
    generalObjs: CCRenderObject[];
    childPositiveLayers: CCRenderLayer[];
    constructor(rootObj: CCRenderObject);
    compare(other: CCRenderLayer): number;
    addGeneralObj(obj: CCRenderObject): void;
    isNegative(): boolean;
    isPositive(): boolean;
    addLayer(layer: CCRenderLayer): void;
    childLayers(): CCRenderLayer[];
}
export default CCRenderLayer;
