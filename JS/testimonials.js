const testimonials = [
  { name: "Neth Barcelon", text: "Best recommended for training services. So much learning each session." },
  { name: "Johann Dalingay", text: "Xcel Hub offers free trainings as well as paid but affordable ones. They are easy to grasp. These trainings are really useful." },
  { name: "Malabanan Mandaragat", text: "I love the way they teach students. Madaling intindihin. Recommended for Training Services." },
  { name: "Reena Cardenas", text: "One of the best online trainings I availed so far! Highly recommended. Hands-on si coach at ang daming valuable advice and feedback sa mga outputs namin. Ang damiiii pang bonus support, super appreciated ito. Totally worth it for such a budget-friendly price!" },
  { name: "MsLarry G Furio", text: "Xcel Hub ang unang naginspire sakin to pursue Freelance industry. Dito rin nabuhay ang 'Never Say Die', I mean 'Never stop learning' attitude ko. Back from 2020 until today very approachable at patient parin si coach magturo. Most of all, very affordable din ang mga trainings dito." },
  { name: "Jinky Cabias", text: "I recommend to have a training with Excelhub especially with Excel, Google Sheets and virtual assistance. But the most exciting part is the Excel Data Management. The training was worth it." },
  { name: "Marianne Altagracia", text: "Very welcoming and accommodating ni Coach Roxy, sobrang daming knowledge at helpful tips in VA JOURNEY ang mga naishare nya about excel and important tools and apps. Legit! Thank you so much!" },
  { name: "Mai Mai", text: "Highly recommended, I have learned so much in just a few hours. I am looking forward to enroll to advance my learning. Thank you so much for the free face to face training you spend on us." },
  { name: "Cyrill Jane Tiu", text: "Thank You Xcel Hub for the free training. I learned a lot." },

  { name: "Kieth Adona", text: "Love the free training seminar they provided and discovering the new features." },
  { name: "Rogelio Acala", text: "You have an amazing ability to motivate and inspire us. Your coaching has helped us achieve things we never thought possible, and for that, we are grateful." },
  { name: "Arnold Cera", text: "Thank you so much Xcel Hub!" },
  { name: "Glazia Kaye Barona", text: "Very knowledgeable and interesting. I'm not into Excel but you helped us a lot and taught us the easier way to use it. The shortcuts help do tasks fast and efficiently. Thanks coach!" },
  { name: "Michelle Zabala", text: "The best Training Service and Coach for the virtual assistant and MS Excel. Marami po akong natutunan during the free training. Thank you Coach Roxy!" },
  { name: "Patrick Enferno", text: "Thank you Xcel Hub Training Services for the free training. Dami po naming natutunan regarding sa Excel at kung paano mas mapabilis ang trabaho namin. Sana marami pa po kayong matulungan, God bless you!" },
  { name: "Lorenzena A. Ramos", text: "Xcel Hub Services offers easy-to-follow instructions to the student and a provision for a copy to review that method of instruction. It has an environment where you can always ask questions. The primary purpose gives each individual a chance to learn and eventually earn online. I recommend Xcel Hub Services and more power to the team." },
  { name: "Carol Villapando", text: "Super legit, Xcel Hub Training Services lahat ng knowledge magagamit mo. Super generous Coach Roxy, approachable mga admin. Super thankful for this group sa lahat ng natutunan ko. More success and God bless you more!" },
  { name: "Mariel Eneldas", text: "100% recommend sa mga tao na gusto matuto about Excel. May free tutorial for basic Excel na sobrang laking tulong sa mga zero knowledge, and kung gusto nyo talaga maging Excel expert in the long run, they also offer paid courses. Sobrang approachable yung mga coaches at mababait." },

  { name: "Amor Marjorie Balbin", text: "Sobrang helpful po nung workshop. Interactive, may hands-on, sobrang bait po ni Coach Roxy! Overall, sobrang sulit." },
  { name: "Dwight Perez", text: "Great mentors! Madami ka talaga matututunan." },
  { name: "Rizalyn Pudilanan Rubin", text: "Highly recommended! Training is clear, concise at madaling maintindihan sa mga newbie." },
  { name: "Marilyn Dublar", text: "Yung akala mo alam mo yung Excel pero hindi pa pala. Good thing that I found Xcel Hub. They really taught us many things. Not just Excel but also some of the skills that you'll need. I highly recommend Xcel Hub to everyone. Sigsig, liglig, at umaapaw ang matutunan mo dito. Super affordable pa ang paid trainings nila. Thank you so much Xcel Hub for the things that I've learned with you po." },
  { name: "Rose Castor Bicol", text: "Thank you Coach Roxy sa lahat po ng learnings. Wow ang dami ko talagang natutunan dito kay Xcel Hub. Super bait pa ni Coach and Miss Jhas. Sulit na sulit panoorin ang mga 3-hour webinars. Siksik, liglig, at umaapaw sa dami ng matututunan. God bless you." },
  { name: "Zeena C. Morris", text: "I have zero background in Excel. I have watched tutorials and paid for some but none compared to Xcel Hub. The 4-day 3-hour training was even free, but the learnings I got were professional. I am so thankful to Coach Roxy. Kudos. God bless." },
  { name: "Maricel Alfonso Barnillo", text: "Highly recommended this group. Kay Coach Roxy ko nalaman ang GDS!" },
  { name: "Frances Katrina", text: "Coach Roxanne is very generous in sharing her knowledge and experiences to newbies like me for free! I joined the Day 4 Live Webinar and the rest is history. Now I have 2 clients on Upwork and got paid for the first time. All thanks to the comprehensive support I got from Xcel Hub and Coach Roxanne. More power to you!" },
  { name: "Mara Relunia-Ayen", text: "Best e-learning site especially for those exploring the freelancing world. It's free and interactive learning." },

  { name: "Chelle Villeran-Oraca", text: "Very informative. Training is clear and easy to follow especially for beginners. Highly recommended!" },
  { name: "Michael Molino Hernandez", text: "Highly recommended! Very useful trainings, clear tutorial and easy to follow for beginners. Additional knowledge you can learn." },
  { name: "Jonna Jalbuena", text: "Highly recommended! Provides easy and valuable trainings for newbies like me." },
  { name: "Sheena C Pua", text: "Xcel Hub team especially Coach Roxy is so patient with teaching. Very generous also to sponsor series of webinars that can help you with your VA journey. Thank you very much, marami po kami natutunan." },
  { name: "Cerise DG", text: "Sobrang generous sa pagbibigay ng free trainings. Totoong training, hindi teaser lang. Sobrang bait ni Coach Roxy, very approachable. Thank you so much Xcel Hub." },
  { name: "Keela Sismundo", text: "Mabait sa newbies like me, reliable and knowledgeable, great foundation to learn VA skills." },
  { name: "Dyan Mae Billedo", text: "Thank you po coach for the free webinar! May mga new tricks and apps po ako natutunan, additional skills para sa akin na isang newbie sa freelancing world. Madali sundan yung mga formulas na tinuturo." },
  { name: "Bey Ugto", text: "Very newbie-friendly ang training tapos free pa. I really appreciate Filipinos helping each other to learn and be knowledgeable sa freelancing world, kaya super thank you po Coach Roxy and Xcel Hub team." },
  { name: "Alona Patiam", text: "Highly recommended. Very knowledgeable and accommodating ang mga coaches." },

  { name: "Girlie Docayso Munoz", text: "Highly recommended. Madami ka matututunan and very accommodating iyong mga coach. Worth it iyong bayad." },
  { name: "Mary Claire Dadivas", text: "Yung hindi mo talaga akalain na sobrang sulit ng maliit na halaga. Dito sa Xcel Hub, sulit as in sulit! Mabait at helpful ang coach dito. You may feel comfortable to talk to her. May God bless this group na marami pang matulungan lalo na sa mga tao hindi kaya mag-afford ng malaking halaga para sa training." },
  { name: "Carmel Acol Lumanta-Sarsaba", text: "I'm so happy to find this. You get a lot of value from the training at a very affordable price. Grabe talaga very generous and patient si Coach Roxy. She's organized and knowledgeable. Hands-on yung training and coach really makes the effort to check the assignments. She's not just an instructor, but a true teacher who cares that you learn. I highly recommend her training services." },
  { name: "Jenifer Valencia Taruc", text: "Very interactive. You can learn a lot. Thanks Xcel Hub! Thanks Mam Roxy." },
  { name: "Kristine Escoza", text: "I believe everybody has different types of learning curves, but in my experience, their webinars are so informative and flexible for all levels of learners. They are easy to understand and apply." },
  { name: "Meliss Farrales", text: "Xcel Hub gives you the best possible training that you need whether you want to upscale your skills or are just a beginner. You truly learn from this group. Coach Roxie is a wonderful and great instructor. She teaches from her heart." },
  { name: "Jennifer Manrique Galera", text: "Excellent training and excellent trainer. Coach Roxy is very accommodating and she will help you a lot with your queries and questions even if her trainings are for free. Saan ka pa?" },
  { name: "Nelia Canete Pagangpang", text: "Unlimited free Excel trainings." },
  { name: "Rage Cayanan", text: "I am appreciating free trainings more because of this group. Very engaging ang topics. Guaranteed ang learnings. Kudos and more power sa group. Never stop learning!" },

  { name: "Marites Suelto Maghirang", text: "Highly recommended! Thank you Xcel Hub for providing free valuable trainings and sharing your expertise to beginners like me. Very affordable paid training to all members and non-members who want to start work from home. Thank you Coach Roxie and to all coaches for showing unselfish acts here in Xcel Hub." },
  { name: "R Lene Garcia", text: "Sinong may sabi na nakakabagot ang ECQ? They are definitely wrong. With Xcel Hub, sobrang daming learnings as they say unlimited learning. Thank you so much." },
  { name: "Ria Nisperos", text: "Wonderful knowledge sharing for upskill training. Thank you Coach Roxy!" },
  { name: "Emy Racca", text: "Dashboard Training is excellent!" },
  { name: "Joseph Sta Maria", text: "Thank you for the very informative training coach, for making Excel very easy." },
  { name: "Edna Laforteza", text: "I have already recommended to 3 friends. Training is in-depth and coach is very accommodating. After-training support service is also great. Learning and training does not stop on training day. Coach made it possible for her students to become connected as a community which encourages and supports one another." },
  { name: "Ai Wo", text: "I was completely a newbie and not familiar with control keys. When I attended Coach Roxy’s session, I learned data cleanup, nomenclature, concatenate, CTRL+A, F1 to F12 functions, and in a single day I did my first dashboard with slicers connected to pivot tables. Highly recommended!" },
  { name: "Noemi M Franco", text: "Great content of trainings, modules, one-on-one coaching, apprenticeship program and very accommodating coach and staff. You can never go wrong. Plus they really have the passion to help even beginners. Job well done!" },
  { name: "Jojo Altre", text: "I have been waiting for the opportunity for Coach Roxy to have a training in Metro Manila, so when the opportunity came, I grabbed it. I wasn't disappointed at the outcome. Kudos to Coach Roxy and team! You're the best!" },
  { name: "Chel Natividad", text: "Location for training was very accessible because I didn’t have to travel to the metro. Easy to follow instructions and Roxanne kept us engaged all throughout. Big help! Love that training was done in person so feedback and assistance was real-time." }
];

