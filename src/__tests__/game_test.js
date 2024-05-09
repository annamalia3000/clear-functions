import getHealthStatus from '../game';

test.each([
    ['Маг', 90, 'healthy'],
    ['Leo', 41, 'wounded'],
    ['Rom', 5, 'critical'],
])
('testing function getHealthStatus with %n name and %h health', (name, health, expected) => {
    const character = { name, health };
    const result = getHealthStatus(character);
    expect (result).toBe(expected);
}); 