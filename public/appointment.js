const hospitalsInMumbai = {
    'Lilavati Hospital': ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
    'Tata Memorial Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
    'Jaslok Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
    'Nanavati Super Speciality Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
    'Kokilaben Dhirubhai Ambani Hospital': ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
    'Breach Candy Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
    'Hinduja Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
    'Saifee Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
    'Wockhardt Hospitals': ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
    'Bombay Hospital': ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']
  };

  const hospitalsInDelhi = {
    'AIIMS': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
    'Fortis Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
    'Max Super Speciality Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
    'Apollo Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
    'BLK Super Speciality Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
    'Indraprastha Apollo Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
    'Sir Ganga Ram Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
    'Moolchand Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
    'Max Hospital, Saket': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
    'Holy Family Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
    // Add more hospitals and their time slots as needed
};


const hospitalsInBangalore = {
  'Apollo Hospital': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Fortis Hospital, Cunningham Road': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Manipal Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Columbia Asia Referral Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Narayana Health City': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Sakra World Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'St. John’s Medical College Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Mallya Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Bowring and Lady Curzon Hospital': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Victoria Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};

const hospitalsInKolkata = {
  'Apollo Gleneagles Hospital': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Fortis Hospital, Anandapur': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Medica Superspecialty Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Peerless Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Ruby General Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'AMRI Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'CMRI Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Belle Vue Clinic': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Woodlands Multispeciality Hospital': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Sankara Nethralaya': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};


const hospitalsInChennai = {
  'Apollo Hospitals, Greams Road': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Fortis Malar Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'MIOT International': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Sri Ramachandra Medical Center': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Government General Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Chennai Egmore Eye Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'Kauvery Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Billroth Hospitals': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Global Hospitals': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Dr. Mehtas Hospitals': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};


const hospitalsInHyderabad = {
  'Apollo Hospitals, Jubilee Hills': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Care Hospitals, Banjara Hills': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Yashoda Hospitals, Malakpet': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Continental Hospitals, Gachibowli': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Sunshine Hospitals, Secunderabad': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Virinchi Hospitals, Banjara Hills': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'KIMS Hospitals, Kondapur': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'CARE Banjara Institute of Medical Sciences': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Omega Hospitals, Banjara Hills': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Star Hospitals, Banjara Hills': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};


const hospitalsInAhmedabad = {
  'Apollo Hospitals': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Sterling Hospitals': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Shalby Hospitals': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'CIMS Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Zydus Hospitals': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Narayana Multispeciality Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'Apollo CBCC Cancer Care': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'B.J. Medical College and Civil Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Apollo CBCC Cancer Care': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'HCG Cancer Centre': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};


const hospitalsInPune = {
  'Ruby Hall Clinic': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Sahyadri Hospitals': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Deenanath Mangeshkar Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Jehangir Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'KEM Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Aditya Birla Memorial Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'Poona Hospital and Research Centre': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Inamdar Multispeciality Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Surya Sahyadri Hospital': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Noble Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};


const hospitalsInJaipur = {
  'SMS Hospital': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Fortis Escorts Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Sawai Man Singh Hospital': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Apex Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Bhagwan Mahaveer Cancer Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Eternal Heart Care Centre': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'Cocoon Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Metro MAS Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Sanjeevani Hospital': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Jaipur Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};

const hospitalsInLucknow = {
  'King Georges Medical University (KGMU)': ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  'Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  'Ram Manohar Lohia Institute of Medical Sciences (RMLIMS)': ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  'Eras Lucknow Medical College and Hospital': ['7:30 AM', '8:30 AM', '9:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
  'Chandan Hospital': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  'Purani Chungi Hospital': ['9:30 AM', '10:30 AM', '11:30 AM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
  'Shekhar Hospital': ['10:30 AM', '11:30 AM', '12:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
  'Apex Hospital': ['7:00 AM', '8:00 AM', '9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'],
  'Vivekanand Polyclinic & Institute of Medical Sciences': ['12:00 PM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
  'Charak Hospital': ['8:30 AM', '9:30 AM', '10:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
  // Add more hospitals and their time slots as needed
};

function handleCityChange() {
  var cityDropdown = document.getElementById('cityDropdown');
  var hospitalDropdown = document.getElementById('hospitalDropdown');
  var timingDropdown = document.getElementById('timingDropdown');

  hospitalDropdown.disabled = true;
  timingDropdown.disabled = true;

  hospitalDropdown.innerHTML = '<option value="" disabled selected>Select Hospital</option>'; // Reset hospital dropdown

  if (cityDropdown.value === 'city1') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInMumbai) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city2') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInDelhi) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city3') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInBangalore) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city4') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInKolkata) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city5') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInChennai) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city6') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInHyderabad) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city7') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInAhmedabad) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city8') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInPune) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city9') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInJaipur) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
  else if (cityDropdown.value === 'city10') { // Assuming 'city1' corresponds to Mumbai
    for (const hospital in hospitalsInLucknow) {
      var option = document.createElement('option');
      option.value = hospital;
      option.text = hospital;
      hospitalDropdown.appendChild(option);
    }

    hospitalDropdown.disabled = false;
  }
}

function handleHospitalChange() {

    var hospitalDropdown = document.getElementById('hospitalDropdown');
    var timingDropdown = document.getElementById('timingDropdown');

    const selectedHospital = hospitalDropdown.value;

    timingDropdown.innerHTML = '<option value="" disabled selected>Select Timing</option>';

    if (hospitalsInMumbai[selectedHospital]) {
      for (const timing of hospitalsInMumbai[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInDelhi[selectedHospital]) {
      for (const timing of hospitalsInDelhi[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInBangalore[selectedHospital]) {
      for (const timing of hospitalsInBangalore[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInKolkata[selectedHospital]) {
      for (const timing of hospitalsInKolkata[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInChennai[selectedHospital]) {
      for (const timing of hospitalsInChennai[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInHyderabad[selectedHospital]) {
      for (const timing of hospitalsInHyderabad[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInAhmedabad[selectedHospital]) {
      for (const timing of hospitalsInAhmedabad[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInPune[selectedHospital]) {
      for (const timing of hospitalsInPune[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInJaipur[selectedHospital]) {
      for (const timing of hospitalsInJaipur[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
    else if (hospitalsInLucknow[selectedHospital]) {
      for (const timing of hospitalsInLucknow[selectedHospital]) {
          const option = document.createElement('option');
          option.value = timing;
          option.textContent = timing;
          timingDropdown.appendChild(option);
      }
      timingDropdown.disabled = false;
    }
}
