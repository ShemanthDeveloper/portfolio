import { useEffect,useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./skills.css"
const Skills=()=>{

    const [html, setHtml] = useState(0);
    const [css, setcss] = useState(0);
    const [bootstrap, setbootstrap] = useState(0);
    const [js, setjs] = useState(0);
    const [react, setreact] = useState(0);
    const [node, setnode] = useState(0);
    const [express, setexpress] = useState(0);
    const [sql, setsql] = useState(0);
    const [git, setgit] = useState(0);
    const [python, setpython] = useState(0);

    

    useEffect(() => {
        setTimeout(() => {
            setHtml(90)
            setcss(80)
            setbootstrap(85)
            setjs(75)
            setreact(90)
            setnode(60)
            setexpress(70)
            setsql(85)
            setgit(80)
            setpython(70)

        }, 1000);
    }, [html]);


    const progressBarStyles = buildStyles({
        textColor: '#3f6b94f4', // Change the text color if needed
        pathColor: '#3f6b94d4', // Change the path color
        trailColor: '#efeaf4', // Change the trail color
        strokeWidth: 4,
      });
      
    return(
        <div id="skills" className="skills-container">
            <h3 className='skills-heading'>My Skills</h3>
            <div className="skills-box-container">
                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={html} text={`${html}%`} />
                <h3 className='skill-name'>HTML</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={css} text={`${css}%`} />
                <h3 className='skill-name'>CSS</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={bootstrap} text={`${bootstrap}%`} />
                <h3 className='skill-name'>BOOTSTRAP</h3>
                </div>


                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={js} text={`${js}%`} />
                <h3 className='skill-name'>JAVASCRIPT</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={react} text={`${react}%`} />
                <h3 className='skill-name'>REACT JS</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={node} text={`${node}%`} />
                <h3 className='skill-name'>NODE JS</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={express} text={`${express}%`} />
                <h3 className='skill-name'>EXPRESS JS</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={sql} text={`${sql}%`} />
                <h3 className='skill-name'>SQL</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={git} text={`${git}%`} />
                <h3 className='skill-name'>GIT</h3>
                </div>

                <div className="skill-box">
                <CircularProgressbar styles={progressBarStyles} className='bar' value={python} text={`${python}%`} color="red" />
                <h3 className='skill-name'>PYTHON</h3>
                </div>

                

                



            </div>
        </div>
    )
}

export default Skills