import ModuleManager from "../core/ModuleManager.js";
import ModuleCamera from "./ModuleCamera/ModuleCamera.js";
import ModuleLambda from "./ModuleLambda/ModuleLambda.js"
import ModulePing from "./ModulePing/ModulePing.js"

const ModuleTypes = {
	Lambda: ModuleLambda,
	Ping: ModulePing,
	Camera: ModuleCamera,
}

Object.freeze( ModuleTypes );
export default ModuleTypes;

/// ModuleTypes : string -> uint
