(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-d-controls-src-app-e-d-controls-e-d-controls-module"],{

/***/ "/rhn":
/*!********************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/file-upload/file-upload.component.ts ***!
  \********************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _helpers_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/xml */ "hGtk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ "ORmv");




class FileUploadComponent {
    constructor(bindings) {
        this.bindings = bindings;
        this.requiredFileType = '.binds';
        this._xmlParser = new DOMParser();
    }
    ngOnInit() {
        this.subscription = this.bindings.currentMessage.subscribe(message => this.message = message);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    parseBindingsFile(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event) {
                console.log(JSON.stringify(event));
                let files = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files;
                if (files && files.length > 0) {
                    let file = files[0];
                    if (file) {
                        this.fileName = file.name;
                        let text = yield file.text();
                        let bindingsDoc = this._xmlParser.parseFromString(text, 'text/xml');
                        let bindingsObj = _helpers_xml__WEBPACK_IMPORTED_MODULE_1__["XML"].toObject(bindingsDoc);
                        console.info('successfully parsed');
                        this.bindings.updateDocument(JSON.stringify(bindingsObj));
                    }
                }
            }
        });
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__["BindingsDataService"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 9, vars: 2, consts: [[1, "container-fluid", "my-1"], [1, "row"], ["type", "file", 1, "file-input", "visually-hidden", 3, "accept", "change"], ["fileUpload", ""], [1, "file-upload", "col"], ["color", "primary", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-controller"], [1, "fw-light"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_2_listener($event) { return ctx.parseBindingsFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accept", ctx.requiredFileType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.fileName ? ctx.fileName : "Select Bindings File", "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "04bN":
/*!*******************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/tab-card/tab-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCardComponent", function() { return TabCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TabCardComponent_div_10_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("key-sprite ", k_r4, "");
} }
function TabCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabCardComponent_div_10_i_4_Template, 2, 3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r2.command, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", c_r2.keys);
} }
function TabCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " unassigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r5.command, ": ");
} }
class TabCardComponent {
    constructor() {
        this.showUnassigned = false;
    }
}
TabCardComponent.ɵfac = function TabCardComponent_Factory(t) { return new (t || TabCardComponent)(); };
TabCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabCardComponent, selectors: [["app-tab-card"]], inputs: { data: "data" }, decls: 13, vars: 6, consts: [[1, "card", "my-1"], [1, "card-header", "fs-6"], [1, "d-flex"], [1, "p-1", "flex-grow-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Show unassigned", 1, "form-check", "form-switch", "form-check-inline"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexSwitchCheckDefault", 1, "form-check-label", "fw-light", "d-none", "d-md-block"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "bg-light", "p-1", "fs-7"], [1, "border", "border-light", "p-1", "flex-fill"], [3, "class", 4, "ngFor", "ngForOf"], [1, "p-1", "fs-7"], [1, "p-1", "fw-light", "flex-fill"]], template: function TabCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TabCardComponent_Template_input_change_7_listener() { return ctx.showUnassigned = !ctx.showUnassigned; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Show unassigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabCardComponent_div_10_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TabCardComponent_div_12_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-footer ", ctx.showUnassigned ? "" : "d-none", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.unassigned);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["i.key-sprite[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    zoom: 0.75;\r\n    -webkit-print-color-adjust: exact !important;\r\n    color-adjust: exact !important;\r\n}\r\ni.key-sprite.GamePad_RThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -0px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_LTrigger, .Neg_GamePad_LTrigger[_ngcontent-%COMP%], .GamePad_LTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_RTrigger, .Neg_GamePad_RTrigger[_ngcontent-%COMP%], .GamePad_RTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Back[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -128px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Forward[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -160px no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLDJFQUEyRTtBQUMvRTtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksNkVBQTZFO0FBQ2pGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLGdGQUFnRjtBQUNwRjtBQUNBO0lBQ0ksZ0ZBQWdGO0FBQ3BGIiwiZmlsZSI6InRhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpLmtleS1zcHJpdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB6b29tOiAwLjc1O1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xMjhweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLlBvc19HYW1lUGFkX1JTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC02NHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuTmVnX0dhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9SU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX1JTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTMycHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xUaHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTI4cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTk2cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9MU3RpY2tYIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xNjBweCAtMzJweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTIyNHB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuUG9zX0dhbWVQYWRfTFN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5OZWdfR2FtZVBhZF9MU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0zMnB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkVXAge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkUmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkRG93biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAtOTZweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfRFBhZExlZnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTk2cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VVcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VEb3duIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0wcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9GYWNlTGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xCdW1wZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTEyOHB4IDBweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUkJ1bXBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX0xUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfTFRyaWdnZXIsIC5HYW1lUGFkX0xUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTYwcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX1JUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfUlRyaWdnZXIsIC5HYW1lUGFkX1JUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9CYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtMTI4cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZvcndhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC0xNjBweCBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "CUlp":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "GyUE":
/*!******************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/tabs.component.ts ***!
  \******************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-tab/ship-tab.component */ "OJ24");
/* harmony import */ var _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srv-tab/srv-tab.component */ "JfAQ");
/* harmony import */ var _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-tab/map-tab.component */ "qG25");




class TabsComponent {
    refreshLayout() {
        /* triggers UI update check */
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 23, vars: 0, consts: [[1, "container-fluid", "mb-1"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "ship-tab", "data-bs-toggle", "tab", "data-bs-target", "#ship", "type", "button", "role", "tab", "aria-controls", "ship", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "srv-tab", "data-bs-toggle", "tab", "data-bs-target", "#srv", "type", "button", "role", "tab", "aria-controls", "srv", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "map-tab", "data-bs-toggle", "tab", "data-bs-target", "#map", "type", "button", "role", "tab", "aria-controls", "map", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "camera-tab", "data-bs-toggle", "tab", "data-bs-target", "#camera", "type", "button", "role", "tab", "aria-controls", "camera", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "myTabContent", 1, "tab-content"], ["id", "ship", "role", "tabpanel", "aria-labelledby", "ship-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "srv", "role", "tabpanel", "aria-labelledby", "srv-tab", 1, "tab-pane", "fade"], ["id", "map", "role", "tabpanel", "aria-labelledby", "map-tab", 1, "tab-pane", "fade"], ["id", "camera", "role", "tabpanel", "aria-labelledby", "camera-tab", 1, "tab-pane", "fade"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_3_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_6_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SRV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_9_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_12_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-ship-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-srv-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-map-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__["ShipTabComponent"], _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__["SrvTabComponent"], _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__["MapTabComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Hy43":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "CUlp"),
        __webpack_require__(/*! get-size/get-size */ "QK1G"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "YVj6"),
        __webpack_require__(/*! ./item */ "KK1e")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "Ih2i":
/*!*********************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/e-d-controls.component.ts ***!
  \*********************************************************************/
/*! exports provided: EDControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsComponent", function() { return EDControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "/rhn");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs.component */ "GyUE");



class EDControlsComponent {
    constructor() { }
}
EDControlsComponent.ɵfac = function EDControlsComponent_Factory(t) { return new (t || EDControlsComponent)(); };
EDControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EDControlsComponent, selectors: [["app-e-d-controls"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row-fluid"]], template: function EDControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]], styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "JfAQ":
/*!*****************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/srv-tab/srv-tab.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SrvTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrvTabComponent", function() { return SrvTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "gKf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "04bN");



class SrvTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.srv-grid';
    }
    getHeadingData() {
        return this.getCardData('Heading', new Map([
            ['Steering', 'root.steeringaxis'],
            ['Steer Left', 'root.steerleftbutton'],
            ['Steer Right', 'root.steerrightbutton'],
            ['Roll', 'root.buggyrollaxisraw'],
            ['Roll Left', 'root.buggyrollleftbutton'],
            ['Roll Right', 'root.buggyrollrightbutton'],
            ['Pitch', 'root.buggypitchaxis'],
            ['Pitch Up', 'root.buggypitchupbutton'],
            ['Pitch Down', 'root.buggypitchdownbutton']
        ]));
    }
    getMovementData() {
        return this.getCardData('Movement', new Map([
            ['Vertical Thrusters', 'root.verticalthrustersbutton'],
            ['Throttle', 'root.drivespeedaxis'],
            ['Max Throttle Forward', 'root.increasespeedbuttonmax'],
            ['Max Throttle Backward', 'root.decreasespeedbuttonmax'],
            ['Increase Speed', 'root.increasespeedbuttonpartial'],
            ['Decrease Speed', 'root.decreasespeedbuttonpartial'],
            ['Toggle Drive Assist', 'root.toggledriveassist'],
            ['Toggle Handbrake', 'root.autobreakbuggybutton']
        ]));
    }
    getDrivingMiscData() {
        return this.getCardData('Driving / Misc.', new Map([
            ['Toggle Lights', 'root.headlightsbuggybutton'],
            ['PIPs to Engines', 'root.increaseenginespower_buggy'],
            ['PIPs to Weapons', 'root.increaseweaponspower_buggy'],
            ['PIPs to Systems', 'root.increasesystemspower_buggy'],
            ['Reset PIPs', 'root.resetpowerdistribution_buggy'],
            ['Toggle Cargo Scoop', 'root.togglecargoscoop_buggy'],
            ['Eject All Cargo', 'root.ejectallcargo_buggy'],
            ['Recall / Dismiss Ship', 'root.recalldismissship']
        ]));
    }
    getTargetingData() {
        return this.getCardData('Targeting', new Map([
            ['targetAheadKey', 'root.selecttarget_buggy']
        ]));
    }
    getWeaponsData() {
        return this.getCardData('Weapons', new Map([
            ['Primary Fire', 'root.buggyprimaryfirebutton'],
            ['Secondary Fire', 'root.buggysecondaryfirebutton'],
            ['Toggle Turret', 'root.togglebuggyturretbutton'],
            ['Next Fire Group', 'root.buggycyclefiregroupnext'],
            ['Previous Fire Group', 'root.buggycyclefiregroupprevious'],
            ['Turret Yaw', 'root.buggyturretyawaxisraw'],
            ['Turret Yaw Left', 'root.buggyturretyawleftbutton'],
            ['Turret Yaw Right', 'root.buggyturretyawrightbutton'],
            ['Turret Pitch', 'root.buggyturretpitchaxisraw'],
            ['Turret Pitch Up', 'root.buggyturretpitchupbutton'],
            ['Turret Pitch Down', 'root.buggyturretpitchdownbutton'],
            ['Toggle HUD Mode', 'root.playerhudmodetoggle_buggy']
        ]));
    }
    getHeadlookData() {
        return this.getCardData('Headlook', new Map([
            ['Toggle Headlook', 'root.headlooktoggle_buggy'],
            ['Reset View', 'root.headlookreset'],
            ['Up / Down', 'root.headlookpitchaxisraw'],
            ['Look Up', 'root.headlookpitchup'],
            ['Look Down', 'root.headlookpitchdown'],
            ['Left / Right', 'root.headlookyawaxis'],
            ['Look Left', 'root.headlookyawleft'],
            ['Look Right', 'root.headlookyawright']
        ]));
    }
    getMenuData() {
        return this.getCardData('UI / Menus', new Map([
            ['UI Focus', 'root.uifocus_buggy'],
            ['Left Panel', 'root.focusleftpanel_buggy'],
            ['Comms Panel', 'root.focuscommspanel_buggy'],
            ['Quck Comms Panel', 'root.quickcommspanel_buggy'],
            ['Right Panel', 'root.focusrightpanel_buggy'],
            ['Role Panel', 'root.focusradarpanel_buggy'],
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
SrvTabComponent.ɵfac = function SrvTabComponent_Factory(t) { return ɵSrvTabComponent_BaseFactory(t || SrvTabComponent); };
SrvTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SrvTabComponent, selectors: [["app-srv-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "srv-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "driving-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function SrvTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMovementData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getDrivingMiscData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getTargetingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getWeaponsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadlookData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMenuData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵSrvTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SrvTabComponent);


/***/ }),

/***/ "KK1e":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "CUlp"),
        __webpack_require__(/*! get-size/get-size */ "QK1G")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "OJ24":
/*!*******************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/ship-tab/ship-tab.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShipTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipTabComponent", function() { return ShipTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "gKf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "04bN");



class ShipTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.ship-grid';
    }
    getHeadingData() {
        return this.getCardData('Heading', new Map([
            ['Yaw', 'root.yawaxisraw'],
            ['Yaw Left', 'root.yawleftbutton'],
            ['Yaw Right', 'root.yawrightbutton'],
            ['Roll', 'root.rollaxisraw'],
            ['Roll Left', 'root.rollleftbutton'],
            ['Roll Right', 'root.rollrightbutton'],
            ['Pitch', 'root.pitchaxisraw'],
            ['Pitch Up', 'root.pitchupbutton'],
            ['Pitch Down', 'root.pitchdownbutton']
        ]));
    }
    getMovementData() {
        return this.getCardData('Movement', new Map([
            ['Lateral Thrust', 'root.lateralthrustraw'],
            ['Thrust Left', 'root.leftthrustbutton'],
            ['Thrust Right', 'root.rightthrustbutton'],
            ['Vertical Thrust', 'root.verticalthrustraw'],
            ['Thrust Up', 'root.upthrustbutton'],
            ['Thrust Down', 'root.downthrustbutton'],
            ['Ahead Thrust', 'root.aheadthrust'],
            ['Thrust Forwards', 'root.forwardthrustbutton'],
            ['Thrust Backwards', 'root.backwardthrustbutton']
        ]));
    }
    getThrustData() {
        return this.getCardData('Thrust', new Map([
            ['Throttle', 'root.throttleaxis'],
            ['Throttle Forwards', 'root.forwardkey'],
            ['Throttle Backwards', 'root.backwardkey'],
            ['Set Throttle -100%', 'root.setspeedminus100'],
            ['Set Throttle -75%', 'root.setspeedminus75'],
            ['Set Throttle -50%', 'root.setspeedminus50'],
            ['Set Throttle -25%', 'root.setspeedminus25'],
            ['Set Throttle 0%', 'root.setspeedzero'],
            ['Set Throttle 25%', 'root.setspeed25'],
            ['Set Throttle 50%', 'root.setspeed50'],
            ['Set Throttle 75%', 'root.setspeed75'],
            ['Set Throttle 100%', 'root.setspeed100'],
            ['Toggle Flight Assist', 'root.toggleflightassist'],
            ['Boost', 'root.useboostjuice']
        ]));
    }
    getFlightMiscData() {
        return this.getCardData('Flight / Misc.', new Map([
            ['Toggle Silent Running', 'root.togglebuttonupinput'],
            ['Toggle Lights', 'root.shipspotlighttoggle'],
            ['Radar Zoom', 'root.radarrangeaxis'],
            ['Radar Zoom Out', 'root.radarincreaserange'],
            ['Radar Zoom In', 'root.radardecreaserange'],
            ['PIPs to Engines', 'root.increaseenginespower'],
            ['PIPs to Weapons', 'root.increaseweaponspower'],
            ['PIPs to Systems', 'root.increasesystemspower'],
            ['Reset PIPs', 'root.resetpowerdistribution'],
            ['Toggle Cargo Scoop', 'root.togglecargoscoop'],
            ['Eject All Cargo', 'root.ejectallcargo'],
            ['Toggle Landing Gear', 'root.landinggeartoggle'],
            ['Toggle Night Vision', 'root.nightvisiontoggle']
        ]));
    }
    getFrameShiftData() {
        return this.getCardData('Frame Shift Drive', new Map([
            ['Toggle FSD', 'root.hypersupercombination'],
            ['Supercruise', 'root.supercruise'],
            ['Hyperspace Jump', 'root.hyperspace'],
            ['Toggle Orbit Lines', 'root.orbitlinestoggle'],
            ['Enter FSS', 'root.explorationfssenter']
        ]));
    }
    getTargetingData() {
        return this.getCardData('Targeting', new Map([
            ['Select Target Ahead', 'root.selecttarget'],
            ['Next Target', 'root.cyclenexttarget'],
            ['Previous Target', 'root.cycleprevioustarget'],
            ['Select Highest Threat', 'root.selecthighestthreat'],
            ['Next Hostile Target', 'root.cyclenexthostiletarget'],
            ['Previous Hostile Target', 'root.cycleprevioushostiletarget'],
            ['Target Wingman 0', 'root.targetwingman0'],
            ['Target Wingman 1', 'root.targetwingman1'],
            ['Target Wingman 2', 'root.targetwingman2'],
            ['Select Wingman\'s Target', 'root.selecttargetstarget'],
            ['Toggle Nav Lock', 'root.wingnavlock'],
            ['Target Next Subsystem', 'root.cyclenextsubsystem'],
            ['Target Previous Subsystem', 'root.cycleprevioussubsystem'],
            ['Target Next System in Route', 'root.targetnextroutesystem']
        ]));
    }
    getWeaponsData() {
        return this.getCardData('Weapons', new Map([
            ['Primary Fire', 'root.primaryfire'],
            ['Secondary Fire', 'root.secondaryfire'],
            ['Next Fire Group', 'root.cyclefiregroupnext'],
            ['Previous Fire Group', 'root.cyclefiregroupprevious'],
            ['Toggle Hardpoints', 'root.deployhardpointtoggle'],
            ['Toggle HUD Mode', 'root.playerhudmodetoggle']
        ]));
    }
    getUtilitiesData() {
        return this.getCardData('Utilities', new Map([
            ['Deploy Heatsink', 'root.deployheatsink'],
            ['Use Shield Cell', 'root.useshieldcell'],
            ['Use Chaff', 'root.firechafflauncher'],
            ['Charge ECM', 'root.chargeecm']
        ]));
    }
    getHeadlookData() {
        return this.getCardData('Headlook', new Map([
            ['Toggle Headlook', 'root.headlooktoggle'],
            ['Reset View', 'root.headlookreset'],
            ['Up / Down', 'root.headlookpitchaxisraw'],
            ['Look Up', 'root.headlookpitchup'],
            ['Look Down', 'root.headlookpitchdown'],
            ['Left / Right', 'root.headlookyawaxis'],
            ['Look Left', 'root.headlookyawleft'],
            ['Look Right', 'root.headlookyawright']
        ]));
    }
    getMenuData() {
        return this.getCardData('UI / Menus', new Map([
            ['UI Focus', 'root.uifocus'],
            ['Left Panel', 'root.focusleftpanel'],
            ['Comms Panel', 'root.focuscommspanel'],
            ['Quck Comms Panel', 'root.quickcommspanel'],
            ['Right Panel', 'root.focusrightpanel'],
            ['Role Panel', 'root.focusradarpanel'],
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
ShipTabComponent.ɵfac = function ShipTabComponent_Factory(t) { return ɵShipTabComponent_BaseFactory(t || ShipTabComponent); };
ShipTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShipTabComponent, selectors: [["app-ship-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 10, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "ship-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "thrust"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "flight-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "frame-shift"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "utilities"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function ShipTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMovementData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getThrustData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getFlightMiscData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getFrameShiftData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getTargetingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getWeaponsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getUtilitiesData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadlookData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMenuData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵShipTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShipTabComponent);


/***/ }),

/***/ "ORmv":
/*!********************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/bindings-data.service.ts ***!
  \********************************************************************/
/*! exports provided: BindingsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingsDataService", function() { return BindingsDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BindingsDataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
    }
    updateDocument(bindings) {
        this.messageSource.next(bindings);
    }
}
BindingsDataService.ɵfac = function BindingsDataService_Factory(t) { return new (t || BindingsDataService)(); };
BindingsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BindingsDataService, factory: BindingsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QK1G":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "YVj6":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "x0Ue")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "bgVs":
/*!******************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/e-d-controls.module.ts ***!
  \******************************************************************/
/*! exports provided: EDControlsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsModule", function() { return EDControlsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "/rhn");
/* harmony import */ var _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/map-tab/map-tab.component */ "qG25");
/* harmony import */ var _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/ship-tab/ship-tab.component */ "OJ24");
/* harmony import */ var _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/srv-tab/srv-tab.component */ "JfAQ");
/* harmony import */ var _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tab-card/tab-card.component */ "04bN");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "GyUE");
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./e-d-controls.component */ "Ih2i");
/* harmony import */ var _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./e-d-controls-routing.module */ "eKdT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class EDControlsModule {
}
EDControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EDControlsModule });
EDControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function EDControlsModule_Factory(t) { return new (t || EDControlsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__["EDControlsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EDControlsModule, { declarations: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
        _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"],
        _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__["ShipTabComponent"],
        _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__["SrvTabComponent"],
        _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__["TabCardComponent"],
        _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__["MapTabComponent"],
        _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__["EDControlsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__["EDControlsRoutingModule"]], exports: [_e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__["EDControlsComponent"]] }); })();


/***/ }),

/***/ "eKdT":
/*!**************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/e-d-controls-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EDControlsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsRoutingModule", function() { return EDControlsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-d-controls.component */ "Ih2i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__["EDControlsComponent"] },
    { path: 'e-d-controls', component: _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__["EDControlsComponent"] }
];
class EDControlsRoutingModule {
}
EDControlsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EDControlsRoutingModule });
EDControlsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EDControlsRoutingModule_Factory(t) { return new (t || EDControlsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EDControlsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gKf9":
/*!************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/base-tab.ts ***!
  \************************************************************/
/*! exports provided: BaseTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTab", function() { return BaseTab; });
/* harmony import */ var _helpers_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/find */ "o+9P");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ "hNNL");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ "ORmv");




