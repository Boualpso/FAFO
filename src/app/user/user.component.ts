import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];
  selectedUserSignal = signal( DUMMY_USERS[randomIndex]);

  imagePathBySignal = computed(() => 'assets/users/'+this.selectedUserSignal().avatar)

  get imagePath(){
    return 'assets/users/'+ this.selectedUser.avatar

  }


  get namePath(){
    return 'assets/user'+ this.selectedUser.name
    
  } 

  onSelectedUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    
  }

  onSelectedUserSignal(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUserSignal.set(DUMMY_USERS[randomIndex]);
    
  }
}
