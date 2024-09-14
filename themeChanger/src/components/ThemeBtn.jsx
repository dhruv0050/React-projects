import React from 'react';
import useTheme from '../contexts/theme';
import './ThemeBtn.css'; // Import the CSS file

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="theme-toggle-label">
            <input
                type="checkbox"
                className="sr-only"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="toggle-switch"></div>
            <span className="theme-label">Toggle Theme</span>
        </label>
    );
}
