import { States } from './enums/state.enum';
import { Experiences } from './enums/experience.enum';

const dummyData: {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  State: States;
  Experience: Experiences;
}[] = [
  {
    Id: '5e9d1112-6a14-436c-80a0-86d90f832b16',
    FirstName: 'Charlie',
    LastName: 'Brown',
    Email: 'charliebrown@mailinator.com',
    State: States['VIC'],
    Experience: Experiences['Y'],
  },
  {
    Id: '5ed74fc6-d9e3-4484-8901-daedc59136cd',
    FirstName: 'Cruella',
    LastName: 'de Vil',
    Email: 'cruella@mailinator.com',
    State: States['NSW'],
    Experience: Experiences['N'],
  },
  {
    Id: '5eebf7c8-76af-4b4e-a73c-46e72ac118a3',
    FirstName: 'Elle',
    LastName: 'Woods',
    Email: 'ellewoods@mailinator.com',
    State: States['VIC'],
    Experience: Experiences['Y'],
  },
  {
    Id: '5f74177c-dbbf-48fc-ada2-370b1f1925ef',
    FirstName: 'Shaggy',
    LastName: 'Rogers',
    Email: 'shaggy@mailinator.com',
    State: States['NSW'],
    Experience: Experiences['Y'],
  },
  {
    Id: '5e9d2ec4-ff8f-4ac8-9bdd-d16f019765f0',
    FirstName: 'Wallace',
    LastName: 'Park',
    Email: 'wallacepark@mailinator.com',
    State: States['ACT'],
    Experience: Experiences['N'],
  },
  {
    Id: '5f41d4a1-a1b8-4b3c-9b0d-dd8d2fb99e32',
    FirstName: 'George',
    LastName: 'Newton',
    Email: 'georgenewton@mailinator.com',
    State: States['NSW'],
    Experience: Experiences['Y'],
  },
  {
    Id: '5f41d38a-57c5-4d3c-81e6-ac83159060e1',
    FirstName: 'John',
    LastName: 'Grogan',
    Email: 'johngrogan@mailinator.com',
    State: States['QLD'],
    Experience: Experiences['N'],
  },
  {
    Id: '5e9d0feb-cd65-4ac0-8bad-7edc905383f7',
    FirstName: 'Ethan',
    LastName: 'Montgomery',
    Email: 'ethanmontgomery@mailinator.com',
    State: States['QLD'],
    Experience: Experiences['Y'],
  },
  {
    Id: '5f41d561-7ff3-4374-ad6c-f6f7566e2e41',
    FirstName: 'Lucas',
    LastName: 'Ray',
    Email: 'lucasray@mailinator.com',
    State: States['NSW'],
    Experience: Experiences['Y'],
  },
];

export default dummyData;
