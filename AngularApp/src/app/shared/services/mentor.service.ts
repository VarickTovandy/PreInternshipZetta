import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mentor } from '../interfaces/mentor-interface';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private mentorsData: BehaviorSubject<Mentor[]> = new BehaviorSubject<Mentor[]>([]);
  public mentors$: Observable<Mentor[]> = this.mentorsData.asObservable();

  constructor(private http: HttpClient) {
    this.loadMentors();
  }

  loadMentors(): void {
    this.http.get<Mentor[]>('../../../assets/mentor.json').subscribe({
      next: (mentors: Mentor[]) => {
        this.mentorsData.next(mentors);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getMentorById(id: string) {
    return this.mentorsData.getValue().find((mentor) => mentor._id === id);
  }

  addNewMentor(newMentor: Mentor) {
    const currentMentors = [...this.mentorsData.value];
    currentMentors.unshift(newMentor);
    this.mentorsData.next(currentMentors)
    console.log(this.mentorsData.value)
  }

  updateMentor(updatedMentor: Mentor) {
    const currentMentors = [...this.mentorsData.value];
    const index = currentMentors.findIndex(mentor => mentor._id === updatedMentor._id);
    if (index !== -1) {
      currentMentors[index] = updatedMentor;
      this.mentorsData.next(currentMentors)
    }
  }

  deleteMentor(mentorId: string) {
    const currentMentors = [...this.mentorsData.value];
    const index = currentMentors.findIndex(mentor => mentor._id === mentorId);
    if(index !== -1) {
      currentMentors.splice(index, 1)
      this.mentorsData.next(currentMentors)
    }
  }
}
