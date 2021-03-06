"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wizard_component_1 = require("./src/wizard.component");
var wizard_step_component_1 = require("./src/wizard-step.component");
__export(require("./src/wizard.component"));
__export(require("./src/wizard-step.component"));
var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule_1 = FormWizardModule;
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    var FormWizardModule_1;
    FormWizardModule = FormWizardModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ],
            exports: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ]
        })
    ], FormWizardModule);
    return FormWizardModule;
}());
exports.FormWizardModule = FormWizardModule;
//# sourceMappingURL=index.js.map