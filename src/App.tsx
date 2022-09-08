import './App.css';
import { wrap } from "comlink";
import { useState } from "react";
import { runBigtask, runBigtaskAsync } from "./utils";


function App() {

  const [data, setData] = useState<string>();
  const [threadType,setThreadType] = useState<string>(); 

  return (
    <div style={
      {
        backgroundColor: `${data === 'loading' ? 'orange' : 'transparent'}`,
        textAlign:"center"
      }}>
      <h1>Demo for Worker threads in React using Comlink</h1>
      <div className='Demo__Div' 
      >
        <button
        onClick={()=>{
          setThreadType('Boop');
        }}>
          Boop
        </button>

        <button
        onClick={async()=>{
          setData('loading');
          const worker = new Worker('./worker',{name:'runBigTaskWorker',type:'module'});
          const {runBigtask} = wrap<import('./worker').RunBigTaskWorker>(worker)
          setData(await runBigtask(1000000));
          setThreadType('Web Worker');
        }}>
          Web Worker
        </button>

        <button
        onClick={()=>{
          setData('loading');
          setData(runBigtask(1000000));
          setThreadType('Sync on Main thread');
        }}>
          Sync on Main thread
        </button>

        <button
        onClick={async()=>{
          setData('loading');
          setData(await runBigtaskAsync(1000000));
          setThreadType('Async on Main thread');
        }}>
          Async on Main thread
        </button>

        <div style={{fontSize:"2rem", marginTop:"1rem"}}>{threadType}</div>
      
      </div>

    </div>
  );
}

export default App;
