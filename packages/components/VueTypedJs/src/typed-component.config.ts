import {ComponentPublicInstance} from "vue";
import {TypedOptions} from 'typed.js';

export const props = {
    strings: {
        type: Array,
        required: false,
        default: function () {
            return ['Hello World!']
        },
    },
    stringsElement: {
        type: String,
        required: false,
        default: null,
    },
    typeSpeed: {
        type: Number,
        required: false,
        default: 50,
    },
    startDelay: {
        type: Number,
        required: false,
        default: 0,
    },
    backSpeed: {
        type: Number,
        required: false,
        default: 0,
    },
    smartBackspace: {
        type: Boolean,
        required: false,
        default: true,
    },
    shuffle: {
        type: Boolean,
        required: false,
        default: false,
    },
    backDelay: {
        type: Number,
        required: false,
        default: 700,
    },
    fadeOut: {
        type: Boolean,
        required: false,
        default: false,
    },
    fadeOutClass: {
        type: String,
        required: false,
        default: 'typed-fade-out',
    },
    fadeOutDelay: {
        type: Number,
        required: false,
        default: 500,
    },
    loop: {
        type: Boolean,
        required: false,
        default: false,
    },
    loopCount: {
        type: Number,
        required: false,
        default: Infinity,
    },
    showCursor: {
        type: Boolean,
        required: false,
        default: true,
    },
    cursorChar: {
        type: String,
        required: false,
        default: '|',
    },
    autoInsertCss: {
        type: Boolean,
        required: false,
        default: true,
    },
    attr: {
        type: String,
        required: false,
        default: null,
    },
    bindInputFocusEvents: {
        type: Boolean,
        required: false,
        default: false,
    },
    contentType: {
        type: String,
        required: false,
        default: 'html',
    },
}

export const getEventHandlers = (context: ComponentPublicInstance|null, _typedConfig: Readonly<TypedOptions>) => {

    let typedConfig = Object.assign({}, _typedConfig) as TypedOptions

    typedConfig.onComplete = (...args) => {
        context?.$emit('onComplete',...args)
    }

    typedConfig.preStringTyped = (...args) => {
        context?.$emit('preStringTyped',...args)
    }

    typedConfig.onStringTyped = (...args) => {
        context?.$emit('onStringTyped',...args)
    }

    typedConfig.onLastStringBackspaced = (...args) => {
        context?.$emit('onLastStringBackspaced',...args)
    }

    typedConfig.onTypingPaused = (...args) => {
        context?.$emit('onTypingPaused',...args)
    }

    typedConfig.onTypingResumed = (...args) => {
        context?.$emit('onTypingResumed',...args)
    }

    typedConfig.onReset = (...args) => {
        context?.$emit('onReset',...args)
    }

    typedConfig.onStop = (...args) => {
        context?.$emit('onStop',...args)
    }

    typedConfig.onStart = (...args) => {
        context?.$emit('onStart',...args)
    }

    typedConfig.onDestroy = (...args) => {
        context?.$emit('onDestroy',...args)
    }

    return typedConfig
}
