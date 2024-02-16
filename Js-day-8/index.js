let users = [
  {
    firstName: "José",
    lastName: "Martínez",
    dateOfBirth: "1987 03 15",
    gender: "Male",
    address: [
      { 
        street: "208 East 8th Street",
        district: "Downtown",
        city: "Los Angeles",
        state: "California",
        postalCode: "90014",
      },
    ],
  },
  {
    firstName: "Marie-Claire",
    lastName: "Dupont",
    dateOfBirth: "1992 08 21",
    gender: "Female",
    address: [
      {
        street: "1650 Broadway",
        district: "Manhattan",
        city: "New York",
        state: "New York",
        postalCode: "10019",
      },
      {
        street: "58 Summer Street",
        district: "Downtown",
        city: "Boston",
        state: "Massachusetts",
        postalCode: "02110",
      },
    ],
  },
  {
    firstName: "Søren",
    lastName: "Larsen",
    dateOfBirth: "1985 11 30",
    gender: "Male",
    address: [
      {
        street: "425 West Evergreen Avenue",
        district: "Near North Side",
        city: "Chicago",
        state: "Illinois",
        postalCode: "60610",
      },
    ],
  },
  {
    firstName: "Élodie",
    lastName: "Lefèvre",
    dateOfBirth: "1990 06 05",
    gender: "Female",
    address: [
      {
        street: "1515 Austin Street",
        district: "Downtown",
        city: "Houston",
        state: "Texas",
        postalCode: "77002",
      },
      {
        street: "1340 North Astor Street",
        district: "Near North Side",
        city: "Chicago",
        state: "Illinois",
        postalCode: "60610",
      },
    ],
  },
  {
    firstName: "Nikola",
    lastName: "Jovanović",
    dateOfBirth: "1983 09 17",
    gender: "Male",
    address: [
      {
        street: "601 West Fillmore Street",
        district: "Downtown",
        city: "Phoenix",
        state: "Arizona",
        postalCode: "85003",
      },
      {
        street: "220 Bush Street",
        district: "Financial",
        city: "San Francisco",
        state: "California",
        postalCode: "94104",
      },
    ],
  },
  {
    firstName: "Emília",
    lastName: "Varga",
    dateOfBirth: "1988 12 10",
    gender: "Female",
    address: [
      {
        street: "100 Van Ness Avenue",
        district: "Civic Center",
        city: "San Francisco",
        state: "California",
        postalCode: "94102",
      },
      {
        street: "2828 Colligsworth Street",
        district: "Frenchtown",
        city: "Houston",
        state: "Texas",
        postalCode: "77026",
      },
    ],
  },
  {
    firstName: "Jürgen",
    lastName: "Schmidt",
    dateOfBirth: "1995 04 25",
    gender: "Male",
    address: [
      {
        street: "1915 2nd Avenue",
        district: "Downtown",
        city: "Seattle",
        state: "Washington",
        postalCode: "98101",
      },
      {
        street: "2216 Griffin Avenue",
        district: "Lincoln Heights",
        city: "Los Angeles",
        state: "California",
        postalCode: "90031",
      },
    ],
  },
  {
    firstName: "Camille",
    lastName: "Leroux",
    dateOfBirth: "1991 07 18",
    gender: "Female",
    address: [
      {
        street: "130 Bowdoin Street",
        district: "Downtown",
        city: "Boston",
        state: "Massachusetts",
        postalCode: "02108",
      },
    ],
  },
  {
    firstName: "André",
    lastName: "Lefèvre",
    dateOfBirth: "1980 02 09",
    gender: "Male",
    address: [
      {
        street: "390 Northwest 2nd Street",
        district: "Downtown",
        city: "Miami",
        state: "Florida",
        postalCode: "33128",
      },
      {
        street: "45 Ivan Allen Junior Boulevard Northwest",
        district: "Downtown",
        city: "Atlanta",
        state: "Georgia",
        postalCode: "30308",
      },
    ],
  },
  {
    firstName: "Sophie",
    lastName: "Renard",
    dateOfBirth: "1987 10 30",
    gender: "Female",
    address: [
      {
        street: "95 8th Street Northwest",
        district: "Midtown",
        city: "Atlanta",
        state: "Georgia",
        postalCode: "30309",
      },
      {
        street: "400 North 2nd Avenue",
        district: "Downtown",
        city: "Phoenix",
        state: "Arizona",
        postalCode: "85003",
      },
    ],
  },
];

function removeDiacritics(word) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function findUser(namePart) {
  return users.filter((user) =>
    (removeDiacritics(user.firstName) + removeDiacritics(user.lastName))
      .toLowerCase()
      .includes(removeDiacritics(namePart).toLowerCase())
  );
}

function sortUsers(users, sortBy, order) {
  if (sortBy === "dateOfBirth") {
    return users.slice().sort((a, b) => {
      const dateA = new Date(a.dateOfBirth.replace(/ /g, "-")).getTime();
      const dateB = new Date(b.dateOfBirth.replace(/ /g, "-")).getTime();
      if (order === "asc") {
        return dateA - dateB;
      } else if (order === "dsc") {
        return dateB - dateA;
      } else {
        throw new Error("Invalid sorting order specified");
      }
    });
  } else if (sortBy === "city") {
    const sortedUsers = users.slice().sort((a, b) => {
      if (order === "asc") {
          users.forEach((user) => {
          user.address.sort((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
          user.firstCity = user.address[0].city;
        });
        return a.firstCity.toLowerCase().localeCompare(b.firstCity.toLowerCase());
      } else if (order === "desc") {
          users.forEach((user) => {
          user.address.sort((b, a) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
          user.firstCity = user.address[0].city;
        });
        return b.firstCity.toLowerCase().localeCompare(a.firstCity.toLowerCase());
      } else {
        throw new Error("Invalid sort order. Please specify 'asc' or 'desc'.");
      }
    });
    return sortedUsers;
  } else {
    throw new Error("Invalid sorting criteria specified");
  }
}

function findAddressCount(users, n) {
  return users.filter((x) => x.address.length === n);
}

let searchResult = findUser("em");
// searchResult.forEach(user => {
//     console.log(user);
// });

let sortedUsersAsc = sortUsers(users, "city", "asc");
// sortedUsersAsc.forEach(user => {
//   console.log(user);
// });

let sortedUsersDesc = sortUsers(users, "city", "desc");
sortedUsersDesc.forEach(user => {
  console.log(user);
});

let addressList = findAddressCount(users, 2);
// addressList.forEach (user => {
//   console.log(user);
// })
