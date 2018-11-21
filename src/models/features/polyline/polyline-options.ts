import NavigationOptions from './navigations-options';

export default class PolylineOptions {
    public path: number[][];
    public addToMap?: boolean;
    public fitBounds?: boolean;
    public editable?: boolean;
    public draggable?: boolean;
    public color?: string;
    public weight: number;
    public object?: object;
    public infowindows?: string[];
    public navigateOptions?: NavigationOptions;

    constructor(path?: number[][], addToMap?: boolean, fitBounds?: boolean,
        editable?: boolean, draggable?: boolean, color?: string, weight?: number,
        object?: object, infowindows?: string[], navigateOptions?: NavigationOptions) {

        this.path = path;
        this.addToMap = addToMap;
        this.fitBounds = fitBounds;
        this.editable = editable;
        this.draggable = draggable;
        this.color = color;
        this.weight = weight;
        this.object = object;
        this.infowindows = infowindows;
        this.navigateOptions = navigateOptions;
    }
}
