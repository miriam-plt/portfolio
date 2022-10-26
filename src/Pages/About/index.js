import './index.scss';
import Navbar from '../../components/Navbar';

const About = () => {
    return <div>
        <Navbar />
        <div className='about-info'>
            <p>Miriam Poletti (b. 1991, pronouns she/they) lives and works in Berlin, Germany.</p>
            <p>Her artistic practice is interdisciplinary and includes photography, sculpture, video and creative writing. 
            Their work seeks to question notions of tenderness, fragility and sociality on both a communal and individual level, 
            serving as an embodied methodology to create new models of social interaction. </p>
            <p>The notion of trauma plays a generative and creative role in her production. 
            The body, investigated in its minimal alterations, is soft, weak, porous and easily shaped or even bruised by the proximity of the others. 
            The audience is invited to interact physically and viscerally with the works, squeezing or gently touching them, leaving their temporary 
            imprint on them, drinking and consuming them, wearing them, making them their own. 
            The skin becomes a site of possibility in which the nature of the encounter is established through the performative process of touching.</p>
        </div>
    </div>
}

export default About;