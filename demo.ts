import { Proxy } from "./proxy";

export function show() : void {
 var proxy1: Proxy = new Proxy("proxy1"),

 proxy2: Proxy = new Proxy("proxy2");

 proxy1.doAction();
 proxy1.doAction();
 proxy2.doAction();
 proxy2.doAction();
 proxy1.doAction();
}
show();

