import React from 'react';
import Tone from 'tone';
import './App.css';

const Status = props => {
  return <p className="pen-status">Version 1.0</p>;
};

const center = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

const SoundHole = props => {
  return (
    <g>
      <circle
        className="Guitar-soundhole"
        cx={center.x}
        cy={center.y} r={80} />
    </g>
  );
};

const String = props => {
  const synth = new Tone.Synth();
  synth.envelope.attack = 0.01;
  synth.envelope.attackCurve = "linear";
  synth.envelope.decay = 1.20;
  synth.envelope.decayCurve = "exponential";
  synth.envelope.release = 1.87;
  synth.envelope.releaseCurve = "exponential";
  // synth.oscillator.type = "sine";
  synth.oscillator.partialCount = 7;
  synth.toMaster();
  
  const playNote = e => {
    synth.triggerAttackRelease(props.note, '4n');
  };
  
  return (
    <line id={props.note} className="Guitar-string"
      onMouseOver={playNote}
      x1={props.x} y1={props.y}
      x2={props.x} y2={props.y+props.h} />
  );
};

const BridgeHole = props => {
  return (
    <>
      <circle className="Guitar-bridgehole"
        cx={props.x} cy={props.y}
        r={7.5} />
      <circle className="Guitar-bridgehole-middle"
        cx={props.x} cy={props.y}
        r={2.5} />
    </>
  );
};

const Guitar = props => {
  const [lowE, setLowE] = React.useState(false);
  const [A, setA] = React.useState(false);
  const [D, setD] = React.useState(false);
  const [G, setG] = React.useState(false);
  const [B, setB] = React.useState(false);
  const [E, setE] = React.useState(false);
  
  return (
    <svg className="Guitar">
      <SoundHole />
      <BridgeHole
        x={center.x - 62.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x - 62.5}
        y={(center.y - 100) + 200} />
      <String note="E3"
        x={center.x - 62.5}
        y={center.y - 100}
        h={200} />
      <BridgeHole
        x={center.x - 37.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x - 37.5}
        y={(center.y - 100) + 200} />
      <String note="A3"
        x={center.x - 37.5}
        y={center.y - 100}
        h={200} />
      <BridgeHole
        x={center.x - 12.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x - 12.5}
        y={(center.y - 100) + 200} />
      <String note="D4"
        x={center.x - 12.5}
        y={center.y - 100}
        h={200} />
      <BridgeHole
        x={center.x + 12.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x + 12.5}
        y={(center.y - 100) + 200} />
      <String note="G4"
        x={center.x + 12.5}
        y={center.y - 100}
        h={200} />
      <BridgeHole
        x={center.x + 37.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x + 37.5}
        y={(center.y - 100) + 200} />
      <String note="B4"
        x={center.x + 37.5}
        y={center.y - 100}
        h={200} />
      <BridgeHole
        x={center.x + 62.5}
        y={center.y - 100} />
      <BridgeHole
        x={center.x + 62.5}
        y={(center.y - 100) + 200} />
      <String note="E5"
        x={center.x + 62.5}
        y={center.y - 100}
        h={200} />
    </svg>
  );
};

export default Guitar;
