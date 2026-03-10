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
                    <h6>Their artistic practice includes photography, textile sculpture, video, and creative writing. 
                    Their work explores the concept of softness as a way of creating community, and is heavily influenced by their interactions with the people they collaborate with. The creative process itself serves as a methodology for generating new models of social relations: through collaborations and workshops, the artworks are the result of a collective effort, challenging the idea of authorship and encouraging a sense of shared ownership. </h6>
                    <h6> 
                    The softness of the bodies inhabiting the workshop spaces is reflected in the artworks, where skin becomes a place of potential encounter. Touch is not forbidden, but actively encouraged. Visitors are invited to physically interact with the artworks, hugging, squeezing or gently touching them, leaving their temporary imprint on them. By activating the works with their own bodies, viewers abandon their role as passive consumers and become an integral part of the artworks themselves.</h6>
                    
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
                    <p><b>2026</b> <i>Songs of Uprising</i>, Pandora Gallery, Berlin, Germany</p>
                    <p><b>2025</b> <i>When the body is queer, I feel free</i>, GlogauAIR, Berlin, Germany</p>
                    <p><b>2025</b> <i>.linkinglives//.</i>, Bardo Projektraum, Berlin, Germany</p>
                    <p><b>2025</b> <i>Berlinale</i>, Galeria Azur, Berlin, Germany</p>
                    <p><b>2025</b> <i>AlterNative</i>, 90mil, Berlin, Germany</p>
                    <p><b>2024</b> <i>A Thousand Gestures</i>, GlogauAIR, Berlin, Germany</p>
                    <p><b>2023</b> <i>Objects of Care</i>, Backhaus Projects, Berlin, Germany</p>
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

                    <h5 className='cv-category-title'>Workshops & Talks</h5>
                    <p><b>2026</b> <i>Who Do We Leave Behind When We Come Together?</i>, January 2026, Das Gift, Berlin, Germany</p>
                    <p><b>2025</b> <i>Talk: Sustaining Creative Resistance</i>, part of "Activism Futures: Reimagining Human Rights Activism", November 2025, Kairos, London</p>
                    <p><b>2025</b> <i>Podcast: Artistic Denunciation and New Ways of Doing Human Rights</i>, November 2025, “Rights in Dialogue: Voices in Art and Activism”</p>
                    <p><b>2025</b> <i>Gear Up: Making a kit for protest</i>, September 2025, Leila, Milan, Italy</p>
                    <p><b>2025</b> <i>Gear Up: Making a kit for protest</i>, w/ Jona Wolf & abstraqt, April-May 2025, 90mil, Berlin, Germany</p>
                    <p><b>2025</b> <i>A Thousand Gestures: Sewing Circle</i>, January 2025, Bardo Projektraum, Berlin, Germany</p>
                    <p><b>2025</b> <i>Stitching Closeness: Sewing Circle</i>, January 2025, Overflow, Berlin, Germany</p>
                    <p><b>2024</b> <i>Stitching Closeness: Sewing Circle</i>, May 2024, Overflow, Berlin, Germany</p>
                    <p><b>2024</b> <i>A Thousand Gestures: Sewing Circles</i>, January-March 2024, GlogauAIR, Berlin, Germany</p>
                    <p><b>2023</b> <i>Nest: Sewing Circle</i>, November 2023, Backhaus Projects, Berlin, Germany</p>
                    <p><b>2023</b> <i>Shoulder to Shoulder: Sewing Circle</i>, June 2023, Töölö library, Helsinki, Finland</p>
                    
                <img className='arrow' src={arrowDown} alt='arrow' onClick={handleClick2} />
            </div>}


            {grantsShown && <div className='cv-section grants'>
                <h5 className='cv-category-title'>Grants & Residencies</h5>
                    <p><b>2025</b> Art Rights Truth  Project Grant, funded by Amnesty International and the Arts and Humanities Research Council at the University of York, UK</p>
                    <p><b>2024</b> Berlin Guest Prize promoted by Memoria Artística Chema Alvargonzalez, GlogauAIR, Berlin, Germany</p>
                    <p><b>2023</b> Artist Residency, funded by the European Union and implemented by the Goethe-Institut, Myymälä2, Helsinki, Finland</p>
                    <p><b>2022</b> Research Residency, DeStructura, multidimensional pan-European initiative, co-funded by the European Union, Tallinn and Narva, Estonia</p>
                    <p><b>2016</b> Nomination Ricas Award, Milan, Italy</p>
                    <p><b>2015</b> Lombardi Croci Foundation study scholarship for Fine Arts</p>
                    <p><b>2013</b> Nomination Bruno Starita Award, Naples, Italy</p>
     
                <h5 className='cv-category-title'>Press</h5>
                    <p><b>2025</b> <i>‘Linking Lives interview with the artist: Miriam Poletti‘</i>, Karne Kunst, February 2025 <a href="https://www.karnekunst.com/linking-lives-exhibition-interview-with-the-artist-miriam-poletti/" target="_blank" rel="noreferrer" className='a-link'> [LINK] </a> </p>
                    <p><b>2018</b> <i>‘Patatas Guerra‘</i>, Earth Sciences, April 2018 <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer" className='a-link'> [LINK] </a> </p>
                    <p><b>2018</b> <i>‘It's My Pleasure‘</i>, Artburst Berlin, April 2018, exhibition catalogue <a href="https://artburstberlin.de/onewebmedia/Ausstellungen%20und%20Events/It's%20My%20Pleasure%202018/Dokumentation_Its%20My%20Pleasure_Website.pdf" target="_blank" rel="noreferrer" className='a-link'> [LINK] </a> </p>

                <h5 className='cv-category-title'>Publications as author</h5>
                    <p><b>2023</b><i>‘Confronting Monuments and their Heritage‘</i>, Reimagine Your City, SHIFT BOOKS </p>
                    <p><b>2021</b><i>‘To Inhabit or To Fill Oneself‘</i>, SOFT EIS Issue 02: Identity, Berlin, Germany </p>
                    <p><b>2018</b><i>‘Lonely Girl Phenomenology‘</i>, Love & Politics, Freigeist Verlag, Berlin, Germany </p>
            
                <h5 className='cv-category-title'>Collaborative projects</h5>
                    <p><b>2025</b> <i>Gear Up!</i>, Workshop series and zines, 90mil, Berlin, Germany</p>
                    <p><b>2023</b> <i>Screens*Scream*Sex - Public Rehearsal</i>, Fondation Beyeler, Riehen, Switzerland</p>
                    <p><b>2023</b> <i>Screens*Scream*Sex - On Pleasure</i>, Zentralwäscherei, Zürich, Switzerland</p>
                    <p><b>2023</b> <i>Screens*Scream*Sex - Lecture Performance</i>, Kunstverein Freiburg, Germany</p>
                    <p><b>2023</b> <i>On The Brief All Encompassing Loss of Self</i>, film <a href="https://vimeo.com/841630995" target="_blank" rel="noreferrer" className='a-link'> [LINK] </a> </p>
                    <p><b>2018</b> <i>Patatas Guerra</i>, nomadic exhibition series <a href="https://sciences.earth/patatas-guerra/" target="_blank" rel="noreferrer" className='a-link'> [LINK] </a> </p>

                <img className='arrow' src={arrowTop} alt='arrow' onClick={handleClick3} />
            </div>}

        </div>
    </div>
)}

export default About;