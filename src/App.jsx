import { Canvas } from '@react-three/fiber'
import {Experience} from './components/Experience'
import './App.css'

function App() {

  return (
    <div className="w-screen h-screen">
      <h2 className="fixed top-10 left-6 z-50 bg-yellow-200 text-black px-3 py-3 rounded-lg animate-bounce">
        ⚡️ <span className="font-bold">Notice</span>: This website is under construction. Thank you for your patience 💗
      </h2>
      <Canvas camera={{
        fov: 64,
        position:[2.3, 1.5, 2.3]
      }}>
        <Experience />
      </Canvas>
    </div>
    
  )
}

export default App
