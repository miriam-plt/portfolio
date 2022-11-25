import './index.scss';
import {useState} from 'react';
import Navbar from '../../components/Navbar';
import arrowDown from '../../images/arrow_circle_down.png';
import arrowTop from '../../images/arrow-back-top.png';

const About = () => {
    const [eduShown, setEduShown] = useState(true);
    const [exhibitionsShown, setExhibitionsShown] = useState(false);
    const [grantsShown, setGrantsShown] = useState(false);

    const handleClick1 = e => {
        setEduShown(current => !current);
        setExhibitionsShown(current => !current);
        window.scrollTo(0,0);
    };

    const handleClick2 = e => {
        setExhibitionsShown(current => !current);
        setGrantsShown(current => !current);
        window.scrollTo(0,0);
    };

    const handleClick3 = e => {
        setGrantsShown(current => !current);
        setEduShown(current => !current);
        window.scrollTo(0,0);
    };

    return (
    <div>
     {window.scrollTo(0,0)}
        <Navbar />

        <div className='cv'>

            {eduShown && <div className='cv-section education'>  
                <h5>Miriam Poletti</h5>
                <div className='about'>
                    <h6>Miriam Poletti (she/they) lives and works in Berlin, Germany.</h6>
                    <br />
                    <h6>Her artistic practice is interdisciplinary and includes photography, sculpture, video and creative writing. 
                    Their work seeks to question notions of tenderness, fragility and sociality on both a communal and individual level, 
                    serving as an embodied methodology to create new models of social interaction. </h6>
                    <h6>The notion of trauma plays a generative and creative role in her production. 
                    The body, investigated in its minimal alterations, is soft, weak, porous and easily shaped or even bruised by the proximity of the others. 
                    The audience is invited to interact physically and viscerally with the works, squeezing or gently touching them, leaving their temporary 
                    imprint on them, drinking and consuming them, wearing them, making them their own. 
                    The skin becomes a site of possibility in which the nature of the encounter is established through the performative process of touching.</h6>
                    <br />
                    <h6>Miriam is an organizing member of <a href="https://estrangedlove.neocities.org/" target="_blank" rel="noreferrer"> DARE TO CARE</a>.</h6>
                    <br />
                    <h6>Email: <a href="mailto:polettimiriam@gmail.com" target="_blank" rel="noreferrer"> polettimiriam@gmail.com </a> </h6>
                    <h6 className='ig-link'>Instagram: <a href="https://www.instagram.com/miriamakaib/" target="_blank" rel="noreferrer"> @miriamakaib </a> </h6>
                    <br />
                </div>

                <h5>Education</h5>
                    <p><b>2021</b> Advanced Master Course, The Posthuman & New Materialism, Class of Rosi Braidotti, Utrecht University, Netherland</p>
                    <p><b>2016</b> Master of Fine Arts (with honors), Brera Academy, Milan, Italy</p>
                    <p><b>2015</b> Erasmus Exchange Semester, Graphic and Photography Department, EA Murcia School of Art, Murcia, Spain</p>
                    <p><b>2013</b> Bachelor of Fine Arts (with honors), Brera Academy, Milan, Italy</p>

                <img className='arrow' src={arrowDown} alt='arrow' onClick={handleClick1} />
            </div>}


            {exhibitionsShown && <div className='cv-section exhibitions'>
                <h5>Selected Exhibitions</h5>
                    <p><b>2020</b> <i>Lichtblick</i>, Kunsthalle am Hamburger Platz, Berlin, Germany</p>
                    <p><b>2020</b> <i>What is Fear?</i>, Thessaloniki Queer Art Festival, Thessaloniki, Greece</p>
                    <p><b>2018</b> <i>Gut Feelings</i>, Centrala, Birmingham, UK</p>
                    <p><b>2018</b> <i>Collection Croisière, Nouvelle Collection Paris</i>, La Panacée, Montpellier, France</p>
                    <p><b>2018</b> <i>It's My Pleasure</i>, Artburst Berlin, OKK Organ kritischer Kunst, Berlin, Germany</p>
                    <p><b>2018</b> <i>Touch</i>, online exhibition, Thinking Flesh, Feminist Art Platform</p>
                    <p><b>2020</b> <i>QueerTech.io = ART (URL,IRL)</i>, online exhibition, Melbourne, Australia</p>
                    <p><b>2017</b> <i>Techne Space</i>, online exhibition, The Wrong, New Digital Art Biennale</p>
                    <p><b>2017</b> <i>There Are No Girls on The Internet</i>, online exhition, Localhost Gallery, Minecraft 1.12.2</p>
                    <p><b>2017</b> <i>Mutual Feelings 2: VR Cybertwee HQ</i>, The Alibi, London, UK</p>
                    <p><b>2017</b> <i>your / body ////// as / a / torchlight /</i>, E/laboratory, Paris, France</p>
                    <p><b>2017</b> <i>QueerTech.io = ART (URL, IRL)</i>, online exhibition, Melbourne, Australia</p>
                    <p><b>2017</b> <i>High Sugar // Heavy Metals</i>, Palazzo Pascoli, Pavia, Italy</p>
                    <p><b>2016</b> <i>Cybertwee Virtual Headquarters</i>, online exhibition, Cybertwee HQ App</p>
                    <p><b>2016</b> <i>Sguardi sulla pietra</i>, Tones on the Stones, Historic Quarry of Croppo of Trontano, VCO, Italy</p>
                    <p><b>2016</b> <i>Accademia Aperta</i>, Brera Academy of Fine Arts, Milan, Italy</p>
                    <p><b>2016</b> <i>Era pacifica pare</i>, Ricas Award, Careof, Milan, Italy</p>
                    <p><b>2015</b> <i>Salon</i>, University of Milano Bicocca, Milan, Italy</p>
            
                <h5>Video screenings, performances & artist talks</h5>
                    <p><b>2022</b> SCREENING <i>De Structura AR Art Evening</i>, Ukraina väljak, Lembitu park, Tallinn, Estonia</p>
                    <p><b>2020</b> SCREENING <i>What is Fear?</i>, Hošek Contemporary, Berlin, Germany</p>
                    <p><b>2019</b> PERFORMANCE <i>“We Should Fear Thirst”, Un/real Desires</i>, SomoS Art House, Berlin, Germany</p>
                    <p><b>2018</b> SCREENING <i>Love & Politics Public Programme</i>, Chaosmos_/ 79Au, Athens, Greece</p>
                    <p><b>2018</b> TALK <i>Endangered Bodies: Representing and Policing the Body in Western Culture</i>, School of Art and Humanities, FLUL, Lisbon, Portugal</p>
                    <p><b>2018</b> SCREENING <i>Queertech.io = ART (URL, IRL)</i>, ACMI, Australian Centre for the Moving Image, Melbourne, Australia</p>
                    <p><b>2018</b> SCREENING <i>There Are No Girls On The Internet / Localhost Gallery</i>, Now Play This Festival, London, UK</p>
                    <p><b>2017</b> SCREENING <i>Queertech.io = ART (URL, IRL)</i>, BLINDSIDE's PLAY2, Federation Square Big Screen, Melbourne, Australia</p>

                <img className='arrow' src={arrowDown} alt='arrow' onClick={handleClick2} />
            </div>}


            {grantsShown && <div className='cv-section grants'>
                <h5>Grants, awards & residencies</h5>
                    <p><b>2022</b> RESEARCH RESIDENCY De Structura, Tallinn, Estonia</p>
                    <p><b>2016</b> AWARD Nomination Ricas Award, Milano</p>
                    <p><b>2015</b> SCHOLARSHIP Lombardi Croci Foundation study scholarship for Fine Arts</p>
                    <p><b>2013</b> AWARD Nomination Bruno Starita Award, Naples</p>
    
                <h5>Publications as author</h5>
                    <p><b>2021</b><i>“To Inhabit or To Fill Oneself”</i>, SOFT EIS Issue 02: Identity, Liselotte Dossenbach and Maïté Moloney (eds.), Berlin, 2021, pp. 287-288 <a href="https://softeismagazine.com/shop/issue02/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b><i>“Lonely Girl Phenomenology”</i>, Love & Politics, Evgenia Giannopoulou and Hannes Schumacher (eds.), Freigeist Verlag Berlin, 2018, pp. 40-46 <a href="http://freigeist-verlag.net/buecher/love-politics/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    
                <h5>Press and publications</h5>
                    <p><b>2022</b> Mini Interview with Damaris Athene, Private View, May 2022 <a href="https://www.instagram.com/p/Cc5CShIoIOX/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2019</b> Irene Ramón, <i>“When Art, Fashion and Performance Collide”</i>, Metal Magazine, January 2019 <a href="https://metalmagazine.eu/en/post/interview/sarah-nefissa-belhadjali-when-art-fashion-and-performance-collide" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> Exclusive Feature, <i>“Patatas Guerra”</i>, Earth Sciences, April 2018 <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> Artburst Berlin (ed.), <i>“It's My Pleasure”</i>, April 2018, exhibition catalogue</p>
                    <p><b>2018</b> Jackie Liu (eds.), <i>“e-stranged love”</i>, February 2018 <a href="https://estrangedlove.neocities.org/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2015</b> Brera Academy, <i>“Salon 2015, Giovani artisti dell'Accademia di Brera Milano”</i>, April 2015, exhibition catalogue</p>
                    <p><b>2014</b> Beth Siveyer (ed.), <i>“Girls Get Busy, Feminist Art and Writing”</i>, Issue n. 23, November 2014 <a href="https://issuu.com/ggbzine/docs/ggb23" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2014</b> Giovanna Cassese and Erminia Mitrano (eds.), <i>“Prima Biennale di incisione, Premio Bruno Starita”</i>, January 2014, exhibition catalogue</p>

                <h5>Collaborative projects</h5>
                    <p><b>2021</b> SOFT EIS Presse, special limited edition cover for Issue 02, Berlin</p>
                    <p><b>2020</b> <i>Patatas Guerra s02</i>, nomadic exhibition series, Madrid, Berlin, Carrara <a href="https://www.patatasguerra.com/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> <i>Patatas Guerra</i>, nomadic exhibition series, Milan, London, Venice, Dublin <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer"> [LINK] </a> </p>

                <h5>Web development</h5>
                    <p><b>2022</b> <i>miriampoletti.com</i> Personal portfolio website</p>
                    <p><b>2022</b> <i>daretocare-art.com</i> Dare to Care art collective website <a href="https://www.patatasguerra.com/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    
                <img className='arrow' src={arrowTop} alt='arrow' onClick={handleClick3} />
            </div>}

        </div>
    </div>
)}

export default About;