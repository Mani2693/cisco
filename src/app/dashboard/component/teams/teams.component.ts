import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamsService } from '../../service/teams/teams.service';
import { Team } from '../../models/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teams: Array<Team> = [];
  public displayColumns: string[] = ['name', 'actions']
  public details: Array<Team> = [];
  public detailsDisplayCol = ['name', 'created'];
  public loader: boolean = false;
  public teamsForm = this.fb.group({
    name: ['',  Validators.required]
  });

  constructor(private fb: FormBuilder, private teamService: TeamsService) { }

  ngOnInit(): void {
    this.getDefaultTeams();
  }

  getDefaultTeams() {
    this.loader = true;
    this.teamService.getTeams().subscribe({
      next: (result) => { 
        let filteredArry = result.items.filter((item:any) => !item.teamId)
        this.teams.push(...filteredArry);
        this.loader = false;
      },
      error: (error) => {
        this.loader = false;
        alert(error);
      }
    });
  }

  onSubmit() {
    let name = this.teamsForm.value.name;
    let team: Team = { name };
    this.teamService.createTeams(team).subscribe({
      next: (result) => { 
        this.teams = [...this.teams, result];
      },
      error: (error) => {
        this.loader = false;
        alert(error);
      }
    });
  }

  onRemove(id: any) {
    this.teamService.deleteTeams(id).subscribe({
      next: () => {
        this.teams.splice(this.teams.findIndex(a => a.id === id) , 1);
        this.teams = [...this.teams];
      },
      error: (error) => {
        alert(error);
      }
    });
  }

  viewDetails(id: any) {
    this.details = [this.teams[this.teams.findIndex(a => a.id === id)]];
  }

}
