# Iteration 3 Rubric Checklist

## Form Validations and Other Events (40 pts)
- [x] **Inline Event Handler Approach** (10 pts)
  - [x] Attach event handlers directly within HTML elements.<br>
  `Completed in navigation section`

- [x] **Listener Approach** (10 pts)
  - [x] Use `addEventListener` method to attach event handlers.<br>
  `Completed in sound effects on dj live page`

- [ ] **Event Types** (10 pts)
  - [ ] Implement various event types: `click`, `onsubmit`, `keydown` (8 pts)
  - [ ] Verify event triggered or action completed successfully (2 pts)

- [ ] **Validating Forms** (10 pts)
  - [ ] Implement client-side validation for form inputs (8 pts)
    - Example: required fields, data format checks, matching specific patterns.
  - [ ] Ensure validations are visible and show feedback to user (2 pts)

## Manipulate Style (30 pts)
- [ ] **Modifying a DOM Element** (10 pts)
  - [x] Select and modify DOM elements (e.g., change text, attributes, add/remove elements) <br>
  `Change of color and background in effects panel`<br>
  `Removal of alerts in home screen utilizes DOM element selection`<br>
  `Javascript to generate DOM content such as the alerts and schedule content`<br>

- [x] **Properties** (10 pts)
  - [x] Create custom objects and access/modify their properties
  `Custom objects defined and instantiated in ./data directory`<br>
  `Accessed in home page for markup generation`<br>
  `./data/AlertInstance.js objects for alerts nd notifications`<br>
  `./data/EventInstance.js objects for events being hosted`<br>
  `./data/ProfileTypes.js objects for system wide profiles`<br>
  `Accessed in live session page`<br>
  `./data/SongInstances.js objects for songs in playlist`<br>
  `Modified alert instances in ./js/home/alert_management.js to modify the status of an alert`<br>

- [ ] **Window Object** (10 pts)
  - [x] Use `window` or `document` object methods/properties (e.g., `alert`, `setTimeout`, `DOMContentLoaded`)
  `window.onload() used to setup home page in ./js/home/home_setup.js`<br>
  `setTimeout() used in live page to change style of effects buttons when the audio is done playing`

## Implement Advanced Concepts (20 pts)
- [x] **Prototypes/Classes** (10 pts)
  - [x] Demonstrate reusability and object-oriented programming with prototypes/classes
  `Numerous classes defined in ./data directory`

- [x] **Modules** (10 pts)
  - [x] Organize code into modules or separate files for better readability and reuse
  `Modules created in ./data and ./js for readability, reuse and organization`
  `Most custom data types and classes are in ./data. ./sj contains scripts for html rendering and more`

## JavaScript Fundamentals (10 pts)
- [x] **Variables** (2 pts)
  - [x] Show understanding of data types and scope
    `Utilization of multiple data types including arrays, maps, strings, dates and more`
- [x] **Comparison Operators** (2 pts)
  - [x] Use operators like `==`, `!=`, `>`
  `!== operator used in ./js/home/alert_management.js to remove DOM element`<br>
  `== operator used in ./js/home/home_setup.js`<br>
  `> operator used to compare dates in ./js/home/home_setup.js`

- [x] **Logical Operators** (2 pts)
  - [x] Use logical operators: `&&`, `||`, `!`<br>
  `&& operator used in ./js/home/alert_management.js to modify DOM element`<br>
  `|| operator used in ./js/home/alert_management.js to modify DOM element`<br>
  `! operator used in ./js/home/alert_management.js and ./js/home/home_setup.js`

- [x] **Conditionals** (2 pts)
  - [x] Implement `if`, `else if`, and `else` statements<br>
  `if else statement used in ./js/home/home_setup.js to modify live button actions`<br>
  `if statement also used in ./js/hom/home_setup.js to modify live button actions`<br>
  `if else statement used in ./js/live/live_setup.js to load songs on the player`

- [x] **Loops** (2 pts)
  - [x] Use loops like `for`, `while`, or `forEach`
  `for and foreach loops used in home_setup.js `<br>
  `while loop used in ./js/home/alert_management.js to remove DOM element`

## Capabilities Address Role (10 pts)
- [ ] **User Profile Functionality** (6 pts)
  - [ ] Ensure functionality aligns with the user's profile requirements

- [ ] **JavaScript Elements Accuracy** (2 pts)
  - [x] Ensure JavaScript elements reflect profile accurately

- [ ] **Complexity and Understanding** (2 pts)
  - [x] Display appropriate complexity based on user profile

## Must Follow
- [ ] **Submission Format** (GitHub repository for source code files)
- [ ] **Demonstration Video**
  - [ ] Walk through rubric and show implementation
- [ ] **Self-Evaluation Documentation**