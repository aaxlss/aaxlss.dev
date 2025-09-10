import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SkillComponent } from './shared/components/skill/skill.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { Experience, MenuOption, Skill, PersonalInfo, NavigationConfig } from './core/models';
import { DataService } from './core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkillComponent,
    NavigationComponent,
    NgOptimizedImage,
    ExperienceComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'aaxlss.dev';
  
  // Dynamic data from JSON files
  personalInfo?: PersonalInfo;
  navigationConfig?: NavigationConfig;
  
  // Component data
  menuOptions: MenuOption[] = [];
  hardSkills: Skill[] = [];
  experience: Experience[] = [];
  education: Experience[] = [];
  certifications: Experience[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.loading = true;
    try {
      // Load configuration and personal info
      const [navigationConfig, personalInfo] = await Promise.all([
        this.dataService.getNavigationConfig(),
        this.dataService.getPersonalInfo()
      ]);

      this.navigationConfig = navigationConfig;
      this.personalInfo = personalInfo;
      this.menuOptions = navigationConfig.menuOptions;

      // Load skills synchronously
      this.dataService.getHardSkills().subscribe(skills => {
        this.hardSkills = skills;
      });

      // Load data asynchronously
      const [experience, education, certifications] = await Promise.all([
        this.dataService.getExperience(),
        this.dataService.getEducation(),
        this.dataService.getCertifications()
      ]);

      this.experience = experience;
      this.education = education;
      this.certifications = certifications;
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      this.loading = false;
    }
  }

  trackByExperience(index: number, item: Experience): string {
    return `${item.time}-${item.title}`;
  }
}
