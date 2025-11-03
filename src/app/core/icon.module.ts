import { NgModule } from '@angular/core';
// @ts-ignore
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    MatIconModule
  ],
  exports: [
    MatIconModule
  ]
})
export class IconModule { // You can place this in a dedicated or a shared module
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    // This tells MatIconRegistry to look for icons in your SVG sprite file.
    // Make sure the path '/assets/icons.svg' is correct based on your build configuration (angular.json or project.json).
    this.iconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons.svg')
    );
  }
}
