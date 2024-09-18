function show_magicians(magicians: string[]) {
      magicians.map(name => console.log(name));
}

function make_great (magicians: string[]): string[] {
    return magicians.map(name => `the Great ${name}`)
}

let magician_names = ['Mr Bran', 'Tom & Jerry', 'Ben Ten'];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians)
