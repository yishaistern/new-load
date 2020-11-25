import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, Inject } from '@angular/core';
import { HostDynamicDirective } from '../host-dynamic.directive';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { compObj } from '../../shared/get-comp';
@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(HostDynamicDirective, {static: true}) compHost: HostDynamicDirective;
  constructor(
    public dialogRef: MatDialogRef<DynamicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const comp =  compObj[this.data.key].component;
    const componentFactory = this.resolver.resolveComponentFactory(comp);
    const viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
