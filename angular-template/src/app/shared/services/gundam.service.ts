import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gundam, GundamPilot } from '../interfaces/gundam-interface';
import { gundamData, pilotData } from '../data/gundam-data';

@Injectable({
  providedIn: 'root'
})
export class GundamService {
  gundams: BehaviorSubject<Gundam[]> = new BehaviorSubject<Gundam[]>(gundamData);
  gundams$ = this.gundams.asObservable();

  gundam: BehaviorSubject<Gundam> = new BehaviorSubject<Gundam>({
    id: 0,
    name: '',
    modelNumber: '',
    series: '',
    description: '',
    imageUrl: '',
    armaments: {
      fixed: [],
      handheld: []
    }
  })
  gundam$ = this.gundam.asObservable();

  gundamPilots: BehaviorSubject<GundamPilot[]> = new BehaviorSubject<GundamPilot[]>(pilotData);
  gundamPilots$ = this.gundamPilots.asObservable();

  gundamPilot: BehaviorSubject<GundamPilot> = new BehaviorSubject<GundamPilot>({
    id: 0,
    name: '',
    nationality: '',
    gundamName: '',
    imageUrl: '',
    affiliations: {
      affiliation: []
    }
  })
  gundamPilot$ = this.gundamPilot.asObservable();

  constructor() { }

  addGundam(newGundam: Gundam): void {
    const currentGundams = [...this.gundams.value];
    currentGundams.unshift(newGundam);
    this.gundams.next(currentGundams);
  }

  getGundamById(gundamId: number): void {
    const gundamData = this.gundams.value.find(gundam => gundam.id === gundamId);
    if (gundamData) {
      this.gundam.next(gundamData);
    }
  }

  updateGundam(editedGundam: Gundam): void {
    const currentGundamData = [...this.gundams.value];
    const index = currentGundamData.findIndex(gundam => gundam.id === editedGundam.id);
    if (index !== -1) {
      currentGundamData[index] = editedGundam;
      this.gundams.next(currentGundamData)
    }
  }

  getPilotById(pilotId: number): void {
    const pilotData = this.gundamPilots.value.find(pilot => pilot.id === pilotId);
    if (pilotData) {
      this.gundamPilot.next(pilotData);
    }
  }

  removeGundam(gundamId: number): void {
    const currentGundams = [...this.gundams.value]
    const index = currentGundams.findIndex(gundam => gundam.id === gundamId)
    if(index !== -1) {
      currentGundams.splice(index, 1)
      this.gundams.next(currentGundams)
    }
  }
}
