import {useContext} from 'react';
import {ThemeContext} from '../App';

function ToggleSwitch() {
  const {handleTheme, darkTheme} = useContext(ThemeContext);
  const onToggle = () => {
    handleTheme();
  };
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={!!darkTheme} onChange={onToggle} />
        <span className="switch" />
      </label>
    </div>
  );
}
export default ToggleSwitch;
