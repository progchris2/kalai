"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorFactory = void 0;
class CreatorFactory {
    get getController() {
        return this.factoryMethod();
    }
}
exports.CreatorFactory = CreatorFactory;
