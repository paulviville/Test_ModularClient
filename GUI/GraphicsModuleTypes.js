import GraphicsModuleCamera from "./GraphicsModuleCamera.js";

const GraphicsModuleTypes = {
	// ModuleLambda: ModuleLambda,
	ModuleCamera: GraphicsModuleCamera,
	// ModuleTransform: ModuleTransform,
	// ModuleText: ModuleText,
}

Object.freeze( GraphicsModuleTypes );
export default GraphicsModuleTypes;

/// GraphicsModuleTypes : string -> uint
