// src/data/questions/coding-challenges/basic-state-management.js
export const basicStateManagementQuestions = [
    {
      id: 'counter-implementation',
      category: 'basic-state-management',
      titleEn: 'Implement a Counter Component',
      titleJa: 'カウンターコンポーネントの実装',
      answerEn: 'Create a component that increments and decrements a counter value using React state.',
      answerJa: 'React stateを使用してカウンター値を増減させるコンポーネントを作成します。',
      codeExample: {
        en: `import { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
      <div className="counter">
        <h2>Counter: {count}</h2>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    );
  }
  
  export default Counter;`,
        ja: `import { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
      <div className="counter">
        <h2>カウンター: {count}</h2>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    );
  }
  
  export default Counter;`
      },
      references: [
        'https://react.dev/reference/react/useState',
        'https://react.dev/learn/responding-to-events'
      ]
    },
    {
      id: 'toggle-button',
      category: 'basic-state-management',
      titleEn: 'Implement a Toggle Button',
      titleJa: 'トグルボタンの実装',
      answerEn: 'Create a button that toggles between two states, like on/off, using React state.',
      answerJa: 'オン/オフのような2つの状態を切り替えるボタンをReact stateを使用して作成します。',
      codeExample: {
        en: `import { useState } from 'react';
  
  function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    
    const toggle = () => setIsOn(prev => !prev);
    
    return (
      <button 
        onClick={toggle}
        className={\`toggle-button \${isOn ? 'on' : 'off'}\`}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    );
  }
  
  export default ToggleButton;`,
        ja: `import { useState } from 'react';
  
  function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    
    const toggle = () => setIsOn(prev => !prev);
    
    return (
      <button 
        onClick={toggle}
        className={\`toggle-button \${isOn ? 'on' : 'off'}\`}
      >
        {isOn ? 'オン' : 'オフ'}
      </button>
    );
  }
  
  export default ToggleButton;`
      },
      references: [
        'https://react.dev/reference/react/useState',
        'https://react.dev/learn/conditional-rendering'
      ]
    }
  ];