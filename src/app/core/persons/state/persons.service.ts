import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { Person } from './person.model';
import { PersonsStore } from './persons.store';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService implements OnDestroy {
  personCollection: AngularFirestoreCollection<Person>;
  unsubscriber = new Subject<void>();

  constructor(
    private personsStore: PersonsStore,
    private firestore: AngularFirestore,
    private http: HttpClient
  ) {
    this.personCollection = firestore.collection('person');
    this.fetch();
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  fetch() {
    this.personCollection
      .valueChanges()
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((person: Person[]) => {
        this.personsStore.set(person);
      });
  }

  add(person: Person) {
    const id = this.firestore.createId();
    const personDto = { ...person, id };
    this.personCollection
      .doc(id)
      .set(personDto)
      .then((res) => {
        this.personsStore.add(personDto);
      });
  }

  update(id: string, person: Partial<Person>) {
    this.personCollection
      .doc(id)
      .update({ ...person })
      .then((res) => {
        this.personsStore.update(id, person);
      });
  }

  remove(id: string) {
    this.personCollection
      .doc(id)
      .delete()
      .then((res) => {
        this.personsStore.remove(id);
      });
  }
}
