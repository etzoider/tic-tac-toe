

export const Player = (name, bot, color) => {
    let wins = 0;
    let losses = 0;

    const display = () => {
        alert(`Name= ${name}\nWins = ${wins}\nLosses = ${losses}\nBot = ${bot}`);
    }


    const changeWins = (number) => {
        if (typeof number != 'number') {
            return
        }

        console.log(`prev = ${wins}`)
        wins = wins + number;
        console.log(`wins = ${wins}`)
    }

    const pickRandomEmptyIndex = (boardArr) => {

        let emptyIndexes = [];

        for (let i=0;i<boardArr.length;i++) {
            if (boardArr[i] == undefined) {
                emptyIndexes.push(i);
            }
        }

        if (emptyIndexes.length == 0) {
            return -1;
        }

        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);

        return emptyIndexes[randomIndex];
    }

    const handleBotPlay = (boardArr) => {
        //for future implementation, bot play will be handled by 2 funcs:
        // func1 will return a random empty index to be filled in the board
        // func2 will iterate the board and find the best possible move to be made
        // harder bot means less chance of random choice, more chance of best move
        // easier bot means more chance of choice being random, less of targeted choice

        const chosenIndex = pickRandomEmptyIndex(boardArr);
        return chosenIndex;
            
    }


    const getIconClasses = () => {
        let iconClasses = [];
        if (!bot) {
            iconClasses.push('player');
        } else {
            iconClasses.push('robot');
        }
        iconClasses.push(color);
        
        return iconClasses
    }




    return { name, wins, losses, bot, color, display, changeWins, handleBotPlay,
         getIconClasses }
}