
import { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          width: '100%',
          padding: '10px 10px 10px 10px',
          borderRadius: '8px',
        }}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {showPassword ? '🙈' : '👁️'}
      </span>
    </div>
  );
}
export default PasswordInput;