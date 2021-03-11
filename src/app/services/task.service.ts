import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  daysCollection: AngularFirestoreCollection<Date>;
  tasksCollection: AngularFirestoreCollection<Task>;
  dayDoc: AngularFirestoreDocument<Task>;
  tasks: Observable<Task[]>;

  currDate: Date = new Date();

  dayid: string;

  constructor(public store: AngularFirestore) {
    this.dayid =
      (this.currDate.getMonth() + 1).toString() +
      '-' +
      this.currDate.getDate().toString() +
      '-' +
      this.currDate.getFullYear().toString();

    this.daysCollection = this.store.collection('days');

    this.dayDoc = this.daysCollection.doc(this.dayid);

    this.tasksCollection = this.daysCollection
      .doc(this.dayid)
      .collection('tasks', (ref) => ref.orderBy('time', 'asc'));

    this.tasks = this.tasksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Task;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasksCollection.add(task);
  }

  deleteTask(task: Task): void {
    this.dayDoc = this.store.doc(`days/${this.dayid}/tasks/${task.id}`);
    this.dayDoc.delete();
  }
}
