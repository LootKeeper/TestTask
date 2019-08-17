import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FormComponent,
        SearchComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot([
            { path: '', component: FormComponent, pathMatch: 'full' },
            { path: 'listing', component: SearchComponent },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
