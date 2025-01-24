import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './common/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nice-admin';
}