class BaseTab {
    constructor(dataSvc, zone) {
        this.dataSvc = dataSvc;
        this.zone = zone;
    }
    updateBindings(message) {
        if (message) {
            console.info('received message...');
            this.bindingsStr = message;
            try {
                this.bindings = JSON.parse(message);
                console.info('successfully parsed message');
            }
            catch (e) {
                console.error(`invalid message received: ${message}`);
            }
        }
    }
    getKeysFor(key) {
        if (this.bindings) {
            let ctrl = _helpers_find__WEBPACK_IMPORTED_MODULE_0__["Find"].gamePadInput(this.bindings, key);
            if (ctrl) {
                return ctrl.keys.reverse();
            }
        }
        return [];
    }
    getCardData(name, keyValPairs) {
        let keys;
        let controls = [];
        let unassigned = [];
        keyValPairs.forEach((locator, command) => {
            keys = this.getKeysFor(locator);
            if ((keys === null || keys === void 0 ? void 0 : keys.length) > 0) {
                controls.push({ command: command, keys: keys });
            }
            else {
                unassigned.push({ command: command });
            }
            keys = null;
        });
        return { name: name, controls: controls, unassigned: unassigned };
    }
    ngOnInit() {
        this.subscription = this.dataSvc.currentMessage.subscribe(message => this.updateBindings(message));
        try {
            this.msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_1__(this.getMasonrySelector());
        }
        catch (e) { /* ignore */ }
    }
    ngAfterViewChecked() {
        this.refreshLayout();
    }
    refreshLayout() {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                var _a;
                (_a = this.msnry) === null || _a === void 0 ? void 0 : _a.layout();
            }, 200);
        });
    }
    disableMasonry() {
        var _a;
        console.info('masonry layout disabled while printing');
        (_a = this.msnry) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
BaseTab.ɵfac = function BaseTab_Factory(t) { return new (t || BaseTab)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__["BindingsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
BaseTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseTab, selectors: [["ng-component"]], hostBindings: function BaseTab_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.control.p", function BaseTab_keydown_control_p_HostBindingHandler() { return ctx.disableMasonry(); });
    } }, decls: 0, vars: 0, template: function BaseTab_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "hGtk":
/*!**********************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/helpers/xml.ts ***!
  \**********************************************************/
/*! exports provided: XML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XML", function() { return XML; });
var XML;
(function (XML) {
    function parseText(sValue) {
        if (/^\s*$/.test(sValue)) {
            return null;
        }
        if (/^(?:true|false)$/i.test(sValue)) {
            return sValue.toLowerCase() === "true";
        }
        if (isFinite(sValue)) {
            return parseFloat(sValue);
        }
        if (isFinite(Date.parse(sValue))) {
            return new Date(sValue);
        }
        return sValue;
    }
    function toObject(oXMLParent) {
        var vResult = {}, nLength = 0, sCollectedTxt = "";
        let oXMLParentElement = oXMLParent;
        if ((oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.hasAttributes) && (oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.attributes) && (oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.hasAttributes())) {
            vResult = {};
            for (nLength; nLength < oXMLParentElement.attributes.length; nLength++) {
                let oAttrib = oXMLParentElement.attributes.item(nLength);
                vResult["@" + oAttrib.name.toLowerCase()] = parseText(oAttrib.value.trim());
            }
        }
        if (oXMLParent.hasChildNodes()) {
            for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                oNode = oXMLParent.childNodes.item(nItem);
                if (oNode.nodeType === 4) {
                    sCollectedTxt += oNode.nodeValue;
                } /* nodeType is "CDATASection" (4) */
                else if (oNode.nodeType === 3) {
                    sCollectedTxt += oNode.nodeValue.trim();
                } /* nodeType is "Text" (3) */
                else if (oNode.nodeType === 1 && !oNode.prefix) { /* nodeType is "Element" (1) */
                    if (nLength === 0) {
                        vResult = {};
                    }
                    sProp = oNode.nodeName.toLowerCase();
                    vContent = toObject(oNode);
                    if (vResult.hasOwnProperty(sProp)) {
                        if (vResult[sProp].constructor !== Array) {
                            vResult[sProp] = [vResult[sProp]];
                        }
                        vResult[sProp].push(vContent);
                    }
                    else {
                        vResult[sProp] = vContent;
                        nLength++;
                    }
                }
            }
        }
        if (sCollectedTxt) {
            nLength > 0 ? vResult.keyValue = parseText(sCollectedTxt) : vResult = parseText(sCollectedTxt);
        }
        return vResult;
    }
    XML.toObject = toObject;
})(XML || (XML = {}));


