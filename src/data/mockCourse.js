export const mockCourse = {
    id: 'course-1',
    title: 'Full Stack Web Development Mastery',
    description: 'Complete guide to modern web development with React, Node.js, and databases',
    totalProgress: 0,
    topics: [{
            id: 'topic-1',
            title: 'Frontend Fundamentals',
            isCompleted: false,
            subtopics: [{
                    id: 'subtopic-1-1',
                    title: 'HTML & CSS Basics',
                    isCompleted: false,
                    lessons: [{
                            id: 'lesson-1-1-1',
                            title: 'Introduction to HTML',
                            duration: 300,
                            videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751215445/kblc4hxyqjiadynehrrp.mp4',
                            isCompleted: false,
                            isLocked: false
                        },
                        {
                            id: 'lesson-1-1-2',
                            title: 'CSS Styling Fundamentals',
                            duration: 420,
                            videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751215590/omp9vaioh8bpqrdtukca.mp4',
                            isCompleted: false,
                            isLocked: true
                        }
                    ]
                },
                {
                    id: 'subtopic-1-2',
                    title: 'JavaScript Essentials',
                    isCompleted: false,
                    lessons: [{
                            id: 'lesson-1-2-1',
                            title: 'JavaScript Variables and Functions',
                            duration: 480,
                            videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751218493/JavaScript_VARIABLES_are_easy_z7egmg.mp4',
                            isCompleted: false,
                            isLocked: true
                        },
                        {
                            id: 'lesson-1-2-2',
                            title: 'DOM Manipulation',
                            duration: 360,
                            videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751215953/The_JavaScript_DOM_explained_in_5_minutes_f8rkct.mp4',
                            isCompleted: false,
                            isLocked: true
                        }
                    ]
                }
            ]
        },
        {
            id: 'topic-2',
            title: 'React Development',
            isCompleted: false,
            subtopics: [{
                id: 'subtopic-2-1',
                title: 'React Fundamentals',
                isCompleted: false,
                lessons: [{
                        id: 'lesson-2-1-1',
                        title: 'Components and JSX',
                        duration: 540,
                        videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751216110/Master_React_JS_in_easy_way_mq7wwg.mp4',
                        isCompleted: false,
                        isLocked: true
                    },
                    {
                        id: 'lesson-2-1-2',
                        title: 'State and Props',
                        duration: 600,
                        videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751216714/ReactJS_State_And_Props___ReactJS_Tutorial_For_Beginners___Learn_ReactJS_For_Beginners___Simplilearn_tgtiu5.mp4',
                        isCompleted: false,
                        isLocked: true
                    }
                ]
            }]
        },
        {
            id: 'topic-3',
            title: 'Backend Development',
            isCompleted: false,
            subtopics: [{
                id: 'subtopic-3-1',
                title: 'Node.js Fundamentals',
                isCompleted: false,
                lessons: [{
                    id: 'lesson-3-1-1',
                    title: 'Setting up Node.js',
                    duration: 300,
                    videoUrl: 'https://res.cloudinary.com/ddglwzjop/video/upload/v1751216434/What_is_Node_js__a55y45.mp4',
                    isCompleted: false,
                    isLocked: true
                }]
            }]
        }
    ]
};

