import emailIcon from '../assets/email_icon.png';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

const SOCIAL_PROFILES = [
  {
    id: 1,
    title: 'X',
    description: 'A stupid app that an asshole bought and renamed to x. He\'s a major pussy.',
    link: 'https://www.asshole.com',
    image: twitterIcon
  },
  {
    id: 2,
    title: 'Github',
    description: 'An awesome platform for code storage, sharing, and collaboration',
    link: 'https://github.com/jamessbrowning/react-bootcamp',
    image: githubIcon
  },
  {
    id: 3,
    title: 'LinkedIn',
    description: 'Social media, but for grownups.',
    link: 'https://www.linkedin.com',
    image: linkedinIcon
  },
  {
    id: 4,
    title: 'Email',
    description: 'Mail it.',
    link: 'mailto:james@browningprojects.com',
    image: emailIcon
  }
];

export default SOCIAL_PROFILES;
