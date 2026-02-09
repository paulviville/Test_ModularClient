import GraphicsModuleCamera from "./GraphicsModuleCamera.js";
import GraphicsModulePrimitive from "./GraphicsModulePrimitive.js";

const GraphicsModuleTypes = {
	// ModuleLambda: ModuleLambda,
	ModuleCamera: GraphicsModuleCamera,
	ModulePrimitive: GraphicsModulePrimitive,
	// ModuleTransform: ModuleTransform,
	// ModuleText: ModuleText,
}

Object.freeze( GraphicsModuleTypes );
export default GraphicsModuleTypes;

/// GraphicsModuleTypes : string -> uint
