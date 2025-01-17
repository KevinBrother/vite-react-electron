import electron from '@/assets/electron.png'
import react from '@/assets/react.svg'
import vite from '@/assets/vite.svg'
import styles from '@/styles/app.module.scss'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const icon = `#bg`;
  const styldde: React.CSSProperties = {
    height: '160px',
    width: '160px',
    fill: 'currentcolor',
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.logos}>
          <div className={styles.imgBox}>
            <img
              src={electron}
              style={{ height: '24vw' }}
              className={styles.appLogo}
              alt="electron"
            />
          </div>
          <div className={styles.imgBox}>
            <img src={vite} style={{ height: '19vw' }} alt="vite" />
          </div>
          <div className={styles.imgBox}>
            <img
              src={react}
              style={{ maxWidth: '100%' }}
              className={styles.appLogo}
              alt="logo"
            />
          </div>
        </div>12
        my-svg--------------------2
        <svg style={styldde}>
          <use xlinkHref={icon} />
        </svg>
        <p>Hello Electron + Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <div className={styles.staticPublic}>
            Place static files into the{' '}
            <code>src/renderer/public</code> folder
            <img style={{ width: 90 }} src="./images/node.png" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
