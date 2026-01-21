const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = (oldest.yearOfDeath) ? oldest.yearOfDeath - oldest.yearOfBirth : 2026 - oldest.yearOfBirth;
        let personAge = (person.yearOfDeath) ? person.yearOfDeath - person.yearOfBirth : 2026 - person.yearOfBirth;
        return (oldestAge > personAge) ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
