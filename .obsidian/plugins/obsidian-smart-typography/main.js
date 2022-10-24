/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');
var state = require('@codemirror/state');
var language = require('@codemirror/language');

<<<<<<< HEAD
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
=======
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
>>>>>>> 0172df2e8933ddcd6e5802dd85331c6000e7619f
}

// Dashes
const dashRules = [
    // en dash
    {
        trigger: "-",
        from: "--",
        to: "–",
        contextMatch: /-$/,
    },
    // em dash
    {
        trigger: "-",
        from: "–-",
        to: "—",
        contextMatch: /–$/,
    },
    // tripple dash
    {
        trigger: "-",
        from: "—-",
        to: "---",
        contextMatch: /—$/,
    },
];
const dashRulesSansEnDash = [
    // em dash
    {
        trigger: "-",
        from: "--",
        to: "—",
        contextMatch: /-$/,
    },
    // tripple dash
    {
        trigger: "-",
        from: "—-",
        to: "---",
        contextMatch: /—$/,
    },
];
// Ellipsis
const ellipsisRules = [
    {
        trigger: ".",
        from: "...",
        to: "…",
        contextMatch: /\.\.$/,
    },
];
// Quotes
const smartQuoteRules = [
    // Open double
    {
        trigger: '"',
        from: '"',
        to: (settings) => settings.openDouble,
        contextMatch: /[\s\{\[\(\<'"\u2018\u201C]$/,
    },
    // Close double
    {
        trigger: '"',
        from: '"',
        to: (settings) => settings.closeDouble,
        contextMatch: /.*$/,
    },
    // Paired double
    {
        trigger: '""',
        from: '""',
        to: (settings) => settings.openDouble + settings.closeDouble,
        contextMatch: /.*$/,
    },
    // Open single
    {
        trigger: "'",
        from: "'",
        to: (settings) => settings.openSingle,
        contextMatch: /[\s\{\[\(\<'"\u2018\u201C]$/,
    },
    // Close single
    {
        trigger: "'",
        from: "'",
        to: (settings) => settings.closeSingle,
        contextMatch: /.*$/,
    },
    // Paired single
    {
        trigger: "''",
        from: "''",
        to: (settings) => settings.openSingle + settings.closeSingle,
        contextMatch: /.*$/,
    },
];
// Arrows
const arrowRules = [
    {
        trigger: "-",
        from: "<-",
        to: (settings) => settings.leftArrow,
        contextMatch: /<$/,
    },
    {
        trigger: ">",
        from: "->",
        to: (settings) => settings.rightArrow,
        contextMatch: /-$/,
    },
];
// Guillemet
const guillemetRules = [
    {
        trigger: "<",
        from: "<<",
        to: (settings) => settings.openGuillemet,
        contextMatch: /<$/,
    },
    {
        trigger: ">",
        from: ">>",
        to: (settings) => settings.closeGuillemet,
        contextMatch: />$/,
    },
];
// Comparisons
const comparisonRules = [
    {
        trigger: "=",
        from: ">=",
        to: "≥",
        contextMatch: />$/,
    },
    {
        trigger: "=",
        from: "<=",
        to: "≤",
        contextMatch: /<$/,
    },
    {
        trigger: "=",
        from: "/=",
        to: "≠",
        contextMatch: /\/$/,
    },
];
// Fractions
const fractionRules = [
    {
        trigger: "2",
        from: "1/2",
        to: "½",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "3",
        from: "1/3",
        to: "⅓",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "3",
        from: "2/3",
        to: "⅔",
        contextMatch: /(?:^|\s)2\/$/,
    },
    {
        trigger: "4",
        from: "1/4",
        to: "¼",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "4",
        from: "3/4",
        to: "¾",
        contextMatch: /(?:^|\s)3\/$/,
    },
    {
        trigger: "5",
        from: "1/5",
        to: "⅕",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "5",
        from: "2/5",
        to: "⅖",
        contextMatch: /(?:^|\s)2\/$/,
    },
    {
        trigger: "5",
        from: "3/5",
        to: "⅗",
        contextMatch: /(?:^|\s)3\/$/,
    },
    {
        trigger: "5",
        from: "4/5",
        to: "⅘",
        contextMatch: /(?:^|\s)4\/$/,
    },
    {
        trigger: "6",
        from: "1/6",
        to: "⅙",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "6",
        from: "5/6",
        to: "⅚",
        contextMatch: /(?:^|\s)5\/$/,
    },
    {
        trigger: "7",
        from: "1/7",
        to: "⅐",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "8",
        from: "1/8",
        to: "⅛",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "8",
        from: "3/8",
        to: "⅜",
        contextMatch: /(?:^|\s)3\/$/,
    },
    {
        trigger: "8",
        from: "5/8",
        to: "⅝",
        contextMatch: /(?:^|\s)5\/$/,
    },
    {
        trigger: "8",
        from: "7/8",
        to: "⅞",
        contextMatch: /(?:^|\s)7\/$/,
    },
    {
        trigger: "9",
        from: "1/9",
        to: "⅑",
        contextMatch: /(?:^|\s)1\/$/,
    },
    {
        trigger: "0",
        from: "1/10",
        to: "⅒",
        contextMatch: /(?:^|\s)1\/1$/,
    },
];

const dashChar = "-";
const enDashChar = "–";
const emDashChar = "—";
const enDash = {
    matchTrigger: dashChar,
    matchRegExp: /--$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            enDashChar,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === enDashChar) {
            delta.update(delta.from, delta.to, [dashChar + dashChar]);
        }
    },
};
const emDash = {
    matchTrigger: dashChar,
    matchRegExp: /–-$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            emDashChar,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === emDashChar) {
            delta.update(delta.from, delta.to, [enDashChar + dashChar]);
        }
    },
};
const trippleDash = {
    matchTrigger: dashChar,
    matchRegExp: /—-$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            dashChar + dashChar + dashChar,
        ]);
    },
    performRevert: (instance, delta, settings) => { },
};
const ellipsis = {
    matchTrigger: ".",
    matchRegExp: /\.\.\.$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 2 }, delta.to, [
            "…",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "…") {
            delta.update(delta.from, delta.to, ["..."]);
        }
    },
};
const openDoubleQuote = {
    matchTrigger: '"',
    matchRegExp: /(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [settings.openDouble]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.openDouble) {
            delta.update(delta.from, delta.to, ['"']);
        }
    },
};
const closeDoubleQuote = {
    matchTrigger: '"',
    matchRegExp: /"$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [settings.closeDouble]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.closeDouble) {
            delta.update(delta.from, delta.to, ['"']);
        }
    },
};
const pairedDoubleQuote = {
    matchTrigger: '""',
    matchRegExp: /""$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [
            settings.openDouble + settings.closeDouble,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.openDouble) {
            delta.update(delta.from, Object.assign(Object.assign({}, delta.to), { ch: delta.to.ch + 1 }), ['""']);
            setTimeout(() => instance.setCursor(Object.assign(Object.assign({}, delta.from), { ch: delta.from.ch + 1 })));
        }
    },
};
const wrappedDoubleQuote = {
    matchTrigger: /^".*"$/,
    matchRegExp: false,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [
            settings.openDouble + delta.text[0].slice(1, -1) + settings.closeDouble,
        ]);
    },
    performRevert: false,
};
const openSingleQuote = {
    matchTrigger: "'",
    matchRegExp: /(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [settings.openSingle]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.openSingle) {
            delta.update(delta.from, delta.to, ["'"]);
        }
    },
};
const closeSingleQuote = {
    matchTrigger: "'",
    matchRegExp: /'$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [settings.closeSingle]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.closeSingle) {
            delta.update(delta.from, delta.to, ["'"]);
        }
    },
};
const pairedSingleQuote = {
    matchTrigger: "''",
    matchRegExp: /''$/,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [
            settings.openSingle + settings.closeSingle,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.openSingle) {
            delta.update(delta.from, Object.assign(Object.assign({}, delta.to), { ch: delta.to.ch + 1 }), ["''"]);
            setTimeout(() => instance.setCursor(Object.assign(Object.assign({}, delta.from), { ch: delta.from.ch + 1 })));
        }
    },
};
const wrappedSingleQuote = {
    matchTrigger: /^'.*'$/,
    matchRegExp: false,
    performUpdate: (instance, delta, settings) => {
        delta.update(delta.from, delta.to, [
            settings.openSingle + delta.text[0].slice(1, -1) + settings.closeSingle,
        ]);
    },
    performRevert: false,
};
const rightArrow = {
    matchTrigger: ">",
    matchRegExp: /->$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            settings.rightArrow,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.rightArrow) {
            delta.update(delta.from, delta.to, ["->"]);
        }
    },
};
const leftArrow = {
    matchTrigger: "-",
    matchRegExp: /<-$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            settings.leftArrow,
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === settings.leftArrow) {
            delta.update(delta.from, delta.to, ["<-"]);
        }
    },
};
const greaterThanOrEqualTo = {
    matchTrigger: "=",
    matchRegExp: />=$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            "≥",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "≥") {
            delta.update(delta.from, delta.to, [">="]);
        }
    },
};
const lessThanOrEqualTo = {
    matchTrigger: "=",
    matchRegExp: /<=$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            "≤",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "≤") {
            delta.update(delta.from, delta.to, ["<="]);
        }
    },
};
const notEqualTo = {
    matchTrigger: "=",
    matchRegExp: /\/=$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            "≠",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "≠") {
            delta.update(delta.from, delta.to, ["/="]);
        }
    },
};
const rightGuillemet = {
    matchTrigger: ">",
    matchRegExp: />>$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            "»",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "»") {
            delta.update(delta.from, delta.to, [">>"]);
        }
    },
};
const leftGuillemet = {
    matchTrigger: "<",
    matchRegExp: /<<$/,
    performUpdate: (instance, delta, settings) => {
        delta.update({ line: delta.from.line, ch: delta.from.ch - 1 }, delta.to, [
            "«",
        ]);
    },
    performRevert: (instance, delta, settings) => {
        if (instance.getRange(delta.from, delta.to) === "«") {
            delta.update(delta.from, delta.to, ["<<"]);
        }
    },
};
const legacyDashRules = [enDash, emDash, trippleDash];
const legacyEllipsisRules = [ellipsis];
const legacySmartQuoteRules = [
    openDoubleQuote,
    closeDoubleQuote,
    pairedDoubleQuote,
    wrappedDoubleQuote,
    openSingleQuote,
    closeSingleQuote,
    pairedSingleQuote,
    wrappedSingleQuote,
];
const legacyComparisonRules = [
    lessThanOrEqualTo,
    greaterThanOrEqualTo,
    notEqualTo,
];
const legacyArrowRules = [leftArrow, rightArrow];
const legacyGuillemetRules = [leftGuillemet, rightGuillemet];

