import { Routes } from '@angular/router';

import { FirstComponent } from './components/first-component/first-component';
import { ParentData }  from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender} from './components/if-render/if-render';
import { Eventos } from './components/eventos/eventos';
import { Emitter } from './components/emitter/emitter';
import { ListRender } from './components/list-render/list-render';
import { Pipe } from './components/pipe/pipe';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';




export const routes: Routes = [
    {path: '', component : ListRender},
    {path: 'first', component : FirstComponent},
    {path: 'parent-data', component : ParentData},
    {path: 'directives', component : Directives},
    {path: 'if-render', component : IfRender},
    {path: 'eventos', component : Eventos},
    {path: 'emitter', component : Emitter},
    {path: 'list-render', component : ListRender},
    {path: 'pipe', component : Pipe},
    {path: 'two-way-binding', component : TwoWayBinding},

];
