<<<<<<< HEAD
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
=======
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
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
