import doctorImg01 from  '../Assest/doctorImg01.jpg';
import doctorImg02 from '../Assest/doctorImg02.jpg';
import doctorImg03 from '../Assest/doctorImg03.jpg';
import doctorImg04 from '../Assest/doctorImg04.jpg';
import doctorImg05 from '../Assest/doctorImg05.jpg';
import doctorImg06 from '../Assest/doctorImg06.jpg';
import doctorImg07 from '../Assest/doctorImg07.jpg';
import doctorImg08 from '../Assest/doctorImg08.jpg';
import doctorImg09 from '../Assest/doctorImg09.jpg';
import doctorImg10 from '../Assest/doctorImg10.jpg';
import doctorImg11 from '../Assest/doctorImg11.jpg';
import doctorImg12 from '../Assest/doctorImg12.jpg';
import doctorImg13 from '../Assest/doctorImg13.jpg';
import doctorImg14 from '../Assest/doctorImg14.jpg';
import doctorImg15 from '../Assest/doctorImg15.jpg';
import doctorImg16 from '../Assest/doctorImg16.jpg';
import doctorImg17 from '../Assest/doctorImg17.jpg';
import doctorImg18 from '../Assest/doctorImg18.jpg';
import doctorImg19 from '../Assest/doctorImg19.jpg';
import doctorImg20 from '../Assest/doctorImg20.jpg';





