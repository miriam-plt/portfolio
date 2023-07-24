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
                <h5 className='cv-name'>Miriam Poletti</h5>
                <div className='about'>
                    <h6>Miriam Poletti (she/they) lives and works in Berlin, Germany.</h6>
                    <br />
                    <h6>Her art practice is interdisciplinary and includes photography, sculpture, video and creative writing. 
                    Their work seeks to question notions of tenderness, fragility and sociality on both a communal and individual level, 
                    serving as an embodied methodology to create new models of social interaction. </h6>
                    <h6> 
                    The body, investigated in its minimal alterations, is soft, weak, porous and easily shaped or even bruised by the proximity of the others. 
                    The audience is invited to interact physically and viscerally with the works, squeezing or gently touching them, leaving their temporary 
                    imprint on them, drinking and consuming them, wearing them, making them their own. 
                    The skin becomes a site of possibility in which the nature of the encounter is established through the performative process of touching.</h6>
                    <br />
                    <br />
                    
                </div>

                <h5 className='cv-category-title'>Education</h5>
                    <p><b>2021</b> Utrecht University, Netherland, Advanced Master Course, The Posthuman & New Materialism, Class of Rosi Braidotti</p>
                    <p><b>2016</b> Brera Academy of Fine Arts, Milan, Italy, Master of Fine Arts</p>
                    <p><b>2015</b> EA Murcia School of Art, Murcia, Spain, Graphic Art and Photography Department</p>
                    <p><b>2013</b> Brera Academy of Fine Arts, Milan, Italy, Bachelor of Fine Arts</p>

                <img className='arrow' src={arrowDown} alt='arrow' onClick={handleClick1} />
            </div>}


            {exhibitionsShown && <div className='cv-section exhibitions'>
                <h5 className='cv-category-title'>Selected Exhibitions and Screenings</h5>
                    <p><b>2023</b> <i>Unveiling Structures</i>, Kogo Gallery, Tartu, Estonia </p>
                    <p><b>2023</b> <i>On the Texture of Feelings</i>, Myymälä2, Helsinki, Finland</p>
                    <p><b>2020</b> <i>Lichtblick</i>, Kunsthalle am Hamburger Platz, Berlin, Germany</p>
                    <p><b>2020</b> <i>What is Fear?</i>, Hošek Contemporary, Berlin, Germany</p>
                    <p><b>2020</b> <i>What is Fear?</i>, virtual exhibition and short film festival, Thessaloniki Queer Art Festival, Thessaloniki, Greece</p>
                    <p><b>2019</b> <i>Un/real Desires</i>, SomoS Art House, Berlin, Germany</p>
                    <p><b>2018</b> <i>Gut Feelings</i>, Centrala, Birmingham, UK</p>
                    <p><b>2018</b> <i>Collection Croisière, Nouvelle Collection Paris</i>, MO.CO. La Panacée, Montpellier, France</p>
                    <p><b>2018</b> <i>It's My Pleasure</i>, Artburst Berlin, OKK Organ kritischer Kunst, Berlin, Germany</p>
                    <p><b>2018</b> <i>Love & Politics</i>, Chaosmos, Athens, Greece</p>
                    <p><b>2018</b> <i>Endangered Bodies</i>, School of Art and Humanities, FLUL, Lisbon, Portugal</p>
                    <p><b>2018</b> <i>Queertech.io = ART (URL, IRL)</i>, ACMI, Australian Centre for the Moving Image, Melbourne, Australia</p>
                    <p><b>2017</b> <i>Techne Space</i>, virtual exhibition, The Wrong, New Digital Art Biennale</p>
                    <p><b>2017</b> <i>There Are No Girls on The Internet</i>, virtual exhition, Localhost Gallery, Minecraft 1.12.2</p>
                    <p><b>2017</b> <i>Mutual Feelings 2: VR Cybertwee HQ</i>, The Alibi, London, UK</p>
                    <p><b>2017</b> <i>your / body ////// as / a / torchlight /</i>, E/laboratory, Paris, France</p>
                    <p><b>2017</b> <i>Queertech.io = ART (URL, IRL)</i>, BLINDSIDE's PLAY2, Federation Square Big Screen, Melbourne, Australia</p>
                    <p><b>2017</b> <i>High Sugar // Heavy Metals</i>, Palazzo Pascoli, Pavia, Italy</p>
                    <p><b>2016</b> <i>Cybertwee Virtual Headquarters</i>, virtual exhibition, Cybertwee HQ App</p>
                    <p><b>2016</b> <i>Sguardi sulla pietra</i>, Tones on the Stones, Historic Quarry of Croppo of Trontano, VCO, Italy</p>
                    <p><b>2016</b> <i>Accademia Aperta</i>, Brera Academy of Fine Arts, Milan, Italy</p>
                    <p><b>2016</b> <i>Era pacifica pare</i>, Ricas Award, Careof, Milan, Italy</p>
                    <p><b>2015</b> <i>Salon</i>, University of Milano Bicocca, Milan, Italy</p>
                    
                <img className='arrow' src={arrowDown} alt='arrow' onClick={handleClick2} />
            </div>}


            {grantsShown && <div className='cv-section grants'>
                <h5 className='cv-category-title'>Grants & Residencies</h5>
                    <p><b>2023</b> Artist Residency, funded by the European Union and implemented by the Goethe-Institut, Myymälä2, Helsinki, Finland</p>
                    <p><b>2022</b> Research Residency, DeStructura, multidimensional pan-European initiative, co-funded by the European Union, Tallinn and Narva, Estonia</p>
                    <p><b>2016</b> Nomination Ricas Award, Milan, Italy</p>
                    <p><b>2015</b> Lombardi Croci Foundation study scholarship for Fine Arts</p>
                    <p><b>2013</b> Nomination Bruno Starita Award, Naples, Italy</p>
     
                <h5 className='cv-category-title'>Press</h5>
                    <p><b>2019</b> <i>‘When Art, Fashion and Performance Collide‘</i>, Metal Magazine, January 2019 <a href="https://metalmagazine.eu/en/post/interview/sarah-nefissa-belhadjali-when-art-fashion-and-performance-collide" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> <i>‘Patatas Guerra‘</i>, Earth Sciences, April 2018 <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> <i>‘It's My Pleasure‘</i>, Artburst Berlin, April 2018, exhibition catalogue <a href="https://artburstberlin.de/onewebmedia/Ausstellungen%20und%20Events/It's%20My%20Pleasure%202018/Dokumentation_Its%20My%20Pleasure_Website.pdf" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b> <i>‘e-stranged love‘</i>, Jackie Liu (ed.), February 2018 <a href="https://estrangedlove.neocities.org/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2014</b> <i>‘Girls Get Busy, Feminist Art and Writing‘</i>, Issue n. 23, November 2014 <a href="https://issuu.com/ggbzine/docs/ggb23" target="_blank" rel="noreferrer"> [LINK] </a> </p>

                <h5 className='cv-category-title'>Publications as author</h5>
                    <p><b>2023</b> <strong>upcoming</strong> Reclaim Your City, SHIFT BOOKS </p>
                    <p><b>2021</b><i>‘To Inhabit or To Fill Oneself‘</i>, SOFT EIS Issue 02: Identity, Berlin, Germany <a href="https://softeismagazine.com/shop/issue02/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
                    <p><b>2018</b><i>‘Lonely Girl Phenomenology‘</i>, Love & Politics, Freigeist Verlag, Berlin, Germany <a href="http://freigeist-verlag.net/buecher/love-politics/" target="_blank" rel="noreferrer"> [LINK] </a> </p>
            
                <h5 className='cv-category-title'>Collaborative projects</h5>
                    <p><b>2023</b> <i>Screens*Scream*Sex - Public Rehearsal</i>, Fondation Beyeler, Riehen, Switzerland</p>
                    <p><b>2023</b> <i>Screens*Scream*Sex - On Pleasure</i>, Zentralwäscherei, Zürich, Switzerland</p>
                    <p><b>2023</b> <i>Screens*Scream*Sex - Lecture Performance</i>, Kunstverein Freiburg, Germany</p>
                    <p><b>2021</b> SOFT EIS Presse, special limited edition cover for Issue 02, Berlin, Germany</p>
                    <p><b>2018</b> <i>Patatas Guerra</i>, nomadic exhibition series <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer"> [LINK] </a> </p>

                <img className='arrow' src={arrowTop} alt='arrow' onClick={handleClick3} />
            </div>}

        </div>
    </div>
)}

export default About;