const testimonialsPerPage = 9;
let currentPage = 1;
let expandedCards = {};

const grid = document.getElementById("testimonialGrid");
const pagination = document.getElementById("pagination");

function shortenText(text, limit = 150) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
}

function showTestimonials(page) {
    grid.innerHTML = "";

    const start = (page - 1) * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    const pageItems = testimonials.slice(start, end);

    pageItems.forEach((item, index) => {
        const globalIndex = start + index;
        const isLong = item.text.length > 150;
        const isExpanded = expandedCards[globalIndex] === true;

        grid.innerHTML += `
            <div class="testimonial-card">
                <img src="Images/Quote.png" class="quote-icon">

                <div class="stars">★★★★★</div>

                <p class="testimonial-text">
                    “${isExpanded ? item.text : shortenText(item.text)}”
                </p>

                ${
                    isLong
                        ? `<span class="show-more-btn" onclick="toggleText(${globalIndex})">
                            ${isExpanded ? "Show Less" : "Show More"}
                           </span>`
                        : `<span class="show-placeholder"></span>`
                }

                <h4>${item.name}</h4>
                <span class="participant-label">Training Participant</span>
            </div>
        `;
    });

    showPagination();
}

function toggleText(index) {
    expandedCards[index] = !expandedCards[index];
    showTestimonials(currentPage);
}

function showPagination() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})">‹</button>`;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
        pagination.innerHTML += `
            <button onclick="changePage(${i})" class="${i === currentPage ? "active-page" : ""}">
                ${i}
            </button>
        `;
    }

    pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})">›</button>`;
}

function changePage(page) {
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    expandedCards = {};
    showTestimonials(currentPage);

    window.scrollTo({
        top: document.querySelector(".testimonial-section").offsetTop - 20,
        behavior: "smooth"
    });
}

showTestimonials(currentPage);