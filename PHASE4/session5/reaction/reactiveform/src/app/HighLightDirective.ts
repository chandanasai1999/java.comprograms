import { renderFlagCheckIfStmt } from "@angular/compiler/src/render3/view/template";
import { Directive, ElementRef, Renderer2 } from "@angular/core";


@Directive({
    selector:'[highlight]' //directive selector
})
export class HighLightDirective{

    constructor(elemref:ElementRef,render:Renderer2)

{
    render.setStyle(elemref.nativeElement,'background-color','red');
}
}