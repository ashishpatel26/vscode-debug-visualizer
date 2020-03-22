(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{579:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/'],\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')'],\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: '\\'', close: '\\'' },\r\n        { open: '\"', close: '\"' },\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\r\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.cs',\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '<', close: '>', token: 'delimiter.angle' }\r\n    ],\r\n    keywords: [\r\n        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',\r\n        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',\r\n        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',\r\n        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',\r\n        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',\r\n        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',\r\n        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',\r\n        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',\r\n        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',\r\n        'field', 'event', 'method', 'param', 'property', 'public', 'protected',\r\n        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',\r\n        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',\r\n        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',\r\n        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',\r\n        'when'\r\n    ],\r\n    namespaceFollows: [\r\n        'namespace', 'using',\r\n    ],\r\n    parenFollows: [\r\n        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'\r\n    ],\r\n    operators: [\r\n        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',\r\n        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',\r\n        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'\r\n    ],\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    // escape sequences\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [/\\@?[a-zA-Z_]\\w*/, {\r\n                    cases: {\r\n                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },\r\n                        '@keywords': { token: 'keyword.$0', next: '@qualified' },\r\n                        '@default': { token: 'identifier', next: '@qualified' }\r\n                    }\r\n                }],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/}/, {\r\n                    cases: {\r\n                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },\r\n                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },\r\n                        '@default': '@brackets'\r\n                    }\r\n                }],\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [/@symbols/, {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            // numbers\r\n            [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?[fFdD]?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],\r\n            [/0[bB][01_]+/, 'number.hex'],\r\n            [/[0-9_]+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, { token: 'string.quote', next: '@string' }],\r\n            [/\\$\\@\"/, { token: 'string.quote', next: '@litinterpstring' }],\r\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\r\n            [/\\$\"/, { token: 'string.quote', next: '@interpolatedstring' }],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\r\n            [/'/, 'string.invalid']\r\n        ],\r\n        qualified: [\r\n            [/[a-zA-Z_][\\w]*/, {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }],\r\n            [/\\./, 'delimiter'],\r\n            ['', '', '@pop'],\r\n        ],\r\n        namespace: [\r\n            { include: '@whitespace' },\r\n            [/[A-Z]\\w*/, 'namespace'],\r\n            [/[\\.=]/, 'delimiter'],\r\n            ['', '', '@pop'],\r\n        ],\r\n        comment: [\r\n            [/[^\\/*]+/, 'comment'],\r\n            // [/\\/\\*/,    'comment', '@push' ],    // no nested comments :-(\r\n            ['\\\\*/', 'comment', '@pop'],\r\n            [/[\\/*]/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/\"/, { token: 'string.quote', next: '@pop' }]\r\n        ],\r\n        litstring: [\r\n            [/[^\"]+/, 'string'],\r\n            [/\"\"/, 'string.escape'],\r\n            [/\"/, { token: 'string.quote', next: '@pop' }]\r\n        ],\r\n        litinterpstring: [\r\n            [/[^\"{]+/, 'string'],\r\n            [/\"\"/, 'string.escape'],\r\n            [/{{/, 'string.escape'],\r\n            [/}}/, 'string.escape'],\r\n            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],\r\n            [/\"/, { token: 'string.quote', next: '@pop' }]\r\n        ],\r\n        interpolatedstring: [\r\n            [/[^\\\\\"{]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/{{/, 'string.escape'],\r\n            [/}}/, 'string.escape'],\r\n            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\r\n            [/\"/, { token: 'string.quote', next: '@pop' }]\r\n        ],\r\n        whitespace: [\r\n            [/^[ \\t\\v\\f]*#((r)|(load))(?=\\s)/, 'directive.csx'],\r\n            [/^[ \\t\\v\\f]*#\\w.*$/, 'namespace.cpp'],\r\n            [/[ \\t\\v\\f\\r\\n]+/, ''],\r\n            [/\\/\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment'],\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///../node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js?")}}]);