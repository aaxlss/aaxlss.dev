import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, MenuOption, Skill, PersonalInfo, NavigationConfig } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  async getNavigationConfig(): Promise<NavigationConfig> {
    try {
      const response = await fetch('/assets/information/navigation.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch navigation config: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error loading navigation config:', error);
      // Fallback data
      return {
        menuOptions: [
          { label: 'ABOUT', sectionId: 'about' },
          { label: 'EXPERIENCE', sectionId: 'experience' },
          { label: 'CERTIFICATIONS', sectionId: 'certifications' },
          { label: 'EDUCATION', sectionId: 'education' },
          { label: 'PROYECTS', sectionId: 'projects' },
        ],
        sectionHeaders: {
          about: 'About',
          skills: 'Skills',
          experience: 'Experience',
          education: 'Education',
          certifications: 'Certifications',
          projects: 'Projects'
        },
        messages: {
          loading: 'Loading...',
          noOptionsAvailable: 'No Options available',
          noDataAvailable: 'No data available'
        }
      };
    }
  }

  async getPersonalInfo(): Promise<PersonalInfo> {
    try {
      const response = await fetch('/assets/information/personal-info.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch personal info: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error loading personal info:', error);
      // Fallback data
      return {
        name: {
          first: 'Axel',
          last: 'Sanchez',
          full: 'Axel Sanchez'
        },
        position: {
          title: 'Software Engineer',
          company: 'Altify',
          full: 'Software Engineer at Altify'
        },
        intro: {
          short: 'Software Engineer with 8+ years of experience',
          full: 'Software Engineer with 8+ years of experience designing and delivering scalable backend systems and distributed infrastructure across diverse industries.'
        },
        contact: {
          social: {}
        },
        images: {
          profile: '/assets/images/axel_sanchez.jpeg',
          github_icon: '/assets/images/github.svg',
          linkedin_icon: '/assets/images/linkedIn.svg'
        }
      };
    }
  }

  getMenuOptions(): Observable<MenuOption[]> {
    // This method is deprecated, use getNavigationConfig instead
    return new Observable(observer => {
      this.getNavigationConfig().then(config => {
        observer.next(config.menuOptions);
        observer.complete();
      }).catch(error => {
        console.error('Error in getMenuOptions:', error);
        observer.next([]);
        observer.complete();
      });
    });
  }

  getHardSkills(): Observable<Skill[]> {
    const hardSkills: Skill[] = [
      // Backend & Cloud Infrastructure
      { label: 'Python', category: 'Backend' },
      { label: 'Django', category: 'Backend' },
      { label: 'Flask', category: 'Backend' },
      { label: 'Java', category: 'Backend' },
      { label: 'Spring Boot', category: 'Backend' },
      { label: 'PHP', category: 'Backend' },
      { label: 'Laravel', category: 'Backend' },
      { label: 'Yii2', category: 'Backend' },
      
      // Cloud & DevOps
      { label: 'AWS', category: 'Cloud' },
      { label: 'Azure', category: 'Cloud' },
      { label: 'Docker', category: 'DevOps' },
      { label: 'Jenkins', category: 'DevOps' },
      { label: 'CI/CD', category: 'DevOps' },
      { label: 'Git', category: 'DevOps' },
      { label: 'GitHub', category: 'DevOps' },
      { label: 'Bitbucket', category: 'DevOps' },
      
      // Databases
      { label: 'MongoDB', category: 'Database' },
      { label: 'PostgreSQL', category: 'Database' },
      { label: 'MySQL', category: 'Database' },
      
      // API Development
      { label: 'REST APIs', category: 'Backend' },
      { label: 'Salesforce Integration', category: 'Integration' },
      
      // Frontend & Mobile
      { label: 'Angular', category: 'Frontend' },
      { label: 'React JS', category: 'Frontend' },
      { label: 'React Native', category: 'Mobile' },
      { label: 'JavaScript', category: 'Frontend' },
      { label: 'ES6', category: 'Frontend' },
      { label: 'TypeScript', category: 'Frontend' },
      { label: 'HTML', category: 'Frontend' },
      { label: 'CSS', category: 'Frontend' },
      { label: 'Android', category: 'Mobile' },
      { label: 'Kotlin', category: 'Mobile' },
      
      // System Management & Tools
      { label: 'Linux', category: 'System' },
      { label: 'Unix', category: 'System' },
      { label: 'Jira', category: 'Tools' },
      { label: 'Trello', category: 'Tools' },
      { label: 'Postman', category: 'Tools' },
      
      // Methodologies & Leadership
      { label: 'Agile', category: 'Methodology' },
      { label: 'SCRUM', category: 'Methodology' },
      { label: 'Scrum Master', category: 'Leadership' },
      { label: 'Team Leadership', category: 'Leadership' },
      { label: 'Mentoring', category: 'Leadership' },
      
      // Specialized
      { label: 'Machine Learning', category: 'AI' },
      { label: 'Neural Networks', category: 'AI' },
      { label: 'Human-Centered AI', category: 'AI' },
      { label: 'System Architecture', category: 'Architecture' },
      { label: 'Distributed Systems', category: 'Architecture' },
      { label: 'Performance Optimization', category: 'Performance' },
      { label: 'Cybersecurity', category: 'Security' }
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
