// import Module from "./modules/module.js";

import EventBus from "./core/EventBus.js";
import ModuleTypes from "./modules/ModuleTypes.js";

const eventBus = new EventBus( );

console.log(ModuleTypes)

const modulePing = new ModuleTypes.Ping( 0 );
modulePing.register( eventBus );
const modulePing1 = new ModuleTypes.Ping( 1 );
modulePing1.register( eventBus );

eventBus.emitModule( 0, "PING", {});
eventBus.emitModule( 1, "PONG", {});