const doctors = [
  {
    id: "01",
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist",
    avgRating: 4.9,
    totalRating: 320,
    photo: doctorImg01,
    totalPatients: 1800,
    hospital: "AIIMS, Delhi",
    contact: "+91-1234567890",
    email: "rajesh.sharma@aiimsdelhi.com",
    timeSlot: [
      { day: "Monday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Friday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "02",
    name: "Dr. Neha Patel",
    specialty: "Cardiologist",
    avgRating: 4.7,
    totalRating: 150,
    photo: doctorImg02,
    totalPatients: 1000,
    hospital: "Fortis Hospital, Mumbai",
    contact: "+91-2345678901",
    email: "neha.patel@fortis.com",
    timeSlot: [
      { day: "Tuesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Thursday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Saturday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "03",
    name: "Dr. Amit Verma",
    specialty: "Orthopedic Surgeon",
    avgRating: 4.8,
    totalRating: 200,
    photo: doctorImg03,
    totalPatients: 1400,
    hospital: "Apollo Hospital, Chennai",
    contact: "+91-3456789012",
    email: "amit.verma@apollohospital.com",
    timeSlot: [
      { day: "Monday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Wednesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Friday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "04",
    name: "Dr. Sunita Rao",
    specialty: "Pediatrician",
    avgRating: 4.6,
    totalRating: 180,
    photo: doctorImg04,
    totalPatients: 1200,
    hospital: "Manipal Hospital, Bangalore",
    contact: "+91-4567890123",
    email: "sunita.rao@manipalhospital.com",
    timeSlot: [
      { day: "Tuesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Thursday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Saturday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "05",
    name: "Dr. Vikram Singh",
    specialty: "Neurologist",
    avgRating: 4.9,
    totalRating: 290,
    photo: doctorImg05,
    totalPatients: 1600,
    hospital: "Medanta, Gurgaon",
    contact: "+91-5678901234",
    email: "vikram.singh@medanta.com",
    timeSlot: [
      { day: "Monday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Wednesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Friday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "06",
    name: "Dr. Aarti Mehta",
    specialty: "Gastroenterologist",
    avgRating: 4.7,
    totalRating: 210,
    photo: doctorImg06,
    totalPatients: 1100,
    hospital: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    contact: "+91-6789012345",
    email: "aarti.mehta@kokilaben.com",
    timeSlot: [
      { day: "Tuesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Thursday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Saturday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "07",
    name: "Dr. Rohan Desai",
    specialty: "Endocrinologist",
    avgRating: 4.8,
    totalRating: 230,
    photo: doctorImg07,
    totalPatients: 1300,
    hospital: "Narayana Health, Bangalore",
    contact: "+91-7890123456",
    email: "rohan.desai@narayanahealth.com",
    timeSlot: [
      { day: "Monday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Friday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "08",
    name: "Dr. Kavita Agarwal",
    specialty: "Ophthalmologist",
    avgRating: 4.7,
    totalRating: 190,
    photo: doctorImg08,
    totalPatients: 900,
    hospital: "Sankara Nethralaya, Chennai",
    contact: "+91-8901234567",
    email: "kavita.agarwal@sankaranethralaya.com",
    timeSlot: [
      { day: "Tuesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Thursday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Saturday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "09",
    name: "Dr. Sanjay Kumar",
    specialty: "Oncologist",
    avgRating: 4.9,
    totalRating: 250,
    photo: doctorImg09,
    totalPatients: 1500,
    hospital: "Tata Memorial Hospital, Mumbai",
    contact: "+91-9012345678",
    email: "sanjay.kumar@tatamemorial.com",
    timeSlot: [
      { day: "Monday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Wednesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Friday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "10",
    name: "Dr. Priya Iyer",
    specialty: "Gynecologist",
    avgRating: 4.8,
    totalRating: 300,
    photo: doctorImg10,
    totalPatients: 1700,
    hospital: "Cloudnine Hospital, Bangalore",
    contact: "+91-0123456789",
    email: "priya.iyer@cloudninehospital.com",
    timeSlot: [
      { day: "Tuesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Thursday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Saturday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "11",
    name: "Dr. Pankaj Gupta",
    specialty: "Nephrologist",
    avgRating: 4.8,
    totalRating: 210,
    photo: doctorImg11,
    totalPatients: 1200,
    hospital: "Max Hospital, Delhi",
    contact: "+91-1234567891",
    email: "pankaj.gupta@maxhospital.com",
    timeSlot: [
      { day: "Monday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Wednesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Friday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "12",
    name: "Dr. Anjali Bose",
    specialty: "Pulmonologist",
    avgRating: 4.7,
    totalRating: 160,
    photo: doctorImg12,
    totalPatients: 1000,
    hospital: "Ruby Hall Clinic, Pune",
    contact: "+91-2345678902",
    email: "anjali.bose@rubyhallclinic.com",
    timeSlot: [
      { day: "Tuesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Thursday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Saturday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "13",
    name: "Dr. Rohit Jain",
    specialty: "Psychiatrist",
    avgRating: 4.8,
    totalRating: 220,
    photo: doctorImg13,
    totalPatients: 1300,
    hospital: "Sahyadri Hospital, Pune",
    contact: "+91-3456789013",
    email: "rohit.jain@sahyadrihospital.com",
    timeSlot: [
      { day: "Monday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Friday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "14",
    name: "Dr. Sangeeta Nair",
    specialty: "Rheumatologist",
    avgRating: 4.7,
    totalRating: 180,
    photo: doctorImg14,
    totalPatients: 1100,
    hospital: "Lilavati Hospital, Mumbai",
    contact: "+91-4567890124",
    email: "sangeeta.nair@lilavatishospital.com",
    timeSlot: [
      { day: "Tuesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Thursday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Saturday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "15",
    name: "Dr. Ajay Deshmukh",
    specialty: "Urologist",
    avgRating: 4.8,
    totalRating: 230,
    photo: doctorImg15,
    totalPatients: 1400,
    hospital: "Global Hospital, Hyderabad",
    contact: "+91-5678901235",
    email: "ajay.deshmukh@globalhospitalhyderabad.com",
    timeSlot: [
      { day: "Monday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Wednesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Friday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "16",
    name: "Dr. Meenakshi Sundaram",
    specialty: "ENT Specialist",
    avgRating: 4.7,
    totalRating: 150,
    photo: doctorImg16,
    totalPatients: 900,
    hospital: "Christian Medical College, Vellore",
    contact: "+91-6789012346",
    email: "meenakshi.sundaram@cmcvellore.com",
    timeSlot: [
      { day: "Tuesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Thursday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Saturday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "17",
    name: "Dr. Arvind Joshi",
    specialty: "Hematologist",
    avgRating: 4.8,
    totalRating: 240,
    photo: doctorImg17,
    totalPatients: 1300,
    hospital: "Care Hospital, Hyderabad",
    contact: "+91-7890123457",
    email: "arvind.joshi@carehospitalhyderabad.com",
    timeSlot: [
      { day: "Monday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Wednesday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
      { day: "Friday", times: ["11:00 AM - 12:00 PM", "03:00 PM - 04:00 PM"] },
    ]
  },
  {
    id: "18",
    name: "Dr. Priya Kapoor",
    specialty: "Dentist",
    avgRating: 4.9,
    totalRating: 300,
    photo: doctorImg18,
    totalPatients: 1500,
    hospital: "Narayana Dental Clinic, Bangalore",
    contact: "+91-8901234568",
    email: "priya.kapoor@narayanadentalclinicbangalore.com",
    timeSlot: [
      { day: "Tuesday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Thursday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
      { day: "Saturday", times: ["09:00 AM - 10:00 AM", "01:00 PM - 02:00 PM"] },
    ]
  },
  {
    id: "19",
    name: "Dr. Suresh Malhotra",
    specialty: "Anesthesiologist",
    avgRating: 4.7,
    totalRating: 170,
    photo: doctorImg19,
    totalPatients: 800,
    hospital: "Jaypee Hospital, Noida",
    contact: "+91-9012345679",
    email: "suresh.malhotra@jaypeehospitalnoida.com",
    timeSlot: [
      { day: "Monday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Friday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  },
  {
    id: "20",
    name: "Dr. Renu Kulkarni",
    specialty: "Radiologist",
    avgRating: 4.8,
    totalRating: 220,
    photo: doctorImg20,
    totalPatients: 1200,
    hospital: "Breach Candy Hospital, Mumbai",
    contact: "+91-0123456780",
    email: "renu.kulkarni@breachcandyhospital.com",
    timeSlot: [
      { day: "Monday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Wednesday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { day: "Friday", times: ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
    ]
  }
]
     export default doctors ;