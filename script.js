fetch("include/navbar.html") //include navbar.html
      .then(res => res.text())
      .then(data => document.getElementById("navbar").innerHTML = data);

fetch("include/footer.html") //include footer.html
      .then(res => res.text())
      .then(data => document.getElementById("footer").innerHTML = data);

function displayCoaches() { //displaying coaches in index.html
      //storage-data
      let data = [
      {
            img: "img/coach1.png",
            name: "Mike Johnson",
            program: "Strength & Conditioning",
            exp: "10+ years experience helping clients achieve their strength goals."
      },
      {
            img: "img/coach2.png",
            name: "Sarah Williams",
            program: "Nutrition & Weight Loss",
            exp: "Certified nutritionist specializing in sustainable weight management."
      },
      {
            img: "img/coach3.png",
            name: "David Chen",
            program: "Cardio & HIIT",
            exp: "Specializes in high-intensity workouts that deliver maximum results."
      }
      ]

      let mainDiv = document.getElementById("coaches"); //create the element 
      mainDiv.innerHTML = "";

      data.forEach((data) => { //iterate the data inside the created element 
      let container = document.createElement("div");
      container.className = "container";
      container.innerHTML = `
        <img src="${data.img}">
        <div>
          <h2>${data.name}</h2>
          <p class="middle">${data.program}</p>
          <p>${data.exp}Legitimacy</p>
        </div>
      `;
      mainDiv.appendChild(container);
      })
}
document.addEventListener("DOMContentLoaded", displayCoaches); //call "dispalyCoaches()" and run in DOM

function displayComments() {
      let commentData = [
            {
                  img: "img/comment1.png",
                  name: "Jennifer K.",
                  comment: "I've been a member for 6 months and have lost 30 pounds! The coaches are amazing and the community is so supportive."
            },
            {
                  img: "img/comment2.png",
                  name: "Robert T.",
                  comment: "The equipment is top-notch and always well-maintained. The coaches really know their stuff and have helped me achieve my goals."
            },
            {
                  img: "img/comment3.png",
                  name: "Melissa A.",
                  comment: "I love the variety of classes offered. There's always something new to try, and the coaches make every session fun and challenging."
            }
      ]

      let mainDiv = document.getElementById("comments");
      mainDiv.innerHTML = "";
      
      commentData.forEach((data) => {
            let container = document.createElement("div")
            container.className = "container"
            container.innerHTML = 
            `
            <div>
                  <img src="${data.img}">
                  <h3>${data.name}</h3>
            </div>
            <p>${data.comment}</p>
            `
            mainDiv.appendChild(container);
      })
}
document.addEventListener("DOMContentLoaded", displayComments); //call "dispalyComments()" and run in DOM

function displayFacility() {
      let facilityData = [
            {
            img: "img/facility1.png",
            type:  "Strength Training Area",
            definition: "Fully equipped with free weights, power racks, benches, and machines to help you build muscle and strength."
            },
            {
            img: "img/facility2.png",
            type:  "Cardio Zone",
            definition: "State-of-the-art cardio machines including treadmills, ellipticals, bikes, and rowing machines."
            },
            {
            img: "img/facility3.png",
            type:  "Group Fitness Studio",
            definition: "Spacious studio for yoga, HIIT, dance, and other group classes led by our expert instructors."
            },
            {
            img: "img/facility4.png",
            type:  "Personal Training Space",
            definition: "Dedicated areas for one-on-one sessions with our certified personal trainers."
            },
            {
            img: "img/facility5.png",
            type:  "Recovery Zone",
            definition: "Featuring stretching areas, foam rollers, and other recovery tools to help you recover faster."
            },
            {
            img: "img/facility6.png",
            type:  "Modern Locker Rooms",
            definition: "Clean and spacious locker rooms with showers, changing areas, and amenities for your comfort."
            }
      ]

      let mainDiv = document.querySelector("#facility")

      
      facilityData.forEach((data) => {
            let container = document.createElement("div")
            container.className = "container"
            container.innerHTML = `
                  <img src="${data.img}">
                    <div>
                        <h2>${data.type}</h2>
                        <p>${data.definition}</p>
                    </div>
            `
            mainDiv.appendChild(container)
            console.log(data)
      })
}
document.addEventListener("DOMContentLoaded", displayFacility); //call "dispalyCoaches()" and run in DOM

