/*
FROM MDN LOOPING CODE ACTIVE LEARNING
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

In this exercise, we want you to take a list of names stored in an array and put them into a guest list. 
But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! 
We have two lists, one for guests to admit, and one for guests to refuse.
*/


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
let i = 0;
while (i < people.length) {
    console.log(people[i]);
    if (people[i] === 'Phil' || people[i] === 'Lola') {
	if (i === 5) {
		refused.textContent += people[i];
	} else {
        refused.textContent += people[i] + ', ';
	}
    } else {
	if (i === 8) {
		admitted.textContent += people[i]
	} else {
	admitted.textContent += people[i] + ', ';
    	}
    }
    i++;    
}