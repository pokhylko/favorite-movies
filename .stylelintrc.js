module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "function",
                    "if",
                    "each",
                    "include",
                    "mixin",
                    "forward",
                    "use"
                ]
            }
        ],
        "no-descending-specificity": null,
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)(_[a-z0-9]+)*((__([a-z][a-z0-9]*)(_[a-z0-9]+)*)?(--([a-z][a-z0-9]*)(-[a-z0-9]+)*)?)*$",
            {
                message: (selector) => `Expected class selector "${selector}" to be snake-case`
            }
        ]
    }
}
