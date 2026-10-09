import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#f9fafb",
        foreground: "#111827",
        accent: "#7a181c",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
        isDark: false,
    },
    dark_default: {
        background: "#413c42",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#e5e7eb',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#f9fafb',
        surface: '#f9fafb',
        foreground: '#111827',
        muted: '#6b7280',
        border: '#7e3636',
        accent: '#be2525',
    }
};