/***/ }),

/***/ "hNNL":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "Hy43"),
        __webpack_require__(/*! get-size/get-size */ "QK1G")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "o+9P":
/*!***********************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/helpers/find.ts ***!
  \***********************************************************/
/*! exports provided: Find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Find", function() { return Find; });
var Find;
(function (Find) {
    function inObject(obj, keys) {
        let result = null;
        let keysArray = (keys === null || keys === void 0 ? void 0 : keys.split('.')) || [];
        let currentKey = keysArray.shift();
        if ((currentKey === null || currentKey === void 0 ? void 0 : currentKey.length) > 0) {
            switch (typeof obj) {
                case "object":
                    result = inObject(obj[currentKey], keysArray.join('.'));
                    break;
                default:
                    result = null;
                    break;
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    Find.inObject = inObject;
    function gamePadInput(obj, keys) {
        let input = null;
        try {
            let container = inObject(obj, keys);
            let actual = null;
            if (container['binding']) {
                let binding = container['binding'];
                if (binding["@key"] && binding["@key"].match(/.*(gamepad).*/ig)) {
                    actual = binding;
                }
            }
            else if (container['primary']) {
                let primary = container['primary'];
                if (primary["@key"] && primary["@key"].match(/.*(gamepad).*/ig)) {
                    actual = primary;
                }
                if (!actual) {
                    let secondary = container['secondary'];
                    if (secondary["@key"] && secondary["@key"].match(/.*(gamepad).*/ig)) {
                        actual = secondary;
                    }
                }
            }
            if (actual) {
                input = {
                    keys: [actual["@key"]],
                };
                if (actual['modifier']) {
                    // console.info('found modifier(s)');
                    if (Array.isArray(actual['modifier'])) {
                        // console.info('modifier is an array...');
                        let modifiers = actual['modifier'];
                        for (var i = 0; i < modifiers.length; i++) {
                            input.keys.push(modifiers[i]["@key"]);
                        }
                    }
                    else {
                        // console.info('modifier is a single value');
                        input.keys.push(actual['modifier']["@key"]);
                    }
                }
            }
        }
        catch (e) {
            console.error(`ERROR with keys '${keys}' due to: ${e}`);
        }
        return input;
    }
    Find.gamePadInput = gamePadInput;
})(Find || (Find = {}));


