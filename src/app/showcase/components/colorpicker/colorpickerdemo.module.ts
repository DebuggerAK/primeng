import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {ColorPickerDemo} from './colorpickerdemo';
import {ColorPickerDemoRoutingModule} from './colorpickerdemo-routing.module';
import {ColorPickerModule} from 'primeng/colorpicker';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ColorPickerDemoRoutingModule,
        ColorPickerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ColorPickerDemo
	]
})
export class ColorPickerDemoModule {}
