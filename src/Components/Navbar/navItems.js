import { services } from '../../Components/Services/ServiceData';

export const navItems = [
    {
      name: 'Home',
      path: '/',
      scrollTo: 'home',
      exact: true
    },
    {
      name: 'Services',
      path: '/services',
      scrollTo: 'services',
      subItems: services.map(service => ({
        name: service.title,
        path: `/services/${service.slug}`,
      }))
    },
    {
      name: 'Projects',
      path: '/projects',
      scrollTo: 'projects',
      
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ];