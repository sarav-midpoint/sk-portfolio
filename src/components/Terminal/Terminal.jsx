import { useEffect, useState } from 'react';

const Terminal = () => {
  const [commands, setCommands] = useState([
    { command: 'whoAmI', output: 'Frontend Engineer with 3.8+ years of experience in React.js, TypeScript, and modern web technologies.', typed: '' },
    { command: 'cat skills.txt', output: 'React, Redux, NextJS, TypeScript, JavaScript, HTML5, CSS3, Git, Webpack, Jest, ESLint', typed: '' }
  ]);

  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentCommand < commands.length) {
      setIsTyping(true);
      const command = commands[currentCommand];
      let typed = '';
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < command.command.length) {
          typed += command.command.charAt(index);
          setCommands(prev => prev.map((cmd, i) => 
            i === currentCommand ? { ...cmd, typed } : cmd
          ));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
          }, 1000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentCommand, commands]);

  return (
    <div className="terminal" style={{
      background: 'var(--code-bg)',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      overflow: 'hidden',
      margin: '20px 0'
    }}>
      <div className="terminal-header" style={{
        background: '#2d2d2d',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="terminal-buttons" style={{ display: 'flex', gap: '8px' }}>
          <div className="terminal-button close" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ff5f57'
          }}></div>
          <div className="terminal-button minimize" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ffbd2e'
          }}></div>
          <div className="terminal-button maximize" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#28ca42'
          }}></div>
        </div>
        <div className="terminal-title" style={{
          flex: 1,
          textAlign: 'center',
          color: 'var(--text-light)',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.9rem'
        }}>
          terminal — zsh
        </div>
      </div>
      <div className="terminal-body" style={{
        padding: '20px',
        fontFamily: '"Fira Code", monospace',
        minHeight: '200px'
      }}>
        {commands.slice(0, currentCommand + 1).map((cmd, index) => (
          <div key={index}>
            <div className="terminal-line">
              <span className="terminal-prompt" style={{ color: 'var(--terminal)' }}>
                skarthikeyan@portfolio ~ %{' '}
              </span>
              <span className="terminal-command" style={{ color: 'var(--text)' }}>
                {index === currentCommand && isTyping ? cmd.typed + '▊' : cmd.command}
              </span>
            </div>
            {index < currentCommand && (
              <div className="terminal-output" style={{
                color: 'var(--text-light)',
                marginTop: '10px'
              }}>
                {cmd.output}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;