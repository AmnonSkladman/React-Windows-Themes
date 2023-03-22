import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, win98 } from './themerSlice'
import styles from './Themer.module.scss'

export default function Themer() {
    const theme = useSelector(state => state.themer.value)
    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    const win11audio = require("./audio/win11.mp3");
    const win98audio = require("./audio/win98.mp3");

    React.useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);    

    return(
        <div id="themer">
            <div>
                <div className={styles.buttonContainer}>
                    <button
                        aria-label="Reset Theme"
                        disabled={disabled}
                        onClick={() => {
                            dispatch(reset());
                            document.getElementById("audio11").play();
                            setDisabled(true);
                            setTimer(7);
                            setTimeout(() => setDisabled(false), 7000);
                        }}
                    >
                        Reset Theme
                    </button>

                    <button
                        aria-label="Windows 98"
                        disabled={disabled}
                        onClick={() => {
                            dispatch(win98())
                            document.getElementById("audio98").play();
                            setDisabled(true);
                            setTimer(7);
                            setTimeout(() => setDisabled(false), 7000)
                        }}
                    >
                        Windows 98
                    </button>

                    <button
                        aria-label="Windows XP"
                        disabled={true}
                    >
                        Windows XP
                    </button>

                    <button
                        aria-label="Windows 7"
                        disabled={true}
                    >
                        Windows 7
                    </button>

                    <button
                        aria-label="Windows 10"
                        disabled={true}
                    >
                        Windows 10
                    </button>
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.bar}>
                        <p>Welcome to {theme || ''}</p>
                    </div>
                    <div className={styles.ex}><span>X</span></div>
                    <p>The current theme is {theme && theme !== '' ? theme : 'Default Theme'}. Feel free to enjoy this theme for as long as you want, or choose another one from the available options above {timer > 0 ? `in ${timer} seconds` : 'now'}.</p>

                    <p>If you've enjoyed this brief demonstration of React and Redux with Hooks, or if you have any feedback, please let me know! Keep in mind that this is still a work in progress as of March 2023.</p>

                    <a className={styles.infoButton} href="https://github.com/AmnonSkladman" rel="noreferrer" target="_blank">More info...</a>
                </div>

                <audio id="audio11" src={win11audio} />
                <audio id="audio98" src={win98audio} />
            </div>
        </div>
    )
}