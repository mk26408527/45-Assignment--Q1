function show_magicians(magicians: string[]) {
    magicians.map(name => console.log(name));
}

function make_great (magicians: string[]): string[] {
  return magicians.map(name => `the Great ${name}`)
}

let magician_names = ['Mr Bean', 'Tom & Jerry', 'Ben Ten'];

let copy_magician_names = magician_names.slice();

let copy_great_magician = make_great(copy_magician_names);

console.log("\nOriginal Array\n");
show_magicians(magician_names);

console.log("\nCopied Array\n");
show_magicians(copy_great_magician); 