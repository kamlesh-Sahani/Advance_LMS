export const bal: Balance[] = [
  {
    id:1,
    leaveType: "Annual Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "annual",
  },
  {
    id:2,
    leaveType: "Annual Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "annual",
  },
  {
    id:3,
    leaveType: "Medical Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "medical",
  },
  {
    id:4,
    leaveType: "Short Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "short",
  },
  {
    id:5,
    leaveType: "Short Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "short",
  },
  {
    id:6,
    leaveType: "Short Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
    rules:
      "this the rule for causal leaves that you can only take 5 holiday addition is not allowed",
    value: "short",
  },
];

export const faculty: Faculty[] = [
  {
    id: "1",
    name: "Amandeep",
    phone: 2337894789,
    email: "aamm@gmail.com",
  },
  {
    id: "2",
    name: "Charan",
    phone: 2337894789,
    email: "aamm@gmail.com",
  },
  {
    id: "3",
    name: "Poonam",
    phone: 2337894789,
    email: "aamm@gmail.com",
  },
  {
    id: "4",
    name: "Vishal",
    phone: 2337894789,
    email: "aamm@gmail.com",
  },
];

export const chart: Chart = {
  labels: ["Pending", "Approved", "Cancel"],
  datasets: [
    {
      label: "Leaves",
      data: [10, 25, 15],
      backgroundColor: ["#fab905", "#15fa05", "#fa0505"],
      hoverOffset: 4,
    },
  ],
};

export const profile = {
  personalInfo: {
    title: "Personal Information",
    fullName: "John Doe",
    dob: "1990-05-15T00:00:00.000Z",
    gender: "male",
    contactNumber: "1667760696",
    email: "kamlesh@gmail.com",
    address: "1234 Main St, Anytown, USA",
  },
  professionalInfo: {
    title: "Professional Information",
    departmentId: "60b8d295f1d2a609c814f86b",
    designation: "Software Engineer",
    dateOfJoining: "2020-06-01T00:00:00.000Z",
    employmentType: "FULL_TIME",
  },
  experienceInfo: {
    title: "Experience Information",
    company: "Tech Corp",
    jobTitle: "Junior Developer",
    duration: {
      startDate: "2018-01-01T00:00:00.000Z",
      endDate: "2020-05-31T00:00:00.000Z",
    },
    responsibilities:
      "Developed web applications and collaborated with cross-functional teams.",
  },
  educationInfo: {
    title: "Education Information",
    highestQualification: "Bachelors",
    university: "ABC University",
    yearOfPassing: "2017-05-15T00:00:00.000Z",
    specialization: "Computer Science",
  },
  isActive: true,
  role: "REGULAR",
};

export const courses: Course[] = [
  {
    name: "BCA",
    section: 1,
  },
  {
    name: "Bcom",
    section: 1,
  },
  {
    name: "BBA",
    section: 1,
  },
];

export const leaveType = [
  {
    leaveType:"Annual Leave",
    value:"annual",
  },
  {
    leaveType:"Medical Leave",
    value:"medical",
  },
  {
    leaveType:"Professional Development Leave",
    value:"professional",
  },
  {
    leaveType:"Paternity Leave",
    value:"paternity",
  },
  {
    leaveType:"Maternity Leave",
    value:"maternity",
  },
  {
    leaveType:"Short Leave",
    value:"short",
  },
  {
    leaveType:"Study Leave",
    value:"study",
  },
  {
    leaveType:"Sick Leave",
    value:"sick",
  },
  {
    leaveType:"Personal Leave",
    value:"personal",
  },

]
