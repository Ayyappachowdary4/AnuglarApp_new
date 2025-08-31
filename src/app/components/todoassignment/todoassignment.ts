import { Component, WritableSignal, signal, computed } from '@angular/core';

@Component({
  selector: 'app-todoassignment',
  standalone: true,
  imports: [],
  templateUrl: './todoassignment.html',
  styleUrls: ['./todoassignment.css']
})
export class TodoAssignment {
  // Writable signal for task list
  TaskList: WritableSignal<{ id: number, name: string, isCompleted: boolean }[]> = signal([
    { id: 1, name: 'Learn Angular Task', isCompleted: false },
    { id: 2, name: 'Complete Todo Assignment', isCompleted: true },
    { id: 3, name: 'Revise Yesterday class & make notes', isCompleted: false }
  ]);

  // Computed signal for completed tasks
  completedToDos = computed(() =>
    this.TaskList().filter(task => task.isCompleted)
  );

  // Computed signal for remaining tasks
  remainingToDos = computed(() =>
    this.TaskList().filter(task => !task.isCompleted)
  );

  // Toggle isCompleted
  toggleCompletion(id: number) {
    this.TaskList.update((tasks: { id: number, name: string, isCompleted: boolean }[]) =>
      tasks.map((task: { id: number, name: string, isCompleted: boolean }) => {
        if (task.id === id) task.isCompleted = !task.isCompleted;
        return task;
      })
    );
  }
}
