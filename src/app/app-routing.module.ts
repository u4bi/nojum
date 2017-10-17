import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatStepperModule,
         MatRadioModule,
         MatListModule,
         MatIconModule
       } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
       
import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';
import { MainFeatureComponent } from './pages/main/main-feature/main-feature.component';
import { MainFooterComponent } from './pages/main/main-footer/main-footer.component';

import { LoginComponent } from './pages/login/login.component';

import { CreateComponent } from './pages/create/create.component';

import { SuccessComponent } from './pages/success/success.component';

import { StoreComponent } from './pages/store/store.component';

const routes : Routes = [
  {
    path : 'main', component : MainComponent
  },
  {
    path : 'create', component : CreateComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'success', component : SuccessComponent
  },
  {
    path : 'store', component : StoreComponent
  },
  {
    path : '', redirectTo : '/main', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent,
    MainFooterComponent,
    LoginComponent,
    CreateComponent,
    SuccessComponent,
    StoreComponent
  ],
  exports : [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule
  ]
})
export class AppRoutingModule { }