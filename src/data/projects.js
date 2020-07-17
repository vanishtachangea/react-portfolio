import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import tetris from '../assets/tetris.png';
const PROJECTS = [
    {
        id: 1,
        title: "Travel Blog",
        description: 'My First React Application developed in 2018',
        link: "http://enrichingtravels.com/",
        GitHub: "Private Repo",
        image: project1
    },

    {
        id: 2,
        title: "Guess Odd or Even Game",
        description: 'Application built in Redux in 2020',
        link: "/evenoddgame",
        image: project2
    },
	{
        id: 3,
        title: "Tetris Game",
        description: 'Tetris Game -  React and Custom Hooks in 2020',
        link: "http://react-tetrisgame.s3-website-us-east-1.amazonaws.com/",
        image: tetris		
		
		
	}
/*     ,
    {
        id: 3,
        title: "Interactive tic-tac-toe game",
        description: 'React Application built in 2020  - In Progress',
        link: "https://github.com/vanishtachangea/react-portfolio",
        image: project3
    },
    {
        id: 3,
        title: "Musical",
        description: 'App build using React in 2020  - In Progress',
        link: "https://github.com/vanishtachangea/react-portfolio",
        image: project4
    } */
];
export default PROJECTS;