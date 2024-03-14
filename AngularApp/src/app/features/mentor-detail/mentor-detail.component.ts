import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mentor } from 'src/app/shared/interfaces/mentor-interface';
import { MentorService } from 'src/app/shared/services/mentor.service';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css']
})
export class MentorDetailComponent implements OnInit {
  mentorId: string = '';
  selectedMentor: Mentor = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    civility: '',
    user_status: '',
    company: {
      name: '',
      user_type: ''
    },
    count_document: 0
  }

  constructor(private router: Router, private mentorService: MentorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mentorId = params['id']
    })
    if (this.mentorId) {
      const mentor = this.mentorService.getMentorById(this.mentorId);
      this.selectedMentor = mentor;
      console.log(this.selectedMentor)
    }
  }

  goToEditMentor() {
    this.router.navigate(['mentor-form'], { queryParams: { id: this.mentorId } })
  }
}
