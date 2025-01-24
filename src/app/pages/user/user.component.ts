import { AfterViewInit, Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../common/modal/modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class UserComponent implements AfterViewInit {
  users: User[] = [];
  name: string = '';
  createdAt: string = '';
  email: string = '';

  selectedUser: User | null = null;

  constructor(private userService: UserService, private dialog: MatDialog) {}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log('users', this.users);
    });
  }

  createUser(user: User): void {
    this.userService.createUser(user).subscribe(() => {
      this.loadUsers();
    });
  }

  updateUser(user: User): void {
    if (user) {
      this.userService.updateUser(user).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null;
      });
    }
  }

  openModal(modalTitle: string, modalContent: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: modalTitle,
        content: modalContent,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  async viewUser(id: number): Promise<void> {
    this.userService.getUser(id).subscribe((user: any) => {
      console.log('user', user);
      if (user) {
        this.name = user.name;
        this.email = user.email;
        this.createdAt = user.createdAt;

        let modalTile = 'User Details';
        let modalContent = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Created At: ${user.createdAt}</p>
        `;
        this.openModal(modalTile, modalContent);
      }
    });
  }

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  clearSelection(): void {
    this.selectedUser = null;
  }
}
