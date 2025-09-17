import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f : Friend[]) : string[] {
     let str: string[] = [];
     for(let friends of f)
          str.push(`${friends.name} is now ${friends.age+1}`);
     return str;
}

// console.log(older(friends[0]))
// console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
// console.log(highestExtension(colleagues.current));

function addColleague(cs : Colleague[], n : string, d : string, e : string): Colleague[] {
  const ext = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  cs.push({ name: n, department: d, contact: { email: e, extension: ext[ext.length-1].contact.extension+1}})
  return cs;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
