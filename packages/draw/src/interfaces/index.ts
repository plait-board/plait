import { BasicShapes, FlowchartSymbols, PlaitGeometry } from './geometry';
import { PlaitImage } from './image';
import { PlaitLine } from './line';
import { PlaitText } from './text';

export * from './line';
export * from './geometry';
export * from './text';
export * from './element';

export type PlaitDrawElement = PlaitGeometry | PlaitLine | PlaitImage;

export type PlaitShape = PlaitGeometry | PlaitImage;

export const PlaitDrawElement = {
    isGeometry: (value: any): value is PlaitGeometry => {
        return value.type === 'geometry';
    },
    isLine: (value: any): value is PlaitLine => {
        return value.type === 'line';
    },
    isText: (value: any): value is PlaitText => {
        return value.type === 'geometry' && value.shape === BasicShapes.text;
    },
    isImage: (value: any): value is PlaitImage => {
        return value.type === 'image';
    },
    isDrawElement: (value: any): value is PlaitDrawElement => {
        if (PlaitDrawElement.isGeometry(value) || PlaitDrawElement.isLine(value) || PlaitDrawElement.isImage(value)) {
            return true;
        } else {
            return false;
        }
    },
    isShape: (value: any): value is PlaitShape => {
        return PlaitDrawElement.isImage(value) || PlaitDrawElement.isGeometry(value);
    },
    isBasicShape: (value: any) => {
        return Object.keys(BasicShapes).includes(value.shape);
    },
    isFlowchart: (value: any) => {
        return Object.keys(FlowchartSymbols).includes(value.shape);
    }
};
