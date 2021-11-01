[33mcommit 546ce04e3962fe7860578dc38f344711d4a4f7a7[m[33m ([m[1;36mHEAD -> [m[1;32mapi-branch[m[33m, [m[1;32mmaster[m[33m)[m
Author: gabbyMill <gabbymillatiner@gmail.com>
Date:   Thu Oct 21 14:32:18 2021 +0300

    Intitialized working folders

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..3c3629e[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mnode_modules[m
[1mdiff --git a/index.js b/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/middleware/errorHandler.js b/middleware/errorHandler.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/middleware/userHandler.js b/middleware/userHandler.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..0fa36c7[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,2080 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "pokedex-api",[m
[32m+[m[32m  "version": "1.0.0",[m
[32m+[m[32m  "lockfileVersion": 1,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "dependencies": {[m
[32m+[m[32m    "@eslint/eslintrc": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-DHI1wDPoKCBPoLZA3qDR91+3te/wDSc1YhKg3jR8NxKKRJq2hwHwcWv31cSwSYvIBrmbENoYMWcenW8uproQqg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ajv": "^6.12.4",[m
[32m+[m[32m        "debug": "^4.3.2",[m
[32m+[m[32m        "espree": "^9.0.0",[m
[32m+[m[32m        "globals": "^13.9.0",[m
[32m+[m[32m        "ignore": "^4.0.6",[m
[32m+[m[32m        "import-fresh": "^3.2.1",[m
[32m+[m[32m        "js-yaml": "^3.13.1",[m
[32m+[m[32m        "minimatch": "^3.0.4",[m
[32m+[m[32m        "strip-json-comments": "^3.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "js-yaml": {[m
[32m+[m[32m          "version": "3.14.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "argparse": "^1.0.7",[m
[32m+[m[32m            "esprima": "^4.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "strip-json-comments": {[m
[32m+[m[32m          "version": "3.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@humanwhocodes/config-array": {[m
[32m+[m[32m      "version": "0.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-JQlEKbcgEUjBFhLIF4iqM7u/9lwgHRBcpHrmUNCALK0Q3amXN6lxdoXLnF0sm11E9VqTmBALR87IlUg1bZ8A9A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@humanwhocodes/object-schema": "^1.2.0",[m
[32m+[m[32m        "debug": "^4.1.1",[m
[32m+[m[32m        "minimatch": "^3.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@humanwhocodes/object-schema": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-wdppn25U8z/2yiaT6YGquE6X8sSv7hNMWSXYSSU1jGv/yd6XqjXgTDJ8KP4NgjTXfJ3GbRjeeb8RTV7a/VpM+w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@sindresorhus/is": {[m
[32m+[m[32m      "version": "0.14.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@szmarczak/http-timer": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "defer-to-connect": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "abbrev": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "accepts": {[m
[32m+[m[32m      "version": "1.3.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "mime-types": "~2.1.24",[m
[32m+[m[32m        "negotiator": "0.6.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "acorn": {[m
[32m+[m[32m      "version": "8.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-yXbYeFy+jUuYd3/CDcg2NkIYE991XYX/bje7LmjJigUciaeO1JR4XxXgCIV1/Zc/dRuFEyw1L0pbA+qynJkW5Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "acorn-jsx": {[m
[32m+[m[32m      "version": "5.3.2",[m
[32m+[m[32