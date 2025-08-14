# D&D Character Generator

A web-based Dungeons & Dragons character creator that generates ability scores, calculates modifiers, and creates random characters for tabletop RPG sessions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation & Setup](#installation--setup)
- [How to Use](#how-to-use)
- [D&D Rules Implementation](#dd-rules-implementation)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [Browser Compatibility](#browser-compatibility)
- [Development Environment](#development-environment)
- [Code Examples](#code-examples)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## Overview

The D&D Character Generator is a web application designed to streamline the character creation process for Dungeons & Dragons players. Whether you're a dungeon master needing quick NPCs or a player exploring character concepts, this tool provides instant ability score generation and modifier calculations following official D&D 5th Edition rules.

This project was developed to practice JavaScript DOM manipulation, event handling, and responsive web design while creating a practical tool for the tabletop gaming community.

## Features

### Core Functionality
- **Manual Ability Score Entry**: Input custom values for all six D&D ability scores
- **Automatic Modifier Calculation**: Real-time computation of ability modifiers using D&D rules
- **Random Character Generation**: One-click creation of complete random characters
- **Character Naming**: Custom name input with random name generation
- **Responsive Design**: Mobile-friendly interface for use at the gaming table

### D&D Integration
- **Six Core Abilities**: Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
- **Official Modifier Formula**: `(Ability Score - 10) / 2` rounded down
- **Proper Formatting**: Positive modifiers display with '+' prefix
- **Valid Score Range**: Supports ability scores from 3-20 (standard D&D range)

## Live Demo

🎥 **[Watch the Software Demo Video](http://youtube.link.goes.here)**

Experience the character generator in action with step-by-step demonstrations of manual entry, random generation, and modifier calculations.

## Installation & Setup

### Quick Start
1. **Download the project files**:
   ```bash
   git clone <repository-url>
   cd dnd-character-generator
   ```

2. **Open in a web browser**:
   - Navigate to the project directory
   - Open `main.html` in any modern web browser
   - No server setup required - runs entirely client-side

### Local Development Server (Optional)
For development purposes, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## How to Use

### Manual Character Creation

1. **Enter Character Name**:
   - Type your character's name in the "Character Name" field
   - Click "Enter Name" to display it

2. **Set Ability Scores**:
   - Enter values (3-20) for each ability score
   - Click the corresponding "Enter [Ability]" button
   - Watch the modifier automatically calculate and display

3. **View Results**:
   - Your character sheet appears on the right side
   - Modifiers are formatted with proper +/- notation

### Random Character Generation

1. **Click "Random Character"**:
   - Instantly generates all ability scores (3-20 range)
   - Assigns a random name from the preset list
   - Calculates all modifiers automatically

2. **Use or Regenerate**:
   - Use the generated character as-is
   - Click "Random Character" again for a new character
   - Manually adjust any values as needed

## D&D Rules Implementation

### Ability Score Mechanics

The generator follows official D&D 5th Edition rules for ability scores and modifiers:

```javascript
// Modifier calculation formula
modifier = Math.floor((abilityScore - 10) / 2)

// Examples:
// Score 8  → Modifier -1
// Score 10 → Modifier  0  
// Score 12 → Modifier +1
// Score 16 → Modifier +3
// Score 20 → Modifier +5
```

### Ability Score Ranges
- **Minimum**: 3 (extremely poor)
- **Average**: 10-11 (no modifier)
- **Maximum**: 20 (legendary, typically achievable only at high levels)

### The Six Core Abilities

| Ability | Description | Common Uses |
|---------|-------------|-------------|
| **Strength** | Physical power | Melee attacks, athletics, carrying capacity |
| **Dexterity** | Agility and reflexes | Ranged attacks, stealth, initiative |
| **Constitution** | Health and stamina | Hit points, saving throws vs. poison |
| **Intelligence** | Reasoning ability | Spellcasting (Wizard), knowledge skills |
| **Wisdom** | Awareness and insight | Spellcasting (Cleric), perception |
| **Charisma** | Force of personality | Spellcasting (Sorcerer), social skills |

## Project Structure

```
dnd-character-generator/
├── main.html                 # Main HTML structure and layout
├── styles/
│   └── main.css             # Responsive styling and layout
├── scripts/
│   ├── main.js              # Navigation toggle functionality
│   └── characters.js        # Character generation and calculation logic
└── README.md               # Project documentation
```

### File Descriptions

- **`main.html`**: Contains the complete user interface with input fields, buttons, and display areas
- **`styles/main.css`**: Provides responsive design, typography using Kalam font, and mobile-friendly layouts
- **`scripts/characters.js`**: Core functionality for ability score processing, modifier calculations, and random generation
- **`scripts/main.js`**: Handles responsive navigation menu for mobile devices

## Technical Details

### JavaScript Features Used
- **DOM Manipulation**: Dynamic content updates without page reloads
- **Event Listeners**: Interactive button functionality
- **Mathematical Operations**: Ability modifier calculations
- **Array Handling**: Random name selection
- **Input Validation**: Handles various input types and edge cases

### CSS Features
- **Flexbox Layout**: Modern, responsive positioning system
- **Media Queries**: Mobile-first responsive design
- **Google Fonts Integration**: Custom typography with Kalam font
- **CSS Grid**: Organized form layout and spacing

### Browser APIs
- **Document Object Model (DOM)**: Element selection and manipulation
- **Event API**: User interaction handling
- **Math Object**: Random number generation and mathematical calculations

## Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 55+ | ✅ Fully Supported |
| Safari | 12+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |
| Internet Explorer | 11+ | ⚠️ Limited Support |

**Note**: The application uses modern JavaScript features and may require polyfills for older browsers.

## Development Environment

### Tools Used
- **Code Editor**: Visual Studio Code
- **Browser DevTools**: Chrome/Firefox Developer Tools
- **Version Control**: Git
- **Testing**: Manual browser testing across devices

### Development Setup
1. **Install Visual Studio Code**
2. **Recommended Extensions**:
   - Live Server (for local development)
   - HTML CSS Support
   - JavaScript (ES6) Code Snippets
   - Prettier (code formatting)

3. **Workflow**:
   ```bash
   # Start Live Server in VS Code
   # Make changes to HTML/CSS/JS
   # Test in multiple browsers
   # Commit changes to Git
   ```

## Code Examples

### Ability Modifier Calculation
```javascript
function calcModifier(stat) {
    var mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
        mod = "+" + mod;
    }
    return mod;
}
```

### Random Character Generation
```javascript
function getRandomCharacter() {
    var randomNames = ["Jim", "Overlord of the Underworld", "Speffen", 
        "Trevor", "Varis Omen", "Salazar Dalen", "Kevin", 
        "Ryder Throckmorton", "Damocles"];
    
    var randomIndex = Math.floor(Math.random() * randomNames.length);
    var name = randomNames[randomIndex];
    
    // Generate random stats and calculate modifiers
    var str = calcModifier(getRandomStat());  
    var dex = calcModifier(getRandomStat()); 
    // ... additional abilities
    
    // Update DOM elements
    document.getElementById("name").innerHTML = name;
    document.getElementById("str-mod").innerHTML = str;
    // ... additional DOM updates
}
```

### Random Stat Generation
```javascript
function getRandomStat() {
    return Math.floor(Math.random() * (20 - 3) + 3);
}
```

## Future Enhancements

### High Priority Features
- **Character Portraits**: Upload and display character images
- **Race Integration**: Add D&D races with ability score bonuses
- **Class Selection**: Include character classes with relevant information
- **Background System**: Implement D&D backgrounds with skill proficiencies

### Medium Priority Features
- **Save/Load Characters**: Local storage for character persistence
- **Export Functionality**: Generate printable character sheets
- **Dice Rolling Animation**: Visual feedback for random generation
- **Multiple Character Management**: Create and store character parties

### Technical Improvements
- **Code Organization**: Refactor into modular JavaScript classes
- **Input Validation**: Enhanced error handling and user feedback
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimize for faster loading and smoother interactions

### Advanced Features
- **Spell Integration**: Include spell lists for spellcasting classes
- **Equipment Generator**: Random starting equipment based on class
- **Stat Array Options**: Implement point-buy and standard array systems
- **Campaign Integration**: Connect with popular VTT platforms

## Contributing

We welcome contributions from the D&D and web development communities!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** with clear, commented code
4. **Test thoroughly** across different browsers and devices
5. **Commit your changes**: `git commit -am 'Add new feature'`
6. **Push to the branch**: `git push origin feature-name`
7. **Submit a pull request** with a detailed description

### Contribution Guidelines
- Follow existing code style and formatting
- Include comments for complex logic
- Test new features on mobile and desktop
- Update documentation for user-facing changes
- Ensure D&D rule accuracy for game-related features

### Bug Reports
- Use the issue tracker to report bugs
- Include browser version and steps to reproduce
- Provide screenshots for visual issues

## Resources

### D&D References
- [D&D 5th Edition Basic Rules (Free)](https://dnd.wizards.com/articles/features/basicrules)
- [D&D Beyond Character Builder](https://www.dndbeyond.com/characters)
- [Official D&D Website](https://dnd.wizards.com/)

### Web Development Resources
- [JavaScript Documentation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### Fonts and Design
- [Google Fonts - Kalam](https://fonts.google.com/specimen/Kalam)
- [Color Palette Ideas for RPG Themes](https://coolors.co/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to roll for initiative?** 🎲 Start creating your D&D characters today and bring your tabletop adventures to life!