function displayLeader() {
      let leaderData = [
            {
                 img: "img/lead1.png",
                 name: "Michael Thompson",
                 position: "Founder & CEO",
                 background: "Former Olympic athlete with a passion for helping others achieve their fitness goals."
            },
            {
                 img: "img/lead2.png",
                 name: "Sarah Thompson",
                 position: "Co-Founder & Director",
                 background: "Certified nutritionist and personal trainer with 15+ years of experience."
            },
            {
                 img: "img/lead3.png",
                 name: "David Rodriguez",
                 position: "Head Coach",
                 background: "Expert in strength and conditioning with a background in sports medicine."
            },
            {
                 img: "img/lead4.png",
                 name: "Jennifer Lee",
                 position: "Operations Manager",
                 background: "Ensures the gym runs smoothly and members have an exceptional experience."
            }
      ]

      let mainDiv = document.querySelector("#leaders")
      mainDiv.innerHTML = ""

      leaderData.forEach((data) => {
            let container = document.createElement("div")
            container.className = "container"

            container.innerHTML = `
                  <img src="${data.img}">
                  <h2>${data.name}</h2>
                  <p style="color: #6B7280;">${data.position}</p>
                  <p>${data.background}</p>
            `
            mainDiv.appendChild(container)
      })
}

document.addEventListener("DOMContentLoaded", displayLeader)

function displayExpertCoaches() {
      let data = [
      {
            img: "img/coach1.png",
            name: "Mike Johnson",
            program: "Strength & Conditioning",
            exp: "With over 10 years of experience, Mike specializes in strength training, powerlifting, and helping clients build lean muscle mass. His clients have achieved remarkable transformations under his guidance.",
            certs: [
                  "NASM Certified Personal Trainer",
                  "Certified Strength and Conditioning Specialist (CSCS)",
                  "Precision Nutrition Level 2"
            ]
      },
      {
            img: "img/coach2.png",
            name: "Sarah Williams",
            program: "Nutrition & Weight Loss",
            exp: "Sarah is a certified nutritionist and weight loss specialist who helps clients develop sustainable eating habits and lifestyle changes. Her holistic approach focuses on both physical and mental well-being.",
            certs: [
                  "ACE Certified Personal Trainer",
                  "Registered Dietitian (RD)",
                  "Behavior Change Specialist",
                  "Weight Management Specialist"
            ]
      },
      {
            img: "img/coach3.png",
            name: "David Chen",
            program: "Cardio & HIIT",
            exp: "David specializes in high-intensity interval training and cardio workouts that maximize calorie burn and improve cardiovascular health. His energetic approach makes every workout fun and challenging.",
            certs: [
                  "ISSA Certified Personal Trainer",
                  "HIIT Specialist",
                  "TRX Suspension Training",
                  "Spinning Instructor"
            ]
      },
      {
            img: "img/coach4.png",
            name: "Emily Rodriguez",
            program: "Yoga & Flexibility",
            exp: "Emily is a certified yoga instructor who focuses on improving flexibility, balance, and mental wellness. Her classes are suitable for all levels and emphasize mindfulness and proper alignment.",
            certs: [
                  "200-Hour Yoga Alliance Certification",
                  "Meditation Instructor",
                  "Flexibility Specialist",
                  "Pre/Post-Natal Yoga Certified"
            ]
      },
      {
            img: "img/coach5.png",
            name: "Marcus Thompson",
            program: "Functional Training",
            exp: "Marcus specializes in functional training that improves everyday movement patterns and prevents injuries. His approach focuses on building practical strength for real-life activities.",
            certs: [
                  "NSCA Certified Personal Trainer",
                  "Functional Movement Specialist",
                  "Kettlebell Certification",
                  "Corrective Exercise Specialist"
            ]
      },
      {
            img: "img/coach6.png",
            name: "Lisa Patel",
            program: "Senior Fitness & Rehabilitation",
            exp: "Lisa specializes in working with seniors and individuals recovering from injuries. Her gentle approach focuses on improving mobility, balance, and strength in a safe environment.",
            certs: [
                  "ACE Senior Fitness Specialist",
                  "Rehabilitation Exercise Specialist",
                  "Arthritis Foundation Exercise Program",
                  "Post-Rehabilitation Specialist"
            ]
      }
      ]

      let certList = ""

      let mainDiv = document.querySelector("#displayCoaches")
      mainDiv.innerHTML = ""

      

      data.forEach((data) => {
            let container = document.createElement("div")
            container.className = "container"
            container.innerHTML = `
            <img src="${data.img}">
            <div class="columnDisplay">
                  <h2>${data.name}</h2>
                  <h3>${data.program}</h3>
                  <p>${data.exp}</p>
                  <h3>Certification:</h3>
                  <ul>
                        ${data.certs.map(cert => `<li>${cert}</li>`).join("")}
                  </ul>
                  <div>
                        <i class="fa-brands fa-instagram"></i> 
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                  </div>
            </div>
            `
            mainDiv.appendChild(container)
      })
}
document.addEventListener("DOMContentLoaded",displayExpertCoaches)

