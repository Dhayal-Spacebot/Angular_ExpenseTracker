import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createList(title : string) {
    this.taskService.createList(title).subscribe((list: List) => {
      this.route.navigate(['/lists', list._id]);
      this.toastr.success('List Added Successfully!!');
    });
  }

  onCancelClick(){
    this.toastr.error('Cancelled!!');
  }
}
