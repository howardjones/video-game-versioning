module.exports = function version_to_game(basename, version) {
    const versions = [
        ['', 'New', 'Super', 'Mega', 'Ultra', 'Virtua', 'Deluxe', '7', 'Final', 'Ultimate'],
        ['', 'Plus', 'Pro', 'Elite', 'X', '64', 'II', 'III', 'IV', 'Alpha', 'Jr', 'Zero'],
        ['', 'EX', 'EX3', 'HD', 'Turbo', 'VS', 'World', 'Championship', 'R2', 'Max', 'Ultimate', 'Extreme', 'Impact', 'Euromix']
    ];

    let names = version.split('.').map(function (value, index) {
        return versions[index][value];
    });

    names.splice(1, 0, basename);
    return names.join(" ");
};
