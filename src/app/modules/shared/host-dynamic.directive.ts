import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHostDynamic]'
})
export class HostDynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
