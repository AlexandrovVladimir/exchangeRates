import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExchangeRoutingModule} from "./exchange-routing.module";
import { ExchangeContainerComponent } from './containers/exchange-container/exchange-container.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContentComponent } from './components/content/content.component';
import {MatSelectModule} from "@angular/material/select";
import {SatDatepickerModule, SatNativeDateModule} from "saturn-datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ConversionComponent } from './components/conversion/conversion.component';
import { FilteredComponent } from './components/filtered/filtered.component';
import { ExchangeStateModule } from "../../store/exchange/exchange-state.module";

@NgModule({
  declarations: [
    ExchangeContainerComponent,
    HeaderComponent,
    ContentComponent,
    ConversionComponent,
    FilteredComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    ExchangeStateModule
  ]
})
export class ExchangeModule { }
