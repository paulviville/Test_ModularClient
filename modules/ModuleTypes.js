import ModuleLambda from "./ModuleLambda/ModuleLambda.js"
import ModulePing from "./ModulePing/ModulePing.js"

const ModuleTypes = {
	Lambda: ModuleLambda,
	Ping: ModulePing,
}

Object.freeze( ModuleTypes );
export default ModuleTypes;

/// ModuleTypes : string -> uint
/// ModuleConstructors : uint -> func
