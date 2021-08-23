export interface WorkExperience {
  company: string;
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
}

export const workexperiences: WorkExperience[] = [
  {
    company: "same",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
    title: "Frontend developer",
    description: "Lorem Ipsum",
  },
  {
    company: "same",
    startDate: new Date("2019-01-01"),
    endDate: new Date("2019-04-01"),
    title: "Frontend intern",
    description: "Lorem Ipsum",
  },
  {
    company: "different",
    startDate: new Date("2019-04-02"),
    endDate: new Date("2019-09-02"),
    title: "Frontend intern plus",
    description: "Lorem Ipsum",
  },
  {
    company: "same",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-12-31"),
    title: "Full Stack developer",
    description: "Lorem Ipsum",
  },
];

export const sortedWorkExperiences = workexperiences.slice().sort((a, b) => {
  if (a.endDate > b.endDate) {
    return -1;
  } else if (a.endDate < b.endDate) {
    return 1;
  } else {
    return 0;
  }
});

export interface GroupedExperiences {
  company: string;
  startDate: Date;
  endDate: Date;
  experiences: WorkExperience[];
}

export const groupedWorkExperiences: GroupedExperiences[] =
  sortedWorkExperiences.reduce((acc: GroupedExperiences[], curr) => {
    // At the first loop through the array of sorted experiences,
    // by default we will have the groupedWorkExperiences containing
    // simply the data of the first element in the array
    if (acc.length === 0) {
      return [
        {
          company: curr.company,
          startDate: curr.startDate,
          endDate: curr.endDate,
          experiences: [curr],
        },
      ];
    }
    // Here we need to compare the company of the last work experience
    // with the company of the current element being looped over
    const prevGroupedExperience = acc[acc.length - 1];
    const prevCompany = prevGroupedExperience.company;
    // In case we are still at the same company
    if (prevCompany === curr.company) {
      return [
        // we need to keep the previous grouped work experiences
        // under other companies untouched, so we return a copy of
        // the grouped work experiences so far, except the last element
        // that we will need to change
        ...acc.slice(0, -1),
        // For the last element, we keep most of the data of the
        // prevGroupedExperience, we need to change the startDate,
        // and we need to add the current element to the array of
        // experiences
        {
          ...prevGroupedExperience,
          startDate: curr.startDate,
          experiences: [...prevGroupedExperience.experiences, curr],
        },
      ];
    }
    // In case we changed a company, we should then just add a new
    // entry to the array of groupedWorkExperiences, containing
    // data from the current element
    return [
      ...acc,
      {
        company: curr.company,
        startDate: curr.startDate,
        endDate: curr.endDate,
        experiences: [curr],
      },
    ];
  }, []);
