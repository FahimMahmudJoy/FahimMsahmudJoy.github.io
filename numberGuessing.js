while (true) {
    let input;
    let tries = 3;
    let low = 10;
    let high = 20;
    let correct_ans = Math.floor(low + Math.random()*(high - low));

    for (i = 1; i <= tries; i++) {

        input = prompt("Guess the correct integer between 10(incluseive) and 20(exclusive) (3 tries left): ");

        if (input == correct_ans) {
            alert('You Win!');
            break;
        }
        else if (input < correct_ans) {
            alert(`Correct answer is greater! You have ${tries-i} tries left.`);
        }
        else {
            alert(`Correct anser is smaller! You have ${tries-i} tries left.`);
        }
    }

    if (i > tries) {
        alert('You lose!')
    }

    again = prompt('Try again? (yes/no)');
    
    if (again.toLowerCase() == 'yes'){
        continue;
    }
    else {
        break;
    }
}