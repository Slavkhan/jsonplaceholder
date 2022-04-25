import React, {useState, useEffect} from 'react';

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
  };
  useEffect(() => {}, []);
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </div>
  );
}
export default ToggleSwitch;
