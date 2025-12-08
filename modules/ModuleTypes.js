import ModuleLambda from "./ModuleLambda/ModuleLambda.js"

const ModuleTypes = {
	Lambda: ModuleLambda,
}

Object.freeze( ModuleTypes );
export default ModuleTypes;

/// ModuleTypes : string -> uint
/// ModuleConstructors : uint -> func