/***/ }),

/***/ "qG25":
/*!*****************************************************************************!*\
  !*** ./e-d-controls/src/app/e-d-controls/tabs/map-tab/map-tab.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MapTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTabComponent", function() { return MapTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "gKf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "04bN");



class MapTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.map-grid';
    }
    getMapControlsData() {
        return this.getCardData('Map Controls', new Map([
            ['Galaxy Map (Ship)', 'root.galaxymapopen'],
            ['Galaxy Map (SRV)', 'root.galaxymapopen_buggy'],
            ['Hightlight Current System', 'root.galaxymaphome'],
            ['System Map (Ship)', 'root.systemmapopen'],
            ['System Map (SRV)', 'root.systemmapopen_buggy']
        ]));
    }
    getCameraControlsData() {
        return this.getCardData('Camera Controls', new Map([
            ['Camera Pitch', 'root.campitchaxis'],
            ['Camera Pitch Up', 'root.campitchup'],
            ['Camera Pitch Down', 'root.campitchdown'],
            ['Camera Yaw', 'root.camyawaxis'],
            ['Camera Yaw Left', 'root.camyawleft'],
            ['Camera Yaw Right', 'root.camyawright'],
            ['Camera Translate Y-Axis', 'root.camtranslateyaxis'],
            ['Camera Translate Forward', 'root.camtranslateforward'],
            ['Camera Translate Backward', 'root.camtranslatebackward'],
            ['Camera Translate X-Axis', 'root.camtranslatexaxis'],
            ['Camera Translate Left', 'root.camtranslateleft'],
            ['Camera Translate Right', 'root.camtranslateright'],
            ['Camera Translate Z-Axis', 'root.camtranslatezaxis'],
            ['Camera Translate Up', 'root.camtranslateup'],
            ['Camera Translate Down', 'root.camtranslatedown'],
            ['Camera Zoom', 'root.camzoomaxis'],
            ['Camera Zoom In', 'root.camzoomin'],
            ['Camera Zoom Out', 'root.camzoomout'],
            ['Camera Translate Z-Hold', 'root.camtranslatezhold']
        ]));
    }
    getUiControlsData() {
        return this.getCardData('UI Controls', new Map([
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
MapTabComponent.ɵfac = function MapTabComponent_Factory(t) { return ɵMapTabComponent_BaseFactory(t || MapTabComponent); };
MapTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapTabComponent, selectors: [["app-map-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "map-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "map-controls"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "camera-controls"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "ui-controls"]], template: function MapTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMapControlsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getCameraControlsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getUiControlsData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵMapTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MapTabComponent);


/***/ }),

/***/ "x0Ue":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ })

}]);
//# sourceMappingURL=e-d-controls-src-app-e-d-controls-e-d-controls-module.js.map