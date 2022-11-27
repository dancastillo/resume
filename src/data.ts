import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export interface LinkItem {
  name: string;
  icon: IconDefinition;
  url: string;
};

export const profileInformation = {
  name: 'Dan Castillo',
  title: 'Software Engineer',
};

export const linksArr: LinkItem[] = [
  {
    name: 'github',
    icon: faGithub,
    url: 'https://github.com/dancastillo',
  },
  {
    name: 'linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/daniel-castillo/',
  },
  {
    name: 'envelope',
    icon: faEnvelope,
    url: 'mailto:dancastillo99@gmail.com',
  },
];
