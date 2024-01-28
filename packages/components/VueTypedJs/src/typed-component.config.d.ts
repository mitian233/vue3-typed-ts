import { ComponentPublicInstance } from "vue";
import { TypedOptions } from 'typed.js';
export declare const props: {
    strings: {
        type: ArrayConstructor;
        required: boolean;
        default: () => string[];
    };
    stringsElement: {
        type: StringConstructor;
        required: boolean;
        default: null;
    };
    typeSpeed: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    startDelay: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    backSpeed: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    smartBackspace: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    shuffle: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    backDelay: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    fadeOut: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    fadeOutClass: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    fadeOutDelay: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    loopCount: {
        type: NumberConstructor;
        required: boolean;
        default: number;
    };
    showCursor: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    cursorChar: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    autoInsertCss: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    attr: {
        type: StringConstructor;
        required: boolean;
        default: null;
    };
    bindInputFocusEvents: {
        type: BooleanConstructor;
        required: boolean;
        default: boolean;
    };
    contentType: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
};
export declare const getEventHandlers: (context: ComponentPublicInstance | null, _typedConfig: Readonly<TypedOptions>) => TypedOptions;
