export class DesignSystems {
    constructor(designSystems) {
        // private methods
        /**
         * Add a Design System
         */
        this.add = (designSystem) => {
            this.designSystems.push(designSystem);
        };
        /**
         * Remove a Design System
         */
        this.remove = (designSystem) => {
        };
        /**
         * Sets the current Design System
         */
        this.setDesignSystem = (designSystem) => {
            this.currentDesignSystem = designSystem;
        };
        /**
         * Set the root element on which all
         */
        this.setRootElement = (root) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
            root.style.setProperty('--text-primary', (_d = (_c = (_b = (_a = this.currentDesignSystem) === null || _a === void 0 ? void 0 : _a.foundations) === null || _b === void 0 ? void 0 : _b.colors) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.primary);
            root.style.setProperty('--text-secondary', (_h = (_g = (_f = (_e = this.currentDesignSystem) === null || _e === void 0 ? void 0 : _e.foundations) === null || _f === void 0 ? void 0 : _f.colors) === null || _g === void 0 ? void 0 : _g.text) === null || _h === void 0 ? void 0 : _h.secondary);
            root.style.setProperty('--background-primary', (_m = (_l = (_k = (_j = this.currentDesignSystem) === null || _j === void 0 ? void 0 : _j.foundations) === null || _k === void 0 ? void 0 : _k.colors) === null || _l === void 0 ? void 0 : _l.background) === null || _m === void 0 ? void 0 : _m.primary);
            root.style.setProperty('--background-secondary', (_r = (_q = (_p = (_o = this.currentDesignSystem) === null || _o === void 0 ? void 0 : _o.foundations) === null || _p === void 0 ? void 0 : _p.colors) === null || _q === void 0 ? void 0 : _q.background) === null || _r === void 0 ? void 0 : _r.secondary);
            root.style.setProperty('--components-primary', (_v = (_u = (_t = (_s = this.currentDesignSystem) === null || _s === void 0 ? void 0 : _s.foundations) === null || _t === void 0 ? void 0 : _t.colors) === null || _u === void 0 ? void 0 : _u.components) === null || _v === void 0 ? void 0 : _v.primary);
            root.style.setProperty('--components-secondary', (_z = (_y = (_x = (_w = this.currentDesignSystem) === null || _w === void 0 ? void 0 : _w.foundations) === null || _x === void 0 ? void 0 : _x.colors) === null || _y === void 0 ? void 0 : _y.components) === null || _z === void 0 ? void 0 : _z.secondary);
            root.style.setProperty('--states-hover', (_3 = (_2 = (_1 = (_0 = this.currentDesignSystem) === null || _0 === void 0 ? void 0 : _0.foundations) === null || _1 === void 0 ? void 0 : _1.colors) === null || _2 === void 0 ? void 0 : _2.states) === null || _3 === void 0 ? void 0 : _3.hover);
            root.style.setProperty('--states-pressed', (_7 = (_6 = (_5 = (_4 = this.currentDesignSystem) === null || _4 === void 0 ? void 0 : _4.foundations) === null || _5 === void 0 ? void 0 : _5.colors) === null || _6 === void 0 ? void 0 : _6.states) === null || _7 === void 0 ? void 0 : _7.pressed);
        };
        this.designSystems = designSystems;
        if (this.designSystems.length === 1) {
            this.setDesignSystem(this.designSystems[0]);
        }
    }
}
//# sourceMappingURL=DesignSystems.js.map