export const mockAssignments = {
    'lesson-1-1-1': {
        id: 'assignment-1-1-1',
        title: 'HTML Fundamentals Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'What does HTML stand for?',
                type: 'mcq',
                options: [
                    'Hyper Text Markup Language',
                    'High Tech Modern Language',
                    'Home Tool Markup Language',
                    'Hyperlink and Text Markup Language'
                ],
                correctAnswer: 'Hyper Text Markup Language'
            },
            {
                id: 'q2',
                question: 'Which HTML element is used for the largest heading?',
                type: 'mcq',
                options: ['<h1>', '<h6>', '<header>', '<head>'],
                correctAnswer: '<h1>'
            },
            {
                id: 'q3',
                question: 'Create a basic HTML structure with a title "My First Page" and a paragraph saying "Hello World"',
                type: 'coding',
                code: '<!-- Write your HTML code here -->',
                language: 'html',
                correctAnswer: '<!DOCTYPE html>\n<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<p>Hello World</p>\n</body>\n</html>'
            },
            {
                id: 'q4',
                question: 'What is the purpose of semantic HTML elements?',
                type: 'mcq',
                options: [
                    'To make code look prettier',
                    'To provide meaning and structure for accessibility and SEO',
                    'To make websites load faster',
                    'To reduce file size'
                ],
                correctAnswer: 'To provide meaning and structure for accessibility and SEO'
            },
            {
                id: 'q5',
                question: 'Write HTML code to create an unordered list with three items: Apple, Banana, Orange',
                type: 'coding',
                code: '<!-- Create an unordered list here -->',
                language: 'html',
                correctAnswer: '<ul>\n<li>Apple</li>\n<li>Banana</li>\n<li>Orange</li>\n</ul>'
            }
        ]
    },
    'lesson-1-1-2': {
        id: 'assignment-1-1-2',
        title: 'CSS Fundamentals Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'Which CSS property is used to change the text color?',
                type: 'mcq',
                options: ['color', 'text-color', 'font-color', 'text-style'],
                correctAnswer: 'color'
            },
            {
                id: 'q2',
                question: 'Write CSS to make all paragraphs have blue text and center alignment',
                type: 'coding',
                code: '/* Write your CSS here */\np {\n  \n}',
                language: 'css',
                correctAnswer: 'p {\n  color: blue;\n  text-align: center;\n}'
            },
            {
                id: 'q3',
                question: 'What does the CSS Box Model consist of?',
                type: 'mcq',
                options: [
                    'Content, Padding, Border, Margin',
                    'Header, Body, Footer, Sidebar',
                    'Width, Height, Color, Font',
                    'Top, Right, Bottom, Left'
                ],
                correctAnswer: 'Content, Padding, Border, Margin'
            },
            {
                id: 'q4',
                question: 'Create a CSS class called "highlight" that gives yellow background and bold text',
                type: 'coding',
                code: '/* Define the highlight class */\n.highlight {\n  \n}',
                language: 'css',
                correctAnswer: '.highlight {\n  background-color: yellow;\n  font-weight: bold;\n}'
            },
            {
                id: 'q5',
                question: 'Which CSS layout method is best for responsive design?',
                type: 'mcq',
                options: ['Flexbox and Grid', 'Tables', 'Floats', 'Absolute positioning'],
                correctAnswer: 'Flexbox and Grid'
            }
        ]
    },
    'lesson-1-2-1': {
        id: 'assignment-1-2-1',
        title: 'JavaScript Variables and Functions Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'Which keyword is used to declare a variable that cannot be reassigned?',
                type: 'mcq',
                options: ['const', 'let', 'var', 'final'],
                correctAnswer: 'const'
            },
            {
                id: 'q2',
                question: 'Write a function called "greet" that takes a name parameter and returns "Hello, [name]!"',
                type: 'coding',
                code: '// Write your function here\nfunction greet(name) {\n  \n}',
                language: 'javascript',
                correctAnswer: 'function greet(name) {\n  return "Hello, " + name + "!";\n}'
            },
            {
                id: 'q3',
                question: 'What is the difference between let and var?',
                type: 'mcq',
                options: [
                    'let has block scope, var has function scope',
                    'let is older than var',
                    'var is more secure than let',
                    'There is no difference'
                ],
                correctAnswer: 'let has block scope, var has function scope'
            },
            {
                id: 'q4',
                question: 'Create a variable called "age" with value 25 and a constant called "PI" with value 3.14159',
                type: 'coding',
                code: '// Declare your variables here\n',
                language: 'javascript',
                correctAnswer: 'let age = 25;\nconst PI = 3.14159;'
            },
            {
                id: 'q5',
                question: 'Which method is used to add an element to the end of an array?',
                type: 'mcq',
                options: ['push()', 'add()', 'append()', 'insert()'],
                correctAnswer: 'push()'
            }
        ]
    },
    'lesson-1-2-2': {
        id: 'assignment-1-2-2',
        title: 'DOM Manipulation Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'What does DOM stand for?',
                type: 'mcq',
                options: [
                    'Document Object Model',
                    'Data Object Management',
                    'Dynamic Object Manipulation',
                    'Document Oriented Markup'
                ],
                correctAnswer: 'Document Object Model'
            },
            {
                id: 'q2',
                question: 'Write JavaScript code to select an element with ID "myButton" and change its text to "Click Me!"',
                type: 'coding',
                code: '// Write your DOM manipulation code here\n',
                language: 'javascript',
                correctAnswer: 'document.getElementById("myButton").textContent = "Click Me!";'
            },
            {
                id: 'q3',
                question: 'Which method is used to select an element by its ID?',
                type: 'mcq',
                options: ['getElementById()', 'querySelector()', 'getElement()', 'selectById()'],
                correctAnswer: 'getElementById()'
            },
            {
                id: 'q4',
                question: 'Create code to add a click event listener to an element with ID "submitBtn" that shows an alert saying "Form submitted!"',
                type: 'coding',
                code: '// Add event listener here\n',
                language: 'javascript',
                correctAnswer: 'document.getElementById("submitBtn").addEventListener("click", function() {\n  alert("Form submitted!");\n});'
            },
            {
                id: 'q5',
                question: 'How do you create a new HTML element using JavaScript?',
                type: 'mcq',
                options: ['createElement()', 'newElement()', 'addElement()', 'makeElement()'],
                correctAnswer: 'createElement()'
            }
        ]
    },
    'lesson-2-1-1': {
        id: 'assignment-2-1-1',
        title: 'React Components and JSX Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'What is JSX?',
                type: 'mcq',
                options: [
                    'JavaScript XML - a syntax extension for JavaScript',
                    'Java Syntax Extension',
                    'JSON XML format',
                    'JavaScript eXtended'
                ],
                correctAnswer: 'JavaScript XML - a syntax extension for JavaScript'
            },
            {
                id: 'q2',
                question: 'Create a simple React functional component called "Welcome" that displays "Welcome to React!"',
                type: 'coding',
                code: '// Write your React component here\nfunction Welcome() {\n  \n}',
                language: 'javascript',
                correctAnswer: 'function Welcome() {\n  return <h1>Welcome to React!</h1>;\n}'
            },
            {
                id: 'q3',
                question: 'How do you create a functional component in React?',
                type: 'mcq',
                options: [
                    'function MyComponent() { return <div></div>; }',
                    'class MyComponent() { return <div></div>; }',
                    'component MyComponent() { return <div></div>; }',
                    'create MyComponent() { return <div></div>; }'
                ],
                correctAnswer: 'function MyComponent() { return <div></div>; }'
            },
            {
                id: 'q4',
                question: 'Write a component that accepts a "name" prop and displays "Hello, [name]!"',
                type: 'coding',
                code: '// Create a component with props\nfunction Greeting(props) {\n  \n}',
                language: 'javascript',
                correctAnswer: 'function Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}'
            },
            {
                id: 'q5',
                question: 'What is the correct way to render a list in React?',
                type: 'mcq',
                options: [
                    'items.map(item => <li key={item.id}>{item.name}</li>)',
                    'items.forEach(item => <li>{item.name}</li>)',
                    'for(item in items) <li>{item.name}</li>',
                    'items.render(item => <li>{item.name}</li>)'
                ],
                correctAnswer: 'items.map(item => <li key={item.id}>{item.name}</li>)'
            }
        ]
    },
    'lesson-2-1-2': {
        id: 'assignment-2-1-2',
        title: 'React State and Props Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'What is the difference between props and state?',
                type: 'mcq',
                options: [
                    'Props are passed from parent, state is internal to component',
                    'Props are mutable, state is immutable',
                    'Props are for styling, state is for data',
                    'There is no difference'
                ],
                correctAnswer: 'Props are passed from parent, state is internal to component'
            },
            {
                id: 'q2',
                question: 'Create a component with state that tracks a counter starting at 0, with a button to increment it',
                type: 'coding',
                code: '// Import useState and create Counter component\nimport { useState } from "react";\n\nfunction Counter() {\n  \n}',
                language: 'javascript',
                correctAnswer: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}'
            },
            {
                id: 'q3',
                question: 'Which hook is used to manage state in functional components?',
                type: 'mcq',
                options: ['useState', 'useEffect', 'useContext', 'useReducer'],
                correctAnswer: 'useState'
            },
            {
                id: 'q4',
                question: 'Write code to update state for a text input field',
                type: 'coding',
                code: '// Complete the input handler\nconst [text, setText] = useState("");\n\nreturn (\n  <input \n    value={text}\n    onChange={}\n  />\n);',
                language: 'javascript',
                correctAnswer: 'const [text, setText] = useState("");\n\nreturn (\n  <input \n    value={text}\n    onChange={(e) => setText(e.target.value)}\n  />\n);'
            },
            {
                id: 'q5',
                question: 'What happens when state changes in React?',
                type: 'mcq',
                options: [
                    'The component re-renders',
                    'The page refreshes',
                    'Nothing happens',
                    'The component unmounts'
                ],
                correctAnswer: 'The component re-renders'
            }
        ]
    },
    'lesson-3-1-1': {
        id: 'assignment-3-1-1',
        title: 'Node.js Fundamentals Quiz',
        type: 'mixed',
        isCompleted: false,
        questions: [{
                id: 'q1',
                question: 'What is Node.js?',
                type: 'mcq',
                options: [
                    'A JavaScript runtime built on Chrome\'s V8 engine',
                    'A JavaScript framework',
                    'A database management system',
                    'A web browser'
                ],
                correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 engine'
            },
            {
                id: 'q2',
                question: 'Create a simple HTTP server that responds with "Hello World" on port 3000',
                type: 'coding',
                code: '// Import http module and create server\nconst http = require("http");\n\n',
                language: 'javascript',
                correctAnswer: 'const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {"Content-Type": "text/plain"});\n  res.end("Hello World");\n});\n\nserver.listen(3000);'
            },
            {
                id: 'q3',
                question: 'What is npm?',
                type: 'mcq',
                options: [
                    'Node Package Manager',
                    'Node Programming Module',
                    'New Programming Method',
                    'Network Protocol Manager'
                ],
                correctAnswer: 'Node Package Manager'
            },
            {
                id: 'q4',
                question: 'Write code to export a function called "add" that takes two numbers and returns their sum',
                type: 'coding',
                code: '// Export the add function\nfunction add(a, b) {\n  return a + b;\n}\n\n',
                language: 'javascript',
                correctAnswer: 'function add(a, b) {\n  return a + b;\n}\n\nmodule.exports = add;'
            },
            {
                id: 'q5',
                question: 'Which file contains project dependencies in Node.js?',
                type: 'mcq',
                options: ['package.json', 'dependencies.json', 'modules.json', 'config.json'],
                correctAnswer: 'package.json'
            }
        ]
    }
};