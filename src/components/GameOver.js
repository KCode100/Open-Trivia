import Button from '@mui/material/Button';
import { useState } from 'react';
import CountUp from 'react-countup';

const GameOver = ({ score, length, reset }) => {
    const percentage = (score / length) * 100
    const [displayCelebration, setDisplayCelebration] = useState(false)

    return (
        <div className="game-over">
            {displayCelebration &&
                <div class="pyro">
                    <div class="before"></div>
                    <div class="after"></div>
                </div>
            }
            <CountUp start={0} end={percentage} delay={0} onEnd={() => setDisplayCelebration(true)}>
                {({ countUpRef }) => (
                    <div className='score'>
                        <span ref={countUpRef} /><span>%</span>
                    </div>
                )}
            </CountUp>
            <Button variant="outlined" size="large" onClick={reset}>Play again</Button>
        </div >
    );
}

export default GameOver;