const params = new URLSearchParams(document.location.search);
let count = parseInt(params.get('key'));
console.log(count);

const db = [
 
    {
        Question: "What are people who write computer code called ?",
        Option1: "Programmer",
        Option2: "Manufacturer",
        Option3: "Cryptographer",
        Option4: "Professors",
        CorrectAnswer: "Programmer",
    },
    {
        Question: "Which of these is not a programming language?",
        Option1: "Java",
        Option2: "Python",
        Option3: "Banana",
        Option4: "Ruby",
        CorrectAnswer: "Banana"
    },
    {
        Question: "What does HTML stand for?",
        Option1: "Hyper Trainer Marking Language",
        Option2: "Hyper Text Marketing Language",
        Option3: "Hyper Text Markup Language",
        Option4: "Hyper Text Markup Leveler",
        CorrectAnswer: "Hyper Text Markup Language"
    },
    {
        Question: "Which class of object is utilized to compile regular expressions in Java?",
        Option1: "Matcher class",
        Option2: "Pattern class",
        Option3: "String class",
        Option4: "None of the above",
        CorrectAnswer: "Pattern class"
    },
    {
        Question: "Java is a _________",
        Option1: "Compiled language",
        Option2: "Interpreted Language",
        Option3: "Both",
        Option4: "None of the above",
        CorrectAnswer: "Both"
    },
    {
        Question: "The Indus Valley Civilization flourished during which period? ",
        Option1: "2nd century BC",
        Option2: "5th century AD ",
        Option3: "3000-1500 BC",
        Option4: "10th century AD",
        CorrectAnswer: "3000-1500 BC",
    },
    {
        Question: "Who was the first emperor of the Maurya Empire?  ",
        Option1: "Chandragupta Maurya",
        Option2: "Ashoka the Great ",
        Option3: "Samudragupta",
        Option4: "Harsha",
        CorrectAnswer: "Chandragupta Maurya",
    },
    {
        Question: "The Mughal Empire reached its peak under the rule of which emperor? ",
        Option1: "Babur",
        Option2: "Akbar",
        Option3: "Shah Jahan ",
        Option4: "Aurangzeb",
        CorrectAnswer: "Akbar",
    },
    {
        Question: "In the third battle of Panipat, who defeated Marathas?",
        Option1: "Afghans",
        Option2: "Mughals",
        Option3: "British Army",
        Option4: "None of the Above",
        CorrectAnswer: "Afghans",
    },

    {
        Question: " Who wrote Bande Mataram?",
        Option1: "Rabindranath Tagore",
        Option2: "Bankimchandra Chatterjee",
        Option3: "Sharat chandra chattopadhyay",
        Option4: "None of the Above",
        CorrectAnswer: "Bankimchandra Chatterjee",
    },

    {
        Question: "Which animal is known as the 'Ship of the Desert'?",
        Option1: "Tiger",
        Option2: "Camel",
        Option3: "Eagle",
        Option4: "kangaroo",
        CorrectAnswer: "Camel",
    },

    {
        Question: "Name the National game of India?",
        Option1: "Hockey",
        Option2: "Cricket",
        Option3: "Football",
        Option4: "No Game",
        CorrectAnswer: "No Game",
    },

    {
        Question: "Name the National river of India?",
        Option1: "Ganga",
        Option2: "Yamuna",
        Option3: "Kaveri",
        Option4: "Narmada",
        CorrectAnswer: "Ganga",
    },

    {
        Question: "Name the biggest continent in the world?",
        Option1: "Asia",
        Option2: "Australia",
        Option3: "South Africa ",
        Option4: "North America",
        CorrectAnswer: "Asia",
    },

    {
        Question: "Name the largest planet of our Solar System?",
        Option1: "Mars",
        Option2: "Jupiter",
        Option3: "Neptune",
        Option4: "Saturn",
        CorrectAnswer: "Jupiter",
    },

    {
        Question: "Which fort did Shah Jahan build?",
        Option1: "Bangalore Fort",
        Option2: "Kaziranga Fort",
        Option3: "Janjira Fort",
        Option4: "Red Fort",
        CorrectAnswer: "Red Fort",
    },

    {
        Question: " In which city is the Gateway of India situated?",
        Option1: "Calcutta",
        Option2: "Delhi",
        Option3: "Mumbai",
        Option4: "Chennai",
        CorrectAnswer: "Mumbai",
    },

    {
        Question: "Where is the largest concentration of stupas in India?",
        Option1: "Himachal Pradesh",
        Option2: "Madhya Pradesh",
        Option3: "Arunachal Pradesh",
        Option4: "None of these",
        CorrectAnswer: "Madhya Pradesh",
    },

    {
        Question: "Which is the principal festival of Kerala?",
        Option1: "Christmas",
        Option2: "Onam",
        Option3: "Diwali",
        Option4: "Id",
        CorrectAnswer: "Onam",
    },

    {
        Question: "Where is the Victoria Memorial situated?",
        Option1: "Mumbai",
        Option2: "Calcutta",
        Option3: "Delhi",
        Option4: "Chennai",
        CorrectAnswer: "Calcutta",
    },

    {
        Question: "Which one is the first search engine in internet?",
        Option1: "Google",
        Option2: "Archie",
        Option3: "Altavista",
        Option4: "WAIS",
        CorrectAnswer: "Archie",
    },

    {
        Question: "Number of bit used by the IPv6 address?",
        Option1: "32 bit",
        Option2: "64 bit",
        Option3: "128 bit",
        Option4: "256 bit",
        CorrectAnswer: "128 bit",
    },
    {
        Question: "Firewall in computer is used for?",
        Option1: "Security",
        Option2: "Data Transmission",
        Option3: "Authentication",
        Option4: "Monitoring",
        CorrectAnswer: "Security",
    },
    {
        Question: "Which of the following is not an operating system?",
        Option1: "DOS",
        Option2: "Mac",
        Option3: "C",
        Option4: "Linux",
        CorrectAnswer: "C",
    },
    {
        Question: "Number of layers in the OSI Model?",
        Option1: "9",
        Option2: "3",
        Option3: "7",
        Option4: "1",
        CorrectAnswer: "7",
    },
    {
        Question: "Which of the following is the main language of Goa?",
        Option1: "English",
        Option2: "Hindi",
        Option3: "Konkani",
        Option4: "Malayalam",
        CorrectAnswer: "Konkani",
    },
    {
        Question: "Which of the following language is known as the queen of all the languages of the World?",
        Option1: "Malayalam",
        Option2: "Hindi",
        Option3: "Kannada",
        Option4: "Dogri",
        CorrectAnswer: "Kannada",
    },
    {
        Question: "In which of the following Indian States/UTs Dogri language is spoken?",
        Option1: "Uttar Pradesh",
        Option2: "Tamil Nadu",
        Option3: "Bihar",
        Option4: "Jammu and Kashmir",
        CorrectAnswer: "Jammu and Kashmir",
    },
    {
        Question: " Which of the following languages is not spoken in Sikkim?",
        Option1: "Lepcha",
        Option2: "Bodo",
        Option3: "Bhotia",
        Option4: "Nepali",
        CorrectAnswer: "Bodo",
    },
    {
        Question: "Approximately how many languages are currently spoken in the world today?",
        Option1: "Around 7000",
        Option2: "Around 1000",
        Option3: "Around 10000",
        Option4: "Around 30000",
        CorrectAnswer: "Around 7000",
    },
]


