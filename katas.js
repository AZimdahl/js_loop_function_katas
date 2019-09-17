(function(){
    
    
    function oneThroughTwenty() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 20; i++){
            numbers.push(i);
        }

        return numbers;
    }
    document.write(oneThroughTwenty() + "<br>");

    function evensToTwenty() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 20; i++){
            if(i%2 == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(evensToTwenty() + "<br>");

    function oddsToTwenty() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 20; i++){
            if(i%2 != 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(oddsToTwenty() + "<br>");

    function multiplesOfFive() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 100; i++){
            if(i%5 == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(multiplesOfFive() + "<br>");

    function squareNumbers() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 100; i++){
            if(i % Math.sqrt(i) == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(squareNumbers() + "<br>");

    function countingBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i > 0; i--){
            numbers.push(i);
        }

        return numbers;
    }
    document.write(countingBackwards() + "<br>");

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i > 0; i--){
            if(i%2 == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(evenNumbersBackwards() + "<br>");

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 20; i > 0; i--){
            if(i%2 != 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(oddNumbersBackwards() + "<br>");

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 100; i > 0; i--){
            if(i%5 == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(multiplesOfFiveBackwards() + "<br>");

    function squareNumbersBackwards() {
        const numbers = []

        // Your code goes below
        for(let i = 100; i > 0; i--){
        if(i % Math.sqrt(i) == 0){
                numbers.push(i)
            }
        }

        return numbers;
    }
    document.write(squareNumbersBackwards() + "<br>");
})();