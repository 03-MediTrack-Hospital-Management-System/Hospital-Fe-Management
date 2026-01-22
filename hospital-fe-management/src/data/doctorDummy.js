// doctorDummy.js
export const upcomingConsultations = [
  {
    id: 1,
    date: "Mar 19",
    time: "10:00 AM",
    patient: "John Smith",
    type: "Follow-up Consultation",
    location: "Room 304",
    status: "scheduled"
  },
  {
    id: 2,
    date: "Mar 20",
    time: "2:30 PM",
    patient: "Emma Davis",
    type: "Cardiac Evaluation",
    location: "Cardiology Lab",
    status: "scheduled"
  },
  {
    id: 3,
    date: "Mar 21",
    time: "11:15 AM",
    patient: "Robert Garcia",
    type: "Post-Op Check",
    location: "Room 304",
    status: "scheduled"
  }
];

export const patientQueue = [
  {
    id: 1,
    name: "Michael Chen",
    age: 45,
    waitTime: "10 minutes",
    reason: "Chest pain evaluation",
    priority: "high",
    vitals: {
      bp: "140/90",
      hr: "88",
      temp: "98.6°F"
    }
  },
  {
    id: 2,
    name: "Jennifer Lee",
    age: 52,
    waitTime: "15 minutes",
    reason: "Hypertension follow-up",
    priority: "medium",
    vitals: {
      bp: "135/85",
      hr: "76",
      temp: "98.4°F"
    }
  },
  {
    id: 3,
    name: "David Wilson",
    age: 68,
    waitTime: "5 minutes",
    reason: "ECG results review",
    priority: "low",
    vitals: {
      bp: "130/80",
      hr: "72",
      temp: "98.2°F"
    }
  }
];