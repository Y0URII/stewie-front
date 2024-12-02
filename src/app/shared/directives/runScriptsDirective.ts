import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({ selector: '[runScripts]', standalone: true })
export class RunScriptsDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }
    ngOnInit(): void {
        setTimeout(() => { // wait for DOM rendering
            this.reinsertScripts();
        });
    }
    reinsertScripts(): void {
        const scripts = Array.from(this.elementRef.nativeElement.getElementsByTagName('script')) as HTMLScriptElement[];
    
        scripts.forEach(script => {
            const scriptCopy = document.createElement('script');
            scriptCopy.type = script.type || 'text/javascript';
            scriptCopy.async = false;
    
            if (script.src) {
                scriptCopy.src = script.src;
            } else {
                scriptCopy.textContent = script.textContent;
            }
    
            script.parentNode?.replaceChild(scriptCopy, script);
        });
    }
}