const question = document.getElementById('ques');
const option1 = document.getElementById('one');
const option2 = document.getElementById('two');
const option3 = document.getElementById('three');
const option4 = document.getElementById('four');

window.onload = () =>{
    question.innerHTML = db[count].Question;
    option1.innerHTML = db[count].Option1;
    option2.innerHTML = db[count].Option2;
    option3.innerHTML = db[count].Option3;
    option4.innerHTML = db[count].Option4;
}

let selected = 0;
let correctAns = 0;

const nextQuestion = () =>{
    console.log(count);
    reset();
    if(count % 5 < db.length / 6){
        console.log('count');
        const btn = document.getElementById('next');
        btn.classList.remove('disableNext');
        count++;
        question.innerHTML = db[count].Question;
        option1.innerHTML = db[count].Option1;
        option2.innerHTML = db[count].Option2;
        option3.innerHTML = db[count].Option3;
        option4.innerHTML = db[count].Option4;
        console.log(count);
    }
    
    if(count % 5 == 4){
        const btn = document.getElementById('next');
        btn.innerHTML = "Submit";
        btn.setAttribute("onclick","submit()");
    }else if (document.getElementById('next').innerText === 'Submit'){
        const btn = document.getElementById('next');
        btn.innerHTML = "Next";
    }

}

const prevQuestion = () =>{
    if(count % 5 == 0){
        const btn = document.getElementById('prev');
        btn.classList.add('disablePrev');
    }else{
        count--;
        const btn = document.getElementById('prev');
        btn.classList.remove('disablePrev');
        question.innerHTML = db[count].Question;
        option1.innerHTML = db[count].Option1;
        option2.innerHTML = db[count].Option2;
        option3.innerHTML= db[count].Option3;
        option4.innerHTML = db[count].Option4;
    }
}

const reset = () =>{
    selected = 0;
    document.getElementById('one').style.backgroundColor = 'rgb(18, 18, 18)';
    document.getElementById('two').style.backgroundColor='rgb(18, 18, 18)';
    document.getElementById('three').style.backgroundColor='rgb(18, 18, 18)';
    document.getElementById('four').style.backgroundColor='rgb(18, 18, 18)';
}
const check = (btn) =>{
    if(btn.innerText === db[count].CorrectAnswer && selected == 0){
        btn.style.backgroundColor = 'green';
        correctAns++;
        selected++;
    }else if(selected == 0){
        btn.style.backgroundColor='red';
        selected++;
    }
}

const submit = () =>{
    const body = document.getElementById('container');
    body.classList.add('blur');
    const score = document.getElementById('score');
    score.classList.add('scoreCard');

    score.innerHTML = `Congratulations!!
        <img src = "images/trophy.jpg"/>
        Score: ${correctAns}/5
        <button onclick = "ok()"> OK </button>`;
}

const ok = () =>{
    window.location.reload();
}