function displayEquipment() {
      let equipmentData = [
            {
                  img: "img/equipment1.png",
                  type: "Strength",
                  name: "Smith Machine",
                  definition: "A weight machine used for weight training that consists of a barbell fixed within steel rails, allowing only vertical movement."
            },
            {
                  img: "img/equipment2.png",
                  type: "Strength",
                  name: "Leg Press Machine",
                  definition: "A weight training machine used to strengthen the quadriceps, hamstrings, and glutes while reducing stress on the lower back."
            },
            {
                  img: "img/equipment3.png",
                  type: "Cardio",
                  name: "Treadmill",
                  definition: "A stationary machine with a moving belt for walking, jogging, or running while staying in one place."
            },
            {
                  img: "img/equipment4.png",
                  type: "Strength",
                  name: "Cable Machine",
                  definition: "A versatile machine that uses cables, pulleys, and weight stacks to provide resistance for a wide variety of exercises."
            },
            {
                  img: "img/equipment5.png",
                  type: "Cardio",
                  name: "Rowing Machine",
                  definition: "A machine that simulates the action of watercraft rowing, providing a full-body workout that combines cardiovascular conditioning with strength training."
            },
            {
                  img: "img/equipment6.png",
                  type: "Strength",
                  name: "Chest Press Machine",
                  definition: "A machine designed to work the pectoral muscles, front deltoids, and triceps in a controlled movement pattern."
            },
            {
                  img: "img/equipment7.png",
                  type: "Flexibility",
                  name: "Elliptical Trainer",
                  definition: "A stationary exercise machine that simulates stair climbing, walking, or running without causing excessive pressure to the joints."
            },
            {
                  img: "img/equipment8.png",
                  type: "Strength",
                  name: "Lat Pulldown Machine",
                  definition: "A machine designed to strengthen the latissimus dorsi (back) muscles and improve upper body strength."
            }
      ]

      let mainDiv = document.querySelector("#Items")
      mainDiv.innerHTML = ""

      let searchinput = document.getElementById("searchInput").value.trim().toLowerCase()
      
      equipmentData.forEach((data) => {
            //call the data and make it lowercase for search function
            let type = data.type.toLowerCase()
            let name = data.name.toLowerCase()
            //condition to check if the type and name has searchinput value
            if (type.includes(searchinput) || name.includes(searchinput) || searchinput === "") {
            //display the data if condition is true
            let container = document.createElement("div")
            container.className = "container"
            container.innerHTML = `
                <img src="${data.img}">
                <div>
                    <h3>${data.type}</h3>
                    <h2>${data.name}</h2>
                    <p>${data.definition}</p>
                </div>
            `
            mainDiv.appendChild(container)
            }
      })
}
document.addEventListener("DOMContentLoaded",displayEquipment)

//put eventlistener on enter during search input
document.querySelector("#searchInput").addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                  displayEquipment() //call displayEquipment on Enter key press
            }
})

let phone = document.getElementById('phone');
  phone.addEventListener('input', () => {
    // Remove non-numeric characters
    phone.value = phone.value.replace(/\D/g, '');

    // Limit to 11 digits
    if (phone.value.length > 11) {
      phone.value = phone.value.slice(0, 11);
    }
});

