-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2023 at 04:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vaidya`
--

-- --------------------------------------------------------

--
-- Table structure for table `diseases`
--

CREATE TABLE `diseases` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `symptoms` longtext DEFAULT NULL,
  `prevention` longtext DEFAULT NULL,
  `cure` longtext DEFAULT NULL,
  `status` tinytext NOT NULL DEFAULT 'Y',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `diseases`
--

INSERT INTO `diseases` (`id`, `name`, `symptoms`, `prevention`, `cure`, `status`, `created_at`) VALUES
(1, 'Common cold', 'Symptoms of the common cold include a runny or stuffy nose, sneezing, sore throat, cough, mild headache, and sometimes a low-grade fever. These symptoms typically last for about a week.', 'Prevention of the common cold can be done by practicing good hygiene, such as regularly washing hands with soap and water, avoiding close contact with sick individuals, and avoiding touching the face with unwashed hands.', 'Rest, staying hydrated, and using saline nasal drops or rinses can also help alleviate symptoms. It\'s important to consult a healthcare professional for appropriate advice and treatment options for managing the common cold.', 'Y', '2023-11-01 14:05:17'),
(2, 'High Blood Pressure', 'Symptoms of high blood pressure, also known as hypertension, are often not noticeable, which is why it is often referred to as a \"silent killer.\" However, in severe cases, symptoms may include headaches, shortness of breath, nosebleeds, and dizziness.', 'Prevention of high blood pressure involves maintaining a balanced diet that is low in sodium, saturated fats, and cholesterol, Regular exercise, maintaining a healthy weight, limiting alcohol consumption, and avoiding tobacco use. Additionally, managing stress and getting regular check-ups to monitor blood pressure levels are recommended.', 'While high blood pressure cannot be cured, it can be effectively managed. Lifestyle changes such as adopting a healthy diet, engaging in regular physical activity, and reducing stress can help control blood pressure levels. It is essential to follow medical advice, take medication as prescribed, and attend regular check-ups.', 'Y', '2023-11-01 14:05:17'),
(3, 'COVID-19', 'Common symptoms of COVID-19 include fever, cough, shortness of breath, fatigue, muscle or body aches, headache, sore throat, loss of taste or smell, congestion, runny nose, and gastrointestinal symptoms like nausea, vomiting, or diarrhea. ', 'Prevention of COVID-19 involves practicing good hygiene, such as regularly washing hands with soap and water for at least 20 seconds, using hand sanitizer with at least 60% alcohol if soap and water are not available, wearing a mask in public, maintaining physical distancing of at least six feet from others, and avoiding large gatherings or crowded places.', 'Vaccines against COVID-19 have been developed which can significantly reduce the risk of severe illness, hospitalization, and death from COVID-19. One must consult with healthcare professionals or local health authorities to get accurate and up-to-date information on vaccination availability and eligibility.', 'Y', '2023-11-01 14:05:17'),
(4, 'Daibetes', 'Increased thirst and frequent urination, Unexplained weight loss, Fatigue and weakness, Blurred vision, Slow healing of cuts and wounds, Tingling or numbness in the hands and feet, Recurring infections, such as urinary tract infections', '\r\nMaintain a healthy weight through regular exercise and a balanced diet, Limit the consumption of sugary foods and beverages,  Avoid smoking and excessive alcohol consumption, Monitor blood sugar levels regularly, especially if you have a family history of diabetes, Manage stress levels effectively', '', 'Y', '2023-11-01 14:05:17'),
(5, 'Obesity', '- Excessive weight gain or being significantly overweight\r\n- Increased body fat, especially around the waist\r\n- Difficulty in physical activities and decreased stamina\r\n- Breathlessness and excessive sweating\r\n- Joint pain and limited mobility\r\n\r\n', 'Choosing healthier foods (whole grains, fruits and vegetables, healthy fats and protein sources) and beverages. Limiting unhealthy foods (refined grains and sweets, potatoes, red meat, processed meat) and beverages (sugary drinks) Increasing physical activity.', '', 'Y', '2023-11-01 14:05:17'),
(6, 'Asthma', '-Shortness of breath.\n-Chest tightness or pain.\n-Wheezing when exhaling, which is a common sign of asthma in children.\n-Trouble sleeping caused by shortness of breath, coughing or wheezing.\n', '- Identify and avoid triggers that can worsen asthma symptoms, such as allergens (e.g., dust mites, pollen, pet dander), irritants (e.g., smoke, strong odors), and respiratory infections\r\n- Follow a written asthma action plan provided by a healthcare professional\r\n- Take prescribed asthma medications regularly, even when symptoms are under control\r\n- Maintain good indoor air quality', '', 'Y', '2023-11-01 14:05:17'),
(7, 'Arthritis', '- Joint pain, stiffness, and swelling\n- Reduced range of motion and flexibility in the affected joints\n- Warmth and redness around the joints\n- Fatigue and general weakness\n- Joint deformities (in advanced stages)\n', '- Maintain a healthy weight to reduce stress on the joints\r\n- Engage in regular exercise to strengthen muscles and improve joint flexibility\r\n- Avoid repetitive motions or overuse of joints\r\n- Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to support joint health\r\n', '', 'Y', '2023-11-01 14:05:17'),
(8, 'Cancer', '- Unexplained weight loss\n- Fatigue and weakness\n- Persistent pain\n- Changes in bowel or bladder habits\n- Persistent cough or hoarseness\n- Lumps or masses', '- Avoid tobacco and limit alcohol consumption\n- Maintain a healthy weight through a balanced diet and exercise\n- Protect yourself from the sun and get vaccinated against viruses that can cause cancer\n- Follow recommended cancer screening guidelines and seek early detection and treatment.', '', 'Y', '2023-11-02 14:23:26'),
(9, 'Acne', '- Whiteheads (closed plugged pores)\n- Blackheads (open plugged pores)\n- Small red, tender bumps (papules)\n- Pimples (pustules), which are papules with pus at their tips\n- Large, solid, painful lumps beneath the surface of the skin (nodules)', '- Keep your face clean by washing it twice a day with a mild cleanser\n- Avoid touching your face with dirty hands\n- Use oil-free or non-comedogenic skincare products\n- Avoid excessive scrubbing or harsh skin treatments\n- Maintain a healthy diet.', '', 'Y', '2023-11-02 14:23:26'),
(10, 'Urticaria', '- Raised, itchy, and red welts on the skin\r\n- Swelling and inflammation of the skin\r\n- Welts may vary in size and shape and can appear anywhere on the body\r\n- Welts may come and go within hours or persist for days or weeks', '-Identify and avoid triggers such as certain foods, medications, or environmental factors.\r\n-Take care of your skin by moisturizing and avoiding harsh irritants.\r\n-Wear loose-fitting clothing to minimize friction on the skin.\r\n-Practice stress management techniques.\r\n-Follow a healthy lifestyle with a balanced diet, regular exercise, and adequate sleep.', '', 'Y', '2023-11-02 14:23:26'),
(11, 'Scabies', '- Intense itching, especially at night\r\n- Pimple-like rash, bumps, or blisters on the skin\r\n- Thin, irregular burrow tracks made by the mites\r\n- Sores or crusted skin due to scratching', '- Avoid close contact with infested individuals or sharing personal items with them\r\n- Wash clothing, bedding, and towels in hot water and dry them on high heat\r\n- Vacuum and clean your home regularly\r\n- If you suspect scabies, seek medical treatment promptly to prevent further spread', NULL, 'Y', '2023-11-02 15:10:13'),
(12, 'Bronchitis', '- Persistent cough, often with mucus production\r\n- Chest discomfort or tightness\r\n- Shortness of breath or wheezing\r\n- Fatigue and low energy\r\n- Mild fever and body aches in some cases', '- Avoid smoking and exposure to secondhand smoke\r\n- Practice good hand hygiene to reduce the risk of viral infections\r\n- Avoid exposure to irritants such as air pollution, chemicals, or allergens\r\n- Get vaccinated against influenza and pneumonia, especially if you are at high risk', NULL, 'Y', '2023-11-02 15:10:13'),
(13, 'Anxiety', 'Anxiety disorders are like other forms of mental illness. They don’t come from personal weakness, character flaws or problems with upbringing. But researchers don’t know exactly what causes anxiety disorders. They suspect a combination of factors plays a role: Chemical imbalance, Environmental factors, Heredity.', '-Consult a healthcare provider before taking any medications or herbal remedies.\r\n-Limit caffeine intake from coffee, tea, cola, and chocolate.\r\n-Maintain a healthy lifestyle with regular exercise and a balanced diet.\r\n-Seek counseling and support for traumatic events to prevent anxiety from disrupting daily life.', NULL, 'Y', '2023-11-02 15:10:13'),
(14, 'Lyme disease', 'The most common early symptom is a rash that resembles a bull\'s-eye, called erythema  \nmigrans. Other symptoms may include fever, fatigue, headache, muscle and joint aches, and swollen lymph nodes. Diagnosis is typically based on symptoms, medical history, and the possibility of exposure to ticks. Blood tests can also be used to confirm the presence of antibodies to the Lyme disease bacteria.', 'To prevent Lyme disease, it is important to take precautions when spending time in wooded or grassy areas where ticks are commonly found. These include wearing protective clothing, using insect repellent, and checking for ticks after outdoor activities.', NULL, 'Y', '2023-11-02 15:10:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diseases`
--
ALTER TABLE `diseases`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diseases`
--
ALTER TABLE `diseases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
