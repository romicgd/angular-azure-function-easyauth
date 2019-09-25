import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MonitoringService } from '../monitoring.service';
import { HeroService }  from '../hero.service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(  private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private monitoringService: MonitoringService
    ) { }

    ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      const todaysDataTime = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', 'EDT')
      this.monitoringService.logTrace(`getting hero ${id} at ${todaysDataTime}`)
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

}
