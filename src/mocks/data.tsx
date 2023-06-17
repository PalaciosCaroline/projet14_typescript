import { EmployeeBase } from "../employeeTypes";

export interface Columns {
  label: string;
  property: string;
  dateFormat?:string;
  disableSort?:boolean;
  disableFilter?:boolean;
}

export interface Employee extends EmployeeBase {
  id: number;
}

export const dataColumnsMock: Columns[] = [
  { label: 'First Name', property: 'firstname' },
  { label: 'Last Name', property: 'lastname' },
  { label: 'Start Date', property: 'startDate', dateFormat:'DD/MM/YYYY' },
  { label: 'Department', property: 'department' },
  { label: 'Date of Birth', property: 'dateOfBirth', dateFormat:'DD/MM/YYYY' },
  { label: 'Street', property: 'street', disableSort: true,disableFilter: true},
  { label: 'City', property: 'city', disableSort: true },
  { label: 'State', property: 'state',disableSort: true },
  { label: 'Zip Code', property: 'zipCode',disableSort: true,disableFilter: true },
];

export const dataEmployeesMock: Employee[] = [
  {
    id:1,
    firstname: 'John',
    lastname: 'Doe',
    dateOfBirth: '15/01/1975',
    startDate: '01/04/2022',
    department: 'Sales',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  },
  {
    id:2,
    firstname: 'Jane',
    lastname: 'Smith',
    dateOfBirth: '17/05/1985',
    startDate: '25/02/2020',
    department: 'Marketing',
    street: '456 Oak St',
    city: 'Othertown',
    state: 'NY',
    zipCode: '67890',
  },
  {
    id:3,
    firstname: 'Bob',
    lastname: 'Johnson',
    dateOfBirth: '30/09/1978',
    startDate: '03/05/2019',
    department: 'IT',
    street: '789 Maple Ave',
    city: 'Somewhere',
    state: 'TX',
    zipCode: '54321',
  },
  {
    id:4,
    firstname: 'William',
    lastname: 'Smith',
    dateOfBirth: '10/03/1978',
    startDate: '01/06/2022',
    department: 'Finance',
    street: '789 Oak St',
    city: 'Smalltown',
    state: 'FL',
    zipCode: '67890',
  },
  {
    id:5,
    firstname: 'Sarah',
    lastname: 'Taylor',
    dateOfBirth: '12/12/1985',
    startDate: '01/07/2022',
    department: 'Engineering',
    street: '432 Maple Ave',
    city: 'Middletown',
    state: 'TX',
    zipCode: '23456',
  },
  {
    id:6,
    firstname: 'Michael',
    lastname: 'Brown',
    dateOfBirth: '01/05/1976',
    startDate: '01/08/2022',
    department: 'Sales',
    street: '987 Pine St',
    city: 'Bigcity',
    state: 'CA',
    zipCode: '87654',
  },
  {
    id:7,
    firstname: 'Emily',
    lastname: 'Wilson',
    dateOfBirth: '20/11/1990',
    startDate: '01/09/2022',
    department: 'Marketing',
    street: '234 Cedar Rd',
    city: 'Hometown',
    state: 'OH',
    zipCode: '34567',
  },
  {
    id:8,
    firstname: 'David',
    lastname: 'Lee',
    dateOfBirth: '05/07/1979',
    startDate: '01/10/2022',
    department: 'Finance',
    street: '567 Birch St',
    city: 'Largetown',
    state: 'IL',
    zipCode: '45678',
  },
  {
    id:9,
    firstname: 'Maria',
    lastname: 'Garcia',
    dateOfBirth: '30/04/1983',
    startDate: '01/11/2022',
    department: 'Engineering',
    street: '890 Walnut St',
    city: 'Tinyville',
    state: 'TX',
    zipCode: '56789',
  },
  {
    id:10,
    firstname: 'Christopher',
    lastname: 'Davis',
    dateOfBirth: '14/02/1981',
    startDate: '01/12/2022',
    department: 'Sales',
    street: '123 Oak St',
    city: 'Smallville',
    state: 'GA',
    zipCode: '12589',
  },

  {
    id:11,
    firstname: 'Joce',
    lastname: 'Pietr',
    dateOfBirth: '30/04/1983',
    startDate: '01/11/2022',
    department: 'Engineering',
    street: '890 Walnut St',
    city: 'Tinyville',
    state: 'TX',
    zipCode: '56789',
  },
  {id:12,
    firstname: 'hyrte',
    lastname: 'Porie',
    dateOfBirth: '14/02/1981',
    startDate: '01/12/2022',
    department: 'Sales',
    street: '123 Oak St',
    city: 'Smallville',
    state: 'GA',
    zipCode: '12589',
  },
  {
    id:13,
    firstname: 'Samantha',
    lastname: 'Brown',
    dateOfBirth: '05/03/1984',
    startDate: '01/01/2023',
    department: 'Sales',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  },
  {
    id:14,
    firstname: 'Robert',
    lastname: 'Gonzalez',
    dateOfBirth: '18/06/1979',
    startDate: '01/02/2023',
    department: 'Marketing',
    street: '456 Elm St',
    city: 'Otherville',
    state: 'NY',
    zipCode: '54321',
  },
  {
    id:15,
    firstname: 'Olivia',
    lastname: 'Lee',
    dateOfBirth: '22/11/1992',
    startDate: '01/03/2023',
    department: 'Finance',
    street: '789 Oak St',
    city: 'Smalltown',
    state: 'FL',
    zipCode: '67890',
  },
  {
    id:16,
    firstname: 'Daniel',
    lastname: 'Nguyen',
    dateOfBirth: '10/10/1980',
    startDate: '01/04/2023',
    department: 'Engineering',
    street: '432 Maple Ave',
    city: 'Middletown',
    state: 'TX',
    zipCode: '23456',
  },
  {
    id:17,
    firstname: 'Avery',
    lastname: 'Taylor',
    dateOfBirth: '28/09/1988',
    startDate: '01/05/2023',
    department: 'Sales',
    street: '987 Pine St',
    city: 'Bigcity',
    state: 'CA',
    zipCode: '87654',
  },
  {
    id:18,
    firstname: 'Landon',
    lastname: 'margot',
    dateOfBirth: '14/07/1981',
    startDate: '01/06/2023',
    department: 'Marketing',
    street: '234 Cedar Rd',
    city: 'Hometown',
    state: 'OH',
    zipCode: '34567',
  },
  {
    id:19,
    firstname: 'Sophia',
    lastname: 'Chen',
    dateOfBirth: '23/04/1995',
    startDate: '01/07/2023',
    department: 'Finance',
    street: '567 Birch St',
    city: 'Largetown',
    state: 'IL',
    zipCode: '45678',
  },
  {
    id:20,
    firstname: 'Noah',
    lastname: 'Wilson',
    dateOfBirth: '01/12/1985',
    startDate: '01/08/2023',
    department: 'Engineering',
    street: '890 Walnut St',
    city: 'Tinyville',
    state: 'TX',
    zipCode: '56789',
  },
  {
    id:21,
    firstname: 'Mia',
    lastname: 'Robinson',
    dateOfBirth: '19/02/1998',
    startDate: '01/09/2023',
    department: 'Sales',
    street: '123 Oak St',
    city: 'Tinyville',
    state: 'TX',
    zipCode: '56789',
  },
];
