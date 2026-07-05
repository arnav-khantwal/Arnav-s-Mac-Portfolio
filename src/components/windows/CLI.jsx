import React from 'react';
import MacWindow from './MacWindow';
import TerminalModule from 'react-console-emulator';
import './cli.scss';
const ReactTerminal = TerminalModule.default;


const CLI = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `Hi, I'm Arnav Khantwal.

I'm currently pursuing MCA and I enjoy building full-stack web applications, AI-powered tools, and solving DSA problems.

My current focus is software engineering placements, AI projects, and improving my problem-solving skills.`
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Languages: C++, Java, Python, JavaScript, SQL
Frontend: React, TypeScript, Tailwind CSS, HTML/CSS
Backend: Node.js, Express.js
AI Tools: Gemini API, AI Agents, Prompt Engineering
Tools: Git, GitHub, VS Code, Figma, Canva`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. HireReady - AI Placement Coach
2. Open Source Mentor AI - AI mentor for GitHub repositories
3. AI Memory Game - Voice-powered memory training game
4. Editorial Club Newsletter - Themed newsletter designs
5. DSA Practice - Algorithm problem solving`
        },
        experience: {
            description: 'Display experience',
            usage: 'experience',
            fn: () => `IT Club Coordinator
  - Organized technical activities
  - Helped with coding and IT events

Head of Design Team - Editorial Club
  - Designed monthly department newsletters
  - Created layouts, themes and visual assets

Hackathon & Project Work
  - Built AI and full-stack projects
  - Worked with React, Express, GitHub APIs and Gemini`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: arnav.khantwal.ofc@gmail.com
Location: India
Status: Open to internships and software development opportunities`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/arnav-khantwal', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: github.com/arnav-khantwal
LinkedIn: Add your LinkedIn URL here
Email: arnav.khantwal.ofc@gmail.com`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║      Welcome to Arnav's Portfolio CLI  ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio.

I'm Arnav Khantwal — an MCA student passionate about
Full-Stack Development, AI Projects, DSA, and UI Design.

Type 'help' to see all available commands, or try:
  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Check out my work
  • experience - See my experience
  • contact    - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'arnavKhantwal:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}

                />
            </div>
        </MacWindow>
    )
}

export default CLI;