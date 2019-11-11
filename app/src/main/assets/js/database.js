/*
*Dev Resources | Code Influencer
*Mark Benjamin
*mbenjerminne@gmail.com
*http://codeinfluencer.com
*copyright 2019


*database.js
*This is the backbone of all the data displayed on the phtml page
*Contains arrays and objects
*/





/**
 * These are the info about the indexed items on the homepage
 * These are displayed on the category.html
 */

const html = [{
        name: "HTML Tutorials | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/html/default.asp"
    },
    {
        name: "HTML Crash Course For Absolute Beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE"
    },
    {
        name: "Learn HTML5 - full course with code samples | Youtube Tutorial",
        imageUrl: "youtube.webp",
        url: "https://youtu.be/DPnqb74Smug"
    },
    {
        name: "HTML 5 Canvas | Udacity Course",
        imageUrl: "udacity.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/html5-canvas--ud292"
    },
    {
        name: "HTML Tutorials | Sololearn Course",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/HTML/"
    }
];

const css = [{
        name: "CSS Tutorials | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/css/"
    },
    {
        name: "CSS Crash Course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=r1xBCi5SOjw"
    },
    {
        name: "CSS Tutorials | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/CSS/"
    }
];

const js = [{
        name: "JavaScript Tutorials | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/js/"
    },
    {
        name: "ES 6 - JavaScript Improved | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/es6-javascript-improved--ud356"
    },
    {
        name: "Javascript Testing | Udacity Course",
        imageUrl: "udacity2.png",
        url: "https://www.udacity.com/course/javascript-testing--ud549"
    },
    {
        name: "Object Oriented Javascript | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/object-oriented-javascript--ud711"
    },
    {
        name: "Javascript and the DOM | Udacity Course",
        imageUrl: "alternative.jpg",
        url: "https://www.udacity.com/course/javascript-and-the-dom--ud117"
    },
    {
        name: "Javascript Design patterns | Udacity Course",
        imageUrl: "udacity.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/javascript-design-patterns--ud989"
    },
    {
        name: "Javascript Essentials | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/javascript-essentials/"
    },
    {
        name: "Learn Javascript -Full course for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },
    {
        name: "JavaScript in one hour | Youtube Tutorial",
        imageUrl: "alternative4.png",
        url: "https://www.youtube.com/watch?v=W6NZfCO5SIk"
    },
    {
        name: "JavaScript crash course for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
    },
    {
        name: "JavaScript Tutorials | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/JavaScript/"
    }
];

const jquery = [{
        name: "JQuery Tutorials | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/jquery/default.asp"
    },
    {
        name: "Intro to jQuery | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/intro-to-jquery--ud245"
    },
    {
        name: "jQuery Full Course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=ScoURsEM_yU"
    },
    {
        name: "JQuery Tutorials | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/jQuery/"
    }
];

const angular = [{
        name: "Documentation",
        imageUrl: "angular.jpg",
        url: "https://angular.io/docs"
    },
    {
        name: "W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/angular/"
    },
    {
        name: "Frontend Frameworks | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/front-end-frameworks--ud894"
    },
    {
        name: "Angular JS for beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/angularjs-for-beginners-udemy/"
    },
    {
        name: "Angular Tutorial for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=k5E2AVpwsko"
    }
];

const bootstrap = [{
        name: "Documentation",
        imageUrl: "bootstrap.png",
        url: "https://getbootstrap.com/docs/4.1/getting-started/introduction/"
    },
    {
        name: "Bootstrap Tutorials | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/bootstrap4/"
    },
    {
        name: "Complete Bootstrap Course | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/bootstrap-4-tutorials/"
    },
    {
        name: "Bootstrap 4 free crash course | YouTube",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=hnCmSXCZEpU"
    }
];

const react = [{
        name: "Documentation",
        imageUrl: "react.webp",
        url: "https://reactjs.org/docs/getting-started.html"
    },
    {
        name: "React Tutorial | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/react/"
    },
    {
        name: "React Fundamentals | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/react-fundamentals/"
    }, {
        name: "React in 1 hour | Udemy Course",
        imageUrl: "alternative.jpg",
        url: "https://www.udemy.com/course/react-basic-in-just-1-hour/"
    },
    {
        name: "React JS Crash course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=sBws8MSXN7A"
    },
    {
        name: "React Native Crash course | Youtube Tutorial",
        imageUrl: "alternative.png",
        url: "https://www.youtube.com/watch?v=mkualZPRZCs"
    },
    {
        name: "React Tutorial for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=dGcsHMXbSOA"
    }
];

const ionic = [{
        name: "Documentation",
        imageUrl: "ionic.jpeg",
        url: "https://ionicframework.com/docs"
    },
    {
        name: "Ionic Academy",
        imageUrl: "sql.jpg",
        url: "https://ionicacademy.com/ionic-crash-course/"
    },
    {
        name: "Ionic 4 Crash Course for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=qTdwUpQRptc"
    },
    {
        name: "Ionic 4 Full Tutorial | Youtube Tutorial",
        imageUrl: "alternative5.png",
        url: "https://www.youtube.com/watch?v=AvbuIRg8_Jg"
    }
];

const cordova = [{
        name: "Documentation",
        imageUrl: "cordova.png",
        url: "https://cordova.apache.org/docs/en/latest/"
    },
    {
        name: "Your first Apache Cordova app | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/learn-to-build-your-first-apache-cordova-app/"
    },
    {
        name: "Intro to app development with cordova | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=CDY1fRZycGk&list=PLyuRouwmQCjkLnfGRHMosenaxPq9PqH0n"
    }
];

//

const python = [{
        name: "Learn Python | CodeCademy",
        imageUrl: "codecademy.png",
        url: "https://www.codecademy.com/learn/learn-python"
    },
    {
        name: "Programming with python | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/python-programming-beginners/"
    },
    {
        name: "Intro to python programming | Udemy Course",
        imageUrl: "python.png",
        url: "https://www.udemy.com/course/pythonforbeginnersintro/"
    },
    {
        name: "Python crash course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=JJmcL1N2KQs"
    }, {
        name: "Python programming | Youtube Tutorial",
        imageUrl: "alternative.png",
        url: "https://www.youtube.com/watch?v=N4mEzFDjqtA"
    },
    {
        name: "Python Tutorial | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/Python/"
    }

];

const sql = [{
        name: "SQL Tutorial | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/sql/"
    },
    {
        name: "SQL For Data Analysis | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/sql-for-data-analysis--ud198"
    },
    {
        name: "SQL for beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/sql-for-beginners-s/"
    },
    {
        name: "SQL Tutorial - Full course for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
    },
    {
        name: "Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/SQL/"
    }
];

//

const arduino = [{
        name: "Documentation | Arduino",
        imageUrl: "arduino.jpg",
        url: "https://www.arduino.cc/en/main/docs"
    },
    {
        name: "Arduino Workshop - Step by step guide | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/arduino-workshop-step-by-step-guide/"
    },
    {
        name: "Master the basics of Arduino | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=1R3fqSFCAjM"
    }
];

//

const c = [{
        name: "C Programming made easy | Udemy Course",
        imageUrl: "udemy2.png",
        url: "https://www.udemy.com/course/c-programming-made-easy/"
    },
    {
        name: "Best approach to learn C programming | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/c-programming-the-best-approach-to-learn-c-language/"
    },
    {
        name: "C tutorial for beginners - Full course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=KJgsSFOSQv0"
    },
    {
        name: "C Programming | Tutorialspoint",
        imageUrl: "alternative5.png",
        url: "https://www.tutorialspoint.com/cprogramming/index.htm"
    }
];

const cpp = [{
        name: "C++ for Programmers | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/c-for-programmers--ud210"
    },
    {
        name: "C++ Tutorial for beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/free-learn-c-tutorial-beginners/"
    },
    {
        name: "C++ Tutorial for beginners - Full course | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y"
    },
    {
        name: "Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/CPlusPlus/"
    },
    {
        name: "Learn C++ | App",
        imageUrl: "playstore.png",
        url: "https://play.google.com/store/apps/details?id=com.codepoint.learncplusplus"
    }
];

const java = [{
        name: "User Interface | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/android-basics-user-interface--ud834"
    },
    {
        name: "User Input | Udacity Course",
        imageUrl: "alternative.png",
        url: "https://www.udacity.com/course/android-basics-user-input--ud836"
    },
    {
        name: "Multiscreen Apps | Udacity Course",
        imageUrl: "udacity2.png",
        url: "https://www.udacity.com/course/android-basics-multiscreen-apps--ud839"
    },
    {
        name: "Basic Networking | Udacity Course",
        imageUrl: "alternative.jpg",
        url: "https://www.udacity.com/course/android-basics-networking--ud843"
    },
    {
        name: "Data Storage | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/android-basics-data-storage--ud845"
    },
    {
        name: "Android Developer Fundamentals | Google Codelab",
        imageUrl: "android-design.svg",
        url: "https://developer.android.com/courses/fundamentals-training/overview-v2"
    },
    {
        name: "Advanced Android Development  | Google Codelab",
        imageUrl: "android-for-developers.svg",
        url: "https://developer.android.com/courses/advanced-training/overview"
    },
    {
        name: "Java Tutorial | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/Java/"
    },
    {
        name: "Java Tutorial for complete Beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/java-tutorial/"
    }
];

const csharp = [{
        name: "C# Programming | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/c-sharp-programming/"
    },
    {
        name: "C Sharp Basics for newbies | Udemy Course",
        imageUrl: "alternative.png",
        url: "https://www.udemy.com/course/c-sharp-basics-for-complete-newbies/"
    },
    {
        name: "C# Tutorial - Full Course for beginners | Youtube Tutorial",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=GhQdlIFylQ8"
    },
    {
        name: "Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/CSharp/"
    }
];

const php = [{
        name: "PHP Tutorial | W3 Schools",
        imageUrl: "w3.png",
        url: "https://www.w3schools.com/php/"
    },
    {
        name: "PHP Tutorial for beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/php-tutorial-for-beginners-j/"
    },
    {
        name: "PHP Development classes | Udemy Course",
        imageUrl: "alternative.png",
        url: "https://www.udemy.com/course/calebthevideomaker2-php-development-classes/"
    },
    {
        name: "PHP Programming Tutorial - full tutorial | YouTube",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=OK_JCtrrv-c"
    },
    {
        name: "Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/PHP/"
    }
];

const ruby = [{
        name: "Documentation | Ruby",
        imageUrl: "ruby.png",
        url: "https://www.ruby-lang.org/en/documentation/"
    },
    {
        name: "Ruby on Rails - beginners guide | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/ruby-on-rails-a-beginners-guide-free/"
    },
    {
        name: "Ruby for absolute beginners | Udemy Course",
        imageUrl: "alternative.jpg",
        url: "https://www.udemy.com/course/ruby-for-absolute-beginners/"
    },
    {
        name: "Ruby Tutorial for beginners | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/ruby-tutorial-for-beginners/"
    },
    {
        name: "Ruby Tutorial | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/Ruby/"
    }
];

const swift = [{
        name: "Swift For Beginners | Udacity Course",
        imageUrl: "udacity.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/swift-for-beginners--ud1022"
    },
    {
        name: "Swift For Developers | Udacity Course",
        imageUrl: "alternative.jpg",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/swift-for-developers--ud1025"
    },
    {
        name: "Intro to iOS app Development with swift | Udacity Course",
        imageUrl: "udacity2.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585"
    },
    {
        name: "Swift For Beginners | Udacity Course",
        imageUrl: "alternative.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/swift-for-beginners--ud1022"
    },
    {
        name: "Learn Swift Programming Syntax | Udacity Course",
        imageUrl: "udacity.png",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/learn-swift-programming-syntax--ud902"
    },
    {
        name: "The complete iOS 10 developer course | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/the-complete-ios-10-developer-course/"
    },
    {
        name: "iOS 11 Development (Swift) | Udemy Course",
        imageUrl: "swift.jpg",
        url: "https://www.udemy.com/course/ios11development/"
    },
    {
        name: "Swift Tutorial | Sololearn",
        imageUrl: "sololearn.webp",
        url: "https://www.sololearn.com/Course/Swift/"
    }
];

//

const kotlin = [{
        name: "Documentation | Kotlin",
        imageUrl: "kotlin.svg",
        url: "https://kotlinlang.org/docs/reference/"
    },
    {
        name: "Developing android apps with Kotlin | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/ud9012"
    },
    {
        name: "Kotlin crash course for Java developers | Youtube",
        imageUrl: "youtube.png",
        url: "https://www.youtube.com/watch?v=pXdY1B-KVJg"
    },
    {
        name: "Kotlin Programming Fundamentals | Youtube Tutorial",
        imageUrl: "alternative.png",
        url: "https://www.youtube.com/watch?v=AeC4G-H-MQA"
    },
    {
        name: "Advanced Android app development | Udacity Course",
        imageUrl: "udacity2.png",
        url: "https://www.udacity.com/course/ud855"
    },
    {
        name: "Learn Kotlin | App",
        imageUrl: "playstore.png",
        url: "https://play.google.com/store/apps/details?id=com.codepoint.learnkotlin"
    },
    {
        name: "Advanced Android in kotlin | Google Codelab",
        imageUrl: "android-design.svg",
        url: "https://codelabs.developers.google.com/codelabs/advanced-android-kotlin-training-welcome/index.html?index=..%2F..advanced-android-kotlin-training#0"
    },
    {
        name: "Android Kotlin Fundamentals | Google Codelab",
        imageUrl: "android-for-developers.svg",
        url: "https://codelabs.developers.google.com/codelabs/kotlin-android-training-welcome/index.html?index=..%2F..android-kotlin-fundamentals#0"
    }
];

const flutter = [{
        name: "Documentation | Flutter",
        imageUrl: "flutter.png",
        url: "https://flutter.dev/docs"
    },
    {
        name: "Build native mobile apps with Flutter | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/build-native-mobile-apps-with-flutter--ud905"
    }
];

const xamarin = [{
        name: "Documentation",
        imageUrl: "xamarin.png",
        url: "https://docs.microsoft.com/en-us/xamarin/"
    },
    {
        name: "Intro to Xamarin forms | Udemy Course",
        imageUrl: "udemy.png",
        url: "https://www.udemy.com/course/introduction-to-xamarinforms/"
    },
    {
        name: "Xamarin forms for Android and iOS | Udemy Course",
        imageUrl: "sql.jpg",
        url: "https://www.udemy.com/course/xamarin-forms-free/"
    }
];

const firebase = [
    {
        name: "Documentation | Firebase",
        imageUrl: "firebase.png",
        url: "https://firebase.google.com/docs"
    },
    {
        name: "Firebase in a weekend - Android | Udacity Course",
        imageUrl: "udacity.png",
        url: "https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352"
    },
    {
        name: "Firebase in a weekend - iOS| Udacity Course",
        imageUrl: "alternative.png",
        url: "https://www.udacity.com/course/firebase-in-a-weekend-by-google-ios--ud0351"
    },
    {
        name: "Learn Firebase - App",
        imageUrl: "playstore.png",
        url: "https://play.google.com/store/apps/details?id=com.codepoint.learnfirebase"
    }
];

const material = [
    {
        name: "Documentation | Material Design",
        imageUrl: "material.png",
        url: "https://material.io/"
    },
    {
        name: "Material Design - Android | Udacity Course",
        imageUrl: "android-design.svg",
        url: "http://www.anrdoezrs.net/links/5424943/type/dlg/https://www.udacity.com/course/material-design-for-android-developers--ud862"
    },
];


const pwa = [{
    name: "Progressive web apps | Google Developers",
    imageUrl: "pwa.png",
    url: "https://developers.google.com/web/ilt/pwa"
}]







/**
 * Indexed items on the right of the home html page (index.html)
 */

const indexItems = [{
        name: "HTML",
        imgUrl: "html.png",
        link: "html.html",
        blend: "#f2614b",
        category: "web"

    },
    {
        name: "CSS",
        imgUrl: "css.jpg",
        link: "css.html",
        blend: "#ffca40",
        category: "web"
    },
    {
        name: "JavaScript",
        imgUrl: "js.png",
        link: "js.html",
        blend: "#204ecf",
        category: "web"
    },
    {
        name: "JQuery",
        imgUrl: "jquery.png",
        link: "jquery.html",
        blend: "#046884",
        category: "web"
    },
    {
        name: "Angular",
        imgUrl: "angular.jpg",
        link: "angular.html",
        blend: "#da0030",
        category: "web"
    },
    {
        name: "Bootstrap",
        imgUrl: "bootstrap.png",
        link: "bootstrap.html",
        blend: "#320d68",
        category: "web"
    },
    {
        name: "React",
        imgUrl: "react.webp",
        link: "react.html",
        blend: "#0f65b1",
        category: "web"
    },
    {
        name: "Ionic",
        imgUrl: "ionic.jpeg",
        link: "ionic.html",
        blend: "#4f8ef7",
        category: "web"
    },
    {
        name: "Cordova",
        imgUrl: "cordova.png",
        link: "cordova.html",
        blend: "#0f256e",
        category: "web"
    },
    {
        name: "Python",
        imgUrl: "python.png",
        link: "python.html",
        blend: "#10aace",
        category: "data"
    },
    {
        name: "SQL",
        imgUrl: "sql.jpg",
        link: "sql.html",
        blend: "#c2a2f7",
        category: "data"
    },
    {
        name: "Arduino",
        imgUrl: "arduino.jpg",
        link: "arduino.html",
        blend: "#00979c",
        category: "ml"
    },
    {
        name: "Python",
        imgUrl: "python.png",
        link: "python.html",
        blend: "#10abce",
        category: "ml"
    },
    {
        name: "C++",
        imgUrl: "cpp.jpg",
        link: "cpp.html",
        blend: "#2a3b4e",
        category: "pl"
    },
    {
        name: "Java",
        imgUrl: "android-for-developers.svg",
        link: "java.html",
        blend: "#073042",
        category: "pl"
    },
    {
        name: "C#",
        imgUrl: "csharp.jpg",
        link: "csharp.html",
        blend: "#58157c",
        category: "pl"
    },
    {
        name: "Python",
        imgUrl: "python.png",
        link: "python.html",
        blend: "#10abce",
        category: "pl"
    },
    {
        name: "JavaScript",
        imgUrl: "js.png",
        link: "js.html",
        blend: "#204ecf",
        category: "pl"
    },
    {
        name: "C",
        imgUrl: "c.svg",
        link: "c.html",
        blend: "#073042",
        category: "pl"
    },
    {
        name: "PHP",
        imgUrl: "php.jpg",
        link: "php.html",
        blend: "#5c739f",
        category: "pl"
    },
    {
        name: "Ruby",
        imgUrl: "ruby.png",
        link: "ruby.html",
        blend: "#f05355",
        category: "pl"
    },
    {
        name: "Swift",
        imgUrl: "swift.jpg",
        link: "swift.html",
        blend: "#f86755",
        category: "pl"
    },
    {
        name: "Kotlin",
        imgUrl: "kotlin.svg",
        link: "kotlin.html",
        blend: "#073042",
        category: "android"
    },
    {
        name: "Flutter",
        imgUrl: "flutter.png",
        link: "flutter.html",
        blend: "#25a6ec",
        category: "android"
    },
    {
        name: "Java",
        imgUrl: "android-for-developers.svg",
        link: "java.html",
        blend: "#073042",
        category: "android"
    },
    {
        name: "React",
        imgUrl: "react.webp",
        link: "react.html",
        blend: "#1f64bc",
        category: "android"
    },
    {
        name: "Xamarin Forms",
        imgUrl: "xamarin.png",
        link: "xamarin.html",
        blend: "#00a6e0",
        category: "android"
    },
    {
        name: "Firebase",
        imgUrl: "firebase.png",
        link: "firebase.html",
        blend: "#073042",
        category: "bonus"
    },
    {
        name: "Material Design",
        imgUrl: "material.png",
        link: "material.html",
        blend: "none",
        category: "bonus"
    },
    {
        name: "PWAs",
        imgUrl: "html.png",
        link: "html.html",
        blend: "#f2614b",
        category: "bonus"

    }
];