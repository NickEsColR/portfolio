import RickMortyImage from '../img/projects/rick-morty.png';
import WeatherSearcherImage from '../img/projects/weather-app.png';
import MarvelImage from '../img/projects/marvel-app.png';
import HeroesImage from '../img/projects/heroes-app.png';
import JournalImage from '../img/projects/journal-app.png';
import ACSImage from '../img/projects/acs.png';
import CalendarImage from '../img/projects/calendar-app.png';
import ReactImage from '../svg/react.svg';
import ReactRouterImage from '../svg/react-router.svg';
import CssImage from '../svg/css.svg';
import SassImage from '../svg/sass.svg';
import SemanticImage from '../svg/semantic-ui.svg';
import BootstrapImage from '../svg/bootstrap.svg';
import QueryStringImage from '../svg/query.svg';
import ReduxImage from '../svg/redux.svg';
import FirebaseImage from '../svg/firebase.svg';
import NodeImage from '../svg/node.svg';
import ExpressImage from '../svg/express.svg';
import MongoImage from '../svg/mongo.svg';

export const projectsPortfolio = [
    {
        title: "Weather Searcher",
        image: WeatherSearcherImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "CSS", src: CssImage},
        ],
        description: "This is a project that I made with React, it's a weather searcher that uses the OpenWeather API to get the weather of a city.",
        repository: "https://github.com/NickEsColR/AppClima-API-JavaScript",
        website: "https://weather-searcher-nickescolr.netlify.app"
    },
    {
        title: "Rick & Morty Wiki",
        image: RickMortyImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "React Router", src: ReactRouterImage},
            {name: "CSS", src: CssImage},
        ],
        description: "This is a project that I made with React, it's a wiki of Rick & Morty characters, locations and episodes.",
        repository: "https://github.com/NickEsColR/rick-morty",
        website: "https://rick-morty-wiki-nickescolr.netlify.app"
    },
    {
        title: "Marvel App",
        image: MarvelImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "React Router", src: ReactRouterImage},
            {name: "Sass", src: SassImage},
            {name: "Semantic", src: SemanticImage},
        ],
        description: "This is a project that I made with React, to make a request of the Marvel API",
        repository: "https://github.com/NickEsColR/marvel-api-web",
        website: "https://marvel-app-nickescolr.netlify.app/inicio"
    },
    {
        title: "Heroes App",
        image: HeroesImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "React Router", src: ReactRouterImage},
            {name: "Bootstrap", src: BootstrapImage},
            {name: "QueryString", src: QueryStringImage},
        ],
        description: "This is a project that I made with React, it's a wiki of superheroes of marvel and DC.",
        repository: "https://github.com/NickEsColR/heroes-spa",
        website: "https://heroes-spa-nickescolr.netlify.app/marvel"
    },
    {
        title: "Journal App",
        image: JournalImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "React Router", src: ReactRouterImage},
            {name: "Redux", src: ReduxImage}, 
            {name: "Bootstrap", src: BootstrapImage},
            {name: "Firebase", src: FirebaseImage},
        ],
        description: "This is a project that I made with React, it's a web to write your thoughts and save them in the cloud.",
        repository: "https://github.com/NickEsColR/journal-app",
        website: "https://journal-app-nickescolr.netlify.app"
    },
    {
        title: "Article Chat",
        image: ACSImage, 
        techs: [
            {name: "React",src: ReactImage},
            {name: "Redux", src: ReduxImage}, 
            {name: "Bootstrap", src: BootstrapImage},
            {name: "Node", src: NodeImage}, 
            {name: "Express", src: ExpressImage}, 
            {name: "Mongo", src: MongoImage},
        ],
        description: "This is a project that I made with React, it's a web to submit an article url, get a summary and ask questions about it.",
        repository: "https://github.com/NickEsColR/article-chat-summary-frontend",
        demo: "https://www.youtube.com/watch?v=AeZqhDCP-g0"
    },
    {
        title: "Calendar app",
        image: CalendarImage,
        techs: [
            {name: "React",src: ReactImage},
            {name: "React Router", src: ReactRouterImage},
            {name: "Redux", src: ReduxImage},
            {name: "Bootstrap", src: BootstrapImage},
            {name: "Node", src: NodeImage},
            {name: "Express", src: ExpressImage}, 
            {name: "Mongo", src: MongoImage},
        ],
        description: "This is a project that I made with React, it's a web share events in a calendar.",
        repository: "https://github.com/NickEsColR/calendar",
        demo: "https://www.youtube.com/watch?v=Ix109UtBtL0"
    },
]