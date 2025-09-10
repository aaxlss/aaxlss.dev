import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, MenuOption, Skill } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getMenuOptions(): Observable<MenuOption[]> {
    const menuOptions: MenuOption[] = [
      { label: 'ABOUT', sectionId: 'about' },
      { label: 'EXPERIENCE', sectionId: 'experience' },
      { label: 'CERTIFICATIONS', sectionId: 'certifications' },
      { label: 'EDUCATION', sectionId: 'education' },
      { label: 'PROJECTS', sectionId: 'projects' },
    ];
    return of(menuOptions);
  }

  getHardSkills(): Observable<Skill[]> {
    const hardSkills: Skill[] = [
      { label: 'SalesForce', category: 'CRM' },
      { label: 'Angular', category: 'Frontend' },
      { label: 'Laravel', category: 'Backend' },
      { label: 'Yii2', category: 'Backend' },
      { label: 'ECMAScript 6', category: 'Language' },
      { label: 'React JS', category: 'Frontend' },
      { label: 'React Native', category: 'Mobile' },
      { label: 'Azure', category: 'Cloud' },
      { label: 'Postman', category: 'Tools' },
      { label: 'Android', category: 'Mobile' },
      { label: 'Java', category: 'Language' },
      { label: 'Kotlin', category: 'Language' },
      { label: 'PHP', category: 'Language' },
      { label: 'CSS', category: 'Frontend' },
      { label: 'HTML', category: 'Frontend' },
      { label: 'Python', category: 'Language' },
      { label: 'CI/CD', category: 'DevOps' },
      { label: 'MongoDB', category: 'Database' },
      { label: 'PostgreSQL', category: 'Database' },
      { label: 'MySQL', category: 'Database' },
      { label: 'Git', category: 'Tools' },
      { label: 'Trello', category: 'Tools' },
      { label: 'Jira', category: 'Tools' },
    ];
    return of(hardSkills);
  }

  async getExperience(): Promise<Experience[]> {
    try {
      const response = await fetch('/assets/information/experience.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch experience data: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error loading experience:', error);
      return [];
    }
  }

  async getEducation(): Promise<Experience[]> {
    try {
      const response = await fetch('/assets/information/education.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch education data: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error loading education:', error);
      return [];
    }
  }

  async getCertifications(): Promise<Experience[]> {
    try {
      const response = await fetch('/assets/information/certifications.json');
      if (!response.ok) {
        throw new Error(
          `Failed to fetch certifications data: ${response.status}`
        );
      }
      return response.json();
    } catch (error) {
      console.error('Error loading certifications:', error);
      return [];
    }
  }
}
