import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '../../service/rooms/rooms.service';
import { Room } from '../../models/rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  public rooms: Array<Room> = [];
  public displayColumns: string[] = ['title', 'actions']
  public details: Array<Room> = [];
  public detailsDisplayCol = ['type', 'isLocked', 'created' , 'lastActivity'];
  public loader: boolean = false;
  public roomsForm = this.fb.group({
    title: ['',  Validators.required]
  });

  constructor(private fb: FormBuilder, private roomService: RoomsService) {
   }

  ngOnInit(): void {
    this.getDefaultRooms();
  }
  
  getDefaultRooms() {
    this.loader = true;
    this.roomService.getRooms().subscribe({
      next: (result) => { 
        let filteredArry = result.items.filter((item:any) => !item.teamId)
        this.rooms.push(...filteredArry);
        this.loader = false;
      },
      error: (error) => {
        this.loader = false;
      }
    });
  }

  onSubmit() {
    let title = this.roomsForm.value.title;
    let room: Room = { title };
    this.roomService.createRooms(room).subscribe({
      next: (result) => { 
        this.rooms = [...this.rooms,result];
      },
      error: (error) => {
        alert(error);
      }
    });
  }

  onRemove(id: any) {
    this.roomService.deleteRoom(id).subscribe({
      next: () => {
        this.rooms.splice(this.rooms.findIndex(a => a.id === id) , 1);
        this.rooms = [...this.rooms];
      },
      error: (error) => {
        alert(error);
      }
    });
  }

  viewDetails(id: any) {
    this.details = [this.rooms[this.rooms.findIndex(a => a.id === id)]];
  }

}
