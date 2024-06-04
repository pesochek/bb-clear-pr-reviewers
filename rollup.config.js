import {terser} from 'rollup-plugin-terser';

const wrapBookmarklet = function () {
    return {
        name: 'wrap-bookmarklet',
        renderChunk(code) {
            return {
                code: `javascript:${encodeURIComponent(code)}`,
                map: null,
            };
        },
    };
}

export default {
    input: 'source.js',
    output: {
        file: 'bookmarklet.txt',
        format: 'iife',
        sourcemap: false,
    },
    plugins: [
        terser(),
        wrapBookmarklet(),
    ],
};
