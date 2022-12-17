import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  tasks: Task = new Task;
  listId: string = '';

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    });
  }

  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route });
      this.toastr.success('Task Added Successfully!!');
    });
  }

  cancelTask() {
      this.router.navigate(['../'], { relativeTo: this.route });
      this.toastr.error('Cancelled!!')
  }
}