const DEFAULT_SETTINGS = {
    curlyQuotes: true,
    emDash: true,
    ellipsis: true,
    arrows: true,
    comparisons: true,
    fractions: false,
    guillemets: false,
    skipEnDash: false,
    openSingle: "‘",
    closeSingle: "’",
    openDouble: "“",
    closeDouble: "”",
    openGuillemet: "«",
    closeGuillemet: "»",
    leftArrow: "←",
    rightArrow: "→",
};
class SmartTypography extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.beforeChangeHandler = (instance, delta) => {
            if (this.legacyLastUpdate.has(instance) && delta.origin === "+delete") {
                const revert = this.legacyLastUpdate.get(instance).performRevert;
                if (revert) {
                    revert(instance, delta, this.settings);
                    this.legacyLastUpdate.delete(instance);
                }
                return;
            }
            if (delta.origin === undefined && delta.text.length === 1) {
                const input = delta.text[0];
                for (let rule of this.legacyInputRules) {
                    if (!(rule.matchTrigger instanceof RegExp)) {
                        continue;
                    }
                    if (rule.matchTrigger.test(input)) {
                        rule.performUpdate(instance, delta, this.settings);
                        return;
                    }
                }
                return;
            }
            if (delta.origin === "+input" && delta.text.length === 1) {
                const input = delta.text[0];
                const rules = this.legacyInputRules.filter((r) => {
                    return typeof r.matchTrigger === "string" && r.matchTrigger === input;
                });
                if (rules.length === 0) {
                    if (this.legacyLastUpdate.has(instance)) {
                        this.legacyLastUpdate.delete(instance);
                    }
                    return;
                }
                let str = input;
                if (delta.to.ch > 0) {
                    str = `${instance.getRange({ line: delta.to.line, ch: 0 }, delta.to)}${str}`;
                }
                for (let rule of rules) {
                    if (rule.matchRegExp && rule.matchRegExp.test(str)) {
                        if (shouldCheckTextAtPos(instance, delta.from) &&
                            shouldCheckTextAtPos(instance, delta.to)) {
                            this.legacyLastUpdate.set(instance, rule);
                            rule.performUpdate(instance, delta, this.settings);
                        }
                        return;
                    }
                }
            }
            if (this.legacyLastUpdate.has(instance)) {
                this.legacyLastUpdate.delete(instance);
            }
        };
    }
    buildInputRules() {
        this.legacyInputRules = [];
        this.inputRules = [];
        this.inputRuleMap = {};
        if (this.settings.emDash) {
            if (this.settings.skipEnDash) {
                this.inputRules.push(...dashRulesSansEnDash);
            }
            else {
                this.inputRules.push(...dashRules);
            }
            this.legacyInputRules.push(...legacyDashRules);
        }
        if (this.settings.ellipsis) {
            this.inputRules.push(...ellipsisRules);
            this.legacyInputRules.push(...legacyEllipsisRules);
        }
        if (this.settings.curlyQuotes) {
            this.inputRules.push(...smartQuoteRules);
            this.legacyInputRules.push(...legacySmartQuoteRules);
        }
        if (this.settings.arrows) {
            this.inputRules.push(...arrowRules);
            this.legacyInputRules.push(...legacyArrowRules);
        }
        if (this.settings.guillemets) {
            this.inputRules.push(...guillemetRules);
            this.legacyInputRules.push(...legacyGuillemetRules);
        }
        if (this.settings.comparisons) {
            this.inputRules.push(...comparisonRules);
            this.legacyInputRules.push(...legacyComparisonRules);
        }
        if (this.settings.fractions) {
            this.inputRules.push(...fractionRules);
        }
        this.inputRules.forEach((rule) => {
            if (this.inputRuleMap[rule.trigger] === undefined) {
                this.inputRuleMap[rule.trigger] = [];
            }
            this.inputRuleMap[rule.trigger].push(rule);
        });
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab(new SmartTypographySettingTab(this.app, this));
            // Codemirror 6
            //
            // When smart typography overrides changes, we want to keep a record
            // so we can undo them when the user presses backspace
            const storeTransaction = state.StateEffect.define();
            const prevTransactionState = state.StateField.define({
                create() {
                    return null;
                },
                update(oldVal, tr) {
                    for (let e of tr.effects) {
                        if (e.is(storeTransaction)) {
                            return e.value;
                        }
                    }
                    if (!oldVal ||
                        tr.isUserEvent("input") ||
                        tr.isUserEvent("delete.forward") ||
                        tr.isUserEvent("delete.cut") ||
                        tr.isUserEvent("move") ||
                        tr.isUserEvent("select") ||
                        tr.isUserEvent("undo")) {
                        return null;
                    }
                    return oldVal;
                },
            });
            this.registerEditorExtension([
                prevTransactionState,
                state.EditorState.transactionFilter.of((tr) => {
                    // Revert any stored changes on delete
                    if (tr.isUserEvent("delete.backward") ||
                        tr.isUserEvent("delete.selection")) {
                        return tr.startState.field(prevTransactionState, false) || tr;
                    }
                    // If the user hasn't typed, or the doc hasn't changed, return early
                    if (!tr.isUserEvent("input.type") || !tr.docChanged) {
                        return tr;
                    }
                    // Cache the syntax tree if we end up accessing it
                    let tree = null;
                    // Memoize any positions we check so we can avoid some work
                    const seenPositions = {};
                    const canPerformReplacement = (pos) => {
                        if (seenPositions[pos] !== undefined) {
                            return seenPositions[pos];
                        }
                        if (!tree)
                            tree = language.syntaxTree(tr.state);
                        const nodeProps = tree
                            .resolveInner(pos, 1)
                            .type.prop(language.tokenClassNodeProp);
                        if (nodeProps && ignoreListRegEx.test(nodeProps)) {
                            seenPositions[pos] = false;
                        }
                        else {
                            seenPositions[pos] = true;
                        }
                        return seenPositions[pos];
                    };
                    // Store a list of changes and specs to revert these changes
                    const changes = [];
                    const reverts = [];
                    const registerChange = (change, revert) => {
                        changes.push(change);
                        reverts.push(revert);
                    };
                    const contextCache = {};
                    let newSelection = tr.selection;
                    tr.changes.iterChanges((fromA, toA, fromB, toB, inserted) => {
                        const insertedText = inserted.sliceString(0, 0 + inserted.length);
                        const matchedRules = this.inputRuleMap[insertedText];
                        if (!matchedRules) {
                            return;
                        }
                        for (let rule of matchedRules) {
                            // If we're in a codeblock, etc, return early, no need to continue checking
                            if (!canPerformReplacement(fromA))
                                return;
                            // Grab and cache three chars before the one being inserted
                            if (contextCache[fromA] === undefined) {
                                contextCache[fromA] = tr.newDoc.sliceString(fromB - 3, fromB);
                            }
                            const context = contextCache[fromA];
                            if (!rule.contextMatch.test(context)) {
                                continue;
                            }
                            const insert = typeof rule.to === "string" ? rule.to : rule.to(this.settings);
                            const replacementLength = rule.from.length - rule.trigger.length;
                            const insertionPoint = fromA - replacementLength;
                            const reversionPoint = fromB - replacementLength;
                            registerChange({
                                from: insertionPoint,
                                to: insertionPoint + replacementLength,
                                insert,
                            }, {
                                from: reversionPoint,
                                to: reversionPoint + insert.length,
                                insert: rule.from,
                            });
                            const selectionAdjustment = rule.from.length - insert.length;
                            newSelection = state.EditorSelection.create(newSelection.ranges.map((r) => state.EditorSelection.range(r.anchor - selectionAdjustment, r.head - selectionAdjustment)));
                            return;
                        }
                    }, false);
                    // If we have any changes, construct a transaction spec
                    if (changes.length) {
                        return [
                            {
                                effects: storeTransaction.of({
                                    effects: storeTransaction.of(null),
                                    selection: tr.selection,
                                    scrollIntoView: tr.scrollIntoView,
                                    changes: reverts,
                                }),
                                selection: newSelection,
                                scrollIntoView: tr.scrollIntoView,
                                changes,
                            },
                        ];
                    }
                    return tr;
                }),
            ]);
            // Codemirror 5
            this.legacyLastUpdate = new WeakMap();
            this.registerCodeMirror((cm) => {
                cm.on("beforeChange", this.beforeChangeHandler);
            });
        });
    }
    onunload() {
        this.legacyLastUpdate = null;
        this.app.workspace.iterateCodeMirrors((cm) => {
            cm.off("beforeChange", this.beforeChangeHandler);
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
            this.buildInputRules();
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buildInputRules();
            yield this.saveData(this.settings);
        });
    }
}
class SmartTypographySettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Curly Quotes")
            .setDesc("Double and single quotes will be converted to curly quotes (“” & ‘’)")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.curlyQuotes)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.curlyQuotes = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Open double quote character")
            .addText((text) => {
            text
                .setValue(this.plugin.settings.openDouble)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.openDouble = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Close double quote character")
            .addText((text) => {
            text
                .setValue(this.plugin.settings.closeDouble)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.closeDouble = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Open single quote character")
            .addText((text) => {
            text
                .setValue(this.plugin.settings.openSingle)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.openSingle = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Close single quote character")
            .addText((text) => {
            text
                .setValue(this.plugin.settings.closeSingle)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.closeSingle = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Dashes")
            .setDesc("Two dashes (--) will be converted to an en-dash (–). And en-dash followed by a dash will be converted to and em-dash (—). An em-dash followed by a dash will be converted into three dashes (---)")
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.emDash).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.emDash = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Skip en-dash")
            .setDesc("When enabled, two dashes will be converted to an em-dash rather than an en-dash.")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.skipEnDash)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.skipEnDash = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Ellipsis")
            .setDesc("Three periods (...) will be converted to an ellipses (…)")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.ellipsis)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.ellipsis = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Guillemets")
            .setDesc("<< | >> will be converted to « | »")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.guillemets)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.guillemets = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl).setName("Open guillemet").addText((text) => {
            text
                .setValue(this.plugin.settings.openGuillemet)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                this.plugin.settings.openGuillemet = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl).setName("Close guillemet").addText((text) => {
            text
                .setValue(this.plugin.settings.closeGuillemet)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                this.plugin.settings.closeGuillemet = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Arrows")
            .setDesc("<- | -> will be converted to ← | →")
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.arrows).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.arrows = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl).setName("Left arrow character").addText((text) => {
            text.setValue(this.plugin.settings.leftArrow).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.leftArrow = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Right arrow character")
            .addText((text) => {
            text
                .setValue(this.plugin.settings.rightArrow)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                if (!value)
                    return;
                if (value.length > 1) {
                    text.setValue(value[0]);
                    return;
                }
                this.plugin.settings.rightArrow = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Comparison")
            .setDesc("<= | >= | /= will be converted to ≤ | ≥ | ≠")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.comparisons)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.comparisons = value;
                yield this.plugin.saveSettings();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Fractions")
            .setDesc("1/2 will be converted to ½. Supported UTF-8 fractions: ½, ⅓, ⅔, ¼, ¾, ⅕, ⅖, ⅗, ⅘, ⅙, ⅚, ⅐, ⅛, ⅜, ⅝, ⅞, ⅑, ⅒")
            .addToggle((toggle) => {
            toggle
                .setValue(this.plugin.settings.fractions)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.fractions = value;
                yield this.plugin.saveSettings();
            }));
        });
    }
}
const ignoreListRegEx = /frontmatter|code|math|templater|hashtag/;
function shouldCheckTextAtPos(instance, pos) {
    // Empty line
    if (!instance.getLine(pos.line)) {
        return true;
    }
    const tokens = instance.getTokenTypeAt(pos);
    // Plain text line
    if (!tokens) {
        return true;
    }
    // Not codeblock or frontmatter
    if (!ignoreListRegEx.test(tokens)) {
        return true;
    }
    return false;
}

module.exports = SmartTypography;
