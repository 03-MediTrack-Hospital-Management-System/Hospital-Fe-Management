
export const upcomingConsultations = [
  {
    id: 1,
    date: "Mar 19",
    time: "10:00 AM",
    patient: {
      name: "John Smith",
      age: 40
    },
    doctor: {
      id: 101,
      name: "Dr. Arjun Kumar",
      specialization: "Cardiologist",
      consultationFee: 800
    },
    type: "Follow-up Consultation",
    location: "Room 304",
    status: "scheduled"
  },
  {
    id: 2,
    date: "Mar 20",
    time: "2:30 PM",
    patient: {
      name: "Emma Davis",
      age: 35
    },
    doctor: {
      id: 102,
      name: "Dr. Meena Sharma",
      specialization: "Dermatologist",
      consultationFee: 600
    },
    type: "Cardiac Evaluation",
    location: "Cardiology Lab",
    status: "scheduled"
  },
  {
    id: 3,
    date: "Mar 21",
    time: "11:15 AM",
    patient: {
      name: "Robert Garcia",
      age: 58
    },
    doctor: {
      id: 103,
      name: "Dr. Rahul Verma",
      specialization: "General Physician",
      consultationFee: 400
    },
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
    doctorVisited: {
      id: 101,
      name: "Dr. Arjun Kumar",
      specialization: "Cardiologist",
      consultationFee: 800
    },
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
    doctorVisited: {
      id: 103,
      name: "Dr. Rahul Verma",
      specialization: "General Physician",
      consultationFee: 400
    },
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
    doctorVisited: {
      id: 102,
      name: "Dr. Meena Sharma",
      specialization: "Dermatologist",
      consultationFee: 600
    },
    vitals: {
      bp: "130/80",
      hr: "72",
      temp: "98.2°F"
    }
  }
];
